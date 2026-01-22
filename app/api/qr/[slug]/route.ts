import { NextRequest, NextResponse } from 'next/server';
import QRCode from 'qrcode';
import { db } from '@/lib/db';
import { generateVCard } from '@/lib/vcard';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    let { slug } = params;

    // Remove .png extension if present
    if (slug && slug.endsWith('.png')) {
      slug = slug.replace(/\.png$/, '');
    }

    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    // Get profile from database
    const profile = await db.getProfileBySlug(slug);

    if (!profile) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
    }

    // Generate vCard
    const vcardData = generateVCard(profile);

    // Generate QR code as PNG buffer
    const qrBuffer = await QRCode.toBuffer(vcardData, {
      width: 256,
      margin: 2,
      errorCorrectionLevel: 'H',
      type: 'png',
    });

    // Return PNG
    return new NextResponse(new Uint8Array(qrBuffer), {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
      },
    });
  } catch (error: any) {
    console.error('QR generation error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error.message,
      },
      { status: 500 }
    );
  }
}
