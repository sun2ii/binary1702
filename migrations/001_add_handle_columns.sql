-- Migration: Add handle columns for LinkedIn and GitHub
-- This migration adds new columns and backfills data from existing URL columns

-- Step 1: Add new columns
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS linkedin_handle VARCHAR(100);
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS github_handle VARCHAR(100);

-- Step 2: Backfill data from existing linkedin/github columns (if they exist)
-- Extract handles from stored URLs
DO $$
BEGIN
  -- Check if old linkedin column exists before attempting migration
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='profiles' AND column_name='linkedin') THEN
    UPDATE profiles
    SET linkedin_handle = regexp_replace(linkedin, '^.*linkedin\.com/in/', '')
    WHERE linkedin IS NOT NULL AND linkedin != '';
  END IF;

  -- Check if old github column exists before attempting migration
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='profiles' AND column_name='github') THEN
    UPDATE profiles
    SET github_handle = regexp_replace(github, '^.*github\.com/', '')
    WHERE github IS NOT NULL AND github != '';
  END IF;
END $$;

-- Step 3: Drop old columns (ONLY after confirming code deployment and data verification)
-- Uncomment these lines after 24-48 hours of monitoring:
-- ALTER TABLE profiles DROP COLUMN IF EXISTS linkedin;
-- ALTER TABLE profiles DROP COLUMN IF EXISTS github;
