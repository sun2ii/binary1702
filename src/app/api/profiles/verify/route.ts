import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { verificationTokenSchema } from '@/lib/validation';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    // Get token from query
    const searchParams = request.nextUrl.searchParams;
    const token = searchParams.get('token');

    // Validate token format
    const validation = verificationTokenSchema.safeParse(token);
    if (!validation.success) {
      return NextResponse.redirect(new URL('/verify?status=invalid', request.url));
    }

    // Find token in database
    const tokenData = await db.findVerificationToken(token);

    if (!tokenData) {
      return NextResponse.redirect(new URL('/verify?status=expired', request.url));
    }

    // Mark token as verified
    await db.markTokenVerified(tokenData.id);

    // Mark profile as verified
    await db.markProfileVerified(tokenData.profile_id);

    // Redirect to profile page
    return NextResponse.redirect(
      new URL(`/profile/${tokenData.slug}`, request.url)
    );
  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.redirect(new URL('/verify?status=error', request.url));
  }
}
