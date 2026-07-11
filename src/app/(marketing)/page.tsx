import type { Metadata } from "next";
import Link from "next/link";
import { bookingUrl, intakeUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Binary 1702 — Systems. Workflows. Clarity.",
  description:
    "Binary 1702 maps your tools, fixes broken handoffs, and builds the workflows that give founders their time back.",
};

/* ────────────────────────────────────────────────────────────────
   Small shared pieces
   ──────────────────────────────────────────────────────────────── */

function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-[9px] bg-gradient-to-br from-violet to-violet-bright font-heading font-bold text-frost"
      style={{ width: size, height: size, fontSize: size * 0.55 }}
    >
      B
    </span>
  );
}

function CallButton({ label = "Book a free 15-minute call" }: { label?: string }) {
  return (
    <a
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-[10px] bg-gradient-to-br from-mint-deep to-mint px-6 py-4 text-sm font-extrabold uppercase tracking-[0.8px] text-[#04120C] shadow-[0_8px_32px_rgba(52,224,161,0.25)] transition hover:shadow-[0_8px_40px_rgba(52,224,161,0.4)]"
    >
      {label} <span aria-hidden>→</span>
    </a>
  );
}

/* ── Tool logo tiles for the hero diagram ── */

function Tile({ bg, label, children }: { bg: string; label: string; children: React.ReactNode }) {
  return (
    <span
      className="flex h-[52px] w-[52px] items-center justify-center rounded-xl shadow-md"
      style={{ backgroundColor: bg }}
      title={label}
      aria-label={label}
    >
      {children}
    </span>
  );
}

const disconnectedRow = [
  <Tile key="slack" bg="#FFFFFF" label="Slack">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/logos/slack.svg" alt="" className="h-6 w-6" />
  </Tile>,
  <Tile key="gmail" bg="#FFFFFF" label="Gmail">
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
      <path d="M3 6.5V18h3.6v-7.2L12 14l5.4-3.2V18H21V6.5L12 12z" fill="#EA4335" />
      <path d="M3 6.5 12 12l9-5.5L19.6 5 12 9.6 4.4 5z" fill="#C5221F" />
    </svg>
  </Tile>,
  <Tile key="notion" bg="#FFFFFF" label="Notion">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/logos/notion.svg" alt="" className="h-6 w-6" />
  </Tile>,
  <Tile key="quickbooks" bg="#FFFFFF" label="QuickBooks">
    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2CA01C] text-[10px] font-bold text-white">
      qb
    </span>
  </Tile>,
  <Tile key="more" bg="#FFFFFF" label="And more">
    <span className="pb-1 text-lg font-extrabold tracking-wider text-[#5F6368]">…</span>
  </Tile>,
];

const alignedRow = [
  <Tile key="hubspot" bg="#FF7A59" label="HubSpot">
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#fff" aria-hidden>
      <circle cx="13" cy="14" r="3.6" strokeWidth="2.2" />
      <path d="M13 10.4V5.2" strokeWidth="2.2" />
      <circle cx="13" cy="4" r="1.6" fill="#fff" stroke="none" />
      <path d="M10.3 12.1 6.2 8.9" strokeWidth="2" />
      <circle cx="5.2" cy="8" r="1.4" fill="#fff" stroke="none" />
      <path d="m10.6 16.6-2.9 2.9" strokeWidth="2" />
      <circle cx="6.8" cy="20.4" r="1.4" fill="#fff" stroke="none" />
    </svg>
  </Tile>,
  <Tile key="notion2" bg="#0F0F12" label="Notion">
    <span className="font-serif text-lg font-bold text-white">N</span>
  </Tile>,
  <Tile key="stripe" bg="#635BFF" label="Stripe">
    <span className="text-lg font-extrabold text-white">S</span>
  </Tile>,
  <Tile key="sheets" bg="#34A853" label="Google Sheets">
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
      <rect x="6" y="4" width="12" height="16" rx="1.5" fill="#fff" />
      <path d="M8.5 9h7M8.5 12h7M8.5 15h7M12 9v8" stroke="#34A853" strokeWidth="1.2" />
    </svg>
  </Tile>,
  <Tile key="postgres" bg="#336791" label="Postgres">
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
      <ellipse cx="12" cy="7" rx="6" ry="2.5" fill="#fff" />
      <path d="M6 7v9c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V7" fill="none" stroke="#fff" strokeWidth="1.8" />
    </svg>
  </Tile>,
];

