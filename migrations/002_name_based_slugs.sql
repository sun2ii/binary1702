-- Migration: Name-based slugs
-- Changes:
-- 1. Expand slug from VARCHAR(12) to VARCHAR(60)
-- 2. Split 'name' into 'first_name' and 'last_name'
-- 3. Add index for pattern matching (duplicate detection)

-- Step 1: Expand slug column
ALTER TABLE profiles
  ALTER COLUMN slug TYPE VARCHAR(60);

-- Step 2: Add new first_name and last_name columns
ALTER TABLE profiles
  ADD COLUMN first_name VARCHAR(255),
  ADD COLUMN last_name VARCHAR(255);

-- Step 3: Migrate existing 'name' data to first_name/last_name
-- This splits on last space: "John Smith" -> first="John", last="Smith"
-- For single names: "Madonna" -> first="Madonna", last=""
UPDATE profiles
SET
  first_name = CASE
    WHEN name LIKE '% %' THEN TRIM(SUBSTRING(name FROM 1 FOR POSITION(' ' IN REVERSE(name))))
    ELSE name
  END,
  last_name = CASE
    WHEN name LIKE '% %' THEN TRIM(SUBSTRING(name FROM LENGTH(name) - POSITION(' ' IN REVERSE(name)) + 2))
    ELSE ''
  END
WHERE name IS NOT NULL;

-- Step 4: Make first_name and last_name NOT NULL now that they have data
ALTER TABLE profiles
  ALTER COLUMN first_name SET NOT NULL,
  ALTER COLUMN last_name SET NOT NULL;

-- Step 5: Drop old 'name' column
ALTER TABLE profiles
  DROP COLUMN name;

-- Step 6: Add index for LIKE pattern matching (for duplicate slug detection)
CREATE INDEX IF NOT EXISTS idx_profiles_slug_pattern
  ON profiles(slug varchar_pattern_ops);
