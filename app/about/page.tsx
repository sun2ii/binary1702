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
              Operational systems, proven results
            </p>
          </div>
        </section>

        {/* What We Build */}
        <section className="section">
          <div className="container-wide" style={{ maxWidth: '900px' }}>
            <h2 className="mb-4 text-center">What We Build</h2>
            <p className="text-large text-secondary text-center mb-6" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Binary 1702 builds operational systems—AI, automation, and platforms—that replace manual workflows
              and give businesses visibility and control.
            </p>

            <div className="grid grid-3" style={{ gap: '2rem', marginTop: '3rem' }}>
              <div className="card">
                <h4 className="mb-2" style={{ color: '#6B8F71' }}>10 Systems</h4>
                <p className="text-secondary text-small">
                  Production systems deployed, not prototypes
                </p>
              </div>

              <div className="card">
                <h4 className="mb-2" style={{ color: '#6B8F71' }}>500 Users</h4>
                <p className="text-secondary text-small">
                  AI chatbot handling real customer support
                </p>
              </div>

              <div className="card">
                <h4 className="mb-2" style={{ color: '#6B8F71' }}>5 User Roles</h4>
                <p className="text-secondary text-small">
                  Healthcare platform with complete role-based access
                </p>
              </div>
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <Link href="/work" style={{ color: '#6B8F71', fontWeight: 500, fontSize: '1rem' }}>
                See all systems we've built →
              </Link>
            </div>
          </div>
        </section>

        {/* Philosophy: Technician to Consultant */}
        <section className="section section-alt">
          <div className="container-wide" style={{ maxWidth: '900px' }}>
            <div className="accent-line"></div>
            <h2 className="mb-4 text-center">From Technician to Consultant</h2>
            <p className="text-large mb-6 text-center" style={{ maxWidth: '750px', margin: '0 auto 3rem' }}>
              The hardest transition in tech isn't learning a new framework. It's shifting from "highly skilled
              technician taking orders" to "highly paid consultant calling the shots."
            </p>

            <div className="grid grid-2" style={{ gap: '3rem' }}>
              <div className="card" style={{ background: '#F8FAF9', borderLeft: '4px solid #E4E4E7' }}>
                <h4 className="mb-3" style={{ color: '#71717A' }}>Technician Mindset</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '0.9375rem' }}>
                    • "Do you want this in React or Vue?"
                  </li>
                  <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '0.9375rem' }}>
                    • Over-explains to prove how smart they are
                  </li>
                  <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '0.9375rem' }}>
                    • Gets dopamine from being the hero who writes complex scripts
                  </li>
                  <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '0.9375rem' }}>
                    • Says "yes" to everything (people-pleaser)
                  </li>
                  <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '0.9375rem' }}>
                    • Bills by the hour (penalized for being fast)
                  </li>
                </ul>
              </div>

              <div className="card" style={{ borderLeft: '4px solid #6B8F71' }}>
                <h4 className="mb-3" style={{ color: '#6B8F71' }}>Consultant Mindset</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '0.9375rem' }}>
                    • "How many leads are you losing per week?"
                  </li>
                  <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '0.9375rem' }}>
                    • Diagnoses business problems, not technical specs
                  </li>
                  <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '0.9375rem' }}>
                    • Prescribes solutions based on ROI and impact
                  </li>
                  <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '0.9375rem' }}>
                    • Protects scope with clear boundaries
                  </li>
                  <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '0.9375rem' }}>
                    • Charges for outcomes (rewarded for efficiency)
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-secondary text-center" style={{ marginTop: '2rem', fontSize: '1rem' }}>
              Binary 1702 operates from the consultant mindset. We don't take orders—we diagnose problems and
              prescribe solutions.
            </p>
          </div>
        </section>

        {/* Founder Story */}
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
                    Ben Basuni founded Binary 1702 to help businesses replace operational chaos with structured systems.
                    The company is built on a simple conviction: clients don't care about code—they care about outcomes.
                  </p>

                  <p className="mb-4">
                    Before Binary 1702, Ben experienced the same technician-to-consultant identity crisis that defines
                    most developers' careers. The shift from "I hope they choose me" to "This is the investment required"
                    requires what he calls "unyielding interpersonal courage." That philosophy is embedded in every
                    client engagement.
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

        {/* Freelancer vs Agency vs Binary 1702 */}
        <section className="section section-alt">
          <div className="container-wide" style={{ maxWidth: '1000px' }}>
            <div className="accent-line"></div>
            <h2 className="mb-4 text-center">Different From Freelancers. More Focused Than Agencies.</h2>
            <p className="text-large mb-6 text-center" style={{ maxWidth: '750px', margin: '0 auto 3rem' }}>
              We're not trying to be everything to everyone. Here's how we compare.
            </p>

            <div className="card">
              <div style={{ overflowX: 'auto' }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '0.9375rem'
                }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #E4E4E7' }}>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600 }}></th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: '#71717A' }}>Freelancers</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: '#71717A' }}>Agencies</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: '#6B8F71' }}>Binary 1702</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #F4F4F5' }}>
                      <td style={{ padding: '1rem', fontWeight: 500 }}>Approach</td>
                      <td style={{ padding: '1rem', color: '#52525B' }}>Learn as they go</td>
                      <td style={{ padding: '1rem', color: '#52525B' }}>Overstaffed teams</td>
                      <td style={{ padding: '1rem', color: '#52525B' }}>Proven systems</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #F4F4F5' }}>
                      <td style={{ padding: '1rem', fontWeight: 500 }}>Pricing</td>
                      <td style={{ padding: '1rem', color: '#52525B' }}>Hourly billing</td>
                      <td style={{ padding: '1rem', color: '#52525B' }}>High overhead</td>
                      <td style={{ padding: '1rem', color: '#52525B' }}>Outcome-focused</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #F4F4F5' }}>
                      <td style={{ padding: '1rem', fontWeight: 500 }}>Solutions</td>
                      <td style={{ padding: '1rem', color: '#52525B' }}>One-off fixes</td>
                      <td style={{ padding: '1rem', color: '#52525B' }}>Generic processes</td>
                      <td style={{ padding: '1rem', color: '#52525B' }}>Tailored systems</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '1rem', fontWeight: 500 }}>Experience</td>
                      <td style={{ padding: '1rem', color: '#52525B' }}>Variable</td>
                      <td style={{ padding: '1rem', color: '#52525B' }}>Junior devs assigned</td>
                      <td style={{ padding: '1rem', color: '#52525B' }}>Founder-led, 10 systems</td>
                    </tr>
                  </tbody>
                </table>
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

        {/* Final CTA */}
        <section className="section section-alt">
          <div className="container-wide text-center">
            <h2 className="mb-4">Work With Us</h2>
            <p className="text-large text-secondary mb-6" style={{ maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Experience the difference of a structured technology partner with proven systems
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
