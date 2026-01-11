import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

export default function ExamplesPage() {
  const examples = [
    {
      title: 'Client Portal for Law Firm',
      category: 'Web Systems',
      problem: 'Law firm was emailing PDFs back and forth with clients. Documents got lost in email threads, version control was a nightmare, and clients had no way to track case progress.',
      solution: 'Built a secure client portal where clients log in to view documents, case updates, and billing—all in one place. Eliminated email attachments and gave clients 24/7 access to their information.',
    },
    {
      title: 'Inventory Tracker for Retail',
      category: 'Web Systems',
      problem: 'Small retail business was tracking inventory in spreadsheets. Stock counts were always outdated, manual updates were error-prone, and they had no way to check inventory from mobile.',
      solution: 'Created a real-time inventory interface that updates as sales happen. Staff can check stock levels from any device, and the system automatically flags low-stock items.',
    },
    {
      title: 'Document Router for Accounting Firm',
      category: 'AI Consulting',
      problem: 'Accounting firm received hundreds of tax documents via email every week. Staff spent hours manually sorting, filing, and routing them to the right accountants.',
      solution: 'Automated document intake that reads incoming emails, categorizes documents by type, extracts key information, and routes them to the appropriate team member—cutting processing time by 80%.',
    },
    {
      title: 'CRM-to-Billing Integration',
      category: 'Backend Services',
      problem: 'Agency was entering the same client and project information twice—once in their CRM and again in their billing system. Double entry created errors and wasted hours each week.',
      solution: 'Connected the two systems so client data flows automatically from CRM to billing. New projects trigger invoices without manual data entry, eliminating duplicate work.',
    },
    {
      title: 'Reporting Dashboard for Agency',
      category: 'Data & Analytics',
      problem: 'Marketing agency had project data scattered across multiple tools. Managers spent hours each week hunting through systems to compile status reports.',
      solution: 'Built a unified dashboard that pulls data from all project tools in real-time. Managers see project health, team utilization, and client billing at a glance.',
    },
    {
      title: 'Compliance Documentation System',
      category: 'Compliance',
      problem: 'Healthcare startup needed to document workflows and access controls for HIPAA compliance but had no systematic way to track changes or maintain audit trails.',
      solution: 'Set up documentation templates, access control records, and automated audit logging that creates a complete compliance trail—ready for audits without last-minute scrambling.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <SectionHeading level={1}>Examples</SectionHeading>
          <p className="text-lg text-[var(--muted)] max-w-3xl">
            Real scenarios showing how we help businesses eliminate manual work and streamline operations.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {examples.map((example, index) => (
            <div
              key={index}
              className="space-y-4 p-6 border border-[var(--border)] bg-[var(--panel)] rounded-sm"
            >
              <div>
                <h3 className="text-lg font-semibold">{example.title}</h3>
                <p className="text-xs text-[var(--accent)] uppercase tracking-wide mt-1">
                  {example.category}
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-[var(--fg)]">Problem</h4>
                  <p className="text-sm text-[var(--muted)] leading-relaxed mt-1">
                    {example.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[var(--fg)]">Solution</h4>
                  <p className="text-sm text-[var(--muted)] leading-relaxed mt-1">
                    {example.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="pt-12 border-t border-[var(--border)] text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">See your business here?</h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              These are real scenarios we've solved. If you're dealing with manual processes,
              repetitive work, or disconnected systems—let's talk.
            </p>
          </div>
          <Button variant="primary" href={siteConfig.contact.calendly} external>
            Schedule an Intro Call
          </Button>
        </div>
      </div>
    </div>
  );
}
