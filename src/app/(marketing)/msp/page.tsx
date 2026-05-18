import Link from "next/link";
import { MarketingNav, type NavLink } from "@/components/marketing/MarketingNav";
import { SectionHead } from "@/components/marketing/SectionHead";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";

export const metadata = {
  title: "Binary 1702 · For MSP partners",
  description:
    "A simple referral partnership for MSPs and MSSPs. You send a client whose non-IT stack is a mess; I run a one-week, $2,000 diagnostic; everyone wins.",
};

const navLinks: NavLink[] = [
  { href: "#diagnostic", label: "The diagnostic", sectionId: "diagnostic" },
  { href: "#flow", label: "Flow", sectionId: "flow" },
  { href: "#fit", label: "Fit", sectionId: "fit" },
  { href: "#case", label: "Case study", sectionId: "case" },
  { href: "/", label: "binary1702.com" },
];

export default function MspPage() {
  return (
    <>
      <MarketingNav variant="dark" links={navLinks} brandHref="/" />

      {/* HERO — DARK */}
      <header
        id="top"
        className="bg-night text-cream pt-[100px] pb-[100px] border-b border-night-rule"
      >
        <div className="max-w-[1120px] mx-auto px-8">
          <div className="font-display-mono text-xs uppercase tracking-[0.12em] text-accent font-medium mb-6">
            For MSP partners · binary1702.com/msp
          </div>
          <h1 className="text-[clamp(38px,5.5vw,60px)] font-bold leading-[1.05] tracking-tight max-w-[940px] mb-7 text-cream">
            The call you make when the client&apos;s{" "}
            <span className="text-accent not-italic">non-IT stack</span> is a
            mess.
          </h1>
          <p className="text-xl text-cream/85 max-w-[760px] mb-10 leading-[1.55]">
            I&apos;m not an MSP. I don&apos;t sell endpoint security, M365
            administration, SOC services, or compliance attestation.{" "}
            <strong className="text-accent font-medium">
              I sell the layer underneath
            </strong>{" "}
            — the business operations stack your clients run their actual
            business on. When a client&apos;s founder is the integration glue
            and audit prep is a fire drill, that&apos;s me.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="mailto:ben@binary1702.com?subject=MSP%20partner%20intro"
              className="inline-flex items-center gap-2 px-[22px] py-[14px] text-[15px] font-medium rounded-md bg-accent text-cream hover:bg-accent-deep transition-colors no-underline"
            >
              Send me a client for a diagnostic →
            </a>
            <Link
              href="#diagnostic"
              className="inline-flex items-center gap-2 px-[22px] py-[14px] text-[15px] font-medium rounded-md bg-transparent text-cream border border-cream-mute hover:bg-cream hover:text-night transition-colors no-underline"
            >
              See what the diagnostic is
            </Link>
          </div>
        </div>
      </header>

      {/* THE DIAGNOSTIC */}
      <section id="diagnostic" className="py-[100px] border-b border-rule">
        <div className="max-w-[1120px] mx-auto px-8">
          <SectionHead
            label="01 — The diagnostic"
            title="One product. One price. One week. That's the whole engagement you're sending me into."
          />
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12">
            <div className="text-ink-soft text-[17px] leading-[1.65] space-y-4">
              <p>
                The diagnostic is the only thing I&apos;m asking your shop to
                refer. It&apos;s a self-contained, one-week engagement that
                gives the client a complete operational map of their business
                — every tool, every integration, every place a human is
                serving as glue — plus a written Sprint 1 roadmap prioritized
                by founder time bought back.
              </p>
              <p>
                What happens after the diagnostic is the client&apos;s
                decision. They can hire me to ship Sprint 1, take the
                architecture map and execute themselves, shop the roadmap
                elsewhere, or shelve it. None of that changes our arrangement
                or requires anything from you.
              </p>
              <p>
                <strong className="text-ink">
                  This is deliberately the simplest possible referral.
                </strong>{" "}
                One product to understand, one price to quote, one deliverable
                to put your name next to. Co-sell, white-label, or productized
                versions are options for later — once we&apos;ve both seen the
                first one through.
              </p>
            </div>
            <div className="bg-paper-deep border border-rule rounded-[10px] p-8">
              <div className="font-display-mono text-xs uppercase tracking-[0.1em] text-accent mb-3 font-medium">
                Phase 1 — Diagnostic
              </div>
              <div className="text-2xl font-bold tracking-tight mb-2">
                Map the spine.
              </div>
              <div className="font-display-mono text-sm text-ink-mute mb-5">
                $2,000 · 1 week
              </div>
              <ul className="list-none p-0 m-0">
                {[
                  "End-to-end map of every tool, every integration, every manual handoff.",
                  "Written report identifying the highest-ROI automation targets and the bottlenecks costing the founder the most hours per week.",
                  "Sprint 1 roadmap, prioritized by founder time bought back — not by what's technically interesting.",
                  "Immediate bleeders — broken invites, dead links, sync failures — fixed in the same week.",
                ].map((item, i) => (
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
          </div>
        </div>
      </section>

      {/* PARTNERSHIP FLOW */}
      <section id="flow" className="py-[100px] border-b border-rule">
        <div className="max-w-[1120px] mx-auto px-8">
          <SectionHead
            label="02 — The flow"
            title="Three steps. One week. The client walks away with a map."
          />
          <div className="grid sm:grid-cols-3 gap-5">
            <Step
              num="01 — You see the gap"
              title="A client whose non-IT operations are a mess."
              body="Audit prep is a fire drill. The founder is the bottleneck. Ten-plus tools, none of them talking. None of it is in your SOW — and there's nowhere clean to send them."
            />
            <Step
              num="02 — You make the call"
              title="I run the diagnostic at $2,000."
              body="One week. End-to-end systems map. Written diagnostic report with prioritized recommendations. The immediate bleeders fixed in the same week."
            />
            <Step
              num="03 — They get the map"
              title="The client owns the architecture and the roadmap."
              body="What they do next is their decision. The deliverable stands on its own. Your shop earned the credit for sending them — and the client is now defended on a layer you don't compete on."
            />
          </div>
        </div>
      </section>

      {/* FIT */}
      <section id="fit" className="py-[100px] border-b border-rule">
        <div className="max-w-[1120px] mx-auto px-8">
          <SectionHead
            label="03 — Where this fits"
            title="I'm an answer to a specific question. Not a replacement for what you do."
          />
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-paper-deep border border-rule rounded-[10px] p-7">
              <h4 className="font-display-mono text-xs uppercase tracking-[0.1em] text-accent mb-3 font-medium">
                Where this fits
              </h4>
              <p className="text-ink-soft text-base leading-[1.6] mb-4">
                MSPs and MSSPs serving compliance-heavy verticals —
                manufacturing, healthcare, legal, defense, financial services.
                The operational evidence side of compliance, not the controls
                themselves. Founder-led $2–5M service businesses where one
                person is the integration glue across a decade-plus of tool
                sprawl.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "CMMC",
                  "SOC 2",
                  "HIPAA",
                  "FTC Safeguards",
                  "NIST",
                  "ISO 27001",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="font-display-mono text-xs px-2.5 py-[5px] border border-rule rounded text-ink-soft bg-paper"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-paper border border-rule rounded-[10px] p-7">
              <h4 className="font-display-mono text-xs uppercase tracking-[0.1em] text-ink-mute mb-3 font-medium">
                Where this doesn&apos;t fit
              </h4>
              <p className="text-ink-soft text-base leading-[1.6]">
                I don&apos;t replace anything your MSP does. I don&apos;t touch
                endpoints, identity, networking, RMM, SOC operations, or
                compliance attestation. If a client needs a vCISO, that&apos;s
                still you. If they need someone to attest controls, that&apos;s
                still you. The diagnostic answers a different question — the
                one your clients are asking that you don&apos;t currently have
                a clean referral for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE REFERENCE */}
      <section id="case" className="py-[100px] border-b border-rule">
        <div className="max-w-[1120px] mx-auto px-8">
          <SectionHead
            label="04 — What the deliverable looks like"
            title="Here's a live engagement, mid-flight."
          />
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
            <div className="text-ink-soft text-[17px] leading-[1.65] space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent text-paper font-display-mono text-xs uppercase tracking-[0.08em] rounded-full mb-2">
                <span className="w-[7px] h-[7px] rounded-full bg-paper animate-pulse" />
                Week 1 of 5 · Sprint 1 in flight
              </div>
              <p>
                <strong className="text-ink">
                  13 systems. One founder. 25 years of growth, no architectural
                  strategy.
                </strong>{" "}
                A $2-5M service business with a 50,000+ contractor database,
                16,000+ community members, and enterprise-level customer
                relationships. Solo founder. Everything ran on her calendar and
                her memory.
              </p>
              <p>
                13 tools. None of them talked cleanly. Audit prep was a 2-day
                fire drill every quarter. A 45-day drip sequence stranded warm
                leads the moment it ended. The founder personally synced data
                every morning because nothing else did.
              </p>
              <p>
                If you&apos;re an MSP, you&apos;ve probably onboarded this
                client. Your team has fixed their endpoints, their M365, their
                backup, maybe their SOC 2 controls — and watched the founder
                still drown because everything outside your scope was held
                together with Zapier and willpower.{" "}
                <strong className="text-ink">
                  This is the case for the call.
                </strong>
              </p>
              <p className="text-[15px] text-ink-mute">
                The numbers on the right are what the diagnostic identified and
                what Sprint 1 is targeting. The diagnostic alone gets the
                client a map; whether they engage further is up to them.
              </p>
              <p className="text-[15px] text-ink-mute">
                Full case study at{" "}
                <Link href="/#case" className="text-accent hover:underline">
                  binary1702.com/#case
                </Link>
                , updated weekly with actuals as Sprint 1 ships.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3.5">
              <Stat from="Manual sync work" to="~10 hrs/wk to near zero" />
              <Stat from="Audit prep" to="2-day fire drill to routine" />
              <Stat from="Founder time back" to="~1.5 days/week" />
              <Stat from="13 disconnected systems" to="one operational spine" />
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL — DARK, SIMPLIFIED */}
      <section className="bg-night text-cream py-[100px]">
        <div className="max-w-[1120px] mx-auto px-8">
          <SectionHead
            variant="dark"
            label="05 — Commercial model"
            title="Simplest possible referral. Nothing else required of you."
          />
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
            <div className="text-cream/85 text-[17px] leading-[1.65] space-y-4">
              <p>
                Referral fee on the diagnostic. Flat amount per closed
                diagnostic, paid on engagement. That&apos;s the entire
                economic relationship for v1.
              </p>
              <p>
                I want it kept that simple on purpose. Co-sell mechanics,
                margin splits, and white-labeled productization are real
                options later — but they cost both of us time to negotiate and
                set up, and the first referral doesn&apos;t need any of it.
                Let&apos;s get one client through the diagnostic together. If
                the experience earns it, we&apos;ll talk about what v2 of the
                partnership looks like.
              </p>
              <p>
                If Phase 2 (Sprint 1) happens, that&apos;s a conversation
                between me and the client. It doesn&apos;t change our
                arrangement and requires nothing else from your shop.
              </p>
            </div>
            <div className="bg-night-soft border border-night-rule rounded-[10px] p-7">
              <div className="font-display-mono text-xs uppercase tracking-[0.08em] text-accent mb-2 font-medium">
                Referral model
              </div>
              <div className="text-[19px] font-semibold text-cream leading-[1.3] mb-3">
                You send the intro. I run the diagnostic.
              </div>
              <ul className="list-none p-0 m-0 space-y-3">
                {[
                  "Fixed referral fee on each diagnostic that closes.",
                  "No co-sell obligation. No margin split to administer. No SOW from your side.",
                  "Anything that happens after the diagnostic — Sprint 1, ongoing engagement — sits between me and the client, on its own terms.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="relative pl-[22px] text-cream/85 text-[15px] leading-[1.55] list-none"
                  >
                    <span className="absolute left-0 top-0 text-accent font-display-mono">
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-[100px] border-b border-rule">
        <div className="max-w-[1120px] mx-auto px-8">
          <SectionHead
            label="06 — About"
            title="Ben Basuni · Operating Partner, Binary 1702"
          />
          <div className="text-[17px] text-ink-soft max-w-[760px] leading-[1.65] space-y-4">
            <p>
              I run fixed-scope engagements because the consulting industry
              has trained founders to expect open-ended retainers, scope
              creep, and PowerPoint decks they can&apos;t act on. None of that
              is what a $2–5M service business needs. What it needs is a
              person who maps the actual stack, ships the priorities, and
              hands the architecture back to the founder.
            </p>
            <p>
              Binary 1702 is a Wyoming LLC. The engagement model is fixed.
              The deliverables are real. The founder owns the work at the
              end. That&apos;s the entire pitch — and that&apos;s what makes
              the diagnostic clean for an MSP to refer: no scope ambiguity,
              no retainer for the client to dread, no risk of me drifting
              into territory that&apos;s actually yours.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="pt-[100px] pb-[60px]">
        <div className="max-w-[1120px] mx-auto px-8">
          <h2 className="text-[clamp(28px,3.6vw,42px)] font-bold leading-[1.2] tracking-tight max-w-[760px] mb-6">
            Run an MSP? Recognize a client in any of this?
          </h2>
          <p className="text-lg text-ink-soft max-w-[680px] mb-8">
            Email is the fastest. I&apos;ll walk you through what the
            diagnostic deliverable looks like, you tell me whether the
            referral model works for your shop, and we&apos;ll know within a
            short call whether this is real.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="mailto:ben@binary1702.com?subject=MSP%20partner%20intro"
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

      <MarketingFooter mspLink={false} />
    </>
  );
}

function Stat({ from, to }: { from: string; to: string }) {
  return (
    <div className="border border-rule bg-paper-deep p-5 rounded-[10px]">
      <div className="font-display-mono text-xs text-ink-mute mb-1.5">
        {from}
      </div>
      <div className="text-[16px] font-bold text-ink leading-[1.3] tracking-tight">
        <span className="text-accent mr-1">→</span>
        {to}
      </div>
    </div>
  );
}

function Step({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-paper-deep border border-rule rounded-[10px] p-7">
      <div className="font-display-mono text-[13px] text-accent mb-3.5 font-medium">
        {num}
      </div>
      <div className="text-[19px] font-semibold leading-[1.3] mb-2.5 text-ink">
        {title}
      </div>
      <p className="text-ink-soft text-[15px] leading-[1.6]">{body}</p>
    </div>
  );
}
