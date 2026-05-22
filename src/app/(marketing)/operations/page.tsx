import Link from "next/link";
import Image from "next/image";
import { MarketingNav, type NavLink } from "@/components/marketing/MarketingNav";
import { SectionHead } from "@/components/marketing/SectionHead";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import IntakeForm from "./IntakeForm";

export const metadata = {
  title: "Binary 1702 · Internal Operations",
  description:
    "Internal operations setup for 10-15 person teams. We build the operational spine from scratch — Slack, Notion, SOPs — so the founder stops being the help desk.",
  openGraph: {
    title: "Binary 1702 · Internal Operations",
    description:
      "Internal operations setup for 10-15 person teams. We build the operational spine from scratch — Slack, Notion, SOPs — so the founder stops being the help desk.",
    type: "website",
  },
};

const navLinks: NavLink[] = [
  { href: "/#work", label: "Work" },
  { href: "/#case", label: "Case Study" },
  { href: "/operations", label: "Operations" },
  {
    label: "Customers",
    children: [
      { href: "/msp", label: "For MSPs" },
      { href: "/letip", label: "LeTip Members" },
    ],
  },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function OperationsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Binary 1702 · Internal Operations",
    description:
      "Internal operations setup for 10-15 person teams running on iMessage, WhatsApp, and tribal knowledge. We build the operational spine from scratch.",
    url: "https://binary1702.com/operations",
    provider: {
      "@type": "Organization",
      name: "Binary 1702 LLC",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Wyoming",
        addressCountry: "US",
      },
    },
    areaServed: "US",
    serviceType: "Business Operations Consulting",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MarketingNav variant="light" links={navLinks} brandHref="/" />

      {/* HERO */}
      <header id="top" className="pt-[120px] pb-[100px] border-b border-rule">
        <div className="max-w-[1120px] mx-auto px-8">
          <div className="font-display-mono text-xs uppercase tracking-[0.12em] text-accent font-medium mb-6">
            Binary 1702 · Internal Edition
          </div>
          <h1 className="text-[clamp(38px,5.5vw,64px)] font-bold leading-[1.05] tracking-tight max-w-[920px] mb-7">
            Your team is held together by iMessage and WhatsApp. Let&apos;s fix that.
          </h1>
          <p className="text-xl text-ink-soft max-w-[720px] mb-10 leading-[1.5]">
            We build the internal operational spine for 10-15 person
            businesses running on group chats, scattered notes, and
            tribal knowledge that lives in the founder&apos;s head.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="mailto:ben@binary1702.com?subject=Internal%20Diagnostic"
              className="inline-flex items-center gap-2 px-[22px] py-[14px] text-[15px] font-medium rounded-md bg-ink text-paper hover:bg-accent-deep transition-colors no-underline"
            >
              Book a diagnostic →
            </a>
            <Link
              href="#offer"
              className="inline-flex items-center gap-2 px-[22px] py-[14px] text-[15px] font-medium rounded-md bg-transparent text-ink border border-ink hover:bg-ink hover:text-paper transition-colors no-underline"
            >
              See the offer ↓
            </Link>
          </div>
        </div>
      </header>

      {/* TOOLS TRANSITION */}
      <section className="py-[80px] border-b border-rule bg-paper-deep">
        <div className="max-w-[1120px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="font-display-mono text-xs uppercase tracking-[0.12em] text-ink-mute font-medium mb-4">
                From this
              </div>
              <div className="flex gap-6 mb-6 flex-wrap">
                <div className="w-16 h-16 opacity-40 grayscale">
                  <Image src="/logos/imessage.svg" alt="iMessage" width={64} height={64} />
                </div>
                <div className="w-16 h-16 opacity-40 grayscale">
                  <Image src="/logos/whatsapp.svg" alt="WhatsApp" width={64} height={64} />
                </div>
                <div className="w-16 h-16 opacity-40 grayscale">
                  <Image src="/logos/teams.svg" alt="Microsoft Teams" width={64} height={64} />
                </div>
              </div>
              <p className="text-ink-soft leading-[1.6]">
                Group chats, scattered notes, and the founder's memory as the only knowledge base.
              </p>
            </div>
            <div>
              <div className="font-display-mono text-xs uppercase tracking-[0.12em] text-accent font-medium mb-4">
                To this
              </div>
              <div className="flex gap-6 mb-6 flex-wrap">
                <div className="w-16 h-16">
                  <Image src="/logos/slack.svg" alt="Slack" width={64} height={64} />
                </div>
                <div className="w-16 h-16">
                  <Image src="/logos/notion.svg" alt="Notion" width={64} height={64} />
                </div>
              </div>
              <p className="text-ink-soft leading-[1.6]">
                A real operational spine. Searchable history. Documented processes. Knowledge that lives in the system, not just in you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section id="problem" className="py-[100px] border-b border-rule">
        <div className="max-w-[1120px] mx-auto px-8">
          <SectionHead
            label="01 — The problem"
            title="The founder is the help desk. That's the actual problem."
          />
          <div className="text-lg text-ink-soft max-w-[720px] leading-[1.65] space-y-[18px]">
            <p>
              You&apos;re a 10-15 person business doing $1-5M in revenue. You
              grew up on email and word-of-mouth. Everything operational lives
              in iMessage group chats, WhatsApp, random Google Docs, and your
              head.
            </p>
            <p>
              Critical information disappears into chat history. Decisions get
              made in threads that nobody can find later. New hires ask the same
              questions for three months because nothing is written down. Your
              team&apos;s only knowledge system is texting you. You know you
              need Slack and Notion, but you don&apos;t have time to figure them
              out or roll them out properly.
            </p>
            <p>
              The founder is the integration glue — not for the customer-facing
              stack, but for the team&apos;s knowledge. That&apos;s the work.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section id="offer" className="py-[100px] border-b border-rule">
        <div className="max-w-[1120px] mx-auto px-8">
          <SectionHead
            label="02 — How we work"
            title="Two phases. Fixed scope. No retainer."
          />
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <Phase
              tag="Phase 1 — Internal Diagnostic"
              title="Map the internal spine."
              meta="$2,000 · 1 week"
              items={[
                "60-min interview with the owner. 30-min interviews with 2-3 key team members.",
                "Full audit of current communication: iMessage, WhatsApp, email patterns, where information lives (or dies).",
                "Identify what's breaking: onboarding bottlenecks, repeated questions, information silos.",
                "Written diagnostic identifying what Slack and Notion need to replace, prioritized by founder hours bought back per week.",
                "Sprint roadmap with rollout plan.",
                "Immediate fixes for the worst pain points.",
              ]}
            />
            <Phase
              tag="Phase 2 — Internal Sprint"
              title="Ship the internal spine."
              meta="$5,000 · 4 weeks"
              items={[
                "Slack setup from scratch: workspace, channels, naming conventions, notification norms. Migration plan from iMessage/WhatsApp.",
                "Notion build: clean information architecture designed for your team. Databases for people, projects, SOPs, decisions, meetings.",
                "SOP extraction from your team's heads, written up properly.",
                "Team training session (90 min, recorded for new hires).",
                "Owner deep-dive (60 min).",
                "30-day adoption support while the team shifts over.",
                "Measured outcomes documented at week 5.",
              ]}
            />
          </div>
          <div className="font-display-mono text-[13px] text-ink-mute mb-5 max-w-[820px]">
            Diagnostic credit{" "}
            <strong className="text-ink font-medium">$2,000</strong> applies to
            Sprint. Effective total{" "}
            <strong className="text-ink font-medium">$5,000</strong>. Fixed
            scope. Fixed timeline. No retainer.
          </div>
          <div className="font-display-mono text-[14.5px] px-6 py-5 bg-ink text-paper rounded-lg leading-[1.75] max-w-[820px]">
            <strong className="text-accent font-medium">
              Launch pricing — first 2 clients only:
            </strong>{" "}
            $4,000 bundled. After that, standard pricing applies.
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section id="outcomes" className="py-[100px] border-b border-rule">
        <div className="max-w-[1120px] mx-auto px-8">
          <SectionHead label="03 — What you get" title="Real outcomes. Not vibes." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Stat label="10-15 hrs/week back for the owner" />
            <Stat label="50%+ reduction in onboarding time" />
            <Stat label="70%+ drop in repeat questions to leadership" />
            <Stat label="Notion the team actually opens" />
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-[100px] border-b border-rule">
        <div className="max-w-[1120px] mx-auto px-8">
          <SectionHead
            label="04 — Why us"
            title="Three things separate us from the dozen 'Notion consultants' in your inbox."
          />
          <div className="text-lg text-ink-soft max-w-[720px] leading-[1.65] space-y-[18px]">
            <p>
              We&apos;re a pair, not a freelancer. Ben does the architecture,
              the build, the technical setup. Gladys runs the interviews,
              captures the voice, makes the documentation feel human. Most
              Notion consultants are one person doing both halves badly. We
              split the work the way it should be split.
            </p>
            <p>
              We build from scratch, not from templates. Binary 1702 is an
              operational consultancy first, tools second. Slack and Notion are
              the medium — the actual work is the architectural thinking behind
              them. You&apos;re not hiring a Notion expert who learned about
              business. You&apos;re hiring business operators who happen to use
              Notion.
            </p>
            <p>
              We do the whole system, including adoption. Most consultants drop
              a Notion template and run. We extract the SOPs from your
              team&apos;s heads, build the Slack and Notion infrastructure from
              zero, train the people, and stick around for 30 days while
              adoption settles. You don&apos;t get a template. You get a working
              system.
            </p>
          </div>
        </div>
      </section>

      {/* WHO THIS IS / ISN'T FOR */}
      <section id="fit" className="py-[100px] border-b border-rule">
        <div className="max-w-[1120px] mx-auto px-8">
          <SectionHead label="05 — Who this is / isn't for" title="Is this for us?" />
          <div className="grid sm:grid-cols-2 gap-6">
            <FitCard
              variant="yes"
              title="Yes, if:"
              items={[
                "10-15 employees",
                "$1-5M revenue",
                "Owner-led",
                "Running on iMessage, WhatsApp, or email for team communication",
                "Feeling that the team is bottlenecked by the founder's memory",
              ]}
            />
            <FitCard
              variant="no"
              title="No, if:"
              items={[
                "Under 5 people (you don't need this yet)",
                "Over 25 (you need a real ops hire)",
                "Already running Slack + Notion smoothly (you don't need us)",
                "On Microsoft Teams + SharePoint (different stack, not the right fit yet)",
                "Shopping purely on price",
              ]}
            />
          </div>
        </div>
      </section>

      {/* HOW TO START */}
      <section id="contact" className="pt-[100px] pb-[60px]">
        <div className="max-w-[1120px] mx-auto px-8">
          <IntakeForm />
        </div>
      </section>

      <MarketingFooter mspLink={true} />
    </>
  );
}

