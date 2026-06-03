import { slugify } from 'transliteration';
import { sql } from '@vercel/postgres';

/**
 * Slug generation module for name-based profile URLs
 * Generates slugs in format: first-last or first-last-1, first-last-2, etc.
 */

const MAX_BASE_LENGTH = 50; // Reserve space for suffix like "-999"

/**
 * Generate base slug from first and last name
 * Example: "José", "García" -> "jose-garcia"
 *
 * @param {string} firstName
 * @param {string} lastName
 * @returns {string} Base slug (normalized, truncated)
 */
export function generateBaseSlug(firstName, lastName) {
  if (!firstName || !lastName) {
    throw new Error('First name and last name are required for slug generation');
  }

  // Combine names with hyphen
  const combined = `${firstName.trim()}-${lastName.trim()}`;

  // Use transliteration library to handle unicode and normalize
  const slug = slugify(combined, {
    lowercase: true,
    separator: '-',
    replace: {}, // Can add custom replacements if needed
  });

  // Truncate to max length (to leave room for numeric suffix)
  return slug.substring(0, MAX_BASE_LENGTH);
}

/**
 * Query database for existing slugs matching the base pattern
 * Returns array of matching slugs: ["john-smith", "john-smith-1", "john-smith-2"]
 *
 * @param {string} baseSlug
 * @returns {Promise<string[]>} Array of existing slugs
 */
async function getSlugsLike(baseSlug) {
  const result = await sql`
    SELECT slug FROM profiles
    WHERE slug = ${baseSlug}
       OR slug LIKE ${baseSlug + '-%'}
  `;
  return result.rows.map(r => r.slug);
}

/**
 * Find next available slug by checking for duplicates
 * Example: if "john-smith" and "john-smith-1" exist, returns "john-smith-2"
 *
 * @param {string} baseSlug
 * @returns {Promise<string>} Next available slug
 */
async function findNextAvailableSlug(baseSlug) {
  const existingSlugs = await getSlugsLike(baseSlug);

  // If base slug is available, use it
  if (!existingSlugs.includes(baseSlug)) {
    return baseSlug;
  }

  // Extract numeric suffixes from existing slugs
  const pattern = new RegExp(`^${escapeRegex(baseSlug)}-(\\d+)$`);
  const suffixes = existingSlugs
    .map(slug => {
      const match = slug.match(pattern);
      return match ? parseInt(match[1], 10) : null;
    })
    .filter(num => num !== null);

  // Find the next available number
  const maxSuffix = suffixes.length > 0 ? Math.max(...suffixes) : 0;
  return `${baseSlug}-${maxSuffix + 1}`;
}

/**
 * Escape special regex characters
 */
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Main function: Create unique slug from first and last name
 * Handles duplicate detection and numbering automatically
 *
 * @param {string} firstName
 * @param {string} lastName
 * @returns {Promise<string>} Unique slug
 */
export async function createUniqueSlug(firstName, lastName) {
  const baseSlug = generateBaseSlug(firstName, lastName);
  const uniqueSlug = await findNextAvailableSlug(baseSlug);
  return uniqueSlug;
}
