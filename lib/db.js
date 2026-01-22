import { sql } from '@vercel/postgres';

/**
 * Database client using Vercel Postgres
 * Uses connection pooling automatically via @vercel/postgres
 */

export const db = {
  /**
   * Create a new profile
   */
  async createProfile({ slug, firstName, lastName, businessName, phone, email, website, linkedin_handle, github_handle }) {
    const result = await sql`
      INSERT INTO profiles (
        slug, first_name, last_name, business_name, phone, email, website, linkedin_handle, github_handle, status
      )
      VALUES (
        ${slug}, ${firstName}, ${lastName}, ${businessName || null}, ${phone || null}, ${email}, ${website || null},
        ${linkedin_handle || null}, ${github_handle || null}, 'pending_verification'
      )
      RETURNING id, slug, created_at
    `;
    return result.rows[0];
  },

  /**
   * Create verification token
   */
  async createVerificationToken({ profileId, token, email, expiresAt }) {
    const result = await sql`
      INSERT INTO verification_tokens (profile_id, token, email, expires_at)
      VALUES (${profileId}, ${token}, ${email}, ${expiresAt.toISOString()})
      RETURNING id, token, expires_at
    `;
    return result.rows[0];
  },

  /**
   * Find verification token and validate expiry
   */
  async findVerificationToken(token) {
    const result = await sql`
      SELECT vt.*, p.slug, p.email as profile_email
      FROM verification_tokens vt
      JOIN profiles p ON vt.profile_id = p.id
      WHERE vt.token = ${token}
        AND vt.expires_at > NOW()
        AND vt.verified_at IS NULL
      LIMIT 1
    `;
    return result.rows[0] || null;
  },

  /**
   * Mark verification token as verified
   */
  async markTokenVerified(tokenId) {
    await sql`
      UPDATE verification_tokens
      SET verified_at = NOW()
      WHERE id = ${tokenId}
    `;
  },

  /**
   * Mark profile as verified
   */
  async markProfileVerified(profileId) {
    await sql`
      UPDATE profiles
      SET status = 'verified', verified_at = NOW()
      WHERE id = ${profileId}
    `;
  },

  /**
   * Get profile by slug
   */
  async getProfileBySlug(slug) {
    const result = await sql`
      SELECT id, slug, first_name, last_name, business_name, phone, email, website, linkedin_handle, github_handle,
             status, verified_at
      FROM profiles
      WHERE slug = ${slug} AND status = 'verified'
      LIMIT 1
    `;
    return result.rows[0] || null;
  },

  /**
   * Check if email already has pending verification
   */
  async checkPendingVerification(email) {
    const result = await sql`
      SELECT p.id
      FROM profiles p
      WHERE p.email = ${email}
        AND p.status = 'pending_verification'
        AND p.created_at > NOW() - INTERVAL '1 hour'
      LIMIT 1
    `;
    return result.rows[0] || null;
  }
};
