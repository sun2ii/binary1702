import { SectionHeading } from '@/components/ui/SectionHeading';

export function Services() {
  const features = [
    {
      title: 'Enter Once',
      items: [
        'Your team enters client info into the CRM',
        'Then copies it into the billing system',
        'We connect them so it happens once, automatically'
      ],
      priority: 'primary',
    },
    {
      title: 'Find It Fast',
      items: [
        'Client asks "Can you resend that?" for the third time',
        'Team spends 20 minutes searching threads',
        'We build one place where everything lives'
      ],
      priority: 'primary',
    },
    {
      title: 'See Real Status',
      items: [
        'You ask "Where are we on the Johnson project?"',
        'Three people give you three different answers',
        'We build dashboards that show real status instantly'
      ],
      priority: 'infrastructure',
    },
    {
      title: 'Documents Done',
      items: [
        'Documents arrive by email, someone prints, files, loses them',
        'Or they sit in an inbox nobody checks',
        'We automate the whole thing - read, route, store, done'
      ],
      priority: 'infrastructure',
    },
  ];

  return (
    <section id="features" className="py-8 px-6 md:px-8 space-y-12 bg-[var(--panel)] -mx-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading level={2}>What We Fix</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {features.map((feature) => {
          return (
            <div key={feature.title} className="space-y-3">
              <h3 className="text-base md:text-lg font-semibold border-l-2 border-[var(--accent)] pl-3">
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
        {/* <div className="mt-16 pt-12 border-t border-[var(--border)]">
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
        </div> */}
      </div>
    </section>
  );
}
