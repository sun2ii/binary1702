import Link from "next/link";
import { MarketingNav, type NavLink } from "@/components/marketing/MarketingNav";
import { SectionHead } from "@/components/marketing/SectionHead";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { RouteModal } from "@/components/RouteModal";

const navLinks: NavLink[] = [
  { href: "#work", label: "Work", sectionId: "work" },
  { href: "#case", label: "Case Study", sectionId: "case" },
  { href: "/operations", label: "Operations" },
  {
    label: "Customers",
    children: [
      { href: "/msp", label: "For MSPs" },
      { href: "/letip", label: "LeTip Members" },
    ],
  },
  { href: "#about", label: "About", sectionId: "about" },
  { href: "#contact", label: "Contact", sectionId: "contact" },
];

export default function HomePage() {
  return (
    <>
      <RouteModal />
      <MarketingNav variant="light" links={navLinks} brandHref="#top" />

      {/* HERO */}
      <header id="top" className="pt-[120px] pb-[100px] border-b border-rule">
        <div className="max-w-[1120px] mx-auto px-8">
          <div className="font-display-mono text-xs uppercase tracking-[0.12em] text-accent font-medium mb-6">
            Binary 1702 · Operating Partnership
          </div>
          <h1 className="text-[clamp(38px,5.5vw,64px)] font-bold leading-[1.05] tracking-tight max-w-[920px] mb-7">
            I rebuild the{" "}
            <span className="text-accent not-italic">operational spine</span>{" "}
            of $2–5M service businesses.
          </h1>
          <p className="text-xl text-ink-soft max-w-[720px] mb-10 leading-[1.5]">
            Fixed-scope diagnostic and sprint engagements for founder-led
            businesses drowning in tool sprawl. No retainers. No discovery
            debt. The architecture map and the working systems both belong to
            you when we&apos;re done.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-[22px] py-[14px] text-[15px] font-medium rounded-md bg-ink text-paper hover:bg-accent-deep transition-colors no-underline"
            >
              Book a diagnostic →
            </Link>
            <Link
              href="/msp"
              className="inline-flex items-center gap-2 px-[22px] py-[14px] text-[15px] font-medium rounded-md bg-transparent text-ink border border-ink hover:bg-ink hover:text-paper transition-colors no-underline"
            >
              For MSP partners ↗
            </Link>
          </div>
        </div>
      </header>

      {/* PROBLEM */}
      <section id="problem" className="py-[100px] border-b border-rule">
        <div className="max-w-[1120px] mx-auto px-8">
          <SectionHead
            label="01 — The problem"
            title="The founder is the integration glue. That's the actual problem."
          />
          <p className="text-[clamp(24px,3vw,34px)] font-medium leading-[1.3] tracking-tight max-w-[820px] mb-6 text-ink">
            <span className="text-accent">&ldquo;</span>The part of the
            business that brings the most revenue is also what keeps me from
            building everything else.<span className="text-accent">&rdquo;</span>
          </p>
          <p className="font-display-mono text-[13px] text-ink-mute mb-12">
            — A founder, on our first call
          </p>
          <div className="text-lg text-ink-soft max-w-[720px] leading-[1.65] space-y-[18px]">
            <p>
              Every $2–5M service business I work with says some version of
              this. Twenty-five years of growth without architectural strategy.
              Ten to fifteen tools, none of which were chosen together. A
              founder personally syncing data every morning because nothing
              else does. An audit prep cycle that costs two full days every
              quarter. A 45-day drip sequence that strands warm leads the
              moment it ends.
            </p>
            <p>
              The business is the asset. The founder is the integration glue
              holding it together. That&apos;s the work.
            </p>
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section id="work" className="py-[100px] border-b border-rule">
        <div className="max-w-[1120px] mx-auto px-8">
          <SectionHead
            label="02 — How I work"
            title="Two phases. Fixed scope. No retainer."
          />
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <Phase
              tag="Phase 1 — Diagnostic"
              title="Map the spine."
              meta="$2,000 · 1 week"
              items={[
                "End-to-end map of every tool, every integration, every manual handoff.",
                "Written report identifying the highest-ROI automation targets and the bottlenecks costing the founder the most hours per week.",
                "Sprint 1 roadmap, prioritized by founder time bought back — not by what's technically interesting.",
                "The immediate bleeders — broken invites, dead links, sync failures — fixed in the same week.",
              ]}
            />
            <Phase
              tag="Phase 2 — Sprint 1"
              title="Ship the spine."
              meta="$5,000 · 4 weeks"
              items={[
                "Execute the top priorities from the diagnostic. Build the missing flows. Restructure what needs restructuring.",
                "Automate the manual syncs that were eating the founder's mornings.",
                "Whiteboard handover: the founder owns the architecture map at the end, not me.",
                "Measured outcomes documented at week 5 — the same numbers we targeted in week 1.",
              ]}
            />
          </div>
          <div className="font-display-mono text-[14.5px] px-6 py-5 bg-ink text-paper rounded-lg leading-[1.75]">
            Diagnostic credit{" "}
            <strong className="text-accent font-medium">$2,000</strong> applied
            to Sprint 1. Effective total{" "}
            <strong className="text-accent font-medium">$5,000</strong>. Fixed
            scope. Fixed timeline. No retainer.
            <span className="block mt-2 opacity-70 text-[13px]">
              Phase 2+ (revenue stream expansion, ongoing support, productized
              vertical snapshots) scoped separately — if the work earns it.
            </span>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section id="case" className="py-[100px] border-b border-rule">
        <div className="max-w-[1120px] mx-auto px-8">
          <div className="grid sm:grid-cols-[200px_1fr] gap-4 sm:gap-[60px] mb-10 sm:mb-14">
            <div className="font-display-mono text-xs uppercase tracking-[0.12em] text-ink-mute pt-3.5 font-medium">
              03 — Live engagement
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent text-paper font-display-mono text-xs uppercase tracking-[0.08em] rounded-full mb-5">
                <span className="w-[7px] h-[7px] rounded-full bg-paper animate-pulse" />
                Week 1 of 5 · Sprint 1 in flight
              </div>
              <h2 className="text-[clamp(26px,3vw,36px)] font-bold tracking-tight leading-[1.15] max-w-[720px] m-0">
                13 Systems, One Founder, 25 Years of Tool Sprawl
              </h2>
            </div>
          </div>
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12">
            <div className="space-y-4 text-ink-soft text-[16.5px] leading-[1.65]">
              <p>
                <strong className="text-ink">The client.</strong> A
                25-year-old service business with a 50,000+ contractor
                database, a 16,000+ member online community, 600+ five-star
                reviews, and enterprise-level customer relationships. Solo
                founder. Everything ran on the founder&apos;s calendar and the
                founder&apos;s memory.
              </p>
              <p>
                <strong className="text-ink">The spine.</strong> Go High Level
                (CRM + SMS), Signing Order (operations database), WordPress
                (customer site), GoCollab (community + training), DocuSign
                (e-sign), Zapier (the glue trying to hold it together). Bolted
                on top: payment processing, scheduling, email infrastructure,
                storage, marketing automation, and the rest of the modern
                small-business stack.
              </p>
              <p>
                <strong className="text-ink">What&apos;s shipped (Week 1).</strong>{" "}
                All 13 systems mapped end-to-end. Broken calendar invites that
                were costing client trust: fixed. Dead links across the
                customer-facing site: fixed. Diagnostic report and Sprint 1
                roadmap delivered.
              </p>
              <p>
                <strong className="text-ink">What&apos;s in flight (Weeks 2–5).</strong>{" "}
                Restructuring GoCollab into intent-organized courses so
                members see their subscription&apos;s value. Building the
                missing upgrade/downgrade flow across three tiers. Automating
                the GHL ↔ Signing Order sync that was eating ~10 hours/week.
                Fixing the GHL opportunity filter that resets every login.
                Extending the 45-day drip into a perpetual newsletter cadence.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-3.5">
                <Stat from="Manual sync work" to="~10 hrs/wk to near zero" />
                <Stat from="Audit prep" to="2-day fire drill to routine" />
                <Stat from="Founder time back" to="~1.5 days/week" />
                <Stat
                  from="13 disconnected systems"
                  to="one operational spine"
                />
              </div>
            </div>
          </div>
          <div className="mt-10 px-7 py-6 border-l-[3px] border-accent bg-paper-deep rounded-r-lg text-ink-soft text-base leading-[1.65] max-w-[820px]">
            Most consultants send you a case study from 18 months ago, or
            refuse to share anything because of NDA. I&apos;d rather show you a
            real engagement in progress, with the founder&apos;s permission, so
            you can see how I actually work — not how I package myself
            afterward. This page will be updated with measured outcomes at the
            end of week 5.
          </div>
        </div>
      </section>

      {/* MSP TEASER — DARK */}
      <section id="msp" className="bg-night text-cream py-[100px]">
        <div className="max-w-[1120px] mx-auto px-8">
          <div className="grid sm:grid-cols-[200px_1fr] gap-4 sm:gap-[60px] items-start">
            <div className="pt-3.5 font-display-mono text-xs uppercase tracking-[0.12em] text-cream-mute font-medium">
              04 — For MSP partners
            </div>
            <div>
              <h2 className="text-[clamp(28px,3.6vw,42px)] font-bold leading-[1.15] tracking-tight max-w-[760px] mb-6 text-cream">
                The call you make when the client&apos;s{" "}
                <span className="text-accent not-italic">non-IT stack</span> is
                a mess.
              </h2>
              <p className="text-lg text-cream/85 leading-[1.6] max-w-[720px] mb-4">
                If you run an MSP or MSSP serving compliance-heavy verticals —
                CMMC, SOC 2, HIPAA, FTC Safeguards — your clients have
                business operations problems that aren&apos;t in your SOW, and
                nowhere clean to send them. That&apos;s me.
              </p>
              <p className="text-lg text-cream/85 leading-[1.6] max-w-[720px] mb-4">
                The simplest version of the partnership: you send me a client,
                I run a one-week diagnostic, the client walks away with an
                architecture map and a roadmap. That&apos;s the entire ask of
                you.
              </p>
              <p className="font-display-mono text-[13px] text-cream-mute mb-8">
                → <span className="text-accent">binary1702.com/msp</span>
              </p>
              <Link
                href="/msp"
                className="inline-flex items-center gap-2 px-[22px] py-[14px] text-[15px] font-medium rounded-md bg-cream text-night hover:bg-accent hover:text-cream transition-colors no-underline"
              >
                See the partnership model →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-[100px] border-b border-rule">
        <div className="max-w-[1120px] mx-auto px-8">
          <SectionHead
            label="05 — About"
            title="Ben Basuni · Operating Partner, Binary 1702"
          />
          <div className="text-[17.5px] text-ink-soft max-w-[720px] leading-[1.65] space-y-4">
            <p>
              I run fixed-scope engagements because the consulting industry
              has trained founders to expect open-ended retainers, scope
              creep, and PowerPoint decks they can&apos;t act on. None of that
              is what a $2–5M service business needs. What it needs is a
              person who maps the actual stack, ships the priorities, and
              hands the architecture back to the founder.
            </p>
            <p>
              Binary 1702 is a Wyoming LLC. The engagement model is fixed. The
              deliverables are real. The founder owns the work at the end.
              That&apos;s the entire pitch.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="pt-[100px] pb-[60px]">
        <div className="max-w-[1120px] mx-auto px-8">
          <h2 className="text-[clamp(28px,3.6vw,42px)] font-bold leading-[1.2] tracking-tight max-w-[720px] mb-6">
            Drowning in tool sprawl? Or running an MSP and recognize a client
            in this?
          </h2>
          <p className="text-lg text-ink-soft max-w-[640px] mb-8">
            Email is the fastest way to start. I read everything, and I&apos;ll
            tell you within a day whether the diagnostic is the right fit — or
            whether you need a different kind of help.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="mailto:ben@binary1702.com"
              className="inline-flex items-center gap-2 px-[22px] py-[14px] text-[15px] font-medium rounded-md bg-ink text-paper hover:bg-accent-deep transition-colors no-underline"
            >
              ben@binary1702.com →
            </a>
            <a
              href="https://www.linkedin.com/in/benbasuni/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-[22px] py-[14px] text-[15px] font-medium rounded-md bg-transparent text-ink border border-ink hover:bg-ink hover:text-paper transition-colors no-underline"
            >
              LinkedIn
            </a>
          </div>
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

function Stat({ from, to }: { from: string; to: string }) {
  return (
    <div className="border border-rule bg-paper-deep p-5 rounded-[10px]">
      <div className="font-display-mono text-xs text-ink-mute mb-1.5">
        {from}
      </div>
      <div className="text-[17px] font-bold text-ink leading-[1.3] tracking-tight">
        <span className="text-accent mr-1">→</span>
        {to}
      </div>
    </div>
  );
}
