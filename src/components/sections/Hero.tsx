import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <section className="py-4 space-y-6">
      <SectionHeading level={1}>
        Every growing business needs a central operating system.
      </SectionHeading>

      <p className="text-lg md:text-xl text-[var(--muted)] max-w-3xl">
        Right now, someone on your team is digging through email for the latest version.
        Someone else is re-entering the same data from a spreadsheet.
        That happens when work lives in too many places, and <span className="text-red-600">you're paying for it.</span>
      </p>

      <p className="text-lg text-[var(--muted)] max-w-3xl">
        We build one system where everything runs: no rework, no guessing, no bottlenecks.
      </p>

      <div className="flex flex-col gap-3 pt-4 items-center sm:items-start">
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="primary" href={siteConfig.contact.calendly} external>
            See if this saves you money
          </Button>
          <Button variant="secondary" href="/examples">
            View Examples
          </Button>
        </div>
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="text-sm text-[var(--muted)] underline"
        >
          Email directly: {siteConfig.contact.email}
        </a>
      </div>
    </section>
  );
}
