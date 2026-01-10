import { SectionHeading } from '@/components/ui/SectionHeading';

export function Philosophy() {
  const principles = [
    {
      title: 'Systems over features.',
      description:
        'We build for longevity, not launches. Infrastructure that adapts as your business changes.',
    },
    {
      title: 'Clarity over cleverness.',
      description:
        'Simple architectures. Readable code. Documentation that explains why, not just what.',
    },
    {
      title: 'Transfer, not dependency.',
      description:
        'You own what we build. You should be able to operate, modify, or hand off the system without us.',
    },
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-8 space-y-12 bg-[var(--panel)] -mx-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading level={2}>Philosophy</SectionHeading>

        <div className="space-y-8 mt-12">
          {principles.map((principle) => (
            <div key={principle.title} className="space-y-2">
              <h3 className="text-lg font-semibold">{principle.title}</h3>
              <p className="text-[var(--muted)] leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
