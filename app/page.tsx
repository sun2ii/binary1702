import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <main style={{ textAlign: 'center', maxWidth: '800px', padding: '6rem 2rem' }}>
        <section>
          <h1>Everything is Simple, Finally.</h1>
          <p>We design simple systems that replace chaos with clarity, accelerating your business.</p>
          <Link href="/qr" className="button" style={{ fontSize: '1.125rem' }}>
            Create Your QR Profile
          </Link>
        </section>

        <section style={{ marginTop: '3rem' }}>
          <h2>How it works</h2>
          <ul style={{ listStyle: 'none', textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
            {[
              'We trace how value moves through your business',
              "We uncover what's duplicated, broken, or invisible",
              'We design the right system that removes those bottlenecks',
              'You use it. Ongoing refinement until the system feels complete.',
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#2D2D2D',
                  paddingLeft: '1.5rem',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    color: '#6B8F71',
                  }}
                >
                  •
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section style={{ marginTop: '3rem' }}>
          <h2>Who this is for</h2>
          <p>
            If your business feels scattered, putting everything into one system isn't just the right decision, it's
            the right investment.
          </p>
        </section>

        <section style={{ marginTop: '3rem' }}>
          <h2>Why teams come to me</h2>
          <p>
            Most teams don't need more tools.
            <br />
            They need fewer places to think.
          </p>
          <p>I help you replace scattered systems with one clear setup, built around how your business actually works.</p>
        </section>
      </main>
    </div>
  );
}
