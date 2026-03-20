import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="section-hero" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
          <div className="container-wide text-center">
            <h1 className="mb-4">About Binary 1702</h1>
            <p className="text-large text-secondary" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Your Technology Solutions Partner
            </p>
          </div>
        </section>

        {/* Why We Exist */}
        <section className="section">
          <div className="container-wide" style={{ maxWidth: '900px' }}>
            <h2 className="mb-4 text-center">Why Binary 1702 Exists</h2>
            <p className="text-large text-secondary text-center mb-6" style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
              Binary 1702 grew out of a simple conviction: businesses do not need more scattered tools. They need systems
              that make operations clearer, more accountable, and easier to run.
            </p>
            <p className="text-secondary text-center" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1rem' }}>
              That philosophy is not abstract. I've applied it in production systems like emp.care and bring the same
              structured thinking into every client engagement. The goal is always the same: replace operational chaos
              with clarity and control.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section section-alt">
          <div className="container-wide" style={{ maxWidth: '900px' }}>
            <div className="grid grid-2" style={{ gap: '3rem' }}>
              <div>
                <h2 className="mb-4">Our Mission</h2>
                <p className="text-large text-secondary">
                  To help businesses operate more efficiently and grow consistently through practical software
                  solutions, automation, and intelligent systems.
                </p>
              </div>

              <div>
                <h2 className="mb-4">Our Vision</h2>
                <p className="text-large text-secondary">
                  To become a trusted technology partner for businesses seeking custom software, smarter operations,
                  and scalable automation solutions in California and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="section">
          <div className="container-wide" style={{ maxWidth: '900px' }}>
            <h2 className="text-center mb-8">Leadership</h2>

            <div className="card">
              <div className="grid grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
                <div style={{
                  background: '#6B8F71',
                  borderRadius: '0.5rem',
                  aspectRatio: '1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '4rem',
                  fontWeight: 700
                }}>
                  BB
                </div>

                <div>
                  <h3 className="mb-2">Ben Basuni</h3>
                  <p className="text-secondary mb-4" style={{ fontSize: '1rem', fontWeight: 500 }}>
                    Founder & Technology Solutions Strategist
                  </p>

                  <p className="mb-4">
                    Ben Basuni founded Binary 1702 LLC to help businesses transform operations through practical
                    technology solutions. With expertise in custom software development, CRM implementation, and
                    business automation, he leads the company's mission to deliver structured, scalable systems.
                  </p>

                  <p className="mb-4">
                    Binary 1702 is built on the principle that technology should solve real business problems without
                    unnecessary complexity. This philosophy is tested in production through systems like emp.care and
                    applied to every client engagement with the same structured, systems-oriented approach.
                  </p>

                  <p className="text-secondary" style={{ fontSize: '1rem' }}>
                    <strong>Contact:</strong>{' '}
                    <a href="mailto:ben@binary1702.com" style={{ color: '#6B8F71' }}>
                      ben@binary1702.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section">
          <div className="container-wide">
            <h2 className="text-center mb-8">Core Values</h2>

            <div className="grid grid-3">
              <div className="card">
                <h4 className="mb-3">Clarity</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  Every project has clearly defined scope, expectations, and responsibilities.
                </p>
              </div>

              <div className="card">
                <h4 className="mb-3">Efficiency</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  Solutions are practical, functional, and implemented with speed and purpose.
                </p>
              </div>

              <div className="card">
                <h4 className="mb-3">Scalability</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  Systems are built to support growth, not just solve temporary problems.
                </p>
              </div>

              <div className="card">
                <h4 className="mb-3">Professionalism</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  Every interaction reflects a structured company, not a freelance or improvised service.
                </p>
              </div>

              <div className="card">
                <h4 className="mb-3">Accountability</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  Each party is responsible for their obligations, approvals, and operational costs.
                </p>
              </div>

              <div className="card">
                <h4 className="mb-3">Practical Innovation</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  Technology must solve real business problems without unnecessary complexity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Positioning */}
        <section className="section section-alt">
          <div className="container-wide">
            <h2 className="text-center mb-8">What We Stand For</h2>

            <div className="grid grid-3">
              <div className="text-center">
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: '#6B8F71',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: 'white',
                  fontSize: '2rem'
                }}>
                  ⚙
                </div>
                <h4 className="mb-3">Structured Company, Not Freelance</h4>
                <p className="text-secondary">
                  Professional technology partner delivering complete systems, not isolated tasks or one-off fixes.
                </p>
              </div>

              <div className="text-center">
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: '#6B8F71',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: 'white',
                  fontSize: '2rem'
                }}>
                  💡
                </div>
                <h4 className="mb-3">Solutions, Not Just Code</h4>
                <p className="text-secondary">
                  We sell structured solutions, expertise, and business transformation through technology.
                </p>
              </div>

              <div className="text-center">
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: '#6B8F71',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: 'white',
                  fontSize: '2rem'
                }}>
                  🤝
                </div>
                <h4 className="mb-3">Long-Term Partnership</h4>
                <p className="text-secondary">
                  Built on recurring relationships and sustainable business practices, not project-to-project churn.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section">
          <div className="container-wide text-center">
            <h2 className="mb-4">Work With Us</h2>
            <p className="text-large text-secondary mb-6" style={{ maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Experience the difference of a structured technology partner
            </p>
            <Link href="/contact" className="button button-large">
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
