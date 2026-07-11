import type { Metadata } from "next";
import { SiteNav } from "@/components/marketing/SiteNav";
import { SiteFooter } from "@/components/marketing/SiteFooter";

export const metadata: Metadata = {
  title: "Binary 1702 Legacy — Built on Purpose. Meant to Last.",
  description:
    "Beyond business, we build what matters — solutions, stories, and resources that inspire, equip, and leave a lasting impact on the world.",
};

const GOLD = "#D9A94A";

/* ────────────────────────────────────────────────────────────────
   Icons (Lucide paths from the design export)
   ──────────────────────────────────────────────────────────────── */

type LegacyIconKind =
  | "crown"
  | "shield-check"
  | "users"
  | "globe"
  | "landmark"
  | "shield-plus"
  | "heart"
  | "book-open"
  | "cross"
  | "lightbulb";

function Icon({ kind, size = 24 }: { kind: LegacyIconKind; size?: number }) {
  const paths: Record<string, React.ReactNode> = {
    crown: (
      <>
        <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
        <path d="M5 21h14" />
      </>
    ),
    "shield-check": (
      <>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    users: (
      <>
        <path d="M18 21a8 8 0 0 0-16 0" />
        <circle cx="10" cy="8" r="5" />
        <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </>
    ),
    landmark: <path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2 3 7h18l-9-5Z" />,
    "shield-plus": (
      <>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="M9 11h6M12 8v6" />
      </>
    ),
    heart: (
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    ),
    "book-open": (
      <>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h6z" />
      </>
    ),
    cross: (
      <path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h5v5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2z" />
    ),
    lightbulb: (
      <>
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
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

const pillars: { icon: LegacyIconKind; title: string; desc: string }[] = [
  { icon: "crown", title: "PURPOSE DRIVEN", desc: "Everything we build starts with purpose and ends with impact." },
  { icon: "shield-check", title: "BUILT TO LAST", desc: "We create with excellence so it can outlive us." },
  { icon: "users", title: "IMPACTING LIVES", desc: "Real solutions, real stories, real change for people." },
  { icon: "globe", title: "FOR GENERATIONS", desc: "Resources and stories that future generations can learn from." },
];

const values: { icon: LegacyIconKind; title: string; desc: string }[] = [
  { icon: "landmark", title: "OUR ORIGIN", desc: "We honor the ideas, efforts, and pioneers that came before us." },
  { icon: "shield-plus", title: "OUR RESPONSIBILITY", desc: "We steward what we build with integrity and leave it better than we found it." },
  { icon: "globe", title: "OUR OUTCOME", desc: "We create resources, stories, and solutions that continue to bless the world." },
];

const projects: {
  tag: string;
  name: string;
  tagline: string;
  desc: string;
  features: string[];
  cta: string;
  linkColor: string;
  visualIcon: LegacyIconKind;
}[] = [
  {
    tag: "APP",
    name: "CareCode",
    tagline: "Simplifying access to what matters most.",
    desc: "CareCode puts all patient data in one secure, easy-to-access place—so when it matters most, answers are always within reach.",
    features: ["Centralized patient data", "Instant access in emergencies", "Secure, private, and HIPAA-ready", "For hospitals, clinics, and patients"],
    cta: "VISIT CARECODE",
    linkColor: "#34E0A1",
    visualIcon: "shield-plus",
  },
  {
    tag: "SERIES",
    name: "Before We Knew",
    tagline: "A story of life, love, and everything in between.",
    desc: "A Netflix series about Ben and Gladys and the whirlwind of life—romance, comedy, action, faith, and the beautiful chaos in between.",
    features: ["Real life. Real people. Real lessons.", "Love, laughter, and unexpected turns", "Faith through every season", "Coming soon on Netflix"],
    cta: "LEARN MORE",
    linkColor: "#C084FC",
    visualIcon: "heart",
  },
  {
    tag: "BOOKS",
    name: "Books",
    tagline: "Words that equip. Truth that transforms.",
    desc: "Books written to inspire, challenge, and equip you with practical wisdom for life, relationships, purpose, and faith.",
    features: ["Practical wisdom for everyday life", "Relationships & personal growth", "Purpose, faith, and leadership", "Releasing soon"],
    cta: "EXPLORE BOOKS",
    linkColor: GOLD,
    visualIcon: "book-open",
  },
  {
    tag: "MEDIA",
    name: "YouTube & Podcast",
    tagline: "Conversations that matter.",
    desc: "Real conversations about life, love, faith, relationships, how to read people, and how God's Word connects to our daily lives.",
    features: ["Life. Love. God. Everything.", "Practical advice & real stories", "How to read people better", "New episodes weekly"],
    cta: "LISTEN & WATCH",
    linkColor: GOLD,
    visualIcon: "lightbulb",
  },
];

const stands: { icon: LegacyIconKind; title: string; desc: string }[] = [
  { icon: "heart", title: "Love People", desc: "We build with love because people matter." },
  { icon: "book-open", title: "Speak Truth", desc: "We don't sugarcoat. We speak life and truth." },
  { icon: "cross", title: "Faith First", desc: "Everything we do is grounded in God's purpose." },
  { icon: "lightbulb", title: "Keep Learning", desc: "We stay curious and keep growing." },
  { icon: "globe", title: "Leave Impact", desc: "We build things that outlive us." },
];

/* ────────────────────────────────────────────────────────────────
   Sections
   ──────────────────────────────────────────────────────────────── */

function LegacyHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(1100px 550px at 72% 5%, rgba(217,169,74,0.1), transparent 60%)" }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-[1360px] items-center gap-9 px-6 pb-6 pt-12 lg:grid-cols-[minmax(0,1fr)_260px] xl:grid-cols-[minmax(0,1fr)_400px_260px]">
        <div className="flex flex-col gap-5">
          <p className="text-sm font-extrabold tracking-[2.5px] text-[#D9A94A]">
            BUILT ON PURPOSE. MEANT TO LAST.
          </p>
          <h1 className="font-heading text-4xl font-bold leading-[1.12] text-white md:text-[52px]">
            Our Legacy.
            <br />
            <span className="text-[#D9A94A]">A Gift</span> for the Future.
          </h1>
          <p className="max-w-[480px] text-[17px] leading-[1.65] text-[#C9C7D6]">
            Beyond business, we build what matters—solutions, stories, and resources that inspire,
            equip, and leave a lasting impact on the world.
          </p>

          <div className="mt-2.5 grid grid-cols-2 gap-y-6 md:grid-cols-4 md:gap-y-0">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`flex flex-col items-center gap-2.5 px-3.5 text-center ${
                  i > 0 ? "md:border-l md:border-white/10" : ""
                }`}
              >
                <span className="flex h-[46px] w-[46px] items-center justify-center rounded-full border-[1.5px] border-[#D9A94A]/50 text-[#D9A94A]">
                  <Icon kind={p.icon} size={22} />
                </span>
                <span className="font-heading text-[12.5px] font-bold tracking-[1.2px] text-[#D9A94A]">
                  {p.title}
                </span>
                <span className="text-xs leading-[1.5] text-[#B7B5C4]">{p.desc}</span>
              </div>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-6">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 rounded-[10px] border border-[#D9A94A] bg-[#D9A94A]/[0.08] px-6 py-[15px] font-heading text-[13.5px] font-bold tracking-[1.5px] text-[#D9A94A] transition hover:bg-[#D9A94A]/[0.16] hover:text-[#EACB85]"
            >
              EXPLORE OUR LEGACY <span aria-hidden>→</span>
            </a>
            <a
              href="#stand"
              className="inline-flex items-center gap-2 font-heading text-[13.5px] font-bold tracking-[1.5px] text-[#E7E6EF] transition hover:text-white"
            >
              OUR VISION &amp; MISSION <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* Visual slot — swap for the crown & globe imagery when ready */}
        <div
          className="relative hidden h-[440px] overflow-hidden rounded-[18px] border border-[#D9A94A]/30 xl:block"
          style={{
            background:
              "radial-gradient(70% 60% at 50% 45%, rgba(217,169,74,0.25), transparent 75%), linear-gradient(180deg, #181408, #0A0912)",
          }}
          aria-hidden
        >
          <span className="absolute inset-0 flex items-center justify-center text-[#D9A94A]/30">
            <Icon kind="crown" size={140} />
          </span>
        </div>

        <div className="flex flex-col gap-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="flex items-start gap-3.5 rounded-[14px] border border-[#D9A94A]/30 bg-[#18140C]/55 px-4 py-[18px]"
            >
              <span className="shrink-0 text-[#D9A94A]">
                <Icon kind={v.icon} size={24} />
              </span>
              <span className="flex flex-col gap-1">
                <span className="font-heading text-[13px] font-bold tracking-[1.2px] text-white">
                  {v.title}
                </span>
                <span className="text-[12.5px] leading-[1.5] text-[#B7B5C4]">{v.desc}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LegacyProjects() {
  return (
    <section id="projects" className="mx-auto max-w-[1360px] px-6 py-8">
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="font-heading text-[22px] font-bold tracking-[3px] text-[#D9A94A]">
          OUR LEGACY PROJECTS
        </h2>
        <p className="text-[17px] text-[#C9C7D6]">
          Projects and resources we&apos;re building to create lasting impact.
        </p>
      </div>
      <div className="mt-7 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((p) => (
          <div
            key={p.name}
            className="flex flex-col overflow-hidden rounded-2xl border border-[#D9A94A]/30 bg-[#0E0C18]/70"
          >
            {/* Visual slot — swap for real imagery when ready */}
            <div
              className="relative h-[200px]"
              style={{
                background:
                  "radial-gradient(70% 70% at 50% 50%, rgba(217,169,74,0.15), transparent 75%), linear-gradient(180deg, #181408, #0A0912)",
              }}
            >
              <span className="absolute inset-0 flex items-center justify-center text-[#D9A94A]/25" aria-hidden>
                <Icon kind={p.visualIcon} size={72} />
              </span>
              <span className="pointer-events-none absolute right-3 top-3 rounded-md border border-white/15 bg-[#08070F]/85 px-2 py-1 text-[10px] font-extrabold tracking-[1.2px] text-[#E7E6EF]">
                {p.tag}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-3 px-5 pb-[22px] pt-5">
              <h3 className="font-heading text-[19px] font-bold text-white">{p.name}</h3>
              <p className="text-[13px] italic text-fog">{p.tagline}</p>
              <p className="text-[13px] leading-[1.6] text-[#C9C7D6]">{p.desc}</p>
              <div className="flex flex-1 flex-col gap-2">
                {p.features.map((f) => (
                  <p key={f} className="flex items-start gap-2">
                    <span
                      className="mt-0.5 flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full border-[1.3px] border-[#D9A94A] text-[8.5px] font-extrabold text-[#D9A94A]"
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span className="text-[12.5px] leading-[1.5] text-[#C9C7D6]">{f}</span>
                  </p>
                ))}
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-heading text-[12.5px] font-bold tracking-[1.5px] transition hover:brightness-125"
                style={{ color: p.linkColor }}
              >
                {p.cta} <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StandFor() {
  return (
    <section id="stand" className="mx-auto max-w-[1360px] px-6 py-4">
      <div className="rounded-2xl border border-white/[0.08] bg-[#0E0C18]/70 px-9 py-8">
        <h2 className="mb-7 text-center font-heading text-[17px] font-bold tracking-[2.5px] text-[#D9A94A]">
          WHAT WE STAND FOR
        </h2>
        <div className="grid gap-y-8 sm:grid-cols-2 xl:grid-cols-5 xl:gap-y-0">
          {stands.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col items-center gap-3 px-5 text-center ${
                i > 0 ? "xl:border-l xl:border-white/10" : ""
              }`}
            >
              <span className="text-[#D9A94A]">
                <Icon kind={s.icon} size={34} />
              </span>
              <h3 className="font-heading text-[15.5px] font-bold text-white">{s.title}</h3>
              <p className="text-[13px] leading-[1.55] text-[#B7B5C4]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LegacyCta() {
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
            Join us in building a legacy that goes beyond us.
          </h2>
          <p className="text-[15.5px] leading-[1.55] text-[#C9C7D6]">
            Be part of the impact. Be part of the story.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <a
            href="mailto:benbasuni1@gmail.com"
            className="inline-flex items-center gap-3 rounded-[10px] bg-gradient-to-br from-violet to-violet-bright px-7 py-4 text-sm font-extrabold tracking-[1px] text-white shadow-[0_8px_32px_rgba(124,58,237,0.35)] transition hover:shadow-[0_8px_40px_rgba(124,58,237,0.55)]"
          >
            STAY CONNECTED <span aria-hidden className="text-base">→</span>
          </a>
          <a
            href="https://linkedin.com/in/benbasuni"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14.5px] font-bold text-[#C084FC] transition hover:text-[#D8B4FE]"
          >
            Follow our journey <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Page
   ──────────────────────────────────────────────────────────────── */

export default function LegacyPage() {
  return (
    <div className="min-h-screen bg-midnight text-frost">
      <SiteNav active="/legacy" />
      <main>
        <LegacyHero />
        <LegacyProjects />
        <StandFor />
        <LegacyCta />
      </main>
      <SiteFooter />
    </div>
  );
}
