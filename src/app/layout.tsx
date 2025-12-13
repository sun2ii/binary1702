import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Binary1702",
  description: "Log viewer for Binary1702",
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased min-h-screen`}>
        <header className="border-b border-[#222] px-6 py-4">
          <nav className="max-w-3xl mx-auto flex gap-6 text-sm">
            <Link href="/" className="font-semibold">
              Binary1702
            </Link>
            <Link href="/logs" className="text-[#888] hover:text-white">
              Logs
            </Link>
          </nav>
        </header>
        <main className="max-w-3xl mx-auto px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
