import type { Metadata } from "next";
import Link from "next/link";
import { bookingUrl } from "@/config/site";
import { SiteNav } from "@/components/marketing/SiteNav";
import { SiteFooter } from "@/components/marketing/SiteFooter";

export const metadata: Metadata = {
  title: "About Binary 1702 — Built with Curiosity. Driven by Impact.",
  description:
    "Binary 1702 helps businesses turn disconnected tools, manual work, and complicated ideas into systems that feel clear, useful, and built to last.",
};

/**
 * Photo slots: drop Ben's images into public/about/ with these names and
 * they appear automatically (the gradient placeholder shows until then):
 *   - founder-desk.jpg      (hero, ~620×480)
 *   - founder-portrait.jpg  (builder card, ~260×340)
 *   - workspace.jpg         (difference section, ~420×300)
 */
function PhotoSlot({
  src,
  label,
  className = "",
  overlay,
}: {
  src: string;
  label: string;
  className?: string;
  overlay?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#100D1C",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            overlay ??
            "radial-gradient(60% 60% at 50% 50%, rgba(124,58,237,0.15), transparent 75%)",
        }}
        aria-hidden
      />
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   Hero
   ──────────────────────────────────────────────────────────────── */

const heroStats = [
  { glyph: "↗", value: "50+", line1: "PROJECTS", line2: "DELIVERED", color: "#C084FC", ring: "rgba(168,85,247,0.5)" },
  { glyph: "⚡︎", value: "10,000+", line1: "HOURS OF MANUAL", line2: "WORK REMOVED", color: "#34E0A1", ring: "rgba(52,224,161,0.5)" },
  { glyph: "◎", value: "REAL", line1: "BUSINESS IMPACT.", line2: "NOT JUST FEATURES.", color: "#C084FC", ring: "rgba(168,85,247,0.5)" },
];

