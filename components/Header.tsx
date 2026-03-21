'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{
      background: '#FFFFFF',
      borderBottom: '1px solid #E4E4E7',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '1.5rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#2D2D2D',
          textDecoration: 'none',
        }}>
          Binary 1702 LLC
        </Link>

        {/* Desktop Navigation */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
        }} className="desktop-nav">
          <Link href="/" style={{
            color: '#52525B',
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}>
            Home
          </Link>
          <Link href="/services" style={{
            color: '#52525B',
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}>
            Services
          </Link>
          <Link href="/work" style={{
            color: '#52525B',
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}>
            Work
          </Link>
          <Link href="/about" style={{
            color: '#52525B',
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}>
            About
          </Link>
          <Link href="/contact" style={{
            color: '#52525B',
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}>
            Contact
          </Link>
          <Link href="/contact" className="button" style={{
            marginLeft: '1rem',
          }}>
            Schedule Diagnostic Call
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            padding: '0.5rem',
            cursor: 'pointer',
          }}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu" style={{
          background: '#FFFFFF',
          borderTop: '1px solid #E4E4E7',
          padding: '1.5rem 2rem',
        }}>
          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}>
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#52525B',
                fontWeight: 500,
                textDecoration: 'none',
                padding: '0.75rem 0',
              }}
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#52525B',
                fontWeight: 500,
                textDecoration: 'none',
                padding: '0.75rem 0',
              }}
            >
              Services
            </Link>
            <Link
              href="/work"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#52525B',
                fontWeight: 500,
                textDecoration: 'none',
                padding: '0.75rem 0',
              }}
            >
              Work
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#52525B',
                fontWeight: 500,
                textDecoration: 'none',
                padding: '0.75rem 0',
              }}
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#52525B',
                fontWeight: 500,
                textDecoration: 'none',
                padding: '0.75rem 0',
              }}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="button"
              style={{
                marginTop: '0.5rem',
                textAlign: 'center',
                width: '100%',
              }}
            >
              Schedule Diagnostic Call
            </Link>
          </nav>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .desktop-nav a:hover,
        .mobile-menu a:hover {
          color: #6B8F71 !important;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }

          .mobile-menu-btn {
            display: block !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}} />
    </header>
  );
}
