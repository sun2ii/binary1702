import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Binary 1702",
  description: "Operational spine engagements for $2–5M service businesses.",
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#F4F1EA",
};

/**
 * Root layout intentionally minimal.
 *
 * Per-section styling (dark logs view vs. paper marketing site) is handled
 * by route-group layouts under (logs)/ and (marketing)/.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
