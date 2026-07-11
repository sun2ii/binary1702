import type { Metadata } from "next";
import { bookingUrl, intakeUrl } from "@/config/site";
import { SiteNav } from "@/components/marketing/SiteNav";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Binary 1702 Studio — Our Services. Your Operational Edge.",
  description:
    "Binary 1702 Studio is our menu of fixed-scope services designed to bring clarity, automation, and structure to your business operations.",
};

/* ────────────────────────────────────────────────────────────────
   Icons (Lucide paths from the design export)
   ──────────────────────────────────────────────────────────────── */

function Icon({
  kind,
  size = 24,
}: {
  kind:
    | "search"
    | "zap"
    | "settings"
    | "chart"
    | "puzzle"
    | "clipboard"
    | "refresh"
    | "users"
    | "book"
    | "key"
    | "user"
    | "shield"
    | "lock"
    | "check-circle";
  size?: number;
}) {
  const paths: Record<string, React.ReactNode> = {
    search: (
      <>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </>
    ),
    zap: (
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    ),
    settings: (
      <>
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    chart: (
      <>
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="M18 17V9M13 17V5M8 17v-3" />
      </>
    ),
    puzzle: (
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    ),
    clipboard: (
      <>
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" />
      </>
    ),
    refresh: (
      <>
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
        <path d="M8 16H3v5" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    book: (
      <>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h6z" />
      </>
    ),
    key: (
      <>
        <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
        <circle cx="16.5" cy="7.5" r="0.5" fill="currentColor" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 0 0-16 0" />
      </>
    ),
    shield: (
      <>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    lock: (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
    "check-circle": (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[kind]}
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="26" height="14" viewBox="0 0 26 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M2 7h20" />
      <path d="m17 2 5 5-5 5" />
    </svg>
  );
}

function CheckDot({ size = 20 }: { size?: number }) {
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-full border-[1.5px] border-violet-bright font-extrabold text-violet-bright"
      style={{ width: size, height: size, fontSize: size * 0.55 }}
      aria-hidden
    >
      ✓
    </span>
  );
}

/* ────────────────────────────────────────────────────────────────
   Content (verbatim from the design export)
   ──────────────────────────────────────────────────────────────── */

const assurances = [
  { title: "Fixed Scope", sub: "Clear deliverables and timelines" },
  { title: "Working Systems", sub: "Built for your business, not just recommendations" },
  { title: "No Open-Ended Contracts", sub: "Pay for outcomes, not time" },
  { title: "You Own Everything", sub: "Full ownership of all systems and docs" },
];

const services: {
  icon: "search" | "zap" | "settings" | "chart" | "puzzle";
  name: string;
  price: string;
  startingAt: boolean;
  popular: boolean;
  desc: string;
  features: string[];
}[] = [
  {
    icon: "search",
    name: "Operations Diagnostic",
    price: "$2,000",
    startingAt: false,
    popular: false,
    desc: "A 1-week deep dive to map, diagnose, and prioritize.",
    features: ["Complete systems assessment", "Architecture map & findings", "Prioritized roadmap", "Immediate issues fixed", "1-week engagement"],
  },
  {
    icon: "zap",
    name: "Systems Sprint",
    price: "$5,000",
    startingAt: true,
    popular: true,
    desc: "4-week implementation sprint to build and automate.",
    features: ["High-impact workflow builds", "Automation & integrations", "Documentation & training", "You own everything we build", "4-week engagement"],
  },
  {
    icon: "settings",
    name: "Workflow Automation",
    price: "$2,500",
    startingAt: true,
    popular: false,
    desc: "Automate repetitive tasks and manual handoffs.",
    features: ["Workflow design & build", "Automation setup", "Testing & optimization", "Handoff & documentation", "Timeline based on scope"],
  },
  {
    icon: "chart",
    name: "Dashboards & Reporting",
    price: "$2,500",
    startingAt: true,
    popular: false,
    desc: "Real-time insights so you can make better decisions.",
    features: ["Data sourcing & cleanup", "Dashboard design", "Reports & KPIs", "Training & handoff", "Timeline based on scope"],
  },
  {
    icon: "puzzle",
    name: "Integrations Package",
    price: "$1,500",
    startingAt: true,
    popular: false,
    desc: "Connect your tools and unify your data.",
    features: ["Integration planning", "Tool connections", "Data flow mapping", "Testing & validation", "Timeline based on scope"],
  },
];

const included: { icon: "clipboard" | "refresh" | "users" | "book" | "key"; text: string }[] = [
  { icon: "clipboard", text: "Clear scope & deliverables" },
  { icon: "refresh", text: "Regular updates & checkpoints" },
  { icon: "users", text: "Built with your team, not just for them" },
  { icon: "book", text: "Documentation & training" },
  { icon: "key", text: "Full ownership of everything we build" },
];

const processSteps = [
  { n: "1", name: "Discover", desc: "We learn your business, challenges, and goals." },
  { n: "2", name: "Design", desc: "We plan the right systems, workflows, and automations." },
  { n: "3", name: "Build", desc: "We build, integrate, and test with precision." },
  { n: "4", name: "Deliver", desc: "We launch with documentation and training." },
  { n: "5", name: "Optimize", desc: "We monitor, refine, and improve over time." },
];

const whyClients: { icon: "user" | "shield" | "lock" | "check-circle"; title: string; desc: string }[] = [
  { icon: "user", title: "Founder-Focused", desc: "We relieve founder bottlenecks and give you back time." },
  { icon: "shield", title: "Built to Last", desc: "We build systems that are scalable, reliable, and easy to maintain." },
  { icon: "lock", title: "Secure & Private", desc: "Your data and systems are handled with care and confidentiality." },
  { icon: "check-circle", title: "No Fluff", desc: "Real outcomes. Clear communication. Zero wasted time." },
];

/* ────────────────────────────────────────────────────────────────
   Sections
   ──────────────────────────────────────────────────────────────── */

function StudioHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(1100px 550px at 78% -5%, rgba(124,58,237,0.2), transparent 60%)" }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-[1360px] items-center gap-10 px-6 pb-8 pt-14 lg:grid-cols-[minmax(0,1fr)_560px] xl:gap-14">
        <div className="flex flex-col gap-[22px]">
          <p className="text-[15px] font-extrabold tracking-[2.5px] text-violet-bright">STUDIO</p>
          <h1 className="font-heading text-4xl font-bold leading-[1.12] text-white md:text-[54px]">
            Our Services.
            <br />
            <span className="text-violet-bright">Your Operational Edge.</span>
          </h1>
          <p className="max-w-[560px] text-[19px] leading-[1.65] text-[#C9C7D6]">
            Binary 1702 Studio is our menu of fixed-scope services designed to bring clarity,
            automation, and structure to your business operations.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {assurances.map((a) => (
              <div key={a.title} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <CheckDot />
                  <span className="text-[14.5px] font-bold text-white">{a.title}</span>
                </div>
                <p className="pl-[29px] text-[13px] leading-[1.5] text-fog">{a.sub}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Visual slot — swap for real imagery when ready */}
        <div
          className="relative hidden h-[460px] overflow-hidden rounded-[18px] border border-violet-bright/25 lg:block"
          style={{
            background:
              "radial-gradient(70% 60% at 50% 45%, rgba(124,58,237,0.35), transparent 75%), linear-gradient(180deg, #141024, #0A0912)",
          }}
          aria-hidden
        >
          <span className="absolute inset-0 flex items-center justify-center text-violet-bright/30">
            <Icon kind="settings" size={140} />
          </span>
        </div>
      </div>
    </section>
  );
}

function StudioMenu() {
  return (
    <section className="mx-auto max-w-[1360px] px-6 py-8">
      <div className="flex flex-col items-center gap-2.5 text-center">
        <h2 className="font-heading text-2xl font-bold tracking-[3px] text-violet-bright">
          THE STUDIO MENU
        </h2>
        <p className="text-lg text-[#C9C7D6]">Choose the right service for where your business is now.</p>
      </div>
      <div className="mt-8 grid items-stretch gap-[18px] md:grid-cols-2 xl:grid-cols-5">
        {services.map((s) => (
          <div
            key={s.name}
            className="relative flex flex-col gap-4 rounded-2xl bg-[#100D1C]/70 px-5 py-[26px]"
            style={{
              border: `1px solid ${s.popular ? "rgba(168,85,247,0.55)" : "rgba(168,85,247,0.22)"}`,
            }}
          >
            {s.popular && (
              <span className="absolute -top-[13px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-violet px-3 py-1 text-[11.5px] font-extrabold tracking-[1px] text-white">
                MOST POPULAR
              </span>
            )}
            <div className="flex items-start gap-3">
              <span className="shrink-0 text-violet-bright">
                <Icon kind={s.icon} size={32} />
              </span>
              <h3 className="font-heading text-[19px] font-bold leading-[1.25] text-white">{s.name}</h3>
            </div>
            <div>
              {s.startingAt && <p className="text-[12.5px] text-fog">Starting at</p>}
              <p className="font-heading text-[28px] font-bold text-violet-bright">{s.price}</p>
            </div>
            <p className="text-[13.5px] leading-[1.55] text-[#C9C7D6]">{s.desc}</p>
            <div className="flex flex-1 flex-col gap-2.5">
              {s.features.map((f) => (
                <p key={f} className="flex items-start gap-2">
                  <span className="mt-px">
                    <CheckDot size={16} />
                  </span>
                  <span className="text-[12.5px] leading-[1.45] text-[#C9C7D6]">{f}</span>
                </p>
              ))}
            </div>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-[10px] border border-violet-bright/40 px-2.5 py-3 font-heading text-[13px] font-bold tracking-[1.5px] text-[#C084FC] transition hover:bg-violet-bright/[0.12] hover:text-[#D8B4FE]"
            >
              LEARN MORE <span aria-hidden>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function IncludedAndProcess() {
  return (
    <section className="mx-auto max-w-[1360px] px-6 py-3">
      <div className="grid gap-[22px] xl:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)]">
        <div className="flex flex-col rounded-2xl border border-white/[0.08] bg-[#0E0C18]/70 px-[26px] py-7">
          <h2 className="font-heading text-base font-bold tracking-[1.5px] text-violet-bright">
            WHAT&apos;S INCLUDED IN EVERY SERVICE
          </h2>
          <div className="flex flex-1 flex-col justify-evenly gap-4 pt-5">
            {included.map((i) => (
              <div key={i.text} className="flex items-center gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] border border-violet-bright/40 text-[#C084FC]">
                  <Icon kind={i.icon} size={20} />
                </span>
                <span className="text-[15px] font-semibold text-[#E7E6EF]">{i.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col rounded-2xl border border-white/[0.08] bg-[#0E0C18]/70 px-8 py-7">
          <h2 className="font-heading text-base font-bold tracking-[1.5px] text-violet-bright">
            OUR PROVEN PROCESS
          </h2>
          <div className="grid flex-1 content-center items-start gap-2.5 pt-6 sm:grid-cols-[1fr_30px_1fr_30px_1fr_30px_1fr_30px_1fr]">
            {processSteps.map((p, i) => (
              <div key={p.n} className="contents">
                {i > 0 && (
                  <div className="hidden justify-center pt-[22px] text-violet-bright sm:flex">
                    <ArrowIcon />
                  </div>
                )}
                <div className="flex flex-col items-center gap-3 text-center">
                  <span
                    className="flex h-[58px] w-[58px] items-center justify-center rounded-full font-heading text-2xl font-bold text-white shadow-[0_6px_20px_rgba(124,58,237,0.4)]"
                    style={{ background: "radial-gradient(circle at 35% 30%, #A855F7, #6D28D9)" }}
                  >
                    {p.n}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#C084FC]">{p.name}</h3>
                  <p className="text-[13px] leading-[1.5] text-[#B7B5C4]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyAndTestimonial() {
  return (
    <section className="mx-auto max-w-[1360px] px-6 py-3">
      <div className="grid gap-[22px] xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div className="flex flex-col gap-6 rounded-2xl border border-white/[0.08] bg-[#0E0C18]/70 px-[30px] py-7">
          <h2 className="font-heading text-base font-bold tracking-[1.5px] text-violet-bright">
            WHY CLIENTS WORK WITH BINARY 1702
          </h2>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {whyClients.map((w) => (
              <div key={w.title} className="flex flex-col items-center gap-3 text-center">
                <span className="text-violet-bright">
                  <Icon kind={w.icon} size={40} />
                </span>
                <h3 className="font-heading text-[15.5px] font-bold text-white">{w.title}</h3>
                <p className="text-[13px] leading-[1.55] text-[#B7B5C4]">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <figure className="flex flex-col gap-[18px] rounded-2xl border border-white/[0.08] bg-[#0E0C18]/70 px-[30px] py-7">
          <span className="font-heading text-[44px] leading-[0.7] text-violet-bright" aria-hidden>
            &ldquo;
          </span>
          <blockquote className="text-[16.5px] leading-[1.65] text-[#E7E6EF]">
            Binary 1702 identified problems we had been living with for years and gave us a clear
            system for fixing them. The impact was immediate.
          </blockquote>
          <figcaption className="text-[15px] text-[#B7B5C4]">— Mike, Business Owner</figcaption>
          <div className="mt-auto flex justify-center gap-3" aria-hidden>
            <span className="h-[9px] w-[9px] rounded-full bg-violet-bright" />
            <span className="h-[9px] w-[9px] rounded-full bg-violet-bright/35" />
            <span className="h-[9px] w-[9px] rounded-full bg-violet-bright/35" />
          </div>
        </figure>
      </div>
    </section>
  );
}

function StudioCta() {
  return (
    <section id="contact" className="mx-auto max-w-[1360px] px-6 pb-12 pt-3">
      <div
        className="grid items-center gap-6 rounded-2xl border border-violet-bright/35 px-8 py-8 md:grid-cols-[96px_minmax(0,1fr)_auto] md:gap-9 md:px-11 md:py-[34px]"
        style={{
          background:
            "linear-gradient(90deg, rgba(60,26,110,0.55), rgba(30,14,58,0.75) 50%, rgba(60,26,110,0.45))",
        }}
      >
        <span className="flex h-[88px] w-[88px] items-center justify-center rounded-[20px] bg-gradient-to-br from-violet to-violet-bright font-heading text-[52px] font-bold text-white">
          B
        </span>
        <div className="flex flex-col gap-2">
          <h2 className="font-heading text-[30px] font-bold text-white">
            Ready to build systems that scale?
          </h2>
          <p className="max-w-[540px] text-base leading-[1.55] text-[#D7D5E2]">
            Let&apos;s turn complexity into clarity and build the operational backbone your business
            deserves.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3.5">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-[10px] bg-gradient-to-br from-violet to-violet-bright px-[30px] py-[17px] text-[15px] font-extrabold tracking-[0.8px] text-white shadow-[0_8px_32px_rgba(124,58,237,0.35)] transition hover:shadow-[0_8px_40px_rgba(124,58,237,0.55)]"
          >
            BOOK A DIAGNOSTIC CALL <span aria-hidden className="text-[17px]">→</span>
          </a>
          <Link
            href={intakeUrl}
            className="inline-flex items-center gap-2 text-[15px] font-bold text-[#C084FC] transition hover:text-[#D8B4FE]"
          >
            Or take our 5-minute intake <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Page
   ──────────────────────────────────────────────────────────────── */

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-midnight text-frost">
      <SiteNav active="/studio" />
      <main>
        <StudioHero />
        <StudioMenu />
        <IncludedAndProcess />
        <WhyAndTestimonial />
        <StudioCta />
      </main>
      <SiteFooter />
    </div>
  );
}
