import { Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Layout for the original Binary1702 execution-log experience.
 * Routes inside this group: /logs, /logs/[id], /gallery, /gallery/[id].
 * Styling matches the pre-existing site (dark bg, Geist Mono, narrow container).
 */
export default function LogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${geistMono.variable} logs-scope min-h-screen`}
      style={{
        background: "#0a0a0a",
        color: "#ededed",
        fontFamily: "var(--font-geist-mono), monospace",
      }}
    >
      <header className="border-b border-[#222] px-6 py-4">
        <nav className="max-w-3xl mx-auto flex gap-6 text-sm">
          <Link href="/" className="font-semibold !text-[#ededed] hover:!text-white">
            Binary1702
          </Link>
          <Link href="/logs" className="!text-[#888] hover:!text-white">
            Logs
          </Link>
          <Link href="/gallery" className="!text-[#888] hover:!text-white">
            Gallery
          </Link>
        </nav>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-8">{children}</main>
    </div>
  );
}
