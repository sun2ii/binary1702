import Link from "next/link";

/**
 * Standard site footer — modeled on the conventional Next.js pattern
 * (dedicated component, semantic landmarks, plain Tailwind utilities).
 */
export function SiteFooter() {
  return (
    <footer id="footer" className="border-t border-zinc-800 bg-midnight">
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet to-violet-bright font-heading text-xl font-bold text-white">
                B
              </span>
              <span className="font-heading text-lg font-bold text-white">
                BINARY <span className="text-violet-bright">1702</span>
              </span>
            </Link>
          </div>

          <nav aria-label="Company">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-violet-bright">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#footer" className="text-sm text-zinc-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-zinc-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Divisions">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-violet-bright">
              Divisions
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/studio" className="text-sm text-zinc-400 hover:text-white">
                  Studio
                </Link>
              </li>
              <li>
                <Link href="/labs" className="text-sm text-zinc-400 hover:text-white">
                  Labs
                </Link>
              </li>
              <li>
                <Link href="/legacy" className="text-sm text-zinc-400 hover:text-white">
                  Legacy
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Resources">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-violet-bright">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#case-study" className="text-sm text-zinc-400 hover:text-white">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#how-we-work" className="text-sm text-zinc-400 hover:text-white">
                  How It Works
                </a>
              </li>
            </ul>
          </nav>

          <div className="col-span-2 md:col-span-1">
            <p className="text-sm leading-relaxed text-zinc-400">
              We build systems that help founder-led businesses run smarter, scale faster, and
              reclaim their time.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href="https://linkedin.com/in/benbasuni"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-zinc-500 hover:text-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                </svg>
              </a>
              <a
                href="mailto:benbasuni1@gmail.com"
                aria-label="Email"
                className="text-zinc-500 hover:text-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-zinc-800 pt-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Binary 1702. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
