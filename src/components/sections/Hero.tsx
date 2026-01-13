import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <section className="py-16 md:py-24 space-y-6">
      <SectionHeading level={1}>
        Binary 1702 builds systems tailored to your business.
      </SectionHeading>

      <p className="text-lg md:text-xl text-[var(--muted)] max-w-3xl">
        We design and implement systems that <span className="text-[var(--highlight)]">reduce overhead</span>, <span className="text-[var(--highlight)]">improve visibility</span>, and <span className="text-[var(--highlight)]">protect margins</span>.
      </p>

      <div className="flex flex-col gap-3 pt-4 items-center sm:items-start">
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="primary" href={siteConfig.contact.calendly} external>
            Schedule an Intro Call
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
