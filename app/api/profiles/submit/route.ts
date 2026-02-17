import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { db } from '@/lib/db';
import { profileSubmissionSchema } from '@/lib/validation';
import { sendVerificationEmail } from '@/lib/email';
import { createUniqueSlug } from '@/lib/slug-generator';

export async function POST(request: NextRequest) {
  try {
    // Parse JSON body
    const body = await request.json();

    // Validate input
    const validation = profileSubmissionSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: validation.error.flatten(),
        },
        { status: 400 }
      );
    }

    const data = validation.data;

    // Check for pending verification
    const pending = await db.checkPendingVerification(data.email);
    if (pending) {
      return NextResponse.json(
        {
          error:
            'A verification email was already sent to this address. Please check your inbox or wait an hour before trying again.',
        },
        { status: 400 }
      );
    }

    // Generate slug from first and last name
    const slug = await createUniqueSlug(data.firstName, data.lastName);

    // Create profile
    const profile = await db.createProfile({
      slug,
      firstName: data.firstName,
      lastName: data.lastName,
      businessName: data.businessName,
      phone: data.phone,
      email: data.email,
      website: data.website,
      linkedin_handle: data.linkedin,
      github_handle: data.github,
      occupation: data.occupation,
    });

    // Generate verification token
    const token = crypto.randomBytes(32).toString('hex');
    const expiryMinutes = parseInt(process.env.VERIFICATION_EXPIRY_MINUTES || '15', 10);
    const expiresAt = new Date(Date.now() + expiryMinutes * 60 * 1000);

    await db.createVerificationToken({
      profileId: profile.id,
      token,
      email: data.email,
      expiresAt,
    });

    // Send verification email
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const verificationUrl = `${baseUrl}/api/profiles/verify?token=${token}`;

    await sendVerificationEmail({
      to: data.email,
      name: `${data.firstName} ${data.lastName}`,
      verificationUrl,
    });

    return NextResponse.json({
      message: 'Profile created! Check your email to verify.',
      slug: profile.slug,
    });
  } catch (error: any) {
    console.error('Profile submission error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error.message,
      },
      { status: 500 }
    );
  }
}
