import Link from "next/link";
import { bookingUrl } from "@/config/site";

/**
 * Temporary placeholder for the /studio, /labs, and /legacy division pages
 * while their full designs are built out. Each division keeps the shared
 * midnight base and brings its own accent color.
 */
export function DivisionStub({
  name,
  accent,
  tagline,
  body,
}: {
  name: string;
  accent: string;
  tagline: string;
  body: string;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-midnight text-frost">
      <header className="border-b border-line">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet to-royal text-sm font-bold text-frost">
              B
            </span>
            <span className="font-extrabold tracking-wide">
              BINARY <span className="text-violet">1702</span>
            </span>
          </Link>
          <Link href="/" className="text-sm text-fog transition hover:text-frost">
            ← Back home
          </Link>
        </nav>
      </header>
      <main className="relative flex flex-1 items-center overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: `radial-gradient(50% 50% at 50% 30%, ${accent}22, transparent 70%)` }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-2xl px-5 py-24 text-center">
          <p
            className="font-display-mono text-xs font-semibold tracking-[0.3em] uppercase"
            style={{ color: accent }}
          >
            Binary 1702 · {name}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">{tagline}</h1>
          <p className="mx-auto mt-5 max-w-lg text-lg text-fog">{body}</p>
          <p className="mt-8 text-sm text-fog">
            This page is being built. In the meantime, the door is open:
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-midnight transition hover:opacity-90"
            style={{ backgroundColor: accent }}
          >
            Book a free 15-minute call <span aria-hidden>→</span>
          </a>
        </div>
      </main>
    </div>
  );
}
