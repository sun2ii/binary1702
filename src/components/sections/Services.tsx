import { SectionHeading } from '@/components/ui/SectionHeading';

export function Services() {
  const services = [
    {
      title: 'Web Systems',
      items: [
        'Client portals and intake forms',
        'Real-time inventory tracking',
        'Data connections to existing tools'
      ],
      priority: 'primary',
    },
    {
      title: 'AI Consulting',
      items: [
        'Automate repetitive tasks',
        'AI-assisted drafting and review',
        'Document routing and sorting'
      ],
      priority: 'primary',
    },
    {
      title: 'Backend Services',
      items: [
        'System integrations',
        'Eliminate duplicate data entry',
        'Ongoing support and monitoring'
      ],
      priority: 'infrastructure',
    },
    {
      title: 'Data & Analytics',
      items: [
        'Reporting automation',
        'Data cleanup and insights',
        'Operational metrics'
      ],
      priority: 'infrastructure',
    },
  ];

  return (
    <section id="services" className="py-12 md:py-16 px-6 md:px-8 space-y-12 bg-[var(--panel)] -mx-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading level={2}>Services</SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mt-12">
        {services.map((service) => (
          <div key={service.title} className="space-y-3">
            <h3
              className={`text-lg font-semibold border-l-2 border-[var(--accent)]/60 pl-3 ${
                service.priority === 'supporting' ? 'text-[var(--muted)]' : ''
              }`}
            >
              {service.title}
            </h3>
            <ul className="space-y-1.5">
              {service.items.map((item, index) => (
                <li key={index} className="text-[var(--muted)] text-sm leading-relaxed flex items-start">
                  <span className="mr-2 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--muted)]"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
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
