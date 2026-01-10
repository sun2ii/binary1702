import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { siteConfig } from "@/config/site";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
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
      <body className={`${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <header className="border-b border-[var(--border)] px-6 py-4">
          <nav className="max-w-4xl mx-auto flex gap-6 text-sm">
            <Link href="/" className="font-semibold">
              {siteConfig.name}
            </Link>
            <Link href="/#services" className="text-[var(--muted)] hover:text-[var(--fg)]">
              Services
            </Link>
            <Link href="/logs" className="text-[var(--muted)] hover:text-[var(--fg)]">
              Work Log
            </Link>
            <Link href="/#contact" className="text-[var(--muted)] hover:text-[var(--fg)]">
              Contact
            </Link>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[var(--border)] mt-24 py-8">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between gap-6 text-sm">
              <div className="text-[var(--muted)]">
                © 2026 {siteConfig.name} LLC
              </div>
              <div className="flex gap-4">
                <a href={`mailto:${siteConfig.contact.email}`} className="text-[var(--muted)] hover:text-[var(--fg)]">
                  Email
                </a>
                {siteConfig.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--muted)] hover:text-[var(--fg)]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
