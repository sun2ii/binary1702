import type { Metadata } from 'next'
import IntakeForm from './IntakeForm'
import './letip.css'

export const metadata: Metadata = {
  title: 'Binary 1702 — Websites & Systems for Owner-Led Businesses',
  description: 'We build fast, custom websites for owner-led service businesses — and then fix the systems behind them. Sacramento-based. Free 30-minute audit.',
}

export default function LetipPage() {
  return (
    <div className="letip-page">
      <div className="launch-banner">
        Launch special — first 3 signups get the full build for $997 instead of $1,500. <a href="#audit">Claim your spot →</a>
      </div>

      <nav>
        <div className="container">
          <div className="logo">Binary <span>1702</span></div>
          <a href="#audit" className="nav-cta">Free Audit</a>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <h1>Your business is real.<br /><span className="accent">Your website should be too.</span></h1>
          <p className="subhead">
            We build fast, custom websites for owner-led service businesses in Sacramento — and fix the systems behind them. No templates. No agency markup. Just work that makes you found, trusted, and easier to do business with.
          </p>
          <div className="cta-row">
            <a href="#audit" className="btn-primary">Get a Free 30-Min Audit</a>
            <a href="#offer" className="btn-ghost">See the Offer</a>
          </div>
        </div>
      </header>

      <section>
        <div className="container">
          <h2>If any of this sounds familiar, we should talk.</h2>
          <p className="section-lede">You're busy enough to be successful, small enough that you're still answering the phone yourself. Most of our clients showed up with one of these problems.</p>
          <div className="grid-3">
            <div className="card">
              <h3>"My site looks like 2014."</h3>
              <p>A Wix page from years ago that nobody's touched. It works, but it doesn't make you look like the business you've become.</p>
            </div>
            <div className="card">
              <h3>"I can't be found on Google."</h3>
              <p>Customers can't find you when they search your service in your area. Your competitor with the worse work shows up first.</p>
            </div>
            <div className="card">
              <h3>"Leads slip through the cracks."</h3>
              <p>The contact form goes to an email nobody checks. Quotes take three days. Missed calls don't get returned. Real money is leaking and you can feel it.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="offer">
        <div className="container">
          <h2>The Offer</h2>
          <p className="section-lede">Start with a free audit. Build a real site. Get the systems behind it working. Each step earns the next.</p>

          <div className="offer-grid">
            <div className="offer-card">
              <div className="step">Step 1</div>
              <h3>The Free Audit</h3>
              <div className="price">$0 <small>/ 30 minutes</small></div>
              <ul>
                <li>Walk through your business with us</li>
                <li>We find the leaks, you decide what to fix</li>
                <li>No pitch, no pressure, no follow-up spam</li>
              </ul>
            </div>

            <div className="offer-card featured">
              <div className="step">Step 2 · Launch Special</div>
              <h3>The Build</h3>
              <div className="price"><del>$1,500</del>$997 <small>first 3 only</small></div>
              <ul>
                <li>Custom site, not a template</li>
                <li>Up to 5 pages, mobile-first, fast</li>
                <li>Local SEO + Google Business setup</li>
                <li>Contact forms that text and email you</li>
                <li>Live in 2–3 weeks</li>
              </ul>
            </div>

            <div className="offer-card">
              <div className="step">Step 3</div>
              <h3>The Monthly</h3>
              <div className="price">$97 <small>/ month</small></div>
              <ul>
                <li>Hosting, backups, security, uptime</li>
                <li>Up to 2 content updates per month</li>
                <li>Quarterly check-in with a real human</li>
                <li>Cancel anytime, no contract</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>The systems work is where this gets real.</h2>
          <p className="section-lede">Once we're inside your business, we usually spot a few things that are costing you money every week — missed quotes, manual follow-up, scattered customer data, tools that don't talk to each other. We fix them, project by project. Most clients add one within their first six months.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Who you're working with</h2>
          <p className="section-lede">No offshore team. No junior devs. No account manager between you and the work. Just the two of us — and you'll work with both.</p>
          <div className="pair">
            <div className="person">
              <h3>Ben — The builder</h3>
              <p>Software engineer. Builds the sites, designs the systems, and figures out how to fix what's broken inside your business. Elbow-deep in the technical pieces.</p>
            </div>
            <div className="person">
              <h3>Gladys — The voice</h3>
              <p>Direct, warm, and reads people in seconds. She shapes how everything sounds — the conversations, the website copy, the way we explain what we're doing. The human side of every project.</p>
            </div>
          </div>
          <p className="section-lede" style={{marginTop: '40px', marginBottom: '0'}}>We work as a pair. You get both of us on the call, both of us on the project, both of us actually caring about your business.</p>
        </div>
      </section>

      <section id="audit">
        <div className="container">
          <IntakeForm />
        </div>
      </section>

      <footer>
        <div className="container">
          <div>© 2026 Binary 1702 LLC · Sacramento, CA</div>
          <div>
            <a href="mailto:ben@binary1702.com">ben@binary1702.com</a> ·{' '}
            <a href="tel:9165957155">(916) 595-7155</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
