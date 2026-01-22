'use client';

import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { buildLinkedInUrl, buildGitHubUrl } from '@/lib/social-urls';

interface Profile {
  slug: string;
  first_name: string;
  last_name: string;
  business_name?: string;
  phone?: string;
  email: string;
  website?: string;
  linkedin_handle?: string;
  github_handle?: string;
  profilePicUrl?: string;
  backgroundPicUrl?: string;
}

export default function ProfilePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const slug = params.slug as string;
  const status = searchParams.get('status');

  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await fetch(`/api/profiles/${slug}`);
        const data = await response.json();

        if (response.ok) {
          setProfile(data.profile);
        } else {
          setError(data.error || 'Failed to load profile');
        }
      } catch (err) {
        setError('Failed to load profile');
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchProfile();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="container" style={{ textAlign: 'center', paddingTop: '3rem' }}>
        <p>Loading profile...</p>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="container">
        <Link href="/" className="back-link">
          ← Back to home
        </Link>
        <div style={{ textAlign: 'center', paddingTop: '3rem' }}>
          <h1 style={{ color: '#C62828', fontSize: '1.5rem', marginBottom: '1rem' }}>Profile Not Found</h1>
          <p style={{ marginBottom: '1.5rem' }}>{error || 'This profile does not exist or has not been verified.'}</p>
          <Link href="/submit" className="button">
            Create Your Profile
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Link href="/" className="back-link">
        ← Back to home
      </Link>

      {status === 'verified' && (
        <div
          style={{
            background: '#E8F5E9',
            color: '#2E7D32',
            padding: '1rem',
            borderRadius: '0.375rem',
            marginBottom: '1.5rem',
            textAlign: 'center',
          }}
        >
          <strong>Success!</strong> Your profile has been verified and is now active.
        </div>
      )}

      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '2rem' }}>
          {/* QR Code */}
          <div style={{ background: 'white', padding: '2rem', borderRadius: '0.5rem', display: 'inline-block' }}>
            <img
              src={`/api/qr/${slug}.png`}
              alt="QR Code"
              width={256}
              height={256}
              style={{ display: 'block' }}
            />
          </div>
        </div>

        {/* Contact Info */}
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ marginBottom: '0.5rem' }}>{profile.first_name} {profile.last_name}</h1>
          {profile.business_name && (
            <p style={{ color: '#888', fontSize: '1.125rem', marginBottom: '0.5rem' }}>{profile.business_name}</p>
          )}
        </div>

        {/* Links */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            maxWidth: '400px',
            margin: '0 auto',
            textAlign: 'left',
          }}
        >
          {profile.email && (
            <div style={{ padding: '0.75rem', background: 'white', borderRadius: '0.375rem' }}>
              <strong style={{ fontSize: '0.875rem', color: '#666' }}>Email:</strong>
              <br />
              <a href={`mailto:${profile.email}`} style={{ color: '#6B8F71', textDecoration: 'none' }}>
                {profile.email}
              </a>
            </div>
          )}

          {profile.phone && (
            <div style={{ padding: '0.75rem', background: 'white', borderRadius: '0.375rem' }}>
              <strong style={{ fontSize: '0.875rem', color: '#666' }}>Phone:</strong>
              <br />
              <a href={`tel:${profile.phone}`} style={{ color: '#6B8F71', textDecoration: 'none' }}>
                {profile.phone}
              </a>
            </div>
          )}

          {profile.website && (
            <div style={{ padding: '0.75rem', background: 'white', borderRadius: '0.375rem' }}>
              <strong style={{ fontSize: '0.875rem', color: '#666' }}>Website:</strong>
              <br />
              <a
                href={profile.website}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#6B8F71', textDecoration: 'none' }}
              >
                {profile.website}
              </a>
            </div>
          )}

          {profile.linkedin_handle && (
            <div style={{ padding: '0.75rem', background: 'white', borderRadius: '0.375rem' }}>
              <strong style={{ fontSize: '0.875rem', color: '#666' }}>LinkedIn:</strong>
              <br />
              <a
                href={buildLinkedInUrl(profile.linkedin_handle)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#6B8F71', textDecoration: 'none' }}
              >
                {buildLinkedInUrl(profile.linkedin_handle)}
              </a>
            </div>
          )}

          {profile.github_handle && (
            <div style={{ padding: '0.75rem', background: 'white', borderRadius: '0.375rem' }}>
              <strong style={{ fontSize: '0.875rem', color: '#666' }}>GitHub:</strong>
              <br />
              <a
                href={buildGitHubUrl(profile.github_handle)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#6B8F71', textDecoration: 'none' }}
              >
                {buildGitHubUrl(profile.github_handle)}
              </a>
            </div>
          )}
        </div>

        <div style={{ marginTop: '2rem' }}>
          <p style={{ fontSize: '0.875rem', color: '#666' }}>
            Scan the QR code to save this contact to your phone
          </p>
        </div>
      </div>
    </div>
  );
}
