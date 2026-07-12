import type { Metadata } from "next";
import { bookingUrl } from "@/config/site";
import { SiteNav } from "@/components/marketing/SiteNav";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Binary 1702 — Let's Build Something Better",
  description:
    "Tell us what is not working, what you are trying to improve, or what you want to build. We'll help you figure out the best next step.",
};

const CYAN = "#67E8F9";
const MAGENTA = "#E879F9";

/* Section label with fading rule lines (used three times in the design) */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-5">
      <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, rgba(103,232,249,0.4))" }} aria-hidden />
      <h2 className="text-[13px] font-extrabold tracking-[3px] text-[#67E8F9]">{children}</h2>
      <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(103,232,249,0.4), transparent)" }} aria-hidden />
    </div>
  );
}

function CalendarIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────
   Hero
   ──────────────────────────────────────────────────────────────── */

function ContactHero() {
  return (
    <section className="mx-auto max-w-[1360px] px-6 pt-10">
      <div className="grid items-stretch overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#0B0A14] to-[#08070F] lg:grid-cols-[1fr_640px]">
        <div className="flex flex-col justify-center gap-[22px] py-14 pl-8 pr-6 lg:pl-14">
          <p className="text-[13px] font-extrabold tracking-[2.5px] text-[#67E8F9]">
            LET&apos;S CONNECT
          </p>
          <h1 className="font-heading text-4xl font-bold leading-[1.15] md:text-[52px]">
            <span className="text-[#E7E6EF]">Let&apos;s build</span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg,#C084FC,#7C3AED)" }}
            >
              something
            </span>
            <span className="text-[#67E8F9]"> better.</span>
          </h1>
          <p className="max-w-[420px] text-base leading-[1.7] text-[#C9C7D6]">
            Tell us what is not working, what you are trying to improve, or what you want to build.
            You don&apos;t need to know the technical solution yet. We&apos;ll help you figure out
            the best next step.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-[18px]">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-[#C084FC]/80 bg-violet/[0.18] px-6 py-[15px] text-[13px] font-extrabold tracking-[1px] text-white shadow-[0_0_26px_rgba(124,58,237,0.35)] transition hover:bg-violet/[0.32]"
            >
              <CalendarIcon /> BOOK A FREE 15-MINUTE CALL
            </a>
            <a
              href="#project-form"
              className="inline-flex items-center gap-3 rounded-xl border border-white/20 px-6 py-[15px] text-[13px] font-extrabold tracking-[1px] text-[#E7E6EF] transition hover:border-[#67E8F9]/60 hover:text-[#67E8F9]"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="m22 2-7 20-4-9-9-4z" />
                <path d="M22 2 11 13" />
              </svg>
              SEND PROJECT DETAILS
            </a>
          </div>
        </div>
        {/* Visual slot — drop public/contact/neon-b.jpg to replace the placeholder */}
        <div
          role="img"
          aria-label="Neon Binary 1702 sign beside a laptop"
          className="relative min-h-[280px] overflow-hidden lg:min-h-[460px]"
          style={{
            backgroundImage: "url(/contact/neon-b.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#100D1C",
          }}
        >
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(90deg, #0B0A14 0%, rgba(11,10,20,0.35) 30%, transparent 60%), radial-gradient(60% 60% at 60% 50%, rgba(124,58,237,0.2), transparent 75%)" }}
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Two ways to start
   ──────────────────────────────────────────────────────────────── */

const callPoints = [
  { glyph: "◷", label: "15 minutes" },
  { glyph: "♡", label: "No pressure" },
  { glyph: "‹/›", label: "No technical preparation needed" },
  { glyph: "✓", label: "Clear recommendation afterward" },
];

function TwoWays() {
  return (
    <section className="mx-auto max-w-[1360px] px-6 pt-9">
      <SectionLabel>TWO WAYS TO START</SectionLabel>
      <div className="mt-6 grid items-stretch gap-6 lg:grid-cols-[440px_1fr]">
        {/* Book a call */}
        <div
          className="flex flex-col gap-[22px] rounded-2xl border border-violet-bright/35 px-[30px] py-8"
          style={{ background: "linear-gradient(180deg, rgba(20,16,36,0.6), rgba(10,9,18,0.85))" }}
        >
          <div className="flex items-start gap-[18px]">
            <span className="flex h-16 w-16 flex-none items-center justify-center rounded-full border-[1.5px] border-[#C084FC]/70 bg-violet/10 shadow-[0_0_22px_rgba(124,58,237,0.3)]">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="1.7" strokeLinecap="round" aria-hidden>
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M8 3v4M16 3v4M3 10h18" />
                <circle cx="8.5" cy="14" r="0.8" fill="#C084FC" />
                <circle cx="12" cy="14" r="0.8" fill="#C084FC" />
                <circle cx="15.5" cy="14" r="0.8" fill="#C084FC" />
                <circle cx="8.5" cy="17" r="0.8" fill="#C084FC" />
                <circle cx="12" cy="17" r="0.8" fill="#C084FC" />
              </svg>
            </span>
            <div>
              <h3 className="font-heading text-[22px] font-bold text-white">Book a free call</h3>
              <p className="mt-2 text-[13.5px] leading-[1.65] text-[#B7B5C4]">
                A relaxed first conversation about your business, your current challenges, and what
                might make things easier.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 pl-1.5">
            {callPoints.map((p) => (
              <div key={p.label} className="flex items-center gap-3.5">
                <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full border border-violet-bright/50 text-sm font-bold text-[#C084FC]">
                  {p.glyph}
                </span>
                <span className="text-sm text-[#C9C7D6]">{p.label}</span>
              </div>
            ))}
          </div>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex items-center justify-center gap-3.5 rounded-[10px] border border-[#C084FC]/70 bg-violet/[0.15] px-6 py-[15px] text-[13px] font-extrabold tracking-[1.5px] text-[#E7E6EF] transition hover:bg-violet/30 hover:text-white"
          >
            CHOOSE A TIME <span aria-hidden className="text-base text-[#C084FC]">→</span>
          </a>
        </div>

        {/* Project form */}
        <ContactForm />
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   What happens next
   ──────────────────────────────────────────────────────────────── */

const steps = [
  { n: "1", glyph: "⁂", title: "We listen", body: "We learn about your business, your goals, and where things are getting stuck.", accent: "#C084FC", ring: "rgba(168,85,247,0.6)" },
  { n: "2", glyph: "◎", title: "We recommend the right next step", body: "That might be a website, automation, systems diagnostic, custom platform, or ongoing support.", accent: CYAN, ring: "rgba(103,232,249,0.6)" },
  { n: "3", glyph: "☷", title: "You receive a clear plan", body: "You'll know the recommended scope, estimated investment, timeline, and what happens next.", accent: MAGENTA, ring: "rgba(232,121,249,0.6)" },
];

function NextSteps() {
  return (
    <section className="mx-auto max-w-[1360px] px-6 pt-10">
      <SectionLabel>WHAT HAPPENS NEXT</SectionLabel>
      <div className="mt-7 grid gap-8 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="flex items-start gap-[18px]">
            <div className="relative flex-none">
              <span
                className="flex h-[76px] w-[76px] items-center justify-center rounded-full border-[1.5px] border-dotted font-heading text-[26px] font-bold"
                style={{ borderColor: s.ring, color: s.accent }}
                aria-hidden
              >
                {s.glyph}
              </span>
              <span
                className="absolute -left-[11px] top-1/2 flex h-[22px] w-[22px] -translate-y-1/2 items-center justify-center rounded-full text-xs font-extrabold text-[#050508]"
                style={{ background: s.accent }}
              >
                {s.n}
              </span>
            </div>
            <div className="flex flex-col gap-2 pt-1.5">
              <h3 className="font-heading text-[17px] font-bold leading-[1.4] text-white">{s.title}</h3>
              <p className="text-[13px] leading-[1.65] text-fog">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Services
   ──────────────────────────────────────────────────────────────── */

const purple = { accent: "#C084FC", ring: "rgba(168,85,247,0.5)" };
const cyan = { accent: CYAN, ring: "rgba(103,232,249,0.5)" };
const magenta = { accent: MAGENTA, ring: "rgba(232,121,249,0.5)" };

const services = [
  { glyph: "⚙︎", title: "Systems & Automation", body: "Streamline operations and save time.", ...purple },
  { glyph: "▣", title: "Websites", body: "Modern, fast, and built to convert.", ...cyan },
  { glyph: "⧉", title: "Custom Platforms", body: "Powerful solutions built around your business.", ...magenta },
  { glyph: "⁂", title: "Client Onboarding", body: "Smooth experiences from day one.", ...cyan },
  { glyph: "⌸", title: "Payment & Invoicing Workflows", body: "Get paid faster with less manual work.", ...purple },
  { glyph: "✉︎", title: "Email Automation", body: "Nurture leads and clients on autopilot.", ...magenta },
  { glyph: "☷", title: "Dashboards & Internal Tools", body: "See what matters and make better decisions.", ...cyan },
  { glyph: "☎︎", title: "Ongoing Support Plans", body: "Reliable support to keep your systems running.", ...purple },
];

function ContactServices() {
  return (
    <section className="mx-auto max-w-[1360px] px-6 pt-10">
      <SectionLabel>WHAT BINARY 1702 CAN HELP WITH</SectionLabel>
      <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {services.map((s) => (
          <div
            key={s.title}
            className="flex flex-col gap-3 rounded-[14px] border border-white/[0.08] px-[22px] py-6 transition hover:border-white/25"
            style={{ background: "linear-gradient(180deg, rgba(20,16,36,0.5), rgba(10,9,18,0.8))" }}
          >
            <span
              className="flex h-[50px] w-[50px] items-center justify-center rounded-xl border bg-[#0A0912]/60 font-heading text-xl font-bold"
              style={{ borderColor: s.ring, color: s.accent }}
              aria-hidden
            >
              {s.glyph}
            </span>
            <h3 className="font-heading text-base font-bold leading-[1.45] text-[#E7E6EF]">{s.title}</h3>
            <p className="text-[12.5px] leading-[1.6] text-fog">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Assurance + email
   ──────────────────────────────────────────────────────────────── */

function Assurance() {
  return (
    <section className="mx-auto max-w-[1360px] px-6 pt-10">
      <div
        className="flex flex-col items-start gap-7 rounded-2xl border border-violet-bright/30 px-8 py-[30px] sm:flex-row sm:items-center lg:px-10"
        style={{ background: "linear-gradient(90deg, rgba(20,16,36,0.7), rgba(10,9,18,0.9))" }}
      >
        <span className="flex h-[72px] w-[72px] flex-none items-center justify-center rounded-full border-[1.5px] border-[#E879F9]/60 bg-[#E879F9]/[0.06] shadow-[0_0_24px_rgba(232,121,249,0.2)]">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#E879F9" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M12 2l8 3v6c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V5l8-3z" />
            <path d="M8.5 12l2.3 2.3L15.5 9.5" />
          </svg>
        </span>
        <p className="font-heading text-xl font-bold leading-[1.5] md:text-2xl">
          <span className="text-white">No pressure. No confusing sales pitch.</span>
          <br />
          <span className="text-[#E879F9]">Clear scope.</span>{" "}
          <span className="text-[#67E8F9]">Clear pricing.</span>{" "}
          <span className="text-mint">You own what we build.</span>
        </p>
      </div>
    </section>
  );
}

const emailRows = [
  { glyph: "✉︎", label: "ben@binary1702.com", href: "mailto:ben@binary1702.com" },
  { glyph: "◷", label: "Response time: Usually within one business day" },
  { glyph: "◉", label: "binary1702.com", href: "https://binary1702.com" },
  { glyph: "in", label: "linkedin.com/in/benbasuni", href: "https://linkedin.com/in/benbasuni" },
];

function EmailBlock() {
  return (
    <section id="contact" className="mx-auto max-w-[1360px] px-6 py-10">
      <div
        className="grid items-center gap-12 rounded-2xl border border-white/[0.06] px-8 py-12 lg:grid-cols-[420px_1fr] lg:px-14"
        style={{
          background:
            "radial-gradient(600px 300px at 85% 60%, rgba(34,211,238,0.1), transparent 70%), linear-gradient(180deg, #0B0A14 0%, #08070F 100%)",
        }}
      >
        <div className="flex flex-col gap-5">
          <h2 className="text-[13px] font-extrabold tracking-[3px] text-[#67E8F9]">PREFER EMAIL?</h2>
          <div className="flex flex-col gap-4">
            {emailRows.map((r) => (
              <div key={r.label} className="flex items-center gap-3.5">
                <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-lg border border-[#67E8F9]/40 text-sm text-[#67E8F9]">
                  {r.glyph}
                </span>
                {r.href ? (
                  <a
                    href={r.href}
                    className="text-sm text-[#C9C7D6] transition hover:text-white"
                    {...(r.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {r.label}
                  </a>
                ) : (
                  <span className="text-sm text-[#C9C7D6]">{r.label}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-heading text-[30px] font-bold leading-[1.35]">
            <span className="text-white">You bring the problem.</span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg,#C084FC,#67E8F9)" }}
            >
              We&apos;ll help map the solution.
            </span>
          </h2>
          <p className="max-w-[420px] text-[15px] leading-[1.7] text-[#B7B5C4]">
            Start with a simple conversation and see whether Binary 1702 is the right fit.
          </p>
          <div>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-7 rounded-[10px] border border-violet-bright/70 bg-violet/[0.12] px-6 py-3.5 text-[13px] font-extrabold tracking-[1.2px] text-[#E7E6EF] transition hover:bg-violet/25 hover:text-white"
            >
              <span className="inline-flex items-center gap-3">
                <CalendarIcon /> BOOK A FREE 15-MINUTE CALL
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

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-midnight text-frost">
      <SiteNav active="/contact" />
      <main>
        <ContactHero />
        <TwoWays />
        <NextSteps />
        <ContactServices />
        <Assurance />
        <EmailBlock />
      </main>
      <SiteFooter />
    </div>
  );
}
