-- Binary 1702 QR Profile Service
-- Simplified database schema for Vercel Postgres

-- Profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(60) UNIQUE NOT NULL,

  -- Contact information
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  business_name VARCHAR(255),
  phone VARCHAR(50),
  email VARCHAR(255) NOT NULL,
  website VARCHAR(500),
  linkedin_handle VARCHAR(100),
  github_handle VARCHAR(100),
  occupation VARCHAR(255),

  -- Status tracking
  status VARCHAR(20) NOT NULL DEFAULT 'pending_verification',
  created_at TIMESTAMP DEFAULT NOW(),
  verified_at TIMESTAMP,

  -- Constraints
  CHECK (status IN ('pending_verification', 'verified', 'expired'))
);

-- Verification tokens table
CREATE TABLE IF NOT EXISTS verification_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  token VARCHAR(64) UNIQUE NOT NULL,
  email VARCHAR(255) NOT NULL,

  -- Token lifecycle
  expires_at TIMESTAMP NOT NULL,
  verified_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),

  -- Constraints
  CHECK (verified_at IS NULL OR verified_at <= expires_at)
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_profiles_slug ON profiles(slug);
CREATE INDEX IF NOT EXISTS idx_profiles_slug_pattern ON profiles(slug varchar_pattern_ops);
CREATE INDEX IF NOT EXISTS idx_profiles_email ON profiles(email);
CREATE INDEX IF NOT EXISTS idx_profiles_status ON profiles(status);
CREATE INDEX IF NOT EXISTS idx_tokens_token ON verification_tokens(token);
CREATE INDEX IF NOT EXISTS idx_tokens_expires ON verification_tokens(expires_at);
CREATE INDEX IF NOT EXISTS idx_tokens_profile ON verification_tokens(profile_id);
