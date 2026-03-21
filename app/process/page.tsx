import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProcessPage() {
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
            <h1 className="mb-4">How We Work</h1>
            <div className="accent-line" style={{ margin: '1.5rem auto' }}></div>
            <p className="text-large text-secondary" style={{ maxWidth: '800px', margin: '0 auto' }}>
              We don't bill for time. We build for outcomes. Here's how our process creates clarity and delivers results.
            </p>
          </div>
        </section>

        {/* Pricing Philosophy */}
        <section className="section">
          <div className="container-wide" style={{ maxWidth: '900px' }}>
            <div className="accent-line"></div>
            <h2 className="mb-4 text-center">We Don't Bill for Time. We Build for Outcomes.</h2>
            <p className="text-large mb-6 text-center" style={{ maxWidth: '750px', margin: '0 auto 3rem' }}>
              Most developers charge by the hour. That rewards slowness and experimentation.
            </p>

            <div className="grid grid-2" style={{ gap: '3rem' }}>
              <div className="card" style={{ background: '#F8FAF9', borderLeft: '4px solid #E4E4E7' }}>
                <h4 className="mb-3" style={{ color: '#71717A' }}>Hourly Billing</h4>
                <p className="text-secondary mb-3">
                  Like being a taxi driver in a traffic jam—your income is tied to the friction of the journey, not
                  the value of the destination.
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '0.9375rem' }}>
                    ✗ Penalizes efficiency
                  </li>
                  <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '0.9375rem' }}>
                    ✗ Rewards experimentation on your dime
                  </li>
                  <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '0.9375rem' }}>
                    ✗ Unclear total costs
                  </li>
                  <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '0.9375rem' }}>
                    ✗ No accountability for results
                  </li>
                </ul>
              </div>

              <div className="card" style={{ borderLeft: '4px solid #6B8F71' }}>
                <h4 className="mb-3" style={{ color: '#6B8F71' }}>Value-Based Pricing</h4>
                <p className="text-secondary mb-3">
                  Like selling a teleporter—the client pays for the instant outcome, and you're rewarded for
                  efficiency, not penalized.
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '0.9375rem' }}>
                    ✓ Rewards speed and expertise
                  </li>
                  <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '0.9375rem' }}>
                    ✓ Clear pricing upfront
                  </li>
                  <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '0.9375rem' }}>
                    ✓ Defined scope and outcomes
                  </li>
                  <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '0.9375rem' }}>
                    ✓ Results-focused approach
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="section section-alt">
          <div className="container-wide">
            <h2 className="text-center mb-3">Our 5-Step Process</h2>
            <p className="text-center text-secondary mb-8" style={{ fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
              Structured, diagnostic, and consultative. Not a generic sales pitch.
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
                <h4 className="mb-3">Capture</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  You submit a contact form with your project details. We review your requirements and business context.
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
                <h4 className="mb-3">Qualify</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  We ensure alignment before spending time on discovery. If budget or scope don't match, we'll tell
                  you upfront. Automated qualification filters misaligned inquiries.
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
                <h4 className="mb-3">Diagnose</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  We identify operational bottlenecks and understand the business impact. This isn't about what you
                  want built—it's about what actually needs to be fixed. We ask: "How many leads are you losing?
                  What's the revenue impact?"
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
                <h4 className="mb-3">Present</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  We present a clear proposal with defined scope, outcomes, timeline, and pricing. You know exactly
                  what you're getting before any work begins.
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
                <h4 className="mb-3">Execute</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  We build, test, deploy, and optimize. You know what's happening, when it's happening, and what's
                  next. Clear communication, defined milestones, structured delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnostic Call */}
        <section className="section">
          <div className="container-wide" style={{ maxWidth: '900px' }}>
            <div className="card" style={{ borderLeft: '4px solid #6B8F71' }}>
              <h3 className="mb-4">What Happens on a Diagnostic Call?</h3>
              <p className="text-large mb-4">
                This isn't a sales pitch. It's a diagnostic session to understand your operational reality.
              </p>

              <div className="grid grid-2" style={{ gap: '2rem' }}>
                <div>
                  <h4 className="mb-3" style={{ color: '#6B8F71' }}>We Ask Questions Like:</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                      • How many leads are you losing per week?
                    </li>
                    <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                      • What's the revenue impact of your current process?
                    </li>
                    <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                      • Where do handoffs break down in your workflow?
                    </li>
                    <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                      • What manual work is consuming your team's time?
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3" style={{ color: '#6B8F71' }}>We Don't Ask:</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                      • "Do you want this in React or Vue?"
                    </li>
                    <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                      • "What features do you need?"
                    </li>
                    <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                      • "Can you send over your tech specs?"
                    </li>
                  </ul>

                  <p className="text-secondary" style={{ fontSize: '1rem', marginTop: '1.5rem' }}>
                    We focus on business problems, not technical preferences. Our job is to diagnose what's costing
                    you money and prescribe the right solution.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '2px solid rgba(107, 143, 113, 0.1)' }}>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  <strong>No pressure to buy.</strong> The goal is clarity on what would actually solve your problem.
                  If we're not a fit, we'll tell you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Scope Protection */}
        <section className="section section-alt">
          <div className="container-wide" style={{ maxWidth: '900px' }}>
            <h2 className="mb-4 text-center">Scope Protection Policy</h2>
            <p className="text-large mb-6 text-center" style={{ maxWidth: '750px', margin: '0 auto 3rem' }}>
              We protect both of us from scope creep with clear boundaries and change order processes.
            </p>

            <div className="card">
              <h4 className="mb-3" style={{ color: '#6B8F71' }}>Change Order Policy</h4>
              <p className="text-secondary mb-4">
                Any out-of-scope request must be documented, quoted, approved, and paid BEFORE execution. This
                protects your budget and our timeline.
              </p>

              <h4 className="mb-3" style={{ color: '#6B8F71' }}>What Happens When Scope Changes:</h4>
              <ol style={{ paddingLeft: '1.5rem', color: '#52525B', fontSize: '1rem' }}>
                <li style={{ marginBottom: '0.75rem' }}>
                  Request is documented in writing
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  We provide a quote for the additional work
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  You approve the scope and cost
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  Payment is processed
                </li>
                <li>
                  Work begins
                </li>
              </ol>

              <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '2px solid rgba(107, 143, 113, 0.1)' }}>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  <strong>We can adjust the scope, but not reduce the value.</strong> If you need to change direction,
                  we'll redesign the solution—not just remove features and keep the same price.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container-wide text-center">
            <h2 className="mb-3">Ready to Start the Process?</h2>
            <p className="text-large text-secondary mb-6" style={{ maxWidth: '700px', margin: '0 auto 2.5rem' }}>
              Schedule a diagnostic call to understand your operational challenges and explore solutions.
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
