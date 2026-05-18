import { Inter, IBM_Plex_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

/**
 * Layout for the public-facing operator-partnership site.
 * Routes inside this group: /, /msp.
 * Paper background, ink text, Inter + IBM Plex Mono fonts.
 */
export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${inter.variable} ${plexMono.variable} font-display bg-paper text-ink min-h-screen`}
    >
      {children}
    </div>
  );
}
