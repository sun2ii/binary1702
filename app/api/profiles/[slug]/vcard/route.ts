import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { generateVCard } from '@/lib/vcard';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  if (!slug) {
    return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
  }

  // Fetch profile
  const profile = await db.getProfileBySlug(slug);

  if (!profile) {
    return NextResponse.json(
      { error: 'Profile not found or not verified' },
      { status: 404 }
    );
  }

  // Generate vCard
  const vcardData = generateVCard(profile);

  // Filename: FirstName-LastName.vcf
  const filename = `${profile.first_name}-${profile.last_name}.vcf`;

  // Return with download headers
  return new NextResponse(vcardData, {
    status: 200,
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': `attachment; filename="${filename}"`,
    },
  });
}
