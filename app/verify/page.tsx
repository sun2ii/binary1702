'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function VerifyContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get('status');

  const messages = {
    verified: {
      title: 'Email Verified!',
      description: 'Your email has been verified successfully. You can now view your profile.',
      color: '#2E7D32',
      bg: '#E8F5E9',
    },
    invalid: {
      title: 'Invalid Token',
      description: 'The verification link is invalid. Please try submitting the form again.',
      color: '#C62828',
      bg: '#FFEBEE',
    },
    expired: {
      title: 'Token Expired',
      description: 'The verification link has expired. Please submit the form again to receive a new link.',
      color: '#C62828',
      bg: '#FFEBEE',
    },
    error: {
      title: 'Verification Error',
      description: 'An error occurred during verification. Please try again.',
      color: '#C62828',
      bg: '#FFEBEE',
    },
    'rate-limited': {
      title: 'Too Many Attempts',
      description: 'You have made too many verification attempts. Please wait a few minutes and try again.',
      color: '#C62828',
      bg: '#FFEBEE',
    },
  };

  const message = status && status in messages ? messages[status as keyof typeof messages] : null;

  return (
    <div className="container">
      <Link href="/" className="back-link">
        ← Back to home
      </Link>

      <div style={{ textAlign: 'center', paddingTop: '3rem' }}>
        {message ? (
          <div
            style={{
              background: message.bg,
              color: message.color,
              padding: '2rem',
              borderRadius: '0.5rem',
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{message.title}</h1>
            <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>{message.description}</p>
            <Link href="/qr" className="button">
              Create New Profile
            </Link>
          </div>
        ) : (
          <div>
            <h1>Email Verification</h1>
            <p>Click the link in your email to verify your profile.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={<div className="container" style={{ textAlign: 'center', paddingTop: '3rem' }}>Loading...</div>}>
      <VerifyContent />
    </Suspense>
  );
}
