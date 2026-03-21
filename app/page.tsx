import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="section-hero gradient-hero" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '-5%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(107, 143, 113, 0.05) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '10%',
            left: '-5%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(107, 143, 113, 0.03) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }}></div>
          <div className="container-wide" style={{ position: 'relative', zIndex: 1 }}>
            <h1 style={{ maxWidth: '900px', margin: '0 auto 1.5rem' }}>
              We Build Systems That Actually Run Businesses.
            </h1>
            <p className="text-large text-secondary" style={{ maxWidth: '800px', margin: '0 auto 2.5rem' }}>
              10 production systems. AI chatbots, operational platforms, automation pipelines—already deployed, already working.
              We don't experiment on your business. We apply what's proven.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/work" className="button button-large">
                View Systems
              </Link>
              <Link href="/contact" className="button-secondary button-large">
                Schedule Diagnostic Call
              </Link>
            </div>
          </div>
        </section>

        {/* Problems We Solve */}
        <section className="section">
          <div className="container-wide">
            <div className="accent-line"></div>
            <h2 className="text-center mb-3">Where Operations Start to Break Down</h2>
            <p className="text-center text-secondary mb-8" style={{ fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
              Most businesses don't have a software problem. They have a systems problem.
            </p>

            <div className="grid grid-2" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div className="card" style={{ borderLeft: '4px solid #6B8F71' }}>
                <h4 className="mb-3" style={{ color: '#6B8F71' }}>Missed Leads and Slow Response Times</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  Inquiries come in through multiple channels, but there's no clear system for capture, assignment,
                  and follow-up. Leads slip through the cracks.
                </p>
              </div>

              <div className="card" style={{ borderLeft: '4px solid #6B8F71' }}>
                <h4 className="mb-3" style={{ color: '#6B8F71' }}>Scattered Software Creating Duplicated Work</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  Customer data lives in five different tools. Staff manually re-enter information. Nothing syncs.
                  Nobody has a complete picture.
                </p>
              </div>

              <div className="card" style={{ borderLeft: '4px solid #6B8F71' }}>
                <h4 className="mb-3" style={{ color: '#6B8F71' }}>Manual Follow-Up and Admin Overload</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  Your team spends hours on repetitive tasks that should be automated. Follow-up is inconsistent.
                  Response times are slow.
                </p>
              </div>

              <div className="card" style={{ borderLeft: '4px solid #6B8F71' }}>
                <h4 className="mb-3" style={{ color: '#6B8F71' }}>Unclear Pipelines and Operational Blind Spots</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  You can't see where things are stuck. You don't know who's responsible for what. Your operational
                  visibility is limited to asking people for status updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="section section-alt">
          <div className="container-wide">
            <h2 className="text-center mb-6">What We Build</h2>
            <div className="grid grid-4">
              <div className="card">
                <h4 className="mb-3">Custom Software</h4>
                <p className="text-secondary" style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
                  Replace spreadsheet chaos and centralize fragmented workflows with structured operational systems
                  designed for your business.
                </p>
                <Link href="/services#custom-software" style={{ color: '#6B8F71', fontWeight: 500 }}>
                  Learn more →
                </Link>
              </div>

              <div className="card">
                <h4 className="mb-3">Business Automation</h4>
                <p className="text-secondary" style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
                  Reduce manual follow-up, eliminate repetitive admin work, and speed response times with intelligent
                  automation.
                </p>
                <Link href="/services#automation" style={{ color: '#6B8F71', fontWeight: 500 }}>
                  Learn more →
                </Link>
              </div>

              <div className="card">
                <h4 className="mb-3">CRM & Lead Management</h4>
                <p className="text-secondary" style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
                  Create visibility into your pipeline, structure lead handling, and make follow-up ownership clear.
                </p>
                <Link href="/services#crm" style={{ color: '#6B8F71', fontWeight: 500 }}>
                  Learn more →
                </Link>
              </div>

              <div className="card">
                <h4 className="mb-3">API Integrations</h4>
                <p className="text-secondary" style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
                  Reduce duplicate entry and connect tools that currently break handoffs to create coherent operational
                  systems.
                </p>
                <Link href="/services#integrations" style={{ color: '#6B8F71', fontWeight: 500 }}>
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured System - emp.care */}
        <section className="section" style={{ position: 'relative', background: 'linear-gradient(180deg, #FAF9F7 0%, #F8FAF9 100%)' }}>
          <div className="container-wide">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="accent-line"></div>
              <p className="eyebrow text-center">FEATURED SYSTEM</p>
              <h2 className="text-center mb-4">Built for Real Operations, Not Demos</h2>
              <p className="text-large text-secondary text-center mb-6" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                emp.care is a full operational platform for elder care agencies—handling intake, patient pipelines, facility workflows, and care tracking.
              </p>

              <div className="card-featured">
                <div style={{ marginBottom: '2rem' }}>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ fontSize: '1rem', marginBottom: '1rem', color: '#52525B', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#6B8F71', marginRight: '0.75rem', fontSize: '1.25rem', fontWeight: 600 }}>✓</span>
                      <span>Complete patient lifecycle (intake → active care)</span>
                    </li>
                    <li style={{ fontSize: '1rem', marginBottom: '1rem', color: '#52525B', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#6B8F71', marginRight: '0.75rem', fontSize: '1.25rem', fontWeight: 600 }}>✓</span>
                      <span>Multi-role system (5 user types across operations)</span>
                    </li>
                    <li style={{ fontSize: '1rem', marginBottom: '1rem', color: '#52525B', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#6B8F71', marginRight: '0.75rem', fontSize: '1.25rem', fontWeight: 600 }}>✓</span>
                      <span>Compliance-ready audit trails</span>
                    </li>
                  </ul>
                </div>

                <p className="text-secondary" style={{ fontSize: '1.125rem', fontStyle: 'italic', textAlign: 'center', marginBottom: '2rem' }}>
                  This is what we mean by "systems."
                </p>

                <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '2px solid rgba(107, 143, 113, 0.1)', textAlign: 'center' }}>
                  <Link href="/work" className="button button-large">
                    See How It Works
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="section section-alt">
          <div className="container-wide">
            <h2 className="text-center mb-3">We Don't Bill for Time. We Build for Outcomes.</h2>
            <p className="text-center text-secondary mb-8" style={{ fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
              Most developers charge by the hour. That rewards slowness and experimentation. We work differently—diagnosing your operation first, designing systems that fit your workflow, and building with clarity and defined scope.
            </p>

            <div className="grid grid-3" style={{ maxWidth: '1100px', margin: '0 auto' }}>
              <div className="card">
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: '#6B8F71',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '1.5rem'
                }}>
                  1
                </div>
                <h4 className="mb-3">Qualify</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  We ensure alignment before spending time on discovery. If budget or scope don't match, we'll tell
                  you upfront.
                </p>
              </div>

              <div className="card">
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: '#6B8F71',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '1.5rem'
                }}>
                  2
                </div>
                <h4 className="mb-3">Diagnose</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  We identify operational bottlenecks and understand the business impact. This isn't about what you
                  want built—it's about what actually needs to be fixed.
                </p>
              </div>

              <div className="card">
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: '#6B8F71',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '1.5rem'
                }}>
                  3
                </div>
                <h4 className="mb-3">Design</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  We architect the solution based on your operational reality. Clear scope, defined outcomes, structured
                  approach.
                </p>
              </div>

              <div className="card">
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: '#6B8F71',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '1.5rem'
                }}>
                  4
                </div>
                <h4 className="mb-3">Build</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  We implement the system with clarity and accountability. You know what's happening, when it's
                  happening, and what's next.
                </p>
              </div>

              <div className="card">
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: '#6B8F71',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '1.5rem'
                }}>
                  5
                </div>
                <h4 className="mb-3">Optimize</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  Systems improve through use. We refine based on real operational feedback, not theoretical
                  assumptions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section">
          <div className="container-wide">
            <h2 className="text-center mb-3">Service Packages</h2>
            <p className="text-center text-secondary mb-2" style={{ fontSize: '1.125rem' }}>
              We offer both ongoing systems support and custom project work
            </p>
            <p className="text-center text-muted mb-8" style={{ fontSize: '0.9375rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
              Monthly plans cover systems support, optimization, and maintenance. Custom projects involve full
              implementations, architecture design, and system builds.
            </p>

            <div className="grid grid-3">
              {/* Basic Plan */}
              <div className="card">
                <span className="badge mb-3">SYSTEMS SUPPORT</span>
                <h3 className="mb-2">$297<span style={{ fontSize: '1rem', fontWeight: 400, color: '#71717A' }}>/month</span></h3>
                <p className="text-muted text-small mb-4">Setup: $500 - $1,000</p>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                  {[
                    'CRM setup and support',
                    '1 pipeline configuration',
                    'Basic automation workflows',
                    '1 landing page or lead form',
                    'Monthly system check'
                  ].map((feature, i) => (
                    <li key={i} style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '0.9375rem' }}>
                      ✓ {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/contact?plan=basic" className="button" style={{ width: '100%', textAlign: 'center' }}>
                  Get Started
                </Link>
              </div>

              {/* Growth Plan */}
              <div className="card" style={{ border: '2px solid #6B8F71' }}>
                <span className="badge mb-3">MOST POPULAR</span>
                <h3 className="mb-2">$497<span style={{ fontSize: '1rem', fontWeight: 400, color: '#71717A' }}>/month</span></h3>
                <p className="text-muted text-small mb-4">Setup: $1,000 - $2,000</p>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                  {[
                    'Everything in Basic',
                    'Multiple pipeline configurations',
                    'Advanced automation workflows',
                    'Funnel or multi-page system',
                    'AI automation integration',
                    'Monthly optimization calls'
                  ].map((feature, i) => (
                    <li key={i} style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '0.9375rem' }}>
                      ✓ {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/contact?plan=growth" className="button" style={{ width: '100%', textAlign: 'center' }}>
                  Get Started
                </Link>
              </div>

              {/* Advanced Plan */}
              <div className="card">
                <span className="badge badge-secondary mb-3">COMPREHENSIVE</span>
                <h3 className="mb-2">$997+<span style={{ fontSize: '1rem', fontWeight: 400, color: '#71717A' }}>/month</span></h3>
                <p className="text-muted text-small mb-4">Setup: $2,000+</p>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                  {[
                    'Everything in Growth',
                    'Full system implementation',
                    'Multi-channel automation',
                    'Advanced integrations',
                    'Custom development work',
                    'Weekly consulting and support'
                  ].map((feature, i) => (
                    <li key={i} style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '0.9375rem' }}>
                      ✓ {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/contact?plan=advanced" className="button" style={{ width: '100%', textAlign: 'center' }}>
                  Get Started
                </Link>
              </div>
            </div>

            {/* Custom Projects */}
            <div className="card" style={{ marginTop: '3rem', maxWidth: '800px', margin: '3rem auto 0' }}>
              <h3 className="mb-3">Custom Project Development</h3>
              <p className="text-secondary mb-4" style={{ fontSize: '1rem' }}>
                Need a full system build beyond ongoing support? We take on custom projects including operational
                software, enterprise integrations, and specialized automation systems.
              </p>
              <p className="text-secondary mb-4" style={{ fontSize: '1rem' }}>
                <strong>Pricing:</strong> Custom quotes based on scope and requirements (typically $3,000 - $25,000+)
              </p>
              <Link href="/contact" className="button">
                Discuss Your Project
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section section-alt">
          <div className="container-wide text-center">
            <h2 className="mb-3">Ready to Build a System for Your Business?</h2>
            <p className="text-large text-secondary mb-6" style={{ maxWidth: '700px', margin: '0 auto 2.5rem' }}>
              If your business is dealing with fragmented tools, manual coordination, or unclear workflows, let's talk
              about what a structured system could look like.
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
