import { z } from 'zod';
import { extractLinkedInHandle, extractGitHubHandle } from './social-urls.js';

/**
 * Validation schemas using Zod
 */

// Phone number - accept any format, strip to 10 digits (required)
const phoneSchema = z
  .string()
  .min(1, 'Phone is required')
  .transform(val => val.replace(/\D/g, '')) // Strip non-digits
  .refine(val => val.length === 10, {
    message: 'Phone must be 10 digits'
  });

// URL validation (optional, must be https)
const urlSchema = z
  .string()
  .url('Must be a valid URL')
  .regex(/^https?:\/\//, 'URL must start with http:// or https://')
  .max(500, 'URL too long')
  .optional()
  .or(z.literal(''));

// Social media handle validation (alphanumeric, hyphens, underscores)
const handleSchema = z
  .string()
  .max(100, 'Handle too long')
  .regex(/^[a-zA-Z0-9_-]+$/, 'Handle must contain only letters, numbers, hyphens, and underscores')
  .optional()
  .or(z.literal(''));

// LinkedIn handle with auto-extraction from URLs
const linkedinHandleSchema = z
  .string()
  .transform(val => extractLinkedInHandle(val))
  .pipe(handleSchema);

// GitHub handle with auto-extraction from URLs
const githubHandleSchema = z
  .string()
  .transform(val => extractGitHubHandle(val))
  .pipe(handleSchema);

// Website URL with auto-prepend of https://
const websiteSchema = z
  .string()
  .transform(val => {
    if (!val) return '';
    if (val.startsWith('http://') || val.startsWith('https://')) return val;
    return `https://${val}`;
  })
  .pipe(urlSchema);

// Profile submission schema
export const profileSubmissionSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(255, 'First name too long'),

  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(255, 'Last name too long'),

  businessName: z
    .string()
    .min(1, 'Business name is required')
    .max(255, 'Business name too long'),

  phone: phoneSchema,

  email: z
    .string()
    .email('Invalid email address')
    .max(255, 'Email too long'),

  website: websiteSchema,

  linkedin: linkedinHandleSchema,

  github: githubHandleSchema,

  occupation: z
    .string()
    .max(255, 'Occupation too long')
    .optional()
    .or(z.literal(''))
});

/**
 * Validate verification token format
 */
export const verificationTokenSchema = z
  .string()
  .length(64, 'Invalid token format');
