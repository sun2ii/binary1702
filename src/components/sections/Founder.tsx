import { SectionHeading } from '@/components/ui/SectionHeading';
import { siteConfig } from '@/config/site';
import Image from 'next/image';

export function Founder() {
  return (
    <section className="py-16 md:py-24 space-y-8">
      <SectionHeading level={2}>Who's Building This</SectionHeading>

      <div className="flex flex-col sm:flex-row gap-6 items-center">
        <Image
          src="/profile-pic.jpg"
          alt={siteConfig.founder.name}
          width={200}
          height={200}
          className="rounded-full"
        />

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-center">
            {siteConfig.founder.name}, {siteConfig.founder.role}
          </h3>
          <p className="text-[var(--muted)] leading-relaxed text-left">
            Built by a systems architect with 10+ years designing backend platforms, internal tools, and integration-heavy systems for data-driven organizations.
          </p>
          <p className="text-[var(--muted)] leading-relaxed text-left">
            I focus on turning ambiguous, manual, or fragmented workflows into durable software systems, prioritizing clarity, correctness, and long-term maintainability.
          </p>
        </div>
      </div>
    </section>
  );
}