/* ── Local components ─────────────────────────────────── */

function Phase({
  tag,
  title,
  meta,
  items,
}: {
  tag: string;
  title: string;
  meta: string;
  items: string[];
}) {
  return (
    <div className="bg-paper-deep border border-rule rounded-[10px] p-8">
      <div className="font-display-mono text-xs uppercase tracking-[0.1em] text-accent mb-3 font-medium">
        {tag}
      </div>
      <div className="text-2xl font-bold tracking-tight mb-2">{title}</div>
      <div className="font-display-mono text-sm text-ink-mute mb-5">{meta}</div>
      <ul className="list-none p-0 m-0">
        {items.map((item, i) => (
          <li
            key={i}
            className="relative pl-[22px] mb-3 text-ink-soft text-[15.5px] leading-[1.55] list-none"
          >
            <span className="absolute left-0 top-0 text-accent font-display-mono">
              →
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Stat({ label }: { label: string }) {
  return (
    <div className="border border-rule bg-paper-deep p-5 rounded-[10px]">
      <div className="text-[17px] font-bold text-ink leading-[1.3] tracking-tight">
        <span className="text-accent mr-1">→</span>
        {label}
      </div>
    </div>
  );
}

function FitCard({
  variant,
  title,
  items,
}: {
  variant: "yes" | "no";
  title: string;
  items: string[];
}) {
  const isYes = variant === "yes";
  return (
    <div
      className={`border rounded-[10px] p-7 ${
        isYes
          ? "bg-paper-deep border-rule"
          : "bg-paper border-rule"
      }`}
    >
      <h3 className="font-display-mono text-xs uppercase tracking-[0.1em] text-accent mb-4 font-medium">
        {title}
      </h3>
      <ul className="list-none p-0 m-0 space-y-2.5">
        {items.map((item, i) => (
          <li
            key={i}
            className="relative pl-[22px] text-ink-soft text-[15.5px] leading-[1.55] list-none"
          >
            <span className="absolute left-0 top-0 text-accent font-display-mono">
              {isYes ? "→" : "×"}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
