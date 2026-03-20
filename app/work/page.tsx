import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WorkPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="section-hero gradient-hero" style={{ paddingTop: '4rem', paddingBottom: '3rem', position: 'relative' }}>
          <div style={{
            position: 'absolute',
            top: '10%',
            right: '-5%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(107, 143, 113, 0.05) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }}></div>
          <div className="container-wide text-center" style={{ position: 'relative', zIndex: 1 }}>
            <p className="eyebrow">FEATURED SYSTEM</p>
            <h1 className="mb-4">emp.care: Elder Care Operations Platform</h1>
            <div className="accent-line" style={{ margin: '1.5rem auto' }}></div>
            <p className="text-large text-secondary" style={{ maxWidth: '800px', margin: '0 auto' }}>
              A production system designed to manage the full path from inquiry to active care, replacing fragmented
              spreadsheets and manual coordination with structured workflows.
            </p>
          </div>
        </section>

        {/* The Challenge */}
        <section className="section">
          <div className="container-wide" style={{ maxWidth: '900px' }}>
            <h2 className="mb-4">The Operational Challenge</h2>
            <p className="text-large mb-4">
              Elder care operations involve constant coordination across multiple phases: initial inquiries, referral
              tracking, assessment scheduling, patient conversion, care planning, staff assignments, and service logging.
            </p>
            <p className="text-secondary mb-4">
              When these processes live in scattered spreadsheets and disconnected tools, critical details fall through
              the cracks. Lead response times slow down. Follow-up becomes inconsistent. Staff coordination breaks down.
              And there's no clear visibility into where each patient sits in the intake-to-care pipeline.
            </p>
            <p className="text-secondary">
              The business needed a structured system that could handle real operational complexity while maintaining
              clarity, accountability, and continuity across the entire workflow.
            </p>
          </div>
        </section>

        {/* The System Built */}
        <section className="section section-alt">
          <div className="container-wide" style={{ maxWidth: '900px' }}>
            <h2 className="mb-6">The System That Was Built</h2>

            <div className="grid grid-2" style={{ gap: '2rem' }}>
              <div className="card" style={{ borderTop: '3px solid #6B8F71' }}>
                <h4 className="mb-3" style={{ color: '#6B8F71' }}>Lead Management</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  Structured intake forms capture patient information, referral sources, and care requirements. Every
                  lead moves through a defined pipeline with clear ownership, follow-up tracking, and status visibility.
                </p>
              </div>

              <div className="card" style={{ borderTop: '3px solid #6B8F71' }}>
                <h4 className="mb-3" style={{ color: '#6B8F71' }}>Patient Conversion</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  When a lead converts to active care, the system transitions them seamlessly while preserving the full
                  intake history. Contract details, staff assignments, and care parameters are captured with clarity.
                </p>
              </div>

              <div className="card" style={{ borderTop: '3px solid #6B8F71' }}>
                <h4 className="mb-3" style={{ color: '#6B8F71' }}>Care Planning & Coordination</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  Health assessments, care plans, and service schedules are managed in one system. Staff see their
                  assigned tasks. Managers track service delivery. Everyone has visibility.
                </p>
              </div>

              <div className="card" style={{ borderTop: '3px solid #6B8F71' }}>
                <h4 className="mb-3" style={{ color: '#6B8F71' }}>Staff & Facility Management</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  Caregivers, coordinators, and facilities are managed with role-based access. Each user type sees the
                  information they need without unnecessary complexity.
                </p>
              </div>
            </div>

            <div className="card" style={{ marginTop: '2rem', borderTop: '3px solid #6B8F71' }}>
              <h4 className="mb-3" style={{ color: '#6B8F71' }}>Service Logging & Billing</h4>
              <p className="text-secondary" style={{ fontSize: '1rem' }}>
                Every service delivered is logged with date, time, duration, and staff assignment. The system tracks
                billable hours, rates, and payment status, creating a clear audit trail for operations and billing.
              </p>
            </div>
          </div>
        </section>

        {/* Why the Architecture Mattered */}
        <section className="section">
          <div className="container-wide" style={{ maxWidth: '900px' }}>
            <div className="accent-line"></div>
            <h2 className="mb-4 text-center">Why the Architecture Mattered</h2>
            <p className="text-large mb-6 text-center" style={{ maxWidth: '750px', margin: '0 auto 3rem' }}>
              Building operational software for healthcare requires more than functional features. It requires
              structure that supports accountability, traceability, and real-world complexity.
            </p>

            <div className="grid grid-2" style={{ gap: '2rem' }}>
              <div className="card" style={{ background: '#F8FAF9' }}>
                <h4 className="mb-3" style={{ color: '#6B8F71' }}>Immutable Intake Records</h4>
                <p className="text-secondary" style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
                  Patient intake data is captured once and never modified. This preserves the original snapshot and
                  creates a reliable audit trail. Contact updates are handled through override fields, maintaining both
                  historical accuracy and current information.
                </p>

                <h4 className="mb-3" style={{ color: '#6B8F71' }}>Append-Only Workflow History</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  Every status change, note, and state transition is logged as a new record, not an update. This creates
                  a temporal history of exactly what happened when, supporting accountability and operational review.
                </p>
              </div>

              <div className="card" style={{ background: '#F8FAF9' }}>
                <h4 className="mb-3" style={{ color: '#6B8F71' }}>Role-Based Access Control</h4>
                <p className="text-secondary" style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
                  Five distinct user roles (master, admin, marketing, caregiver, care manager) each see tailored
                  interfaces. Marketing staff manage leads. Caregivers see assigned tasks. Managers coordinate across
                  the full system.
                </p>

                <h4 className="mb-3" style={{ color: '#6B8F71' }}>Production-Grade Development</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  Built with Next.js 14, TypeScript, PostgreSQL, and Zod validation. The system evolved through 61
                  database migrations over six months of iterative development, reflecting real operational feedback and
                  continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What This Demonstrates */}
        <section className="section section-alt">
          <div className="container-wide" style={{ maxWidth: '900px' }}>
            <h2 className="mb-4">What This Demonstrates</h2>
            <p className="text-large mb-4">
              emp.care represents the type of operational software Binary 1702 is built to deliver: systems designed for
              real business complexity, not isolated app features or static websites.
            </p>

            <div className="card-featured">
              <h4 className="mb-4" style={{ color: '#6B8F71' }}>Capabilities This Project Proves</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Designing multi-phase workflows that match real operational patterns',
                  'Building structured data models that support accountability and auditability',
                  'Implementing role-based systems with appropriate access controls',
                  'Iterating based on production use and stakeholder feedback',
                  'Architecting for operational clarity, not just technical elegance',
                  'Maintaining systems through ongoing development and refinement'
                ].map((item, i) => (
                  <li key={i} style={{
                    padding: '1rem 0',
                    color: '#52525B',
                    borderBottom: i < 5 ? '1px solid rgba(107, 143, 113, 0.1)' : 'none',
                    display: 'flex',
                    alignItems: 'flex-start'
                  }}>
                    <span style={{ color: '#6B8F71', marginRight: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-secondary" style={{ marginTop: '2rem' }}>
              This is the same structured, systems-oriented approach Binary 1702 brings to client engagements. Whether
              it's lead management, service coordination, internal operations, or workflow automation, the focus is
              always on building systems that make business operations clearer, more accountable, and easier to run.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container-wide text-center">
            <h2 className="mb-3">Need a System for Your Operations?</h2>
            <p className="text-large text-secondary mb-6" style={{ maxWidth: '700px', margin: '0 auto 2.5rem' }}>
              If your business is dealing with fragmented tools, manual coordination, or unclear workflows, let's talk
              about what a structured system could look like for your operations.
            </p>
            <Link href="/contact" className="button button-large">
              Schedule Diagnostic Call
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
