import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const profileUrl = `/profile/${params.slug}`;

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
