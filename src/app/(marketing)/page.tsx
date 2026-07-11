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

function Check({ className = "text-mint" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={`h-4 w-4 shrink-0 ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="8" cy="8" r="7" strokeWidth="1.2" opacity="0.5" />
      <path d="M5 8.2l2 2 4-4.4" />
    </svg>
  );
}

function Cross() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <circle cx="8" cy="8" r="7" strokeWidth="1.2" opacity="0.5" />
      <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" />
    </svg>
  );
}

function Eyebrow({ children, className = "text-lavender" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`font-display-mono text-xs font-semibold tracking-[0.2em] uppercase ${className}`}>
      {children}
    </p>
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

const pains = [
  "Your systems only work because you manually connect them.",
  "Important client information lives across multiple tools.",
  "Your team asks you questions the system should answer.",
  "Fixing one workflow seems to break another.",
  "Nobody has a complete map of how your business operates.",
];

function PainPoints() {
  return (
    <section className="border-y border-line bg-charcoal/40">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-center font-display-mono text-sm font-semibold tracking-[0.25em] text-frost">
          DOES THIS SOUND FAMILIAR?
        </h2>
        <ul className="mt-10 grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-5">
          {pains.map((p) => (
            <li key={p} className="mx-auto max-w-[220px] text-sm leading-relaxed text-fog">
              <span className="mb-3 block text-2xl text-violet" aria-hidden>
                ◈
              </span>
              {p}
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

const steps = [
  { n: 1, title: "MAP", body: "We document your tools, workflows, handoffs, dependencies, and bottlenecks." },
  { n: 2, title: "FIX", body: "We repair the immediate failures affecting your customers and your team." },
  { n: 3, title: "BUILD", body: "We implement the highest-value workflows and hand the completed system back to you." },
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

const impact = [
  { big: "10+", small: "hrs/week reclaimed" },
  { big: "90%", small: "reduction in manual work" },
  { big: "2 Days → 2 Hrs", small: "audit prep time" },
  { big: "100%", small: "access issues eliminated" },
];

function HowWeWork() {
  return (
    <section id="how-we-work" className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Eyebrow>How we work</Eyebrow>
          <ol className="mt-8 space-y-8">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet text-sm font-bold text-frost">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-bold tracking-wide text-frost">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-fog">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div id="case-study" className="grid gap-4 md:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-line bg-charcoal/60 p-6">
            <Eyebrow>Featured case study</Eyebrow>
            <h3 className="mt-2 text-xl font-extrabold text-frost">
              25-Year Service Business
              <span className="block text-base font-bold text-fog">13 Systems. One Founder Bottleneck.</span>
            </h3>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="font-display-mono text-[10px] font-semibold tracking-[0.2em] text-red-400">BEFORE</p>
                <ul className="mt-2 space-y-2">
                  {caseBefore.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-fog">
                      <Cross /> {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-display-mono text-[10px] font-semibold tracking-[0.2em] text-mint">AFTER</p>
                <ul className="mt-2 space-y-2">
                  {caseAfter.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-xs text-fog">
                      <Check /> {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <blockquote className="mt-6 border-l-2 border-violet pl-4 text-sm italic leading-relaxed text-lavender">
              &ldquo;Binary 1702 identified problems we had been living with for years and gave us a clear
              system for fixing them. The impact was immediate.&rdquo;
              <footer className="mt-1 not-italic text-fog">— Mike, Business Owner</footer>
            </blockquote>
          </div>
          <div className="rounded-2xl border border-line bg-charcoal/60 p-6">
            <p className="font-display-mono text-[10px] font-semibold tracking-[0.2em] text-frost">
              MEASURED IMPACT <span className="text-fog">(90 DAYS)</span>
            </p>
            <ul className="mt-4 space-y-5">
              {impact.map((m) => (
                <li key={m.small}>
                  <p className="text-xl font-extrabold text-frost">{m.big}</p>
                  <p className="text-xs text-fog">{m.small}</p>
                </li>
              ))}
            </ul>
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

function WorkTogether() {
  return (
    <section className="border-y border-line bg-charcoal/40">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <Eyebrow>How we can work together</Eyebrow>
        <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="flex flex-col justify-center rounded-2xl border border-mint/40 bg-midnight p-6">
            <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-mint/15 text-xl text-mint" aria-hidden>
              ✆
            </span>
            <h3 className="text-lg font-extrabold text-frost">Start with a free 15-minute call.</h3>
            <p className="mt-2 text-sm leading-relaxed text-fog">
              We learn about your business and challenges so we can recommend the best next step.
            </p>
            <p className="mt-4 text-xs font-semibold text-mint">No pressure. Just clarity.</p>
          </div>

          <div className="rounded-2xl border border-line bg-midnight p-6">
            <h3 className="font-bold text-frost">Operations Diagnostic</h3>
            <p className="mt-1 text-2xl font-extrabold text-lavender">$2,000</p>
            <ul className="mt-4 space-y-2">
              {diagnostic.map((d) => (
                <li key={d} className="flex items-start gap-2 text-xs text-fog">
                  <Check className="text-violet" /> {d}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-midnight p-6">
            <h3 className="font-bold text-frost">Systems Sprint</h3>
            <p className="mt-1 text-2xl font-extrabold text-lavender">
              <span className="text-sm font-semibold text-fog">Starting at</span> $5,000
            </p>
            <ul className="mt-4 space-y-2">
              {sprint.map((s) => (
                <li key={s} className="flex items-start gap-2 text-xs text-fog">
                  <Check className="text-violet" /> {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-violet/40 bg-midnight p-6">
            <p className="font-display-mono text-[10px] font-semibold tracking-[0.2em] text-lavender">
              INVESTMENT GUIDE
            </p>
            <dl className="mt-4 space-y-4 text-sm">
              <div className="flex items-baseline justify-between gap-2">
                <dt className="text-fog">Diagnostic</dt>
                <dd className="font-bold text-frost">$2,000</dd>
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <dt className="text-fog">Sprint investment</dt>
                <dd className="font-bold text-frost">$3,000+</dd>
              </div>
              <div className="flex items-baseline justify-between gap-2 border-t border-line pt-4">
                <dt className="font-semibold text-frost">Total investment</dt>
                <dd className="text-xl font-extrabold text-lavender">$5,000+</dd>
              </div>
            </dl>
            <p className="mt-4 text-xs text-mint">Clear scope. No surprises.</p>
            <p className="mt-1 text-xs text-fog">Diagnostic is credited toward your sprint.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Divisions
   ──────────────────────────────────────────────────────────────── */

const divisions = [
  {
    name: "STUDIO",
    href: "/studio",
    accent: "#7C3AED",
    body: "Operational systems, websites, automation, and support plans built to help your business run and grow.",
  },
  {
    name: "LABS",
    href: "/labs",
    accent: "#2DD4BF",
    body: "Where we experiment, prototype, and build the tools that power tomorrow.",
  },
  {
    name: "LEGACY",
    href: "/legacy",
    accent: "#C8A24D",
    body: "Projects and resources that create lasting impact and leave a mark for future generations.",
  },
];

function Divisions() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid gap-4 md:grid-cols-3">
        {divisions.map((d) => (
          <Link
            key={d.name}
            href={d.href}
            className="group rounded-2xl border border-line bg-charcoal/60 p-6 transition hover:-translate-y-0.5"
            style={{ boxShadow: `inset 0 1px 0 ${d.accent}22` }}
          >
            <h3 className="text-lg font-extrabold tracking-wide" style={{ color: d.accent }}>
              {d.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-fog">{d.body}</p>
            <p className="mt-5 text-xs font-bold tracking-wide transition group-hover:translate-x-1" style={{ color: d.accent }}>
              EXPLORE {d.name} →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Final CTA + footer
   ──────────────────────────────────────────────────────────────── */

function FinalCta() {
  return (
    <section id="contact" className="border-y border-line bg-gradient-to-r from-royal/30 via-charcoal to-charcoal">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-14 text-center md:flex-row md:text-left">
        <LogoMark size={64} />
        <div className="flex-1">
          <h2 className="text-2xl font-extrabold text-frost md:text-3xl">Let&apos;s build systems that scale.</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-fog">
            Book a free 15-minute call and see if we&apos;re the right partner to bring clarity,
            automation, and leverage back to your business.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <CallButton label="BOOK A FREE 15-MINUTE CALL" />
          <Link href={intakeUrl} className="text-xs font-semibold text-mint hover:underline">
            Or take our 5-minute intake →
          </Link>
        </div>
      </div>
    </section>
  );
}

function HomeFooter() {
  return (
    <footer id="footer" className="mx-auto max-w-6xl px-5 py-12">
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <LogoMark size={28} />
            <span className="font-extrabold tracking-wide text-frost">
              BINARY <span className="text-violet">1702</span>
            </span>
          </Link>
        </div>
        <div>
          <p className="font-display-mono text-[10px] font-semibold tracking-[0.2em] text-lavender">COMPANY</p>
          <ul className="mt-3 space-y-2 text-sm text-fog">
            <li><a href="#footer" className="hover:text-frost">About</a></li>
            <li><a href="#contact" className="hover:text-frost">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="font-display-mono text-[10px] font-semibold tracking-[0.2em] text-lavender">DIVISIONS</p>
          <ul className="mt-3 space-y-2 text-sm text-fog">
            {divisions.map((d) => (
              <li key={d.name}>
                <Link href={d.href} className="hover:text-frost">
                  {d.name.charAt(0) + d.name.slice(1).toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display-mono text-[10px] font-semibold tracking-[0.2em] text-lavender">RESOURCES</p>
          <ul className="mt-3 space-y-2 text-sm text-fog">
            <li><a href="#case-study" className="hover:text-frost">Case Studies</a></li>
            <li><a href="#how-we-work" className="hover:text-frost">How It Works</a></li>
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-fog">
            We build systems that help founder-led businesses run smarter, scale faster, and reclaim
            their time.
          </p>
        </div>
      </div>
      <p className="mt-10 border-t border-line pt-6 text-center text-xs text-fog">
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
        <Divisions />
        <FinalCta />
      </main>
      <HomeFooter />
    </div>
  );
}
