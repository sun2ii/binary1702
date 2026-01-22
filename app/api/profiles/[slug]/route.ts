import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { generateVCard } from '@/lib/vcard';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;

    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    // Get profile from database
    const profile = await db.getProfileBySlug(slug);

    if (!profile) {
      return NextResponse.json(
        { error: 'Profile not found or not verified' },
        { status: 404 }
      );
    }

    // Generate vCard
    const vcardData = generateVCard(profile);

    // Return profile data
    return NextResponse.json({
      profile: {
        slug: profile.slug,
        first_name: profile.first_name,
        last_name: profile.last_name,
        business_name: profile.business_name,
        phone: profile.phone,
        email: profile.email,
        website: profile.website,
        linkedin_handle: profile.linkedin_handle,
        github_handle: profile.github_handle,
        verifiedAt: profile.verified_at,
      },
      vcardData,
    });
  } catch (error: any) {
    console.error('Profile fetch error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error.message,
      },
      { status: 500 }
    );
  }
}
