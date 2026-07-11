import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const profileUrl = `/profile/${slug}`;

  return {
    manifest: `/api/manifest?start_url=${encodeURIComponent(profileUrl)}`,
  };
}

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
