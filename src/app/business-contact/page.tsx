import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

export default function BusinessContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 space-y-16">
      {/* Hero */}
      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wide text-[var(--muted)]">One-time setup</p>
          <h1 className="text-3xl md:text-4xl font-semibold">Business Contact System</h1>
        </div>
        <p className="text-lg text-[var(--muted)] leading-relaxed">
          A professional contact page and QR code for your business. Share contact information,
          accept follow-ups, and maintain credibility—without overbuilding or ongoing subscriptions.
        </p>
      </section>

      {/* What You Get */}
      <section className="space-y-6 pt-8 border-t border-[var(--border)]">
        <h2 className="text-xl font-semibold">What You Get</h2>
        <ul className="space-y-3">
          {[
            'Custom contact page with your business information',
            'QR code for instant contact sharing (business cards, displays, print)',
            'vCard with name, company, title, phone, email, website, and timezone',
            'Mobile-optimized layout that works on all devices',
            'Source code and deployment instructions (you own everything)',
          ].map((item, index) => (
            <li key={index} className="flex items-start text-[var(--muted)] leading-relaxed">
              <span className="mr-3 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--muted)]"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* How It Works */}
      <section className="space-y-6 pt-8 border-t border-[var(--border)]">
        <h2 className="text-xl font-semibold">How It Works</h2>
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="font-semibold">1. You provide your information</p>
            <p className="text-sm text-[var(--muted)]">
              Name, company, title, phone, email, website, and optional photo.
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold">2. We build and deploy</p>
            <p className="text-sm text-[var(--muted)]">
              Clean contact page with QR code, hosted on your domain or ours. Delivered within 48 hours.
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold">3. You own it</p>
            <p className="text-sm text-[var(--muted)]">
              Full source code, deployment access, and documentation. Update it yourself or ask us for changes.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Exists */}
      <section className="space-y-6 pt-8 border-t border-[var(--border)]">
        <h2 className="text-xl font-semibold">Why This Exists</h2>
        <div className="space-y-3 text-[var(--muted)] leading-relaxed">
          <p>
            Most businesses need a simple, professional way to share contact information. But they
            don't need a full website rebuild or ongoing SaaS subscription.
          </p>
          <p>
            This is a focused solution: one page, one QR code, one-time setup. No marketing bloat,
            no analytics tracking, no monthly fees.
          </p>
          <p>
            Use it for business cards, email signatures, networking events, or anywhere you need a
            clean handoff of your contact details.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="space-y-6 pt-8 border-t border-[var(--border)]">
        <h2 className="text-xl font-semibold">Pricing</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-2xl font-semibold">$500</p>
            <p className="text-sm text-[var(--muted)]">One-time setup. No recurring fees.</p>
          </div>
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            Includes custom development, QR code generation, deployment, source code, and
            documentation. Optional hosting on your domain (requires domain access).
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="space-y-6 pt-8 border-t border-[var(--border)]">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Get Started</h2>
          <p className="text-[var(--muted)]">
            Schedule a brief call to discuss your requirements, or email directly with your business
            information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button variant="primary" href={siteConfig.contact.calendly} external>
              Schedule a Call
            </Button>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Business Contact System Inquiry`}
              className="text-sm text-[var(--muted)] hover:text-[var(--fg)] self-center sm:self-start"
            >
              Email: {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <div className="pt-8">
        <Link
          href="/#services"
          className="text-sm text-[var(--muted)] hover:text-[var(--fg)]"
        >
          ← Back to services
        </Link>
      </div>
    </div>
  );
}
