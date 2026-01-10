import { SectionHeading } from '@/components/ui/SectionHeading';

export function Process() {
  const steps = [
    {
      number: '1',
      title: 'Clarity First',
      description:
        "One or two structured sessions to map your existing tools, workflows, data paths, and friction points. We document what's actually happening in the business before proposing anything. This phase creates a shared view of the system as it exists today.",
    },
    {
      number: '2',
      title: 'Design & Scope',
      description:
        'We design the system using structured notes, diagrams, and decision logs. Architecture, integrations, and boundaries are defined clearly. You receive a fixed scope, timeline, and upfront cost before any build work begins.',
    },
    {
      number: '3',
      title: 'Implementation',
      description:
        'Build work follows the agreed design. Progress is delivered iteratively with regular check-ins. Documentation is created alongside code, not after. You see the system take shape in real time.',
    },
    {
      number: '4',
      title: 'Ownership Transfer',
      description:
        'You receive full access to source code, infrastructure configuration, and operational documentation. No lock-in, no forced dependency. Ongoing support is available if you want it, but never required.',
    },
  ];

  return (
    <section className="py-16 md:py-24 space-y-12">
      <div className="max-w-3xl mx-auto">
        <SectionHeading level={2}>Process</SectionHeading>

        <div className="space-y-8 mt-12">
          {steps.map((step) => (
            <div key={step.number} className="space-y-2">
              <h3 className="text-lg font-semibold">
                <span className="text-[var(--accent)]">{step.number}.</span> {step.title}
              </h3>
              <p className="text-[var(--muted)] leading-relaxed pl-6">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
