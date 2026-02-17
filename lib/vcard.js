import { buildLinkedInUrl, buildGitHubUrl } from './social-urls.js';

/**
 * Generate vCard 4.0 string from profile data
 * vCard spec: RFC 6350
 */
export function generateVCard(profile) {
  const lines = ['BEGIN:VCARD', 'VERSION:4.0'];

  // Full name (required)
  if (profile.first_name && profile.last_name) {
    const fullName = `${profile.first_name} ${profile.last_name}`;
    lines.push(`FN:${escapeVCardValue(fullName)}`);

    // Structured name (N: family;given;additional;prefix;suffix)
    lines.push(`N:${escapeVCardValue(profile.last_name)};${escapeVCardValue(profile.first_name)};;;`);
  }

  // Occupation / job title (optional)
  if (profile.occupation) {
    lines.push(`TITLE:${escapeVCardValue(profile.occupation)}`);
  }

  // Phone (optional) - add +1 for US numbers in vCard
  if (profile.phone) {
    const phoneNumber = profile.phone.startsWith('+') ? profile.phone : `+1${profile.phone}`;
    lines.push(`TEL;TYPE=work,voice:${escapeVCardValue(phoneNumber)}`);
  }

  // Email (required)
  if (profile.email) {
    lines.push(`EMAIL:${escapeVCardValue(profile.email)}`);
  }

  // Website (optional)
  if (profile.website) {
    lines.push(`URL:${escapeVCardValue(profile.website)}`);
  }

  // LinkedIn (optional)
  if (profile.linkedin_handle) {
    lines.push(`URL:${escapeVCardValue(buildLinkedInUrl(profile.linkedin_handle))}`);
  }

  // GitHub (optional)
  if (profile.github_handle) {
    lines.push(`URL:${escapeVCardValue(buildGitHubUrl(profile.github_handle))}`);
  }

  // Profile picture (optional)
  if (profile.profile_pic_url) {
    lines.push(`PHOTO;MEDIATYPE=image/jpeg:${escapeVCardValue(profile.profile_pic_url)}`);
  }

  // Timezone
  lines.push('TZ:America/Los_Angeles');

  lines.push('END:VCARD');

  return lines.join('\n');
}

/**
 * Escape special characters in vCard values
 * Special chars: , ; \ and newlines
 */
function escapeVCardValue(value) {
  if (!value) return '';
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;')
    .replace(/\n/g, '\\n');
}