/* Animated pulse connector between diagram rows */
function PulseLine({ direction = "down" }: { direction?: "down" | "up" }) {
  return (
    <span
      className="pulse-line -my-2 h-[22px] w-[2px]"
      style={{
        background:
          direction === "down"
            ? "linear-gradient(180deg, #34E0A1, transparent)"
            : "linear-gradient(180deg, transparent, #34E0A1)",
      }}
      aria-hidden
    />
  );
}

/* ────────────────────────────────────────────────────────────────
   Nav
   ──────────────────────────────────────────────────────────────── */

const navLinks = [
  { label: "Studio", href: "/studio" },
  { label: "Labs", href: "/labs" },
  { label: "Legacy", href: "/legacy" },
  { label: "Work", href: "#case-study" },
  { label: "About", href: "#footer" },
  { label: "Contact", href: "#contact" },
];

function HomeNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-midnight/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark />
          <span className="font-heading text-[22px] font-bold tracking-[0.5px] text-frost">
            BINARY <span className="text-violet-bright">1702</span>
          </span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm font-bold uppercase tracking-[1px] text-[#E7E6EF] transition hover:text-frost"
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

/* ────────────────────────────────────────────────────────────────
   Hero
   ──────────────────────────────────────────────────────────────── */

const heroTrust = ["Fixed scope", "Working systems", "No open-ended contracts", "You own everything we build"];

const heroResults = [
  "Disconnected tools become one system",
  "Manual handoffs become automated",
  "Clean data you can trust",
  "Founder time is reclaimed",
];

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(60% 50% at 75% 20%, rgba(124,58,237,0.16), transparent 70%)" }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-[1360px] items-start gap-10 px-6 py-16 lg:grid-cols-[1fr_600px] xl:gap-14 lg:py-20">
        <div className="flex flex-col gap-5">
          <p className="text-[15px] font-extrabold tracking-[2px] text-mint">
            SYSTEMS. WORKFLOWS. CLARITY.
          </p>
          <h1
            className="font-heading text-4xl font-bold leading-[1.15] text-white md:text-[52px]"
            style={{ textWrap: "balance" }}
          >
            Your business should not depend on you manually holding{" "}
            <span className="text-violet-bright">every system together.</span>
          </h1>
          <p className="max-w-[520px] text-[19px] leading-relaxed text-[#C9C7D6]">
            Binary 1702 maps your tools, fixes broken handoffs, and builds the workflows that give
            founders their time back.
          </p>
          <div className="mt-2 flex flex-col items-start gap-4 min-[440px]:flex-row min-[440px]:flex-wrap min-[440px]:items-center lg:flex-nowrap">
            <CallButton />
            <a
              href="#case-study"
              className="inline-flex items-center whitespace-nowrap rounded-[10px] border border-white/[0.18] px-5 py-4 text-[12px] font-bold tracking-[1px] text-[#E7E6EF] transition hover:border-white/40 hover:text-white"
            >
              SEE A REAL CLIENT TRANSFORMATION
            </a>
          </div>
          <p className="text-sm text-fog">Let&apos;s talk about your business and challenges.</p>
          <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2.5">
            {heroTrust.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-violet-bright text-[11px] font-extrabold text-violet-bright">
                  ✓
                </span>
                <span className="text-[13.5px] font-semibold text-[#D7D5E2]">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Diagram + results */}
        <div className="grid items-stretch gap-5 sm:grid-cols-[1fr_210px]">
          {/* Diagram panel */}
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-violet-bright/25 bg-[#141024]/60 px-[22px] py-6">
            <p className="font-heading text-[17px] font-bold tracking-[1px] text-frost">
              FROM DISCONNECTED TO <span className="text-mint">ALIGNED</span>
            </p>

            <div className="flex w-full flex-col items-center gap-3.5 rounded-xl border border-white/[0.08] bg-[#0A0912]/70 px-4 pb-[18px] pt-3.5">
              <p className="text-[11.5px] font-extrabold tracking-[1.5px] text-[#B7B5C4]">
                DISCONNECTED TODAY
              </p>
              <div className="flex gap-4">{disconnectedRow}</div>
            </div>

            <PulseLine direction="down" />

            <div className="flex w-full items-center justify-center gap-3.5 rounded-xl border border-violet-bright/40 bg-[#0F0C1C]/90 px-5 py-4 shadow-[0_0_40px_rgba(124,58,237,0.2)]">
              <LogoMark size={40} />
              <span className="text-left">
                <span className="block font-heading text-[17px] font-bold tracking-[0.5px] text-frost">
                  BINARY 1702
                </span>
                <span className="block text-[13px] text-[#B7B5C4]">Maps. Fixes. Builds.</span>
              </span>
            </div>

            <PulseLine direction="up" />

            <div className="flex w-full flex-col items-center gap-3.5 rounded-xl border border-mint/25 bg-[#0A0912]/70 px-4 pb-[18px] pt-3.5">
              <p className="text-[11.5px] font-extrabold tracking-[1.5px] text-[#B7B5C4]">
                ALIGNED &amp; AUTOMATED
              </p>
              <div className="flex gap-4">{alignedRow}</div>
            </div>
          </div>

          {/* Results panel */}
          <div className="flex flex-col rounded-2xl border border-white/[0.08] bg-[#0E0C18]/70 px-[18px] py-6">
            <p className="font-heading text-[15px] font-bold tracking-[1px] text-frost">THE RESULTS</p>
            <ul className="flex flex-1 flex-col justify-evenly gap-4 py-[18px]">
              {heroResults.map((r) => (
                <li key={r} className="flex items-start gap-2.5">
                  <span className="text-sm font-extrabold leading-[1.4] text-mint">✓</span>
                  <span className="text-[13px] leading-[1.45] text-[#C9C7D6]">{r}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-1.5 border-t border-white/[0.08] pt-4">
              <p className="text-xs font-extrabold tracking-[1.5px] text-violet-bright">
                THE OPPORTUNITY
              </p>
              <p className="text-[15px] text-[#E7E6EF]">
                <span className="font-heading text-[26px] font-bold text-violet-bright">10+</span>{" "}
                hrs/week reclaimed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Pain points
   ──────────────────────────────────────────────────────────────── */

function PainIcon({ kind }: { kind: "person" | "folder" | "chat" | "warning" | "map" }) {
  const paths: Record<string, React.ReactNode> = {
    person: (
      <>
        <circle cx="12" cy="7.5" r="3.5" />
        <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
      </>
    ),
    folder: (
      <path d="M3 7v11a1.5 1.5 0 0 0 1.5 1.5h15A1.5 1.5 0 0 0 21 18V9a1.5 1.5 0 0 0-1.5-1.5H12L9.8 5H4.5A1.5 1.5 0 0 0 3 6.5Z" />
    ),
    chat: (
      <>
        <path d="M12 4.5c-4.7 0-8.5 3-8.5 6.7 0 2.1 1.2 4 3.1 5.2L6 20l3.6-1.6c.8.2 1.6.3 2.4.3 4.7 0 8.5-3 8.5-6.7S16.7 4.5 12 4.5Z" />
        <circle cx="8.5" cy="11.2" r="0.5" fill="#A855F7" />
        <circle cx="12" cy="11.2" r="0.5" fill="#A855F7" />
        <circle cx="15.5" cy="11.2" r="0.5" fill="#A855F7" />
      </>
    ),
    warning: (
      <>
        <path d="M12 4 21 19.5H3L12 4Z" />
        <line x1="12" y1="10" x2="12" y2="14" />
        <circle cx="12" cy="16.7" r="0.5" fill="#A855F7" />
      </>
    ),
    map: (
      <>
        <path d="M9 4.5 3.5 6.5v13L9 17.5l6 2 5.5-2v-13L15 6.5l-6-2Z" />
        <line x1="9" y1="4.5" x2="9" y2="17.5" />
        <line x1="15" y1="6.5" x2="15" y2="19.5" />
      </>
    ),
  };
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#A855F7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[kind]}
    </svg>
  );
}

const pains: { icon: "person" | "folder" | "chat" | "warning" | "map"; text: string }[] = [
  { icon: "person", text: "Your systems only work because you manually connect them." },
  { icon: "folder", text: "Important client information lives across multiple tools." },
  { icon: "chat", text: "Your team asks you questions the system should answer." },
  { icon: "warning", text: "Fixing one workflow seems to break another." },
  { icon: "map", text: "Nobody has a complete map of how your business operates." },
];

function PainPoints() {
  return (
    <section className="mx-auto max-w-[1360px] px-6 py-8">
      <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#0B0A14] to-[#08070F] px-7 pb-14 pt-12 lg:px-14">
        <h2 className="mb-11 text-center font-heading text-[22px] font-bold tracking-[2px] text-violet-bright">
          DOES THIS SOUND FAMILIAR?
        </h2>
        <ul className="grid items-start gap-y-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-y-0">
          {pains.map((p, i) => (
            <li
              key={p.text}
              className={`flex flex-col items-center gap-6 px-7 ${
                i > 0 ? "lg:border-l lg:border-[#A855F7]/[0.22]" : ""
              }`}
            >
              <span className="flex h-16 items-center justify-center">
                <PainIcon kind={p.icon} />
              </span>
              <p
                className="max-w-[220px] text-center text-[17px] font-semibold leading-[1.55] text-[#D7D5E2]"
                style={{ textWrap: "pretty" }}
              >
                {p.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   How we work + case study
   ──────────────────────────────────────────────────────────────── */

/* Big step icons (Lucide network / wrench / rocket) */
function StepIcon({ kind }: { kind: "map" | "fix" | "build" }) {
  const paths: Record<string, React.ReactNode> = {
    map: (
      <>
        <rect x="9" y="2" width="6" height="6" rx="1" />
        <rect x="2" y="16" width="6" height="6" rx="1" />
        <rect x="16" y="16" width="6" height="6" rx="1" />
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
        <path d="M12 12V8" />
      </>
    ),
    fix: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    ),
    build: (
      <>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </>
    ),
  };
  return (
    <svg
      width="104"
      height="104"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[kind]}
    </svg>
  );
}

function StepArrow() {
  return (
    <svg
      width="30"
      height="16"
      viewBox="0 0 30 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M2 8h24" />
      <path d="m20 2 6 6-6 6" />
    </svg>
  );
}

/* Mini stat icons (clock / trend / calendar / shield) */
function StatIcon({ kind }: { kind: "clock" | "trend" | "calendar" | "shield" }) {
  const paths: Record<string, React.ReactNode> = {
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
    trend: (
      <>
        <path d="M3 17l5-5 3.5 3.5L19 8" />
        <path d="M14.5 8H19v4.5" />
      </>
    ),
    calendar: (
      <>
        <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
        <path d="M3.5 9.5h17 M8 3v4 M16 3v4" />
        <circle cx="8" cy="14" r="0.5" fill="currentColor" />
        <circle cx="12" cy="14" r="0.5" fill="currentColor" />
        <circle cx="16" cy="14" r="0.5" fill="currentColor" />
        <circle cx="8" cy="17.5" r="0.5" fill="currentColor" />
        <circle cx="12" cy="17.5" r="0.5" fill="currentColor" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 5.5v6c0 4.2 3 7.6 7 9.5 4-1.9 7-5.3 7-9.5v-6L12 3Z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  };
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[kind]}
    </svg>
  );
}

const steps: { n: number; title: string; body: string; icon: "map" | "fix" | "build" }[] = [
  { n: 1, title: "MAP", body: "We document your tools, workflows, handoffs, dependencies, and bottlenecks.", icon: "map" },
  { n: 2, title: "FIX", body: "We repair the immediate failures affecting your customers and your team.", icon: "fix" },
  { n: 3, title: "BUILD", body: "We implement the highest-value workflows and hand the completed system back to you.", icon: "build" },
];

const caseBefore = [
  "Founder manually synchronizing customer information",
  "Two-day quarterly audit preparation",
  "Broken invitation & access workflows",
  "Disconnected membership & payment systems",
];

const caseAfter = [
  "Full systems architecture map",
  "Prioritized workflow roadmap",
  "Corrected customer-facing issues",
  "Automated data handoffs",
  "Reorganized member experience",
];

const impact: { icon: "clock" | "trend" | "calendar" | "shield"; big: string; small: string }[] = [
  { icon: "clock", big: "10+", small: "hrs/week reclaimed" },
  { icon: "trend", big: "90%", small: "reduction in manual work" },
  { icon: "calendar", big: "2 Days → 2 Hrs", small: "audit prep time" },
  { icon: "shield", big: "100%", small: "access issues eliminated" },
];

function HowWeWork() {
  return (
    <section id="how-we-work" className="mx-auto max-w-[1360px] px-6 py-8">
      <div className="grid gap-6 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#0B0A14] to-[#08070F] px-9 pb-11 pt-10 xl:grid-cols-[minmax(0,1fr)_395px_230px]">
        {/* Steps */}
        <div className="flex flex-col">
          <h2 className="mb-6 font-heading text-[19px] font-bold tracking-[2px] text-violet-bright">
            HOW WE WORK
          </h2>
          <div className="grid flex-1 gap-3 pt-4 sm:grid-cols-[minmax(0,1fr)_18px_minmax(0,1fr)_18px_minmax(0,1fr)]">
            {steps.map((s, i) => (
              <div key={s.n} className="contents">
                {i > 0 && (
                  <div className="hidden justify-center pt-[120px] text-violet-bright sm:flex">
                    <StepArrow />
                  </div>
                )}
                <div
                  className={`flex flex-col gap-6 ${
                    i > 0 ? "sm:border-l sm:border-[#A855F7]/[0.15] sm:pl-3.5" : ""
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet to-violet-bright font-heading text-lg font-bold text-white">
                      {s.n}
                    </span>
                    <h3 className="font-heading text-[19px] font-bold tracking-[1px] text-white">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[15px] leading-[1.6] text-[#C9C7D6]">{s.body}</p>
                  <div className="flex items-center justify-center pt-10 text-violet-bright sm:pt-14">
                    <StepIcon kind={s.icon} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured case study */}
        <div
          id="case-study"
          className="flex flex-col gap-[18px] rounded-2xl border border-violet-bright/25 bg-[#141024]/55 px-[26px] py-7"
        >
          <p className="font-heading text-base font-bold tracking-[2px] text-violet-bright">
            FEATURED CASE STUDY
          </p>
          <h3 className="font-heading text-[22px] font-bold leading-[1.35] text-white">
            25-Year Service Business
            <br />
            13 Systems. One Founder Bottleneck.
          </h3>
          <div className="grid grid-cols-2 gap-[22px]">
            <div className="flex flex-col gap-3">
              <p className="text-[13px] font-extrabold tracking-[1.5px] text-[#F87171]">BEFORE</p>
              {caseBefore.map((b) => (
                <p key={b} className="flex items-start gap-2">
                  <span className="text-[13px] leading-[1.5] text-[#F87171]">⊗</span>
                  <span className="text-[12.5px] leading-[1.5] text-[#C9C7D6]">{b}</span>
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[13px] font-extrabold tracking-[1.5px] text-[#34D399]">AFTER</p>
              {caseAfter.map((a) => (
                <p key={a} className="flex items-start gap-2">
                  <span className="text-[13px] leading-[1.5] text-[#34D399]">✓</span>
                  <span className="text-[12.5px] leading-[1.5] text-[#C9C7D6]">{a}</span>
                </p>
              ))}
            </div>
          </div>
          <p className="text-[14.5px] italic leading-[1.6] text-[#C084FC]">
            &ldquo;Binary 1702 identified problems we had been living with for years and gave us a
            clear system for fixing them. The impact was immediate.&rdquo;{" "}
            <span className="not-italic text-[#B7B5C4]">— Mike, Business Owner</span>
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 font-heading text-[15px] font-bold tracking-[1.5px] text-violet-bright transition hover:text-[#C084FC]"
          >
            VIEW FULL CASE STUDY <span aria-hidden className="text-[17px]">→</span>
          </a>
        </div>

        {/* Measured impact */}
        <div className="flex flex-col rounded-2xl border border-white/[0.08] bg-[#0E0C18]/70 px-[22px] py-[26px]">
          <p className="text-[12.5px] font-extrabold tracking-[1.5px] text-violet-bright">
            MEASURED IMPACT <span className="font-semibold text-[#8B899A]">(90 DAYS)</span>
          </p>
          <div className="flex flex-1 flex-col justify-evenly gap-[18px] pt-[18px]">
            {impact.map((m, i) => (
              <div
                key={m.small}
                className={`flex items-start gap-3.5 ${
                  i > 0 ? "border-t border-white/[0.08] pt-4" : ""
                }`}
              >
                <span className="shrink-0 text-violet-bright">
                  <StatIcon kind={m.icon} />
                </span>
                <span>
                  <span className="block font-heading text-[22px] font-bold leading-[1.2] text-white">
                    {m.big}
                  </span>
                  <span className="block text-[13px] leading-[1.45] text-[#B7B5C4]">{m.small}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Ways to work together
   ──────────────────────────────────────────────────────────────── */

const diagnostic = [
  "1 week engagement",
  "Complete systems assessment",
  "Architecture map & findings",
  "Prioritized roadmap",
  "Immediate issues fixed",
];

const sprint = [
  "4 week implementation sprint",
  "High-impact workflow builds",
  "Automation & integrations",
  "Documentation & training",
  "You own everything we build",
];

function OfferBullets({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-[11px]">
      {items.map((it) => (
        <p key={it} className="flex items-start gap-2.5">
          <span className="text-sm leading-[1.5] text-[#8B899A]">•</span>
          <span className="text-sm leading-[1.5] text-[#C9C7D6]">{it}</span>
        </p>
      ))}
    </div>
  );
}

function WorkTogether() {
  return (
    <section className="mx-auto max-w-[1360px] px-6 py-8">
      <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#0B0A14] to-[#08070F] px-9 pb-10 pt-9">
        <h2 className="mb-7 font-heading text-[19px] font-bold tracking-[2px] text-violet-bright">
          HOW WE CAN WORK TOGETHER
        </h2>
        <div className="grid items-stretch gap-5 xl:grid-cols-[minmax(0,1.15fr)_34px_minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.95fr)]">
          {/* Call card */}
          <div className="flex flex-col justify-center gap-4 rounded-2xl border border-white/[0.08] bg-[#0E0C18]/70 px-[26px] py-7">
            <div className="flex items-start gap-[18px]">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-mint-deep to-mint text-[#04120C]">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span className="flex flex-col gap-2.5">
                <span className="font-heading text-[22px] font-bold leading-[1.3] text-white">
                  Start with a free 15-minute call.
                </span>
                <span className="text-[14.5px] leading-[1.6] text-[#C9C7D6]">
                  We learn about your business and challenges so we can recommend the best next step.
                </span>
              </span>
            </div>
            <p className="pl-[74px] text-sm text-fog">No pressure. Just clarity.</p>
          </div>

          {/* Arrow */}
          <div className="hidden items-center justify-center text-violet-bright xl:flex">
            <StepArrow />
          </div>

          {/* Diagnostic */}
          <div className="flex flex-col gap-5 rounded-2xl border border-violet-bright/25 bg-[#141024]/55 px-6 py-[26px]">
            <div className="flex items-start gap-4">
              <span className="shrink-0 text-violet-bright">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </span>
              <span>
                <span className="block font-heading text-[21px] font-bold leading-[1.25] text-white">
                  Operations Diagnostic
                </span>
                <span className="mt-1 block font-heading text-[19px] font-semibold text-violet-bright">
                  $2,000
                </span>
              </span>
            </div>
            <OfferBullets items={diagnostic} />
          </div>

          {/* Sprint */}
          <div className="flex flex-col gap-5 rounded-2xl border border-violet-bright/25 bg-[#141024]/55 px-6 py-[26px]">
            <div className="flex items-start gap-4">
              <span className="shrink-0 text-violet-bright">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </span>
              <span>
                <span className="block font-heading text-[21px] font-bold leading-[1.25] text-white">
                  Systems Sprint
                </span>
                <span className="mt-1 block font-heading text-[19px] font-semibold text-violet-bright">
                  Starting at $5,000
                </span>
              </span>
            </div>
            <OfferBullets items={sprint} />
          </div>

          {/* Investment guide */}
          <div className="flex flex-col rounded-2xl border border-violet-bright/30 bg-[#141024]/75 px-6 py-[26px]">
            <p className="text-sm font-extrabold tracking-[1.5px] text-violet-bright">
              INVESTMENT GUIDE
            </p>
            <div className="flex flex-1 flex-col justify-evenly pt-3.5">
              <div className="flex items-baseline justify-between border-b border-white/[0.08] py-3">
                <span className="text-[13px] font-extrabold tracking-[1px] text-[#E7E6EF]">
                  DIAGNOSTIC
                </span>
                <span className="font-heading text-base font-semibold text-[#C084FC]">$2,000</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-white/[0.08] py-3">
                <span className="text-[13px] font-extrabold tracking-[1px] text-[#E7E6EF]">
                  SPRINT INVESTMENT
                </span>
                <span className="font-heading text-base font-semibold text-[#C084FC]">$3,000+</span>
              </div>
              <div className="flex items-baseline justify-between pb-1.5 pt-3.5">
                <span className="text-[13.5px] font-extrabold tracking-[1px] text-white">
                  TOTAL INVESTMENT
                </span>
                <span className="font-heading text-2xl font-bold text-violet-bright">$5,000+</span>
              </div>
              <p className="text-sm text-[#C084FC]">Clear scope. No surprises.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Divisions
   ──────────────────────────────────────────────────────────────── */

function DivisionIcon({ kind, size = 24 }: { kind: "studio" | "labs" | "legacy"; size?: number }) {
  const paths: Record<string, React.ReactNode> = {
    studio: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M22 12h-4M6 12H2M12 6V2M12 22v-4" />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
      </>
    ),
    labs: (
      <>
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
      </>
    ),
    legacy: <path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2 3 7h18l-9-5Z" />,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={size > 40 ? 1.2 : 2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {paths[kind]}
    </svg>
  );
}

const divisions: {
  name: string;
  href: string;
  icon: "studio" | "labs" | "legacy";
  accent: string;
  linkColor: string;
  border: string;
  bg: string;
  body: string;
}[] = [
  {
    name: "STUDIO",
    href: "/studio",
    icon: "studio",
    accent: "#C084FC",
    linkColor: "#C084FC",
    border: "rgba(168,85,247,0.35)",
    bg: "linear-gradient(135deg, rgba(52,26,88,0.55), rgba(20,12,36,0.7))",
    body: "Operational systems, websites, automation, and support plans built to help your business run and grow.",
  },
  {
    name: "LABS",
    href: "/labs",
    icon: "labs",
    accent: "#34E0A1",
    linkColor: "#34E0A1",
    border: "rgba(52,224,161,0.3)",
    bg: "linear-gradient(135deg, rgba(10,44,36,0.5), rgba(10,18,16,0.7))",
    body: "Where we experiment, prototype, and build the tools that power tomorrow.",
  },
  {
    name: "LEGACY",
    href: "/legacy",
    icon: "legacy",
    accent: "#D9A94A",
    linkColor: "#D9A94A",
    border: "rgba(217,169,74,0.35)",
    bg: "linear-gradient(135deg, rgba(58,44,14,0.45), rgba(24,18,8,0.7))",
    body: "Projects and resources that create lasting impact and leave a mark for future generations.",
  },
];

function DivisionCards() {
  return (
    <div className="grid gap-[22px] lg:grid-cols-3">
      {divisions.map((d) => (
        <div
          key={d.name}
          className="grid overflow-hidden rounded-2xl border sm:grid-cols-[1fr_44%]"
          style={{ borderColor: d.border, background: d.bg }}
        >
          <div className="flex flex-col gap-3.5 px-[22px] py-[26px]">
            <div className="flex items-center gap-3.5">
              <span
                className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl border"
                style={{ borderColor: d.border, color: d.accent }}
              >
                <DivisionIcon kind={d.icon} />
              </span>
              <h3 className="font-heading text-[22px] font-bold tracking-[1px] text-white">
                {d.name}
              </h3>
            </div>
            <p className="text-sm leading-[1.6] text-[#C9C7D6]">{d.body}</p>
            <Link
              href={d.href}
              className="mt-auto inline-flex items-center gap-2 font-heading text-[13.5px] font-bold tracking-[1.5px] transition hover:brightness-125"
              style={{ color: d.linkColor }}
            >
              EXPLORE {d.name} <span aria-hidden>→</span>
            </Link>
          </div>
          {/* Visual slot — swap for real imagery in public/divisions/ when ready */}
          <div
            className="relative hidden min-h-[120px] sm:block"
            style={{
              background: `radial-gradient(90% 90% at 60% 50%, ${d.accent}2E, transparent 75%)`,
            }}
            aria-hidden
          >
            <span
              className="absolute inset-0 flex items-center justify-center opacity-25"
              style={{ color: d.accent }}
            >
              <DivisionIcon kind={d.icon} size={72} />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   Final CTA + footer
   ──────────────────────────────────────────────────────────────── */

function FinalCta() {
  return (
    <div
      id="contact"
      className="grid items-center gap-6 rounded-2xl border border-violet-bright/25 px-8 py-8 md:grid-cols-[96px_1fr_auto] md:gap-9 md:px-11 md:py-[34px]"
      style={{
        background:
          "linear-gradient(90deg, rgba(35,20,66,0.6), rgba(15,12,28,0.8) 55%, rgba(35,20,66,0.4))",
      }}
    >
      <span className="flex h-[88px] w-[88px] items-center justify-center rounded-[20px] bg-gradient-to-br from-violet to-violet-bright font-heading text-[52px] font-bold text-white">
        B
      </span>
      <div className="flex flex-col gap-2">
        <h2 className="font-heading text-[30px] font-bold text-white">
          Let&apos;s build systems that scale.
        </h2>
        <p className="max-w-[560px] text-base leading-[1.55] text-[#C9C7D6]">
          Book a free 15-minute call and see if we&apos;re the right partner to bring clarity,
          automation, and leverage back to your business.
        </p>
      </div>
      <div className="flex flex-col items-center gap-3.5">
        <CallButton label="BOOK A FREE 15-MINUTE CALL" />
        <Link
          href={intakeUrl}
          className="inline-flex items-center gap-2 text-[15px] font-bold text-mint transition hover:text-[#7EF0C4]"
        >
          Or take our 5-minute intake <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

function SocialIcon({ kind }: { kind: "linkedin" | "mail" | "instagram" | "youtube" }) {
  const paths: Record<string, React.ReactNode> = {
    linkedin: (
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    ),
    mail: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
    instagram: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </>
    ),
    youtube: (
      <>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </>
    ),
  };
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {paths[kind]}
    </svg>
  );
}

const footerSocials: { kind: "linkedin" | "mail" | "instagram" | "youtube"; href: string; label: string }[] = [
  { kind: "linkedin", href: "https://linkedin.com/in/benbasuni", label: "LinkedIn" },
  { kind: "mail", href: "mailto:benbasuni1@gmail.com", label: "Email" },
  { kind: "instagram", href: "#", label: "Instagram" },
  { kind: "youtube", href: "#", label: "YouTube" },
];

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-2.5">
      <p className="text-[13px] font-extrabold tracking-[1.5px] text-violet-bright">{title}</p>
      {links.map((l) => (
        <Link key={l.label} href={l.href} className="text-[14.5px] text-[#C9C7D6] transition hover:text-white">
          {l.label}
        </Link>
      ))}
    </div>
  );
}

function HomeFooter() {
  return (
    <footer id="footer" className="flex flex-col gap-7">
      <div className="grid items-start gap-7 border-t border-white/[0.08] pt-7 md:grid-cols-[1.2fr_1fr_1fr_1fr_1.2fr]">
        <Link href="/" className="flex items-center gap-3">
          <LogoMark size={38} />
          <span className="font-heading text-[19px] font-bold tracking-[0.5px] text-white">
            BINARY <span className="text-violet-bright">1702</span>
          </span>
        </Link>
        <FooterCol
          title="COMPANY"
          links={[
            { label: "About", href: "#footer" },
            { label: "Contact", href: "#contact" },
          ]}
        />
        <FooterCol
          title="DIVISIONS"
          links={divisions.map((d) => ({
            label: d.name.charAt(0) + d.name.slice(1).toLowerCase(),
            href: d.href,
          }))}
        />
        <FooterCol
          title="RESOURCES"
          links={[
            { label: "Case Studies", href: "#case-study" },
            { label: "How It Works", href: "#how-we-work" },
          ]}
        />
        <div className="flex flex-col gap-3.5">
          <p className="text-sm leading-[1.6] text-[#C9C7D6]">
            We build systems that help founder-led businesses run smarter, scale faster, and reclaim
            their time.
          </p>
          <div className="flex gap-3.5">
            {footerSocials.map((s) => (
              <a
                key={s.kind}
                href={s.href}
                aria-label={s.label}
                className="inline-flex text-[#B7B5C4] transition hover:text-white"
                {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <SocialIcon kind={s.kind} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center text-[13px] text-[#8B899A]">
        © {new Date().getFullYear()} Binary 1702. All rights reserved.
      </p>
    </footer>
  );
}

/* ────────────────────────────────────────────────────────────────
   Page
   ──────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <div className="min-h-screen bg-midnight text-frost">
      <HomeNav />
      <main>
        <Hero />
        <PainPoints />
        <HowWeWork />
        <WorkTogether />
        <section className="mx-auto max-w-[1360px] px-6 pb-4 pt-8">
          <div className="flex flex-col gap-8 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#0B0A14] to-[#08070F] px-9 pb-9 pt-9">
            <DivisionCards />
            <FinalCta />
          </div>
        </section>
      </main>
      <div className="mx-auto max-w-[1360px] px-6 pb-10">
        <HomeFooter />
      </div>
    </div>
  );
}
