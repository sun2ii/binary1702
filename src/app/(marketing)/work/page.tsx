import type { Metadata } from "next";
import { bookingUrl } from "@/config/site";
import { SiteNav } from "@/components/marketing/SiteNav";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { ProjectsGrid } from "./ProjectsGrid";

export const metadata: Metadata = {
  title: "Binary 1702 — Real Work. Real Business Results.",
  description:
    "We build systems, websites, and automations that solve real problems, remove manual work, and create measurable impact.",
};

/* ────────────────────────────────────────────────────────────────
   Hero
   ──────────────────────────────────────────────────────────────── */

const leftChips = [
  { glyph: "⚡", label: "AUTOMATE" },
  { glyph: "⚙", label: "OPTIMIZE" },
  { glyph: "⧉", label: "INTEGRATE" },
];

const rightChips = [
  { glyph: "✎", label: "DESIGN" },
  { glyph: "</>", label: "BUILD" },
  { glyph: "↗", label: "SCALE" },
];

function Chip({ glyph, label }: { glyph: string; label: string }) {
  return (
    <div className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-violet-bright/50 bg-[#0F0C1C]/85 px-5 py-3 text-[12.5px] font-extrabold tracking-[1.5px] text-[#E7E6EF] shadow-[0_0_18px_rgba(124,58,237,0.25)]">
      <span className="font-heading text-sm text-violet-bright">{glyph}</span>
      {label}
    </div>
  );
}

function WorkHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(1100px 560px at 72% 0%, rgba(124,58,237,0.22), transparent 62%)" }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-[1360px] items-center gap-12 px-6 pb-10 pt-14 lg:grid-cols-[480px_1fr]">
        <div className="flex flex-col gap-[22px]">
          <p className="flex items-center gap-2.5 text-sm font-extrabold tracking-[2.5px]">
            <span className="text-violet-bright">OUR WORK</span>
            <span className="text-violet">///</span>
          </p>
          <h1 className="font-heading text-4xl font-bold leading-[1.12] tracking-[1px] md:text-[58px]">
            <span className="text-[#E7E6EF]">REAL WORK.</span>
            <br />
            <span className="text-[#B7B5C4]">REAL BUSINESS</span>
            <br />
            <span
              className="bg-gradient-to-br from-violet-bright to-violet bg-clip-text text-transparent"
            >
              RESULTS.
            </span>
          </h1>
          <p className="max-w-[400px] text-[17px] leading-[1.65] text-[#C9C7D6]">
            We build systems, websites, and automations that solve real problems, remove manual
            work, and create measurable impact.
          </p>
          <div>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3.5 rounded-xl border border-violet-bright/60 bg-violet/10 px-[26px] py-4 text-sm font-extrabold tracking-[1px] text-[#E7E6EF] shadow-[0_0_24px_rgba(124,58,237,0.2)] transition hover:bg-violet/[0.22] hover:text-white"
            >
              BOOK A FREE 15-MINUTE CALL <span aria-hidden className="text-base">→</span>
            </a>
          </div>
        </div>

        {/* B centerpiece + capability chips */}
        <div className="relative hidden min-h-[480px] items-center justify-center md:flex">
          <div
            className="glow-pulse absolute inset-0"
            style={{ background: "radial-gradient(420px 300px at 55% 45%, rgba(124,58,237,0.28), transparent 70%)" }}
            aria-hidden
          />
          <div className="absolute left-0 top-1/2 z-[2] hidden -translate-y-1/2 flex-col gap-[34px] lg:flex">
            {leftChips.map((c) => (
              <Chip key={c.label} {...c} />
            ))}
          </div>
          <div className="relative z-[1] flex flex-col items-center">
            <span
              className="float-b bg-clip-text font-heading text-[230px] font-bold leading-none text-transparent"
              style={{
                backgroundImage: "linear-gradient(160deg,#C084FC 0%,#7C3AED 55%,#4C1D95 100%)",
                filter: "drop-shadow(0 0 40px rgba(124,58,237,0.55))",
              }}
              aria-hidden
            >
              B
            </span>
            <div className="mt-1.5 flex flex-col items-center gap-[5px]" aria-hidden>
              <div className="h-[22px] w-[200px] rounded-full border border-[#C084FC]/60 shadow-[0_0_30px_rgba(124,58,237,0.5)]" style={{ background: "linear-gradient(180deg,rgba(168,85,247,0.55),rgba(76,29,149,0.35))" }} />
              <div className="h-6 w-[260px] rounded-full border border-violet-bright/40" style={{ background: "linear-gradient(180deg,rgba(124,58,237,0.35),rgba(20,16,36,0.6))" }} />
              <div className="h-[26px] w-[330px] rounded-full border border-mint/35 shadow-[0_0_24px_rgba(52,224,161,0.15)]" style={{ background: "linear-gradient(180deg,rgba(76,29,149,0.3),transparent)" }} />
            </div>
          </div>
          <div className="absolute right-0 top-1/2 z-[2] hidden -translate-y-1/2 flex-col gap-[34px] lg:flex">
            {rightChips.map((c) => (
              <Chip key={c.label} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Stats
   ──────────────────────────────────────────────────────────────── */

function WorkStats() {
  const cells = [
    {
      accent: "#A855F7",
      square: true,
      stat: "50+",
      statColor: "#C084FC",
      lines: ["PROJECTS", "DELIVERED"],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
          <path d="M4 20V14M9 20V10M14 20V13M19 20V7M4 9l5-4 4 3 6-5" />
        </svg>
      ),
    },
    {
      accent: "#A855F7",
      square: false,
      stat: "10,000+",
      statColor: "#C084FC",
      lines: ["HOURS OF MANUAL", "WORK REMOVED"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="1.8" strokeLinejoin="round" aria-hidden>
          <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
        </svg>
      ),
    },
    {
      accent: "#A855F7",
      square: false,
      stat: "REAL",
      statColor: "#C084FC",
      lines: ["BUSINESS IMPACT.", "NOT JUST FEATURES."],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="1.8" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="#A855F7" />
        </svg>
      ),
    },
    {
      accent: "#34E0A1",
      square: true,
      stat: "HAPPY CLIENTS",
      statColor: "#34E0A1",
      lines: ["LONG-TERM PARTNERS", "NOT ONE-TIME PROJECTS"],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34E0A1" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
          <circle cx="9" cy="8" r="3.5" />
          <path d="M2.5 20c.8-3.2 3.4-5 6.5-5s5.7 1.8 6.5 5" />
          <circle cx="17" cy="9" r="2.8" />
          <path d="M16 15.2c2.7.2 4.8 1.8 5.5 4.8" />
        </svg>
      ),
    },
  ];
  return (
    <section className="mx-auto max-w-[1360px] px-6 py-4">
      <div
        className="grid gap-y-6 rounded-2xl border border-violet-bright/25 px-4 py-[26px] sm:grid-cols-2 xl:grid-cols-4"
        style={{ background: "linear-gradient(180deg, rgba(20,16,36,0.6), rgba(10,9,18,0.8))" }}
      >
        {cells.map((c, i) => (
          <div
            key={c.stat}
            className={`flex items-center gap-[18px] px-6 ${
              i > 0 ? "xl:border-l xl:border-white/[0.08]" : ""
            }`}
          >
            <span
              className={`flex h-[52px] w-[52px] flex-none items-center justify-center border ${
                c.square ? "rounded-xl" : "rounded-full"
              }`}
              style={{
                borderColor: `${c.accent}80`,
                background: c.accent === "#34E0A1" ? "rgba(52,224,161,0.08)" : "rgba(124,58,237,0.1)",
              }}
            >
              {c.icon}
            </span>
            <span>
              <span className="block font-heading text-2xl font-bold" style={{ color: c.statColor }}>
                {c.stat}
              </span>
              <span className="block text-xs font-bold leading-[1.5] tracking-[1.2px] text-[#B7B5C4]">
                {c.lines[0]}
                <br />
                {c.lines[1]}
              </span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Coming soon
   ──────────────────────────────────────────────────────────────── */

function ComingSoonCard() {
  return (
    <div
      className="relative flex items-center gap-7 overflow-hidden rounded-2xl border border-dashed border-violet-bright/40 px-8 py-[30px]"
      style={{ background: "linear-gradient(180deg, rgba(20,16,36,0.4), rgba(10,9,18,0.7))" }}
    >
      <div className="relative h-24 w-24 flex-none" aria-hidden>
        <div className="spin-dash absolute inset-0 rounded-full border-2 border-dotted border-violet-bright/70" />
        <div className="absolute inset-0 flex items-center justify-center font-heading text-[44px] font-medium text-[#C084FC]">
          +
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-heading text-xl font-bold leading-[1.4] tracking-[1px]">
          <span className="text-[#C084FC]">VACANT</span>
          <br />
          <span className="text-[#E7E6EF]">COMING SOON</span>
        </p>
        <p className="max-w-[220px] text-[13px] leading-[1.6] text-fog">
          Another success story loading soon.
        </p>
      </div>
      {/* mountain + flag */}
      <div className="relative ml-auto hidden h-[110px] w-[170px] flex-none sm:block" aria-hidden>
        <span className="twinkle absolute left-5 top-1.5 h-[3px] w-[3px] rounded-full bg-[#C084FC]" />
        <span className="twinkle absolute right-3.5 top-[22px] h-[3px] w-[3px] rounded-full bg-[#C084FC]" style={{ animationDelay: "0.6s" }} />
        <span className="twinkle absolute right-[52px] top-0 h-0.5 w-0.5 rounded-full bg-[#E7E6EF]" style={{ animationDelay: "1.2s" }} />
        <div className="absolute left-1/2 top-0.5 z-[2] flex -translate-x-1/2 flex-col items-start">
          <div className="h-[11px] w-4 bg-gradient-to-br from-violet-bright to-violet" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }} />
          <div className="h-[22px] w-0.5 bg-[#C084FC]" />
        </div>
        <div className="absolute bottom-0 left-1/2 h-[78px] w-[110px] -translate-x-1/2" style={{ background: "linear-gradient(180deg, rgba(124,58,237,0.5), rgba(124,58,237,0.05))", clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }} />
        <div className="absolute bottom-0 left-2 h-[52px] w-20" style={{ background: "linear-gradient(180deg, rgba(124,58,237,0.3), rgba(124,58,237,0.03))", clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }} />
        <div className="absolute bottom-0 right-1.5 h-11 w-[74px]" style={{ background: "linear-gradient(180deg, rgba(124,58,237,0.25), rgba(124,58,237,0.02))", clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }} />
      </div>
    </div>
  );
}

function ComingSoon() {
  return (
    <section className="mx-auto max-w-[1360px] px-6 py-4">
      <div className="grid gap-6 lg:grid-cols-2">
        <ComingSoonCard />
        <ComingSoonCard />
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   CTA + trust strip
   ──────────────────────────────────────────────────────────────── */

function WorkCta() {
  return (
    <section id="contact" className="mx-auto max-w-[1360px] px-6 py-4">
      <div
        className="grid items-center gap-9 rounded-2xl border border-violet-bright/35 px-8 py-10 lg:grid-cols-[96px_1fr_1px_1fr] lg:px-12"
        style={{
          background:
            "radial-gradient(700px 300px at 20% 50%, rgba(124,58,237,0.16), transparent 70%), linear-gradient(180deg, rgba(20,16,36,0.6), rgba(10,9,18,0.85))",
        }}
      >
        <div className="relative hidden h-24 w-24 lg:block" aria-hidden>
          <div className="spin-dash absolute inset-0 rounded-full border-2 border-dotted border-violet-bright/70" />
          <div className="absolute inset-0 flex items-center justify-center text-[#C084FC]">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-[26px] font-bold leading-[1.35] tracking-[0.5px] text-[#E7E6EF]">
            HAVE A SYSTEM, WEBSITE,
            <br />
            OR WORKFLOW THAT NEEDS
            <br />
            <span className="text-[#C084FC]">REBUILDING</span>?
          </h2>
          <p className="max-w-[340px] text-sm leading-[1.6] text-fog">
            Let&apos;s create a solution that works for your business, not against it.
          </p>
        </div>
        <div
          className="hidden h-[120px] w-px lg:block"
          style={{ background: "linear-gradient(180deg, transparent, rgba(168,85,247,0.5), transparent)" }}
          aria-hidden
        />
        <div className="flex flex-col gap-3.5">
          <h3 className="font-heading text-[22px] font-bold tracking-[0.5px] text-[#C084FC]">
            BOOK A FREE 15-MINUTE CALL
          </h3>
          <p className="max-w-[380px] text-sm leading-[1.6] text-[#B7B5C4]">
            We&apos;ll talk about what&apos;s not working, what&apos;s possible, and the best next
            step.
          </p>
          <div>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-10 rounded-[10px] border border-violet-bright/60 bg-violet/[0.12] px-[26px] py-3.5 text-[13px] font-extrabold tracking-[1.2px] text-[#E7E6EF] transition hover:bg-violet/25 hover:text-white"
            >
              BOOK YOUR CALL <span aria-hidden className="text-base text-[#C084FC]">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const trustItems = [
  { label: ["YOU OWN EVERYTHING", "WE BUILD"], icon: <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-11-1 2 2 4-4" /> },
  { label: ["SECURE & SCALABLE", "SYSTEMS"], icon: <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></> },
  { label: ["BUILT FOR GROWTH", "AND LONGEVITY"], icon: <><path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="M18 17V9M13 17V5M8 17v-3" /></> },
  { label: ["SUPPORT THAT", "ACTUALLY HELPS"], icon: <><path d="M3 11h3v7H3a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1zM18 11h3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-3z" /><path d="M21 11a9 9 0 0 0-18 0" /><path d="M18 18a3 3 0 0 1-3 3h-3" /></> },
];

function TrustStrip() {
  return (
    <section className="mx-auto max-w-[1360px] px-6 pb-10 pt-2">
      <div className="grid gap-y-5 border-t border-white/[0.08] pt-7 sm:grid-cols-2 xl:grid-cols-4">
        {trustItems.map((t) => (
          <div key={t.label[0]} className="flex items-center gap-3.5 px-4">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden>
              {t.icon}
            </svg>
            <p className="text-[11.5px] font-bold leading-[1.5] tracking-[1.2px] text-[#B7B5C4]">
              {t.label[0]}
              <br />
              {t.label[1]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Page
   ──────────────────────────────────────────────────────────────── */

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-midnight text-frost">
      <SiteNav active="/work" />
      <main>
        <WorkHero />
        <WorkStats />
        <section className="mx-auto max-w-[1360px] px-6 py-4">
          <ProjectsGrid />
        </section>
        <ComingSoon />
        <WorkCta />
        <TrustStrip />
      </main>
      <SiteFooter />
    </div>
  );
}
