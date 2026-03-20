-- Migration: Contact Leads Table
-- Purpose: Store lead capture form submissions from website contact page
-- Date: 2026-03-20

CREATE TABLE IF NOT EXISTS contact_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Contact Information
  full_name VARCHAR(255) NOT NULL,
  business_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,

  -- Qualification
  service_interest VARCHAR(100) NOT NULL,
  plan_interest VARCHAR(50),
  message TEXT NOT NULL,
  referral_source VARCHAR(100),

  -- Lead Management
  status VARCHAR(20) DEFAULT 'new' NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  contacted_at TIMESTAMP,

  -- Constraints
  CHECK (status IN ('new', 'contacted', 'qualified', 'converted', 'closed'))
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_leads_email ON contact_leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_status ON contact_leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created ON contact_leads(created_at DESC);

-- Comments for documentation
COMMENT ON TABLE contact_leads IS 'Stores contact form submissions from website lead capture';
COMMENT ON COLUMN contact_leads.status IS 'Lead status: new, contacted, qualified, converted, closed';
COMMENT ON COLUMN contact_leads.service_interest IS 'Which service they are interested in';
COMMENT ON COLUMN contact_leads.plan_interest IS 'Which pricing plan they selected (optional)';
COMMENT ON COLUMN contact_leads.referral_source IS 'How they heard about us (optional)';