function AboutHero() {
  return (
    <section className="mx-auto max-w-[1360px] px-6 pt-10">
      <div className="grid items-stretch overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#0B0A14] to-[#08070F] lg:grid-cols-[1fr_620px]">
        <div className="flex flex-col justify-center gap-6 py-14 pl-8 pr-6 lg:pl-14">
          <p className="text-[13px] font-extrabold tracking-[2.5px] text-violet-bright">
            ABOUT BINARY 1702
          </p>
          <h1 className="font-heading text-4xl font-bold leading-[1.18] tracking-[0.5px] md:text-[46px]">
            <span className="text-[#E7E6EF]">BUILT WITH CURIOSITY.</span>
            <br />
            <span className="text-[#E7E6EF]">DRIVEN BY </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg,#C084FC,#7C3AED)" }}
            >
              IMPACT.
            </span>
          </h1>
          <div className="h-0.5 w-11 bg-violet" aria-hidden />
          <p className="max-w-[420px] text-[16.5px] leading-[1.7] text-[#C9C7D6]">
            Binary 1702 helps businesses turn disconnected tools, manual work, and complicated
            ideas into systems that feel clear, useful, and built to last.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-9">
            {heroStats.map((s) => (
              <div key={s.value} className="flex items-center gap-3.5">
                <span
                  className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-full border font-heading text-lg font-bold"
                  style={{ borderColor: s.ring, color: s.color }}
                >
                  {s.glyph}
                </span>
                <span>
                  <span className="block font-heading text-[19px] font-bold" style={{ color: s.color }}>
                    {s.value}
                  </span>
                  <span className="block text-[11px] font-bold leading-[1.5] tracking-[1px] text-fog">
                    {s.line1}
                    <br />
                    {s.line2}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
        <PhotoSlot
          src="/about/founder-desk.jpg"
          label="Ben working at his desk"
          className="min-h-[280px] lg:min-h-[480px]"
          overlay="linear-gradient(90deg, #0B0A14 0%, rgba(11,10,20,0.4) 30%, transparent 60%)"
        />
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Story: why we exist + the builder
   ──────────────────────────────────────────────────────────────── */

function AboutStory() {
  return (
    <section className="mx-auto max-w-[1360px] px-6 pt-6">
      <div className="grid gap-14 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#0B0A14] to-[#08070F] px-8 py-12 lg:grid-cols-2 lg:px-14">
        {/* Why we exist */}
        <div className="flex flex-col gap-5">
          <h2 className="font-heading text-2xl font-bold tracking-[1px]">
            <span className="text-[#E7E6EF]">WHY BINARY 1702 </span>
            <span className="text-[#C084FC]">EXISTS</span>
          </h2>
          <p className="text-[14.5px] leading-[1.75] text-[#B7B5C4]">
            Binary 1702 started with a simple belief: technology should make life and business
            easier, not create more confusion.
          </p>
          <p className="text-[14.5px] leading-[1.75] text-[#B7B5C4]">
            Too many businesses grow by adding more tools, more workarounds, and more things only
            the owner understands.
          </p>
          <p className="text-[14.5px] leading-[1.75] text-[#B7B5C4]">
            We help simplify that. We look at how everything connects, find what is slowing the
            business down, and build a better way forward.
          </p>
          {/* Isometric stack */}
          <div className="relative flex min-h-[220px] flex-1 items-center justify-center" aria-hidden>
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(300px 180px at 50% 60%, rgba(124,58,237,0.18), transparent 70%)" }}
            />
            <div className="stack-float flex flex-col items-center">
              <div
                className="-mb-[84px] h-[120px] w-[120px] border border-[#D8B4FE]/90 shadow-[0_0_40px_rgba(168,85,247,0.5)]"
                style={{ transform: "rotateX(60deg) rotateZ(45deg)", background: "linear-gradient(135deg, rgba(192,132,252,0.85), rgba(124,58,237,0.5))" }}
              />
              <div
                className="-mb-[100px] h-[140px] w-[140px] border border-[#C084FC]/70"
                style={{ transform: "rotateX(60deg) rotateZ(45deg)", background: "linear-gradient(135deg, rgba(168,85,247,0.55), rgba(76,29,149,0.4))" }}
              />
              <div
                className="h-[160px] w-[160px] border border-violet-bright/50"
                style={{ transform: "rotateX(60deg) rotateZ(45deg)", background: "linear-gradient(135deg, rgba(124,58,237,0.35), rgba(30,20,60,0.5))" }}
              />
            </div>
          </div>
        </div>

        {/* The builder */}
        <div className="grid items-start gap-6 sm:grid-cols-[1fr_260px]">
          <div className="flex h-full flex-col gap-[18px]">
            <h2 className="font-heading text-2xl font-bold tracking-[1px]">
              <span className="text-[#E7E6EF]">THE </span>
              <span className="text-[#C084FC]">BUILDER</span>
              <span className="text-[#E7E6EF]"> BEHIND IT</span>
            </h2>
            <p className="text-[14.5px] leading-[1.75] text-[#B7B5C4]">
              Ben is a software engineer and systems architect with more than 10 years of
              experience building automation, infrastructure, backend systems, digital products,
              and practical business tools.
            </p>
            <p className="text-[14.5px] leading-[1.75] text-[#B7B5C4]">
              His strength is seeing the whole picture—how the tools, people, workflows, and
              customer experience connect—and turning that into something clear, reliable, and
              scalable.
            </p>
            <div className="mt-auto pt-3">
              <p className="text-[38px] leading-none text-[#E7E6EF]" style={{ fontFamily: "var(--font-script)" }}>
                Ben Basuni
              </p>
              <p className="mt-2.5 text-xs font-extrabold tracking-[1.8px] text-[#C084FC]">
                FOUNDER &amp; SYSTEMS ARCHITECT
              </p>
            </div>
          </div>
          <PhotoSlot
            src="/about/founder-portrait.jpg"
            label="Portrait of Ben Basuni"
            className="h-[340px] rounded-[14px] border border-violet-bright/30"
          />
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Principles
   ──────────────────────────────────────────────────────────────── */

const purple = { accent: "#C084FC", ring: "rgba(168,85,247,0.5)", iconBg: "rgba(124,58,237,0.08)" };
const green = { accent: "#34E0A1", ring: "rgba(52,224,161,0.5)", iconBg: "rgba(52,224,161,0.06)" };

const principles = [
  { glyph: "⌕", title: "CLARITY BEFORE COMPLEXITY", body: "We understand the real problem before deciding what to build.", ...purple },
  { glyph: "⁂", title: "PEOPLE BEFORE TOOLS", body: "A system only works when the people using it can understand and trust it.", ...green },
  { glyph: "⚙", title: "BUILD WITH PURPOSE", body: "Every feature should solve something real and meaningful.", ...purple },
  { glyph: "✓", title: "CREATE FOR LONGEVITY", body: "Clients should own what is built and be able to grow with it.", ...green },
];

function AboutPrinciples() {
  return (
    <section className="mx-auto max-w-[1360px] px-6 pt-8">
      <h2 className="px-1 font-heading text-2xl font-bold tracking-[1px]">
        <span className="text-[#E7E6EF]">HOW BINARY 1702 </span>
        <span className="text-[#C084FC]">THINKS</span>
      </h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {principles.map((c) => (
          <div
            key={c.title}
            className="flex flex-col gap-4 rounded-[14px] border border-white/[0.08] px-6 py-[26px] transition hover:border-violet-bright/60"
            style={{ background: "linear-gradient(180deg, rgba(20,16,36,0.5), rgba(10,9,18,0.8))" }}
          >
            <span
              className="flex h-14 w-14 items-center justify-center rounded-full border font-heading text-[22px] font-bold"
              style={{ borderColor: c.ring, background: c.iconBg, color: c.accent }}
              aria-hidden
            >
              {c.glyph}
            </span>
            <h3 className="font-heading text-[16.5px] font-bold leading-[1.45] tracking-[0.8px] text-[#E7E6EF]">
              {c.title}
            </h3>
            <p className="text-[13.5px] leading-[1.65] text-fog">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Divisions
   ──────────────────────────────────────────────────────────────── */

const aboutDivisions = [
  {
    name: "STUDIO",
    href: "/studio",
    glyph: "B",
    cta: "EXPLORE STUDIO",
    body: "Where client systems, websites, automation, and support are built.",
    accent: "#C084FC",
    border: "rgba(168,85,247,0.35)",
    glow: "rgba(124,58,237,0.18)",
  },
  {
    name: "LABS",
    href: "/labs",
    glyph: "⚗︎",
    cta: "EXPLORE LABS",
    body: "Where ideas are tested, prototypes are created, and new digital products are explored.",
    accent: "#34E0A1",
    border: "rgba(52,224,161,0.3)",
    glow: "rgba(52,224,161,0.12)",
  },
  {
    name: "LEGACY",
    href: "/legacy",
    glyph: "♕",
    cta: "EXPLORE LEGACY",
    body: "Where meaningful projects, stories, and resources are built to leave a lasting impact.",
    accent: "#F5B840",
    border: "rgba(245,184,64,0.3)",
    glow: "rgba(245,184,64,0.12)",
  },
];

function AboutDivisions() {
  return (
    <section className="mx-auto max-w-[1360px] px-6 pt-8">
      <div className="flex flex-col gap-6 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#0B0A14] to-[#08070F] px-8 py-11 lg:px-12">
        <h2 className="font-heading text-2xl font-bold tracking-[1px]">
          <span className="text-[#E7E6EF]">THREE DIVISIONS. </span>
          <span className="text-[#C084FC]">ONE MISSION.</span>
        </h2>
        <div className="grid gap-[22px] lg:grid-cols-3">
          {aboutDivisions.map((d) => (
            <div
              key={d.name}
              className="relative flex min-h-[230px] flex-col gap-3.5 overflow-hidden rounded-2xl border px-6 py-7"
              style={{
                borderColor: d.border,
                background: `radial-gradient(400px 200px at 80% 100%, ${d.glow}, transparent 70%), linear-gradient(180deg, rgba(14,12,24,0.8), rgba(8,7,15,0.95))`,
              }}
            >
              <div className="flex items-center gap-3.5">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl border bg-[#0A0912]/70 font-heading text-[22px] font-bold"
                  style={{ borderColor: d.border, color: d.accent }}
                  aria-hidden
                >
                  {d.glyph}
                </span>
                <h3 className="font-heading text-[22px] font-bold tracking-[1.5px]" style={{ color: d.accent }}>
                  {d.name}
                </h3>
              </div>
              <p className="max-w-[280px] text-sm leading-[1.7] text-[#B7B5C4]">{d.body}</p>
              <Link
                href={d.href}
                className="mt-auto inline-flex items-center gap-2.5 text-[12.5px] font-extrabold tracking-[1.5px] transition hover:brightness-125"
                style={{ color: d.accent }}
              >
                {d.cta} <span aria-hidden className="text-[15px]">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Difference
   ──────────────────────────────────────────────────────────────── */

function AboutDifference() {
  return (
    <section className="mx-auto max-w-[1360px] px-6 pt-8">
      <div className="grid items-center gap-11 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#0B0A14] to-[#08070F] px-8 py-11 lg:grid-cols-[1fr_420px] lg:px-12">
        <div className="flex flex-col gap-[26px]">
          <h2 className="font-heading text-2xl font-bold tracking-[1px]">
            <span className="text-[#E7E6EF]">WHAT SETS BINARY 1702 </span>
            <span className="text-[#C084FC]">APART</span>
          </h2>
          <div className="grid gap-7 md:grid-cols-2">
            <div className="flex items-start gap-4">
              <span className="flex h-[52px] w-[52px] flex-none items-center justify-center rounded-full border border-violet-bright/50 bg-violet/[0.08] font-heading text-[15px] font-bold text-[#C084FC]">
                &lt;/&gt;
              </span>
              <p className="pt-1 text-sm leading-[1.7] text-[#C9C7D6]">
                We don&apos;t begin with software. We begin with the problem.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-[52px] w-[52px] flex-none items-center justify-center rounded-full border border-mint/50 bg-mint/[0.06] font-heading text-xl font-bold text-mint">
                ⚙
              </span>
              <p className="pt-1 text-sm leading-[1.7] text-[#C9C7D6]">
                We don&apos;t add more tools just to make the system look impressive. We build what
                is useful, connect what already works, and remove what creates unnecessary
                friction.
              </p>
            </div>
          </div>
          <div className="flex max-w-[520px] items-start gap-4">
            <span className="flex h-[52px] w-[52px] flex-none items-center justify-center rounded-full border border-violet-bright/50 bg-violet/[0.08]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="1.8" aria-hidden>
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="12" cy="12" r="1.5" fill="#C084FC" />
              </svg>
            </span>
            <p className="pt-1 text-sm leading-[1.7] text-[#C9C7D6]">
              Real business impact. Not just features.
            </p>
          </div>
        </div>
        <PhotoSlot
          src="/about/workspace.jpg"
          label="Binary 1702 workspace with monitors"
          className="h-[300px] rounded-[14px] border border-violet-bright/25"
        />
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Journey
   ──────────────────────────────────────────────────────────────── */

const milestones = [
  { year: "2014", text: "Started the journey as a developer solving real business problems." },
  { year: "2016", text: "Began building systems and automation for growing businesses." },
  { year: "2019", text: "Expanded into full system architecture, integrations, and digital platforms." },
  { year: "2022", text: "Launched Binary 1702 to help more businesses build smarter, scalable systems." },
  { year: "2024+", text: "Continuing to build, innovate, and create systems that make a difference." },
];

function AboutJourney() {
  return (
    <section className="mx-auto max-w-[1360px] px-6 pt-10">
      <h2 className="font-heading text-2xl font-bold tracking-[1px]">
        <span className="text-[#E7E6EF]">OUR JOURNEY </span>
        <span className="text-[#C084FC]">SO FAR</span>
      </h2>
      <div className="relative mt-7 grid gap-y-8 sm:grid-cols-2 xl:grid-cols-5 xl:gap-y-0">
        <div
          className="absolute left-3 right-3 top-[31px] hidden h-[1.5px] xl:block"
          style={{ background: "linear-gradient(90deg, #7C3AED, rgba(124,58,237,0.25))" }}
          aria-hidden
        />
        {milestones.map((m) => (
          <div key={m.year} className="relative flex flex-col gap-3.5 pr-8">
            <p className="font-heading text-[15px] font-bold text-[#C084FC]">{m.year}</p>
            <span
              className="relative z-[1] h-[11px] w-[11px] rounded-full border-2 border-violet-bright bg-[#0B0A14] shadow-[0_0_12px_rgba(168,85,247,0.6)]"
              aria-hidden
            />
            <p className="max-w-[200px] text-[13.5px] leading-[1.65] text-fog">{m.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   CTA
   ──────────────────────────────────────────────────────────────── */

function AboutCta() {
  return (
    <section id="contact" className="mx-auto max-w-[1360px] px-6 py-10">
      <div
        className="grid items-center gap-9 rounded-[20px] border border-violet-bright/35 px-8 py-10 lg:grid-cols-[110px_1fr_1fr] lg:px-12"
        style={{
          background:
            "radial-gradient(600px 260px at 12% 50%, rgba(124,58,237,0.18), transparent 70%), linear-gradient(180deg, rgba(20,16,36,0.6), rgba(10,9,18,0.9))",
        }}
      >
        <div className="bubble-pulse hidden h-[110px] w-[110px] items-center justify-center rounded-full border-[1.5px] border-violet-bright/60 bg-violet/[0.08] lg:flex" aria-hidden>
          <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.3 8.9 8.9 0 0 1-3.8-.8L3 20l1.1-4.2A8 8 0 0 1 3.5 11.5 8.38 8.38 0 0 1 12 3.2a8.38 8.38 0 0 1 9 8.3z" />
            <path d="M8 10h8" />
            <path d="M8 13.5h5" />
          </svg>
        </div>
        <h2 className="font-heading text-[27px] font-bold leading-[1.4] tracking-[0.8px]">
          <span className="text-[#E7E6EF]">
            LET&apos;S BUILD SOMETHING
            <br />
            THAT MAKES THE BUSINESS
            <br />
          </span>
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg,#C084FC,#7C3AED)" }}
          >
            EASIER TO RUN.
          </span>
        </h2>
        <div className="flex flex-col gap-[18px]">
          <p className="max-w-[420px] text-[15px] leading-[1.7] text-[#C9C7D6]">
            Start with a relaxed 15-minute conversation about what&apos;s working, what&apos;s not,
            and what could be better.
          </p>
          <div>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-10 rounded-[10px] border border-violet-bright/70 bg-violet/[0.12] px-6 py-3.5 text-[13px] font-extrabold tracking-[1.2px] text-[#E7E6EF] transition hover:bg-violet/25 hover:text-white"
            >
              <span className="inline-flex items-center gap-3">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M8 3v4M16 3v4M3 10h18" />
                </svg>
                BOOK A FREE 15-MINUTE CALL
              </span>
              <span aria-hidden className="text-base text-[#C084FC]">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Page
   ──────────────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-midnight text-frost">
      <SiteNav active="/about" />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutPrinciples />
        <AboutDivisions />
        <AboutDifference />
        <AboutJourney />
        <AboutCta />
      </main>
      <SiteFooter />
    </div>
  );
}
