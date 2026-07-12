import { Inter, IBM_Plex_Mono, Space_Grotesk, Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
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
      className={`${inter.variable} ${plexMono.variable} ${spaceGrotesk.variable} ${greatVibes.variable} font-display bg-paper text-ink min-h-screen`}
    >
      {children}
    </div>
  );
}
