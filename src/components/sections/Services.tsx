import { SectionHeading } from '@/components/ui/SectionHeading';

export function Services() {
  const features = [
    {
      title: 'AI-Powered Automation',
      items: [
        'Automate repetitive admin and document handling',
        'Reduce review and approval delays',
        'Apply AI carefully where it saves time without introducing risk'
      ],
      priority: 'primary',
    },
    {
      title: 'Custom Business Systems',
      items: [
        'Replace spreadsheets and inbox chaos with one system',
        'Forms and tools that capture information once and reuse it everywhere it\'s needed',
        'Systems built around how you actually operate, so they don\'t break when business picks up'
      ],
      priority: 'primary',
    },
    {
      title: 'Operational Visibility',
      items: [
        'Clear status across projects, clients, and operations',
        'Early signals when things start slipping',
        'Defined ownership so issues don\'t disappear'
      ],
      priority: 'infrastructure',
    },
    {
      title: 'Reporting & Insights',
      items: [
        'Simple reports tied to real operational questions',
        'Dashboards designed for owners, not analysts',
        'Clean, consistent data you can trust'
      ],
      priority: 'infrastructure',
    },
  ];

  return (
    <section id="features" className="py-12 md:py-16 px-6 md:px-8 space-y-12 bg-[var(--panel)] -mx-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading level={2}>Features</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {features.map((feature) => {
          return (
            <div key={feature.title} className="space-y-3">
              <h3 className="text-base md:text-lg font-semibold border-l-2 border-[var(--accent)] pl-3 text-center">
                {feature.title}
              </h3>
              <ul className="space-y-1.5">
                {feature.items.map((item, index) => (
                  <li key={index} className="text-[var(--muted)] text-xs leading-relaxed flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--muted)]"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
        </div>

        {/* Entry Offering */}
        <div className="mt-16 pt-12 border-t border-[var(--border)]">
          <div className="max-w-2xl space-y-3">
            <div>
              <h3 className="text-base font-semibold tracking-wide uppercase">
                Business Contact System
              </h3>
              <p className="text-xs text-[var(--muted)] mt-1">One-time setup</p>
            </div>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              A clean, professional contact page and QR code for businesses that want a
              frictionless way to share contact information, accept follow-ups, and look
              legitimate without overbuilding or ongoing subscriptions.
            </p>
            <div className="pt-2">
              <a
                href="/business-contact"
                className="text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
