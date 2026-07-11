import type { Metadata } from "next";
import { bookingUrl } from "@/config/site";
import { SiteNav } from "@/components/marketing/SiteNav";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Binary 1702 Labs — Experiment. Build. Innovate.",
  description:
    "Labs is where we experiment, build, and ship digital products that solve real problems — from internal tools to public-facing platforms.",
};

/* ────────────────────────────────────────────────────────────────
   Icons (Lucide paths from the design export)
   ──────────────────────────────────────────────────────────────── */

type LabsIconKind =
  | "lightbulb"
  | "flask"
  | "trend"
  | "box"
  | "code"
  | "rocket"
  | "clock"
  | "flower"
  | "gamepad"
  | "bot"
  | "mail"
  | "tags"
  | "workflow"
  | "database";

function Icon({ kind, size = 24 }: { kind: LabsIconKind; size?: number }) {
  const paths: Record<string, React.ReactNode> = {
    lightbulb: (
      <>
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </>
    ),
    flask: (
      <>
        <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
        <path d="M8.5 2h7" />
        <path d="M7 16h10" />
      </>
    ),
    trend: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="m7 15 3-3 2 2 4-5" />
      </>
    ),
    box: (
      <>
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
      </>
    ),
    code: (
      <>
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </>
    ),
    rocket: (
      <>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    flower: (
      <>
        <path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" />
        <circle cx="12" cy="8" r="2" />
        <path d="M12 10v12M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5ZM12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" />
      </>
    ),
    gamepad: (
      <>
        <path d="M6 11h4M8 9v4" />
        <path d="M15 12h.01M18 10h.01" />
        <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
      </>
    ),
    bot: (
      <>
        <path d="M12 8V4H8" />
        <rect x="4" y="8" width="16" height="12" rx="2" />
        <path d="M2 14h2M20 14h2M15 13v2M9 13v2" />
      </>
    ),
    mail: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
    tags: (
      <>
        <path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" />
        <path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z" />
        <circle cx="6.5" cy="9.5" r="0.5" fill="currentColor" />
      </>
    ),
    workflow: (
      <>
        <rect x="3" y="3" width="8" height="8" rx="2" />
        <path d="M7 11v4a2 2 0 0 0 2 2h4" />
        <rect x="13" y="13" width="8" height="8" rx="2" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
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

/* ────────────────────────────────────────────────────────────────
   Content (verbatim from the design export)
   ──────────────────────────────────────────────────────────────── */

const approach: { icon: LabsIconKind; title: string; desc: string }[] = [
  { icon: "lightbulb", title: "HYPOTHESIS", desc: "Identify a real problem worth solving." },
  { icon: "flask", title: "EXPERIMENT", desc: "Prototype fast. Test the solution." },
  { icon: "trend", title: "EVOLVE", desc: "Refine, scale, and create lasting impact." },
];

const stats: { icon: LabsIconKind; stat: string; title: string; sub: string }[] = [
  { icon: "box", stat: "12+", title: "Projects Built", sub: "Web apps, tools, and platforms" },
  { icon: "code", stat: "100K+", title: "Users Impacted", sub: "Across platforms and solutions" },
  { icon: "rocket", stat: "5+", title: "Products Live", sub: "Actively used and growing" },
  { icon: "clock", stat: "1000+", title: "Hours of Automation", sub: "Saved for businesses and teams" },
];

const projects: {
  icon: LabsIconKind;
  name: string;
  tag: string;
  desc: string;
  features: string[];
  href: string;
}[] = [
  {
    icon: "flower",
    name: "Shavat",
    tag: "WEB APP",
    desc: "A platform designed to simplify and enhance spiritual and community journeys.",
    features: [
      "User dashboards & personalized experience",
      "Community & content management",
      "Secure authentication & membership",
      "Responsive web application",
    ],
    href: "#",
  },
  {
    icon: "gamepad",
    name: "3XR Games",
    tag: "WEB PLATFORM",
    desc: "Competitive gaming platform where players compete, climb ranks, and earn rewards.",
    features: [
      "Matchmaking & leaderboards",
      "User profiles & rankings",
      "Rewards & payout system",
      "Real-time game integrations",
    ],
    href: "#",
  },
  {
    icon: "bot",
    name: "PaidUp AI",
    tag: "WEB APP",
    desc: "AI-powered platform that automates payment reminders and follow-ups.",
    features: [
      "Automated email & SMS sequences",
      "Smart follow-up & scheduling",
      "Payment tracking & reporting",
      "Seamless integrations",
    ],
    href: "#",
  },
];

const builds: { icon: LabsIconKind; title: string; desc: string }[] = [
  { icon: "mail", title: "Automated Emails", desc: "Smart email flows that nurture, follow up, and convert." },
  { icon: "tags", title: "Ticketing Systems", desc: "Streamlined support and ticket management built for efficiency." },
  { icon: "workflow", title: "Workflow Automation", desc: "Automate repetitive tasks and connect your tools seamlessly." },
  { icon: "database", title: "Internal Tools", desc: "Custom dashboards, portals, and utilities that just make sense." },
  { icon: "box", title: "Integrations", desc: "We connect the apps you use so your data flows effortlessly." },
];

/* ────────────────────────────────────────────────────────────────
   Sections
   ──────────────────────────────────────────────────────────────── */

function LabsHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(1100px 550px at 72% 5%, rgba(52,224,161,0.1), transparent 60%)" }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-[1360px] items-center gap-9 px-6 pb-6 pt-12 lg:grid-cols-[minmax(0,1fr)_250px] xl:grid-cols-[minmax(0,1fr)_420px_250px]">
        <div className="flex flex-col gap-5">
          <p className="text-[15px] font-extrabold tracking-[2.5px] text-mint">
            EXPERIMENT. BUILD. INNOVATE.
          </p>
          <h1 className="font-heading text-5xl font-bold leading-[1.05] tracking-[2px] text-white md:text-[62px]">
            BINARY <span className="text-violet-bright">1702</span>
            <br />
            <span className="text-mint">LABS</span>
          </h1>
          <p className="text-[22px] font-bold text-white">Real projects. Real solutions.</p>
          <p className="max-w-[480px] text-[16.5px] leading-[1.65] text-[#C9C7D6]">
            Labs is where we experiment, build, and ship digital products that solve real problems.
            From internal tools to public-facing platforms, everything we build is designed to
            create impact and move businesses forward.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-[18px]">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 rounded-[10px] border border-mint bg-mint/[0.08] px-6 py-[15px] font-heading text-[13.5px] font-bold tracking-[1.5px] text-mint transition hover:bg-mint/[0.16] hover:text-[#7EF0C4]"
            >
              EXPLORE PROJECTS <span aria-hidden>→</span>
            </a>
            <a
              href="#approach"
              className="inline-flex items-center gap-2.5 rounded-[10px] border border-white/20 px-6 py-[15px] font-heading text-[13.5px] font-bold tracking-[1.5px] text-[#E7E6EF] transition hover:border-white/45 hover:text-white"
            >
              OUR APPROACH <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* Visual slot — swap for real imagery when ready */}
        <div
          className="relative hidden h-[440px] overflow-hidden rounded-[18px] border border-mint/25 xl:block"
          style={{
            background:
              "radial-gradient(70% 60% at 50% 45%, rgba(52,224,161,0.28), transparent 75%), linear-gradient(180deg, #0C1411, #080A0D)",
          }}
          aria-hidden
        >
          <span className="absolute inset-0 flex items-center justify-center text-mint/30">
            <Icon kind="flask" size={140} />
          </span>
        </div>

        <div id="approach" className="flex flex-col gap-4">
          {approach.map((a) => (
            <div
              key={a.title}
              className="flex items-start gap-3.5 rounded-[14px] border border-mint/25 bg-[#0C1411]/70 px-4 py-[18px]"
            >
              <span className="shrink-0 text-mint">
                <Icon kind={a.icon} size={26} />
              </span>
              <span className="flex flex-col gap-1">
                <span className="flex items-center justify-between gap-2">
                  <span className="font-heading text-[13.5px] font-bold tracking-[1.5px] text-white">
                    {a.title}
                  </span>
                  <span className="text-[15px] text-mint" aria-hidden>
                    +
                  </span>
                </span>
                <span className="text-[12.5px] leading-[1.5] text-[#B7B5C4]">{a.desc}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LabsStats() {
  return (
    <section className="mx-auto max-w-[1360px] px-6 py-4">
      <div className="grid gap-6 rounded-2xl border border-white/[0.08] bg-[#0C100E]/70 px-9 py-7 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((st, i) => (
          <div
            key={st.title}
            className={`flex items-start gap-[18px] ${
              i > 0 ? "xl:border-l xl:border-white/[0.08] xl:pl-6" : ""
            }`}
          >
            <span className="shrink-0 text-mint">
              <Icon kind={st.icon} size={44} />
            </span>
            <span className="flex flex-col gap-0.5">
              <span className="font-heading text-[28px] font-bold text-mint">{st.stat}</span>
              <span className="text-[14.5px] font-bold text-white">{st.title}</span>
              <span className="text-[13px] leading-[1.45] text-fog">{st.sub}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function LabsProjects() {
  return (
    <section id="projects" className="mx-auto max-w-[1360px] px-6 py-6">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-[17px] font-bold tracking-[2px] text-mint">
          FEATURED PROJECTS
        </h2>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 font-heading text-[13.5px] font-bold tracking-[1.5px] text-mint transition hover:text-[#7EF0C4]"
        >
          VIEW ALL PROJECTS <span aria-hidden>→</span>
        </a>
      </div>
      <div className="mt-5 grid gap-[22px] md:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.name}
            className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0E0C18]/70"
          >
            {/* Screenshot slot — swap for real imagery when ready */}
            <div
              className="relative h-[220px]"
              style={{
                background:
                  "radial-gradient(70% 70% at 50% 50%, rgba(52,224,161,0.16), transparent 75%), linear-gradient(180deg, #0C1411, #0A0912)",
              }}
              aria-hidden
            >
              <span className="absolute inset-0 flex items-center justify-center text-mint/25">
                <Icon kind={p.icon} size={80} />
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-4 px-[22px] pb-6 pt-[22px]">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-violet to-violet-bright text-white">
                    <Icon kind={p.icon} size={22} />
                  </span>
                  <h3 className="font-heading text-[19px] font-bold text-white">{p.name}</h3>
                </div>
                <span className="whitespace-nowrap rounded-[7px] border border-mint/40 px-2 py-1 text-[10.5px] font-extrabold tracking-[1px] text-mint">
                  {p.tag}
                </span>
              </div>
              <p className="text-sm leading-[1.6] text-[#C9C7D6]">{p.desc}</p>
              <div className="flex flex-1 flex-col gap-2">
                {p.features.map((f) => (
                  <p key={f} className="flex items-start gap-2">
                    <span className="text-[13px] leading-[1.5] text-mint">✓</span>
                    <span className="text-[13px] leading-[1.5] text-[#C9C7D6]">{f}</span>
                  </p>
                ))}
              </div>
              <a
                href={p.href}
                className="inline-flex items-center gap-2 font-heading text-[13px] font-bold tracking-[1.5px] text-mint transition hover:text-[#7EF0C4]"
              >
                VISIT PROJECT <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LabsBuilds() {
  return (
    <section className="mx-auto max-w-[1360px] px-6 py-6">
      <h2 className="font-heading text-[17px] font-bold tracking-[2px] text-mint">WHAT WE BUILD</h2>
      <div className="mt-5 grid gap-[18px] sm:grid-cols-2 xl:grid-cols-5">
        {builds.map((b) => (
          <div
            key={b.title}
            className="flex flex-col gap-3 rounded-[14px] border border-white/[0.09] bg-[#0C100E]/70 px-[18px] py-[22px]"
          >
            <div className="flex items-center gap-3">
              <span className="shrink-0 text-mint">
                <Icon kind={b.icon} size={26} />
              </span>
              <h3 className="font-heading text-[14.5px] font-bold leading-[1.3] text-white">
                {b.title}
              </h3>
            </div>
            <p className="text-[12.5px] leading-[1.55] text-[#B7B5C4]">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function LabsCta() {
  return (
    <section id="contact" className="mx-auto max-w-[1360px] px-6 pb-12 pt-4">
      <div
        className="grid items-center gap-6 rounded-2xl border border-violet-bright/30 px-8 py-7 md:grid-cols-[88px_minmax(0,1fr)_auto] md:gap-9 md:px-11"
        style={{
          background:
            "linear-gradient(90deg, rgba(35,20,66,0.6), rgba(15,12,28,0.85) 55%, rgba(35,20,66,0.4))",
        }}
      >
        <span className="flex h-20 w-20 items-center justify-center rounded-[18px] bg-gradient-to-br from-violet to-violet-bright font-heading text-[46px] font-bold text-white">
          B
        </span>
        <div className="flex flex-col gap-2">
          <h2 className="font-heading text-[27px] font-bold text-white">
            Have an idea that needs building?
          </h2>
          <p className="max-w-[480px] text-[15.5px] leading-[1.55] text-[#C9C7D6]">
            Let&apos;s turn your concept into a working solution that creates real results.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-[10px] bg-gradient-to-br from-violet to-violet-bright px-7 py-4 text-sm font-extrabold tracking-[1px] text-white shadow-[0_8px_32px_rgba(124,58,237,0.35)] transition hover:shadow-[0_8px_40px_rgba(124,58,237,0.55)]"
          >
            START A PROJECT <span aria-hidden className="text-base">→</span>
          </a>
          <Link
            href="/#how-we-work"
            className="inline-flex items-center gap-2 text-[14.5px] font-bold text-[#C084FC] transition hover:text-[#D8B4FE]"
          >
            Or view our process <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Page
   ──────────────────────────────────────────────────────────────── */

export default function LabsPage() {
  return (
    <div className="min-h-screen bg-midnight text-frost">
      <SiteNav active="/labs" />
      <main>
        <LabsHero />
        <LabsStats />
        <LabsProjects />
        <LabsBuilds />
        <LabsCta />
      </main>
      <SiteFooter />
    </div>
  );
}
