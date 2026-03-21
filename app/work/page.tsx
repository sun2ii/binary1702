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
            <h1 className="mb-4">10 Production Systems. Here Are The Flagship Projects.</h1>
            <div className="accent-line" style={{ margin: '1.5rem auto' }}></div>
            <p className="text-large text-secondary" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Binary 1702 builds operational systems—AI, automation, and platforms—that replace manual workflows
              and give businesses visibility and control.
            </p>
          </div>
        </section>

        {/* Featured Systems Divider */}
        <section className="section" style={{ paddingBottom: '1rem' }}>
          <div className="container-wide text-center">
            <div className="accent-line"></div>
            <h2 className="mb-2">Featured Systems</h2>
            <p className="text-secondary" style={{ fontSize: '1rem' }}>
              Production platforms with proven metrics and real-world impact
            </p>
          </div>
        </section>

        {/* MyFencer AI Chatbot */}
        <section className="section" style={{ paddingTop: '2rem' }}>
          <div className="container-wide" style={{ maxWidth: '1000px' }}>
            <div className="card" style={{ borderLeft: '4px solid #6B8F71' }}>
              <span className="badge mb-3">AI & AUTOMATION</span>
              <h2 className="mb-4">MyFencer AI — Customer Support Chatbot</h2>

              <div className="grid grid-2" style={{ gap: '2rem', marginBottom: '2rem' }}>
                <div>
                  <h4 className="mb-3" style={{ color: '#6B8F71' }}>The Problem</h4>
                  <p className="text-secondary">
                    A fence installation company was overwhelmed with pricing questions, material inquiries, and
                    installation guidance requests. Their support team couldn't scale to handle 500+ customer
                    interactions per month without significant hiring costs.
                  </p>
                </div>
                <div>
                  <h4 className="mb-3" style={{ color: '#6B8F71' }}>The Solution</h4>
                  <p className="text-secondary">
                    AI-powered chatbot with RAG (Retrieval-Augmented Generation) trained on 5,397 searchable
                    knowledge chunks covering fence pricing, materials, and installation processes. Deployed at
                    myfencer.ai with multimodal support for image and PDF uploads.
                  </p>
                </div>
              </div>

              <h4 className="mb-3" style={{ color: '#6B8F71' }}>Key Metrics</h4>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                  ✓ 500 monthly active users
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                  ✓ 5,397 knowledge chunks via pgvector semantic search
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                  ✓ 200-800ms first token response time
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                  ✓ Multimodal AI (processes images and PDFs)
                </li>
              </ul>

              <p className="text-small text-muted">
                Built with: Next.js 15, Supabase Postgres + pgvector, xAI Grok-2-Vision, OpenAI embeddings, Vercel AI SDK
              </p>

              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '2px solid rgba(107, 143, 113, 0.1)' }}>
                <a
                  href="https://myfencer.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                  style={{ display: 'inline-block' }}
                >
                  Visit myfencer.ai →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* emp.care */}
        <section className="section section-alt">
          <div className="container-wide" style={{ maxWidth: '1000px' }}>
            <div className="card" style={{ borderLeft: '4px solid #6B8F71' }}>
              <span className="badge mb-3">HEALTHCARE OPERATIONS</span>
              <h2 className="mb-4">emp.care — Elder Care Operations Platform</h2>

              <div className="grid grid-2" style={{ gap: '2rem', marginBottom: '2rem' }}>
                <div>
                  <h4 className="mb-3" style={{ color: '#6B8F71' }}>The Problem</h4>
                  <p className="text-secondary">
                    Elder care agencies juggle inquiries, referral tracking, patient conversion, staff coordination,
                    and service logging across scattered spreadsheets. No visibility into the pipeline, inconsistent
                    follow-up, and compliance risks from incomplete audit trails.
                  </p>
                </div>
                <div>
                  <h4 className="mb-3" style={{ color: '#6B8F71' }}>The Solution</h4>
                  <p className="text-secondary">
                    Full operational platform managing lead intake → patient pipeline → facility workflows → care
                    tracking. Compliance-ready audit logs, multi-role access control, and structured state
                    transitions from inquiry to active care.
                  </p>
                </div>
              </div>

              <h4 className="mb-3" style={{ color: '#6B8F71' }}>Key Features</h4>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                  ✓ Complete patient lifecycle (intake → active care)
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                  ✓ 5 user roles (master, care manager, caregiver, marketing, admin)
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                  ✓ Compliance-ready temporal audit trails
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                  ✓ Full workflow: referral sources → leads → patients → services
                </li>
              </ul>

              <p className="text-small text-muted">
                Built with: Next.js 14, Neon Postgres, Drizzle ORM, React Hook Form, Zod validation
              </p>

              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '2px solid rgba(107, 143, 113, 0.1)' }}>
                <a
                  href="https://emp.care"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                  style={{ display: 'inline-block' }}
                >
                  Visit emp.care →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* LouCanette Admin Portal */}
        <section className="section">
          <div className="container-wide" style={{ maxWidth: '1000px' }}>
            <div className="card" style={{ borderLeft: '4px solid #6B8F71' }}>
              <span className="badge mb-3">E-COMMERCE AUTOMATION</span>
              <h2 className="mb-4">LouCanette Admin Portal — Multi-Region Invoice Generator</h2>

              <div className="grid grid-2" style={{ gap: '2rem', marginBottom: '2rem' }}>
                <div>
                  <h4 className="mb-3" style={{ color: '#6B8F71' }}>The Problem</h4>
                  <p className="text-secondary">
                    E-commerce business shipping to Greece, China, and multiple regions needed different invoice
                    formats with VAT calculations, currency conversions, and bilingual support. Manual invoice
                    creation was error-prone and time-consuming.
                  </p>
                </div>
                <div>
                  <h4 className="mb-3" style={{ color: '#6B8F71' }}>The Solution</h4>
                  <p className="text-secondary">
                    Automated invoice generation system integrated with Shopify. Pulls order data, calculates
                    region-specific VAT, handles currency conversion, generates bilingual PDFs (English/Chinese
                    for China invoices), and supports custom reseller formats.
                  </p>
                </div>
              </div>

              <h4 className="mb-3" style={{ color: '#6B8F71' }}>Key Features</h4>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                  ✓ Multi-region invoice formats (Greece, China, billing, custom)
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                  ✓ VAT calculator with region-specific rates
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                  ✓ Currency conversion (EUR, USD, CNY)
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                  ✓ Bilingual PDF generation (Chinese/English)
                </li>
              </ul>

              <p className="text-small text-muted">
                Built with: Next.js 16, Drizzle ORM, Vercel Postgres, PDFKit, Shopify Admin API
              </p>

              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '2px solid rgba(107, 143, 113, 0.1)' }}>
                <p className="text-secondary text-small">
                  Admin portal for LouCanette e-commerce operations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mini-Enterprise Games */}
        <section className="section section-alt">
          <div className="container-wide" style={{ maxWidth: '1000px' }}>
            <div className="card" style={{ borderLeft: '4px solid #6B8F71' }}>
              <span className="badge mb-3">HEALTHCARE / PWA</span>
              <h2 className="mb-4">Mini-Enterprise Games — Cognitive Wellness Platform</h2>

              <div className="grid grid-2" style={{ gap: '2rem', marginBottom: '2rem' }}>
                <div>
                  <h4 className="mb-3" style={{ color: '#6B8F71' }}>The Problem</h4>
                  <p className="text-secondary">
                    Family caregivers and memory care facilities needed structured cognitive activities for elderly
                    patients with dementia. Existing solutions were either too complex, too competitive, or lacked
                    the calm, dignity-focused approach appropriate for this population.
                  </p>
                </div>
                <div>
                  <h4 className="mb-3" style={{ color: '#6B8F71' }}>The Solution</h4>
                  <p className="text-secondary">
                    Progressive Web App with 6 gentle cognitive games designed specifically for dementia patients.
                    Large buttons, haptic feedback, procedural sound synthesis (Web Audio API), and calm visual
                    design. No failure shame, no timers (except controlled environments).
                  </p>
                </div>
              </div>

              <h4 className="mb-3" style={{ color: '#6B8F71' }}>Key Features</h4>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                  ✓ 6 cognitive games (Color Memory, Koi Pond, Tap Race, Rhythm Tap, Idle Miner, Word Solitaire)
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                  ✓ PWA installable to home screen (works offline)
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                  ✓ Web Audio API procedural synthesis (no audio files)
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                  ✓ Haptic feedback + screen shake for engagement
                </li>
              </ul>

              <p className="text-small text-muted">
                Built with: Next.js 15, Prisma + SQLite, Web Audio API, PWA service workers
              </p>

              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '2px solid rgba(107, 143, 113, 0.1)' }}>
                <a
                  href="https://minienterprise.games"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                  style={{ display: 'inline-block' }}
                >
                  Visit minienterprise.games →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Spine (spyneos) */}
        <section className="section">
          <div className="container-wide" style={{ maxWidth: '1000px' }}>
            <div className="card" style={{ borderLeft: '4px solid #6B8F71' }}>
              <span className="badge mb-3">OPERATIONAL MANAGEMENT</span>
              <h2 className="mb-4">Spine (spyneos) — Operational Blueprint System</h2>

              <div className="grid grid-2" style={{ gap: '2rem', marginBottom: '2rem' }}>
                <div>
                  <h4 className="mb-3" style={{ color: '#6B8F71' }}>The Problem</h4>
                  <p className="text-secondary">
                    Managing complex client projects requires coordinating narrative documentation, workflow
                    diagrams, and task execution. Traditional tools separate these layers, creating
                    synchronization problems and unclear handoffs.
                  </p>
                </div>
                <div>
                  <h4 className="mb-3" style={{ color: '#6B8F71' }}>The Solution</h4>
                  <p className="text-secondary">
                    Three-plane knowledge management system: Notes (narrative with draft/published states),
                    Workflow (Mermaid diagram blueprints), and Ledger (task tracking + work logs). One note active
                    per client, operational spine diagrams + user flow diagrams per project.
                  </p>
                </div>
              </div>

              <h4 className="mb-3" style={{ color: '#6B8F71' }}>Key Features</h4>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                  ✓ Mermaid.js diagram rendering (operational blueprints)
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                  ✓ State machine (draft → active → published notes)
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                  ✓ Local-first with cloud sync (localStorage + Postgres)
                </li>
                <li style={{ padding: '0.5rem 0', color: '#52525B', fontSize: '1rem' }}>
                  ✓ Immutable published notes (audit trail preservation)
                </li>
              </ul>

              <p className="text-small text-muted">
                Built with: Next.js 16, Drizzle ORM, Neon Postgres, Mermaid.js, shadcn/ui
              </p>

              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '2px solid rgba(107, 143, 113, 0.1)' }}>
                <a
                  href="https://spyneos.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                  style={{ display: 'inline-block' }}
                >
                  Visit spyneos.com →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Systems & Internal Tools */}
        <section className="section section-alt">
          <div className="container-wide" style={{ maxWidth: '1100px' }}>
            <div className="accent-line"></div>
            <h2 className="mb-4 text-center">Additional Systems & Internal Tools</h2>
            <p className="text-center text-secondary mb-8" style={{ fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
              Supporting infrastructure and specialized tools built for specific operational needs.
            </p>

            <div className="grid grid-2" style={{ gap: '2rem' }}>
              <div className="card" style={{ borderLeft: '3px solid #E4E4E7' }}>
                <span className="badge badge-secondary mb-2">COMPLIANCE & ENTERPRISE</span>
                <h4 className="mb-2">Atlas</h4>
                <p className="text-secondary text-small">
                  Multi-tenant ISO 27001 compliance tracking system for MSPs managing 93 controls across multiple client organizations. In development.
                </p>
              </div>

              <div className="card" style={{ borderLeft: '3px solid #E4E4E7' }}>
                <span className="badge badge-secondary mb-2">PERSONAL / PWA</span>
                <h4 className="mb-2">Shavat</h4>
                <p className="text-secondary text-small" style={{ marginBottom: '0.75rem' }}>
                  Offline-first Bible reading PWA with local data persistence. Genesis complete, zero backend, installable to home screen.
                </p>
                <a
                  href="https://shavat.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#6B8F71', fontWeight: 500, fontSize: '0.875rem' }}
                >
                  Visit shavat.vercel.app →
                </a>
              </div>

              <div className="card" style={{ borderLeft: '3px solid #E4E4E7' }}>
                <span className="badge badge-secondary mb-2">E-COMMERCE</span>
                <h4 className="mb-2">Loucanette Website</h4>
                <p className="text-secondary text-small" style={{ marginBottom: '0.75rem' }}>
                  E-commerce product showcase for industrial can sealing equipment with Shopify integration and multilingual support.
                </p>
                <a
                  href="https://loucanette.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#6B8F71', fontWeight: 500, fontSize: '0.875rem' }}
                >
                  Visit loucanette.com →
                </a>
              </div>

              <div className="card" style={{ borderLeft: '3px solid #E4E4E7' }}>
                <span className="badge badge-secondary mb-2">FRAMEWORK</span>
                <h4 className="mb-2">Clarity Engine</h4>
                <p className="text-secondary text-small">
                  Rapid Next.js + NextAuth v5 bootstrap framework for spinning up production-ready authenticated applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What This Proves */}
        <section className="section">
          <div className="container-wide" style={{ maxWidth: '900px' }}>
            <div className="accent-line"></div>
            <h2 className="mb-4 text-center">What These Systems Prove</h2>
            <p className="text-large mb-6 text-center" style={{ maxWidth: '750px', margin: '0 auto 3rem' }}>
              Binary 1702 doesn't guess. We've built AI chatbots, operational platforms, multi-region automation,
              and healthcare systems—all deployed, all working.
            </p>

            <div className="grid grid-3" style={{ gap: '2rem' }}>
              <div className="card">
                <h4 className="mb-3" style={{ color: '#6B8F71' }}>We've Already Built This</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  Not learning on your dime. Not prototyping in production. 10 systems deployed means
                  we bring proven patterns to every project.
                </p>
              </div>

              <div className="card">
                <h4 className="mb-3" style={{ color: '#6B8F71' }}>We Build Systems, Not Features</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  These aren't static websites or isolated apps. They're operational systems that run
                  businesses—multi-role access, compliance tracking, full workflow automation.
                </p>
              </div>

              <div className="card">
                <h4 className="mb-3" style={{ color: '#6B8F71' }}>Structured Execution</h4>
                <p className="text-secondary" style={{ fontSize: '1rem' }}>
                  5,397 knowledge chunks, 500 users, multi-role systems—these metrics prove production-grade
                  architecture and real-world scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container-wide text-center">
            <h2 className="mb-3">Need a System Like These?</h2>
            <p className="text-large text-secondary mb-6" style={{ maxWidth: '700px', margin: '0 auto 2.5rem' }}>
              If your business needs AI automation, operational platforms, or workflow systems, we've already
              solved similar problems. Let's apply that experience to your operations.
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
