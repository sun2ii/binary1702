import Link from "next/link";
import { bookingUrl } from "@/config/site";

/**
 * Shared site navigation — identical across binary1702.com pages.
 * Pass `active` (e.g. "/studio") to underline the current section.
 */

const links = [
  { label: "Studio", href: "/studio" },
  { label: "Labs", href: "/labs" },
  { label: "Legacy", href: "/legacy" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export function SiteNav({ active }: { active?: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-midnight/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <span
            className="inline-flex items-center justify-center rounded-[9px] bg-gradient-to-br from-violet to-violet-bright font-heading font-bold text-frost"
            style={{ width: 34, height: 34, fontSize: 19 }}
          >
            B
          </span>
          <span className="font-heading text-[22px] font-bold tracking-[0.5px] text-frost">
            BINARY <span className="text-violet-bright">1702</span>
          </span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={
                active === l.href
                  ? "border-b-2 border-violet-bright pb-1 text-sm font-bold uppercase tracking-[1px] text-white"
                  : "text-sm font-bold uppercase tracking-[1px] text-[#E7E6EF] transition hover:text-frost"
              }
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-end gap-1">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-[10px] border border-mint bg-mint/[0.08] px-[22px] py-3.5 text-sm font-extrabold tracking-[1px] text-mint transition hover:bg-mint/[0.16]"
          >
            FREE 15-MINUTE CALL <span aria-hidden>→</span>
          </a>
          <span className="hidden text-[10px] text-fog sm:block">No pressure. Just a conversation.</span>
        </div>
      </nav>
    </header>
  );
}
