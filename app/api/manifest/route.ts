import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const startUrl = searchParams.get('start_url') || '/';

  const manifest = {
    name: 'Binary 1702 - QR Profile Service',
    short_name: 'Binary1702',
    description: 'Generate scannable QR codes with your contact information',
    start_url: startUrl,
    display: 'standalone',
    background_color: '#FAF9F7',
    theme_color: '#6B8F71',
    orientation: 'portrait',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  };

  return new NextResponse(JSON.stringify(manifest), {
    status: 200,
    headers: {
      'Content-Type': 'application/manifest+json',
    },
  });
}
