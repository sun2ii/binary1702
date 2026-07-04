export default function StudioPage() {
  const bookingUrl = "https://calendly.com/benbasuni";

  return (
    <>
      {/* HERO - Clean background image only */}
      <header
        id="top"
        className="relative bg-[#140F1E] text-white overflow-hidden min-h-[70vh]"
        style={{
          backgroundImage: `url('/binary-1702-os.png')`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-[1140px] mx-auto px-8">
          {/* Navigation */}
          <nav className="flex items-center justify-between gap-6 py-[26px]">
            <div className="flex items-baseline gap-2.5">
              <span className="text-[17px] font-extrabold tracking-[0.02em] text-white">
                BINARY 1702
              </span>
              <span className="text-[14px] font-semibold tracking-[0.14em] uppercase text-[#A995FF]">
                / Studio
              </span>
            </div>
            <div className="flex items-center gap-7">
              <a
                href="#websites"
                className="text-[#C9C2DB] no-underline text-[15px] font-medium hover:text-white transition-colors"
              >
                Websites
              </a>
              <a
                href="#systems"
                className="text-[#C9C2DB] no-underline text-[15px] font-medium hover:text-white transition-colors"
              >
                Systems
              </a>
              <a
                href="#support"
                className="text-[#C9C2DB] no-underline text-[15px] font-medium hover:text-white transition-colors"
              >
                Support
              </a>
              <a
                href="#faq"
                className="text-[#C9C2DB] no-underline text-[15px] font-medium hover:text-white transition-colors"
              >
                FAQ
              </a>
              <a
                href={bookingUrl}
                className="bg-[#6C4DF6] text-white no-underline text-[14.5px] font-bold px-[18px] py-2.5 rounded-[10px] hover:bg-[#5636E0] transition-colors"
              >
                Book a call
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* HERO CONTENT - Moved below image */}
      <section className="bg-[#140F1E] text-white py-16 pb-0">
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="max-w-[860px] mb-12">
            <div className="text-[13px] font-bold tracking-[0.18em] uppercase text-[#A995FF] mb-[22px]">
              Websites · Systems · Support — Sacramento & Northern California
            </div>
            <h1 className="text-[clamp(40px,5.6vw,68px)] font-extrabold leading-[1.04] tracking-[-0.02em] m-0 mb-[26px]">
              Clean websites. Useful systems. Real support.
            </h1>
            <p className="text-[19px] leading-[1.55] text-[#C9C2DB] max-w-[680px] m-0 mb-9">
              Binary 1702 builds websites, back-office systems, and support
              plans for businesses that need their digital operations to
              actually work. Projects run from{" "}
              <strong className="text-white font-bold">
                $2,500 starter sites to $15,000+ custom systems
              </strong>{" "}
              — every price is on this page.
            </p>
            <a
              href={bookingUrl}
              className="inline-block bg-[#6C4DF6] text-white no-underline text-base font-bold px-7 py-4 rounded-[11px] shadow-[0_8px_24px_rgba(108,77,246,0.35)] hover:bg-[#5636E0] transition-colors"
            >
              Book a 30-minute call
            </a>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-px bg-white/12 border-t border-white/12">
            <a
              href="#websites"
              className="block bg-[#140F1E] py-[22px] pr-6 pb-[26px] no-underline hover:bg-[#1B1428] transition-colors"
            >
              <div className="text-[15px] font-bold text-white mb-1 pl-6">
                Websites
              </div>
              <div className="text-[13.5px] text-[#9A90B0] pl-6">
                $2,500 – $12,500
              </div>
            </a>
            <a
              href="#systems"
              className="block bg-[#140F1E] py-[22px] pb-[26px] no-underline hover:bg-[#1B1428] transition-colors"
            >
              <div className="text-[15px] font-bold text-white mb-1 pl-6">
                Systems
              </div>
              <div className="text-[13.5px] text-[#9A90B0] pl-6">
                $2,000 – $15,000+
              </div>
            </a>
            <a
              href="#support"
              className="block bg-[#140F1E] py-[22px] pb-[26px] no-underline hover:bg-[#1B1428] transition-colors"
            >
              <div className="text-[15px] font-bold text-white mb-1 pl-6">
                Support
              </div>
              <div className="text-[13.5px] text-[#9A90B0] pl-6">
                $500 – $3,000+/mo
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CHOOSE WHAT YOU NEED */}
      <section className="py-24 pb-20">
        <div className="max-w-[1140px] mx-auto px-8">
          <h2 className="text-[34px] font-extrabold tracking-[-0.015em] m-0 mb-3">
            Choose what you need
          </h2>
          <p className="text-[17px] text-[#5D5670] m-0 mb-10 max-w-[640px]">
            Everything here is fixed-price and plainly described. Pick the door
            that matches your problem.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
            <ChoiceCard
              href="#websites"
              eyebrow="Front of house"
              title="Websites"
              description="What your customers see. A site that looks as good as your work — and brings people in."
              price="$2,500 – $12,500"
            />
            <ChoiceCard
              href="#systems"
              eyebrow="Back of house"
              title="Systems"
              description="How your business runs. Fewer spreadsheets, fewer manual steps, fewer lost hours."
              price="$2,000 – $15,000+"
            />
            <ChoiceCard
              href="#support"
              eyebrow="Someone on call"
              title="Support"
              description="So it stays working. Updates, backups, fixes — handled before you notice."
              price="$500 – $3,000+/mo"
            />
          </div>
        </div>
      </section>

      {/* WEBSITES MENU */}
      <section
        id="websites"
        className="py-10 pb-[72px] scroll-mt-6"
      >
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="flex items-baseline gap-[14px] border-b-2 border-[#17121F] pb-[14px] mb-2.5">
            <h2 className="text-[15px] font-extrabold tracking-[0.2em] uppercase m-0">
              Websites
            </h2>
            <span className="text-[14.5px] text-[#5D5670]">
              Front of house — what your customers see
            </span>
          </div>
          <div className="h-7"></div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 items-stretch">
            <ServiceCard
              title="Starter Website"
              price="$2,500"
              description="A clean, fast, professional site that makes your business look as good as your work."
              subtitle="For new businesses and solo operators."
              features={[
                "Up to 5 pages, mobile-first design",
                "Contact form + basic SEO",
                "Google Business Profile connection",
                "Launched in about 2–3 weeks",
                "30 days of post-launch support",
              ]}
              notIncluded="copywriting from scratch (I polish what you provide), logo/branding, online store, booking."
              ctaText="Start my site"
              ctaHref={bookingUrl}
            />
            <ServiceCard
              title="Business Website"
              price="$5,000"
              description="The website a growing business actually needs — built to bring in customers, not just sit there."
              subtitle="For established businesses ready to turn their site into a salesperson."
              features={[
                "Up to 10 pages",
                "Conversion-focused copywriting help",
                "On-page SEO + reviews section",
                "Analytics + speed optimization",
                "30 days of post-launch support",
              ]}
              notIncluded="ongoing marketing, automated follow-up, online store."
              ctaText="Build my website"
              ctaHref={bookingUrl}
              featured
            />
            <ServiceCard
              title="Website + Lead System"
              price="$12,500"
              description="Everything in Business, plus the machinery that captures leads and follows up while you're working."
              subtitle="For service businesses that live on leads — contractors, clinics, local operators."
              features={[
                "Everything in Business Website",
                "Lead capture + automated email/text follow-up",
                "Online booking",
                "Simple CRM",
                "90 days of post-launch optimization",
              ]}
              notIncluded="running your ads, ongoing content."
              ctaText="Get more leads"
              ctaHref={bookingUrl}
            />
          </div>
        </div>
      </section>

      {/* SYSTEMS MENU */}
      <section
        id="systems"
        className="py-2 pb-[72px] scroll-mt-6"
      >
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="flex items-baseline gap-[14px] border-b-2 border-[#17121F] pb-[14px] mb-2.5">
            <h2 className="text-[15px] font-extrabold tracking-[0.2em] uppercase m-0">
              Systems
            </h2>
            <span className="text-[14.5px] text-[#5D5670]">
              Back of house — how your business runs
            </span>
          </div>
          <p className="text-base text-[#5D5670] my-[18px] mb-7 max-w-[680px]">
            Most owners we work with lose 10+ hours a week to manual busywork.
            That&apos;s the real cost — these fix it.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 items-stretch">
            <SystemCard
              title="Systems Diagnostic"
              price="$2,000"
              description="I go through how your business actually runs — every tool, spreadsheet, and manual process — find where you're losing hours and money, and hand you a written plan to fix it."
              badge="Credited toward any build within 60 days."
              ctaText="Find my leaks"
              ctaHref={bookingUrl}
            />
            <SystemCard
              title="System Build"
              price="$5,000+"
              description="I fix what the diagnostic found: workflow cleanup, connected tools, or an internal dashboard that shows your whole business on one screen."
              ctaText="Fix my systems"
              ctaHref={bookingUrl}
            />
            <SystemCard
              title="Custom AI / Automation"
              price="$15,000+"
              description="A system that does work a human used to do: drafts the replies, builds the quotes, chases the invoices. You approve instead of type."
              ctaText="Let's talk"
              ctaHref={bookingUrl}
            />
          </div>
        </div>
      </section>

      {/* SUPPORT MENU */}
      <section
        id="support"
        className="py-2 pb-[72px] scroll-mt-6"
      >
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="flex items-baseline gap-[14px] border-b-2 border-[#17121F] pb-[14px] mb-2.5">
            <h2 className="text-[15px] font-extrabold tracking-[0.2em] uppercase m-0">
              Support
            </h2>
            <span className="text-[14.5px] text-[#5D5670]">
              So it stays working
            </span>
          </div>
          <p className="text-base text-[#5D5670] my-[18px] mb-7 max-w-[680px]">
            Most website problems announce themselves at 9 PM on a Friday. We
            answer.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 items-stretch">
            <SupportCard
              title="Emergency Support Block"
              price="$500"
              priceNote="one-time"
              description="Site down? Form broken? Something urgent that can't wait? This gets you up to 4 hours of work, started within 24 hours."
              features={[
                "Works on any site (built by us or not)",
                "No retainer required",
                "24-hour start guarantee",
              ]}
              ctaText="Get help now"
              ctaHref={bookingUrl}
            />
            <SupportCard
              title="Care Plan"
              price="$500/mo or $1,000/mo"
              priceNote="Standard / Priority"
              description="Your site stays fast, secure, and working. Updates, backups, security monitoring, and you get someone you can call when something breaks."
              features={[
                "Response: 48 hours (Standard) or same-day (Priority)",
                "Updates, backups, security monitoring",
                "Up to 2 hours of changes/tweaks per month",
                "Monthly health report",
              ]}
              ctaText="Get coverage"
              ctaHref={bookingUrl}
              featured
            />
            <SupportCard
              title="Growth Systems Retainer"
              price="$3,000+/mo"
              description="Dedicated monthly build hours + support coverage. We become your technical team: you tell us what the business needs, we build it."
              features={[
                "10–20 hours/month of build work",
                "Same-day response on support",
                "Monthly planning call",
                "Priority on new requests",
              ]}
              ctaText="Build with us"
              ctaHref={bookingUrl}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="py-2 pb-[72px] scroll-mt-6"
      >
        <div className="max-w-[1140px] mx-auto px-8">
          <h2 className="text-[34px] font-extrabold tracking-[-0.015em] m-0 mb-10">
            Frequently Asked Questions
          </h2>
          <div className="max-w-[780px] space-y-4">
            <FAQItem
              question="How long does a website take?"
              answer="Starter: 2–3 weeks. Business: 3–4 weeks. Lead System: 4–6 weeks. Systems work depends on scope — I'll tell you the timeline in the diagnostic."
            />
            <FAQItem
              question="Do you write the copy?"
              answer="For Business Website and up, I help shape what you provide into something that sells. For Starter, I polish what you give me. If you need full copywriting from scratch, that's a separate project."
            />
            <FAQItem
              question="What if I need something not on the menu?"
              answer="Book a call. If it's close to something here, we'll adjust the scope. If it's totally custom, I'll write you a fixed-price proposal."
            />
            <FAQItem
              question="Do I own everything when we're done?"
              answer="Yes. The site, the code, the content — it's yours. I don't lock you into proprietary platforms or hold your work hostage."
            />
            <FAQItem
              question="What happens after launch?"
              answer="Every project includes post-launch support (30–90 days depending on tier). After that, you can handle it yourself, hire me for support, or move to a Care Plan."
            />
            <FAQItem
              question="Can you fix a site someone else built?"
              answer="Yes. Emergency Support Block or diagnostic + build. I've worked on sites built on every platform — WordPress, Wix, Squarespace, custom code, all of it."
            />
            <FAQItem
              question="How does payment work?"
              answer="50% to start, 50% at launch. For systems work over $10k, we split it into milestones. No hourly billing, no surprise invoices."
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="book"
        className="bg-[#140F1E] text-white py-24 scroll-mt-6"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 90% 70% at 75% -10%, rgba(114,84,246,0.28), transparent 62%),
            radial-gradient(ellipse 60% 50% at 10% 110%, rgba(114,84,246,0.12), transparent 60%)
          `,
        }}
      >
        <div className="max-w-[1140px] mx-auto px-8 text-center">
          <h2 className="text-[clamp(28px,3.6vw,42px)] font-extrabold leading-[1.15] tracking-tight max-w-[720px] mx-auto mb-5">
            Not sure which door? That&apos;s what the call is for.
          </h2>
          <p className="text-lg text-[#C9C2DB] max-w-[580px] mx-auto mb-9">
            30 minutes, free advice, no pitch. I&apos;ll tell you what you
            actually need and whether I&apos;m the right fit.
          </p>
          <a
            href={bookingUrl}
            className="inline-block bg-[#6C4DF6] text-white no-underline text-base font-bold px-7 py-4 rounded-[11px] shadow-[0_8px_24px_rgba(108,77,246,0.35)] hover:bg-[#5636E0] transition-colors"
          >
            Book a 30-minute call
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#100C18] text-[#8A8299] py-12">
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="flex justify-between items-center">
            <div className="text-[15px] font-bold text-white">BINARY 1702</div>
            <div className="text-[13px]">
              Labs & Legacy — coming soon · © 2026 Binary 1702
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ── Components ── */

function ChoiceCard({
  href,
  eyebrow,
  title,
  description,
  price,
}: {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  price: string;
}) {
  return (
    <a
      href={href}
      className="flex flex-col gap-2.5 bg-white border border-[#E5E1EE] rounded-[14px] p-7 no-underline text-inherit hover:border-[#6C4DF6] hover:shadow-[0_6px_24px_rgba(23,18,31,0.07)] transition-all"
    >
      <div className="text-[13px] font-bold tracking-[0.14em] uppercase text-[#6C4DF6]">
        {eyebrow}
      </div>
      <div className="text-[23px] font-extrabold">{title}</div>
      <p className="m-0 text-[15.5px] leading-[1.5] text-[#5D5670]">
        {description}
      </p>
      <div className="mt-auto pt-[14px] flex items-baseline justify-between gap-2">
        <span className="text-base font-bold">{price}</span>
        <span className="text-[15px] font-bold text-[#6C4DF6]">
          See the menu ↓
        </span>
      </div>
    </a>
  );
}

function ServiceCard({
  title,
  price,
  description,
  subtitle,
  features,
  notIncluded,
  ctaText,
  ctaHref,
  featured = false,
}: {
  title: string;
  price: string;
  description: string;
  subtitle: string;
  features: string[];
  notIncluded: string;
  ctaText: string;
  ctaHref: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col bg-white rounded-[14px] p-[30px] ${
        featured
          ? "border-2 border-[#6C4DF6] shadow-[0_10px_32px_rgba(108,77,246,0.14)] pt-[29px]"
          : "border border-[#E5E1EE]"
      }`}
    >
      {featured && (
        <div className="absolute -top-[13px] left-7 bg-[#6C4DF6] text-white text-xs font-extrabold tracking-[0.1em] uppercase px-3 py-[5px] rounded-[7px]">
          ★ Most popular
        </div>
      )}
      <div className="flex justify-between items-start gap-3">
        <h3 className="text-xl font-bold m-0">{title}</h3>
      </div>
      <div className="text-[38px] font-extrabold tracking-[-0.02em] my-2.5 mt-2.5 mb-1">
        {price}
      </div>
      <p className="text-[15px] leading-[1.55] text-[#5D5670] my-2 mb-1.5">
        {description}
      </p>
      <p className="text-[14px] text-[#8A8299] m-0 mb-[18px]">{subtitle}</p>
      <div className="flex flex-col gap-2 text-[14.5px] leading-[1.45] text-[#3A3447]">
        {features.map((feature, i) => (
          <div key={i} className="flex gap-[9px]">
            <span className="text-[#6C4DF6] font-extrabold">✓</span>
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <p className="text-[13px] leading-[1.5] text-[#8A8299] my-4 mb-[22px]">
        <strong className="text-[#5D5670]">Not included:</strong> {notIncluded}
      </p>
      <a
        href={ctaHref}
        className="mt-auto block text-center bg-[#6C4DF6] text-white no-underline text-[15px] font-bold px-5 py-[13px] rounded-[10px] hover:bg-[#5636E0] transition-colors"
      >
        {ctaText}
      </a>
    </div>
  );
}

function SystemCard({
  title,
  price,
  description,
  badge,
  ctaText,
  ctaHref,
}: {
  title: string;
  price: string;
  description: string;
  badge?: string;
  ctaText: string;
  ctaHref: string;
}) {
  return (
    <div className="flex flex-col bg-white border border-[#E5E1EE] rounded-[14px] p-[30px]">
      <h3 className="text-xl font-bold m-0">{title}</h3>
      <div className="text-[38px] font-extrabold tracking-[-0.02em] my-2.5 mt-2.5 mb-1">
        {price}
      </div>
      <p className="text-[15px] leading-[1.55] text-[#5D5670] my-2 mb-4">
        {description}
      </p>
      {badge && (
        <div className="bg-[#F1EDFB] rounded-[9px] px-[14px] py-3 text-[14px] font-semibold text-[#4A32C8] mb-[22px]">
          {badge}
        </div>
      )}
      <a
        href={ctaHref}
        className="mt-auto block text-center bg-[#6C4DF6] text-white no-underline text-[15px] font-bold px-5 py-[13px] rounded-[10px] hover:bg-[#5636E0] transition-colors"
      >
        {ctaText}
      </a>
    </div>
  );
}

function SupportCard({
  title,
  price,
  priceNote,
  description,
  features,
  ctaText,
  ctaHref,
  featured = false,
}: {
  title: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`flex flex-col bg-white rounded-[14px] p-[30px] ${
        featured
          ? "border-2 border-[#6C4DF6] shadow-[0_10px_32px_rgba(108,77,246,0.14)]"
          : "border border-[#E5E1EE]"
      }`}
    >
      <h3 className="text-xl font-bold m-0">{title}</h3>
      <div className="text-[38px] font-extrabold tracking-[-0.02em] my-2.5 mt-2.5 mb-1">
        {price}
      </div>
      {priceNote && (
        <div className="text-[14px] text-[#8A8299] -mt-1 mb-2">{priceNote}</div>
      )}
      <p className="text-[15px] leading-[1.55] text-[#5D5670] my-2 mb-4">
        {description}
      </p>
      <div className="flex flex-col gap-2 text-[14.5px] leading-[1.45] text-[#3A3447] mb-[22px]">
        {features.map((feature, i) => (
          <div key={i} className="flex gap-[9px]">
            <span className="text-[#6C4DF6] font-extrabold">✓</span>
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <a
        href={ctaHref}
        className="mt-auto block text-center bg-[#6C4DF6] text-white no-underline text-[15px] font-bold px-5 py-[13px] rounded-[10px] hover:bg-[#5636E0] transition-colors"
      >
        {ctaText}
      </a>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-white border border-[#E5E1EE] rounded-[12px] p-6">
      <summary className="list-none cursor-pointer flex justify-between items-start gap-4">
        <span className="text-[17px] font-bold">{question}</span>
        <span className="text-[#6C4DF6] text-2xl font-bold transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="text-[15px] leading-[1.6] text-[#5D5670] mt-4 mb-0">
        {answer}
      </p>
    </details>
  );
}
