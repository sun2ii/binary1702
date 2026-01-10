import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 space-y-8">
      <SectionHeading level={2}>Start Here</SectionHeading>

      <div className="space-y-6 text-center">
        <div className="space-y-2">
          <p className="text-[var(--muted)]">Schedule an intro call</p>
          <p className="text-[var(--muted)]">
            Or email directly:{' '}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-[var(--fg)] underline">
              {siteConfig.contact.email}
            </a>
          </p>
        </div>

        <div className="flex justify-center">
          <Button variant="primary" href={siteConfig.contact.calendly} external>
            Book 30-Minute Intro
          </Button>
        </div>
      </div>
    </section>
  );
}
