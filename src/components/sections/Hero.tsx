import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <section className="py-16 md:py-24 space-y-6">
      <SectionHeading level={1}>
        Binary 1702 builds systems behind businesses.
      </SectionHeading>

      <p className="text-lg md:text-xl text-[var(--muted)] max-w-3xl">
        We design and implement web systems, AI automations, and backend infrastructure
        that integrate with how your business actually operates.
      </p>

      <div className="flex flex-col gap-3 pt-4 items-start">
        <Button variant="primary" href={siteConfig.contact.calendly} external>
          Schedule an Intro Call
        </Button>
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
