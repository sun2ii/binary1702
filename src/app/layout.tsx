import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icons/icon-512.ico",
    apple: "/icons/icon-512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const stored = localStorage.getItem('theme');
                const theme = stored || 'light';
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          <ThemeToggle />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-[var(--border)] mt-8 py-8">
            <div className="max-w-4xl mx-auto px-6">
              <div className="flex flex-col gap-6 text-sm text-center items-center">
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
                  <a href="/qr" className="text-[var(--muted)] hover:text-[var(--fg)]">
                    QR
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
