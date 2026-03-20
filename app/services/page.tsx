import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        {/* Page Header */}
        <section className="section-hero" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
          <div className="container-wide text-center">
            <h1 className="mb-4">Services</h1>
            <p className="text-large text-secondary" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Comprehensive technology solutions for modern businesses
            </p>
          </div>
        </section>

        {/* Custom Software */}
        <section className="section" id="custom-software">
          <div className="container-wide" style={{ maxWidth: '900px' }}>
            <h2 className="mb-4">Custom Software Development</h2>
            <p className="text-large mb-4">
              Replace spreadsheet chaos and centralize fragmented workflows with structured operational systems designed
              specifically for your business. We build software that makes operations clearer, more accountable, and easier
              to run.
            </p>
            <p className="text-secondary mb-4">
              Our custom software services include internal business systems, data management platforms, lead tracking
              systems, dashboards, reporting tools, and specialized applications that solve unique operational challenges.
              Every solution is built with scalability, security, and long-term maintainability in mind.
            </p>

            <div className="card" style={{ marginTop: '2rem', background: '#F8FAF9', border: '1px solid #D4E4D7' }}>
              <h4 className="mb-3">Example: emp.care — Elder Care Operations Platform</h4>
              <p className="text-secondary" style={{ fontSize: '1rem', marginBottom: '1rem' }}>
                A production system spanning intake, patient conversion, staff workflows, care planning, and service logging.
                Built to manage the full operational path from inquiry to active care with structured lead tracking,
                role-based access, and audit-ready workflow history.
              </p>
              <Link href="/work" style={{ color: '#6B8F71', fontWeight: 500 }}>
                View the full case study →
              </Link>
            </div>

            <h3 className="mb-3 mt-6">What's Included</h3>
            <div className="grid grid-2">
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Requirements analysis and system design
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Custom application development
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Database architecture and implementation
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ User interface and experience design
                </li>
              </ul>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Testing and quality assurance
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Deployment and production setup
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Documentation and training
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Ongoing maintenance options
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Business Automation */}
        <section className="section section-alt" id="automation">
          <div className="container-wide" style={{ maxWidth: '900px' }}>
            <h2 className="mb-4">Business Automation Systems</h2>
            <p className="text-large mb-4">
              Reduce manual follow-up, eliminate repetitive admin work, and speed response times with intelligent
              automation. We build AI-driven workflows, automated follow-up systems, and smart triggers that handle the
              work that shouldn't require human attention.
            </p>
            <p className="text-secondary mb-4">
              From lead qualification to customer onboarding, our automation systems eliminate bottlenecks and ensure
              nothing falls through the cracks. Every workflow is designed to integrate seamlessly with your existing
              tools and adapt as your business evolves.
            </p>

            <h3 className="mb-3 mt-6">What's Included</h3>
            <div className="grid grid-2">
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Workflow automation design
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ AI-powered chat and response systems
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Email and SMS automation
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Lead qualification and routing
                </li>
              </ul>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Multi-channel automation workflows
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Integration with existing tools
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Performance monitoring and optimization
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Custom trigger and action logic
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CRM Implementation */}
        <section className="section" id="crm">
          <div className="container-wide" style={{ maxWidth: '900px' }}>
            <h2 className="mb-4">CRM & Lead Management</h2>
            <p className="text-large mb-4">
              Create visibility into your pipeline, structure lead handling, and make follow-up ownership clear. We
              specialize in GoHighLevel implementation, optimization, and custom pipeline design that turns leads into
              clients.
            </p>
            <p className="text-secondary mb-4">
              Our CRM services go beyond basic setup. We design custom workflows that match your sales process, automate
              follow-ups, segment contacts intelligently, and provide actionable insights through custom dashboards and
              reports.
            </p>

            <h3 className="mb-3 mt-6">What's Included</h3>
            <div className="grid grid-2">
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ GoHighLevel CRM setup
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Custom pipeline architecture
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Lead capture and qualification systems
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Automated follow-up sequences
                </li>
              </ul>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Contact management and segmentation
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Calendar and booking integrations
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Reporting dashboards
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Team training and documentation
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* API Integrations */}
        <section className="section section-alt" id="integrations">
          <div className="container-wide" style={{ maxWidth: '900px' }}>
            <h2 className="mb-4">API Integrations & Connected Systems</h2>
            <p className="text-large mb-4">
              Reduce duplicate entry and connect tools that currently break handoffs to create coherent operational
              systems. We build custom API integrations that eliminate manual data entry and create unified systems from
              disparate tools.
            </p>
            <p className="text-secondary mb-4">
              Whether you need to sync customer data between platforms, automate order processing, or build custom
              integrations with third-party services, we design robust connections that keep your systems in perfect
              harmony.
            </p>

            <h3 className="mb-3 mt-6">What's Included</h3>
            <div className="grid grid-2">
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Third-party API integration
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Custom webhook development
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Data synchronization systems
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Automated data transfer workflows
                </li>
              </ul>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Legacy system integration
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Real-time data updates
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ Error handling and monitoring
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                  ✓ API documentation and support
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="section">
          <div className="container-wide">
            <h2 className="text-center mb-3">Service Packages & Pricing</h2>
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

                <h4 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Perfect for:</h4>
                <p className="text-secondary text-small mb-4">
                  Small businesses getting started with structured CRM and automation
                </p>

                <h4 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Includes:</h4>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                  {[
                    'CRM setup and support (GoHighLevel)',
                    '1 pipeline configuration',
                    'Basic automation workflows',
                    '1 landing page or lead form',
                    'Email support',
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

                <h4 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Perfect for:</h4>
                <p className="text-secondary text-small mb-4">
                  Growing businesses ready to scale operations and improve conversion
                </p>

                <h4 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Includes:</h4>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                  {[
                    'Everything in Basic',
                    'Multiple pipeline configurations',
                    'Advanced automation workflows',
                    'Funnel or multi-page system',
                    'Lead capture optimization',
                    'AI automation (chat, qualification)',
                    'Forms and integrations',
                    'Monthly optimization calls',
                    'Priority support'
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

                <h4 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Perfect for:</h4>
                <p className="text-secondary text-small mb-4">
                  Established businesses requiring comprehensive solutions and dedicated support
                </p>

                <h4 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Includes:</h4>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                  {[
                    'Everything in Growth',
                    'Full system implementation',
                    'Multi-channel automation',
                    'Advanced AI workflows',
                    'Custom website or application',
                    'Advanced API integrations',
                    'Dedicated consulting',
                    'Weekly optimization calls',
                    'Custom reporting dashboards'
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
          </div>
        </section>

        {/* Custom Projects */}
        <section className="section section-alt">
          <div className="container-wide text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="mb-4">Custom Project Development</h2>
            <p className="text-large text-secondary mb-4">
              Need something beyond our standard packages? We take on custom projects including complex software
              development, enterprise integrations, and specialized automation systems.
            </p>
            <p className="text-secondary mb-6">
              <strong>Pricing:</strong> Custom quotes based on scope and requirements (typically $3,000 - $25,000+)
            </p>
            <Link href="/contact" className="button button-large">
              Discuss Your Project
            </Link>
          </div>
        </section>

        {/* Client Responsibility */}
        <section className="section">
          <div className="container-wide" style={{ maxWidth: '900px' }}>
            <div className="card">
              <h3 className="mb-4">Service Delivery & Client Responsibilities</h3>
              <p className="text-secondary mb-4">
                Binary 1702 LLC provides setup, configuration, strategy, and ongoing support. To ensure transparency
                and avoid hidden costs, clients are responsible for third-party platform subscriptions and usage fees.
              </p>

              <div className="grid grid-2">
                <div>
                  <h4 className="mb-3">Client Provides:</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                      • GoHighLevel subscription (if applicable)
                    </li>
                    <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                      • SMS/email sending services (Twilio, etc.)
                    </li>
                    <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                      • Domains and hosting
                    </li>
                    <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                      • AI tools and API usage costs
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3">Binary 1702 Provides:</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                      • System setup and configuration
                    </li>
                    <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                      • Strategy and planning
                    </li>
                    <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                      • Development and implementation
                    </li>
                    <li style={{ padding: '0.5rem 0', color: '#52525B' }}>
                      • Ongoing support and optimization
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-small text-muted" style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #E4E4E7' }}>
                All costs are transparently discussed before project initiation. No surprise fees or hidden charges.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section section-alt">
          <div className="container-wide text-center">
            <h2 className="mb-3">Ready to Get Started?</h2>
            <p className="text-large text-secondary mb-6" style={{ maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Schedule a discovery call to discuss which package is right for your business
            </p>
            <Link href="/contact" className="button button-large">
              Schedule Discovery Call
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
