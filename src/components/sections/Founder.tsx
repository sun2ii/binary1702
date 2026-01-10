import { SectionHeading } from '@/components/ui/SectionHeading';
import { siteConfig } from '@/config/site';
import Image from 'next/image';

export function Founder() {
  return (
    <section className="py-16 md:py-24 space-y-8">
      <SectionHeading level={2}>Who's Building This</SectionHeading>

      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <Image
          src="/profile-pic.jpg"
          alt={siteConfig.founder.name}
          width={200}
          height={200}
          className="rounded-sm"
        />

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {siteConfig.founder.name}, {siteConfig.founder.role}
          </h3>
          <p className="text-[var(--muted)] leading-relaxed">
            Former systems architect for healthcare and finance operations. Focused on backend
            infrastructure and integration work since 2015.
          </p>
        </div>
      </div>
    </section>
  );
}
