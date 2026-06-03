/**
 * Social media URL utilities
 * Handles normalization and construction of LinkedIn/GitHub URLs
 */

/**
 * Extract LinkedIn handle from various input formats
 * @param {string} input - User input (handle, partial URL, or full URL)
 * @returns {string} - Clean handle or empty string
 */
export function extractLinkedInHandle(input) {
  if (!input || typeof input !== 'string') return '';

  const trimmed = input.trim();
  if (!trimmed) return '';

  // Strip common LinkedIn URL patterns
  const handle = trimmed
    .replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//i, '')
    .replace(/^(www\.)?linkedin\.com\/in\//i, '')
    .replace(/\/$/, ''); // Remove trailing slash

  return handle;
}

/**
 * Extract GitHub handle from various input formats
 * @param {string} input - User input (handle, partial URL, or full URL)
 * @returns {string} - Clean handle or empty string
 */
export function extractGitHubHandle(input) {
  if (!input || typeof input !== 'string') return '';

  const trimmed = input.trim();
  if (!trimmed) return '';

  // Strip common GitHub URL patterns
  const handle = trimmed
    .replace(/^https?:\/\/(www\.)?github\.com\//i, '')
    .replace(/^(www\.)?github\.com\//i, '')
    .replace(/\/$/, ''); // Remove trailing slash

  return handle;
}

/**
 * Build full LinkedIn URL from handle
 * @param {string} handle - LinkedIn username/handle
 * @returns {string} - Full LinkedIn URL or empty string
 */
export function buildLinkedInUrl(handle) {
  if (!handle || typeof handle !== 'string') return '';

  const trimmed = handle.trim();
  if (!trimmed) return '';

  return `https://linkedin.com/in/${trimmed}`;
}

/**
 * Build full GitHub URL from handle
 * @param {string} handle - GitHub username/handle
 * @returns {string} - Full GitHub URL or empty string
 */
export function buildGitHubUrl(handle) {
  if (!handle || typeof handle !== 'string') return '';

  const trimmed = handle.trim();
  if (!trimmed) return '';

  return `https://github.com/${trimmed}`;
}
