import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      background: '#FFFFFF',
      borderTop: '1px solid #E4E4E7',
      marginTop: '5rem',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '3rem 2rem',
      }}>
        <div className="grid grid-3" style={{
          marginBottom: '2rem',
        }}>
          {/* Company Info */}
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Binary 1702 LLC</h4>
            <p className="text-secondary" style={{
              fontSize: '0.875rem',
              marginBottom: '0.5rem',
              lineHeight: '1.6',
            }}>
              Your technology solutions partner for custom software, automation, and scalable digital systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Quick Links</h4>
            <nav style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}>
              <Link href="/services" style={{
                color: '#52525B',
                fontSize: '0.875rem',
                textDecoration: 'none',
              }}>
                Services
              </Link>
              <Link href="/work" style={{
                color: '#52525B',
                fontSize: '0.875rem',
                textDecoration: 'none',
              }}>
                Work
              </Link>
              <Link href="/about" style={{
                color: '#52525B',
                fontSize: '0.875rem',
                textDecoration: 'none',
              }}>
                About
              </Link>
              <Link href="/contact" style={{
                color: '#52525B',
                fontSize: '0.875rem',
                textDecoration: 'none',
              }}>
                Contact
              </Link>
              <Link href="/qr" style={{
                color: '#52525B',
                fontSize: '0.875rem',
                textDecoration: 'none',
              }}>
                QR Profile Tool
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Contact</h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}>
              <a href="mailto:ben@binary1702.com" style={{
                color: '#52525B',
                fontSize: '0.875rem',
                textDecoration: 'none',
              }}>
                ben@binary1702.com
              </a>
              <a href="tel:+19165957155" style={{
                color: '#52525B',
                fontSize: '0.875rem',
                textDecoration: 'none',
              }}>
                +1 916-595-7155
              </a>
              <p style={{
                color: '#71717A',
                fontSize: '0.875rem',
                margin: 0,
                lineHeight: '1.6',
              }}>
                Orangevale, California
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid #E4E4E7',
          paddingTop: '2rem',
          textAlign: 'center',
        }}>
          <p style={{
            color: '#71717A',
            fontSize: '0.875rem',
            margin: 0,
          }}>
            © 2026 Binary 1702 LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
