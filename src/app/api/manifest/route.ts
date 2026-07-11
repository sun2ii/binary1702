import { NextRequest, NextResponse } from 'next/server';

/**
 * Dynamic PWA manifest for profile pages.
 * Referenced by src/app/profile/[slug]/layout.tsx as
 * /api/manifest?start_url=/profile/<slug> so each business card
 * can be installed as its own app.
 */
export async function GET(request: NextRequest) {
  const startUrlParam = request.nextUrl.searchParams.get('start_url') ?? '/';
  // Only allow same-origin relative paths to avoid open-redirect-style abuse
  const startUrl = startUrlParam.startsWith('/') && !startUrlParam.startsWith('//')
    ? startUrlParam
    : '/';

  const manifest = {
    name: 'Binary 1702',
    short_name: 'B1702',
    description: 'Digital business card by Binary 1702',
    start_url: startUrl,
    scope: '/',
    display: 'standalone',
    background_color: '#05050A',
    theme_color: '#05050A',
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };

  return NextResponse.json(manifest, {
    headers: { 'Content-Type': 'application/manifest+json' },
  });
}
