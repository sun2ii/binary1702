'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface SectionState {
  identity: boolean;
  reach: boolean;
  socials: boolean;
}

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    linkedin: '',
    github: '',
  });

  const [expanded, setExpanded] = useState<SectionState>({
    identity: true,  // Always expanded
    reach: false,
    socials: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Track completion
  const identityComplete = formData.firstName.trim() !== '' && formData.lastName.trim() !== '' && formData.businessName.trim() !== '';
  const reachComplete = formData.email.trim() !== '' && formData.phone.trim() !== '';
  const reachProvided = formData.phone.trim() !== '' || formData.website.trim() !== '' || formData.email.trim() !== '';
  const socialsProvided = formData.linkedin.trim() !== '' || formData.github.trim() !== '';

  const formatPhoneAsYouType = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneAsYouType(e.target.value);
    setFormData({ ...formData, phone: formatted });
  };

  const handleWebsiteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Store only the domain (no prefix)
    setFormData({ ...formData, website: value });
  };

  const handleLinkedinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Store only the handle (no prefix)
    setFormData({ ...formData, linkedin: value });
  };

  const handleGithubChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Store only the handle (no prefix)
    setFormData({ ...formData, github: value });
  };

  const toggleSection = (section: keyof SectionState) => {
    if (section === 'identity') return; // Identity always expanded
    setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!identityComplete || !reachComplete) return;

    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/profiles/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: result.message });
        setFormData({
          firstName: '',
          lastName: '',
          businessName: '',
          email: '',
          phone: '',
          website: '',
          linkedin: '',
          github: '',
        });
        setExpanded({ identity: true, reach: false, socials: false });
      } else {
        setMessage({ type: 'error', text: result.error || 'Something went wrong' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to submit. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FAFAF9',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1rem'
    }}>
      <div style={{
        maxWidth: '480px',
        width: '100%'
      }}>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            color: '#71717A',
            textDecoration: 'none',
            fontSize: '0.875rem',
            marginBottom: '3rem',
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#27272A'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#71717A'}
        >
          ← Back
        </Link>

        <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '1.375rem',
            fontWeight: 500,
            color: '#52525B',
            letterSpacing: '-0.01em'
          }}>
            Preparing your Digital Presence
          </h1>
        </header>

        {message && (
          <div style={{
            padding: '0.875rem 1rem',
            borderRadius: '0.25rem',
            marginBottom: '2rem',
            background: message.type === 'success' ? '#F0F9F4' : '#FEF2F2',
            border: `1px solid ${message.type === 'success' ? '#D1F4DD' : '#FED7D7'}`,
            color: message.type === 'success' ? '#276749' : '#9B2C2C',
            fontSize: '0.875rem',
            lineHeight: 1.5
          }}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Identity Section - Always Expanded */}
          <section style={{
            marginBottom: '1.5rem',
            opacity: 1,
            transition: 'opacity 200ms ease'
          }}>
            <div style={{
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#52525B',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                margin: 0
              }}>
                Identity
              </h2>
            </div>

            <div style={{
              overflow: 'hidden',
              transition: 'max-height 200ms ease, opacity 200ms ease',
              maxHeight: '500px',
              opacity: 1
            }}>
              <div style={{ marginBottom: '0.75rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 400,
                  fontSize: '0.875rem',
                  color: '#52525B'
                }}>
                  First Name <span style={{ color: '#DC2626' }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.75rem',
                    border: '1px solid #E4E4E7',
                    borderRadius: '0.25rem',
                    fontSize: '0.9375rem',
                    color: '#27272A',
                    background: 'white',
                    transition: 'border-color 0.15s'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#A1A1AA'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E4E4E7'}
                />
              </div>

              <div style={{ marginBottom: '0.75rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 400,
                  fontSize: '0.875rem',
                  color: '#52525B'
                }}>
                  Last Name <span style={{ color: '#DC2626' }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.75rem',
                    border: '1px solid #E4E4E7',
                    borderRadius: '0.25rem',
                    fontSize: '0.9375rem',
                    color: '#27272A',
                    background: 'white',
                    transition: 'border-color 0.15s'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#A1A1AA'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E4E4E7'}
                />
              </div>

              <div style={{ marginBottom: '0.75rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 400,
                  fontSize: '0.875rem',
                  color: '#52525B'
                }}>
                  Business Name <span style={{ color: '#DC2626' }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.75rem',
                    border: '1px solid #E4E4E7',
                    borderRadius: '0.25rem',
                    fontSize: '0.9375rem',
                    color: '#27272A',
                    background: 'white',
                    transition: 'border-color 0.15s'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#A1A1AA'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E4E4E7'}
                />
              </div>
            </div>
          </section>

          {/* Reach Section - Collapsible */}
          <section style={{
            marginBottom: '1.5rem',
            opacity: expanded.reach ? 1 : 0.5,
            transition: 'opacity 200ms ease'
          }}>
            <button
              type="button"
              onClick={() => toggleSection('reach')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.75rem 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'opacity 150ms ease',
                gap: '0.5rem',
                marginBottom: expanded.reach ? '1rem' : 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              <h2 style={{
                fontSize: '0.75rem',
                fontWeight: expanded.reach ? 600 : 600,
                color: expanded.reach ? '#52525B' : '#A1A1AA',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                margin: 0,
                transition: 'color 200ms ease'
              }}>
                Reach
              </h2>
              <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  style={{
                    transition: 'transform 200ms ease',
                    transform: expanded.reach ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  <path
                    d="M2 4L6 8L10 4"
                    stroke="#A1A1AA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
            </button>

            <div style={{
              overflow: 'hidden',
              transition: 'max-height 200ms ease, opacity 200ms ease',
              maxHeight: expanded.reach ? '500px' : '0',
              opacity: expanded.reach ? 1 : 0
            }}>
              <div style={{ paddingTop: '0.5rem' }}>
                <div style={{ marginBottom: '0.75rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    color: '#52525B'
                  }}>
                    Phone <span style={{ color: '#DC2626' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    required
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    style={{
                      width: '100%',
                      padding: '1rem 1rem',
                      border: '1px solid #E4E4E7',
                      borderRadius: '0.25rem',
                      fontSize: '0.9375rem',
                      color: '#27272A',
                      background: 'white',
                      transition: 'border-color 0.15s'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#A1A1AA'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#E4E4E7'}
                  />
                </div>

                <div style={{ marginBottom: '0.75rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    color: '#52525B'
                  }}>
                    Email <span style={{ color: '#DC2626' }}>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '1rem 1rem',
                      border: '1px solid #E4E4E7',
                      borderRadius: '0.25rem',
                      fontSize: '0.9375rem',
                      color: '#27272A',
                      background: 'white',
                      transition: 'border-color 0.15s'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#A1A1AA'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#E4E4E7'}
                  />
                  <p style={{
                    fontSize: '0.8125rem',
                    color: '#A1A1AA',
                    marginTop: '0.375rem',
                    lineHeight: 1.4
                  }}>
                    Verification link will be sent here
                  </p>
                </div>

                <div style={{ marginBottom: '0.25rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    color: '#52525B'
                  }}>
                    Website
                  </label>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: `1px solid ${focusedField === 'website' ? '#A1A1AA' : '#E4E4E7'}`,
                    borderRadius: '0.25rem',
                    padding: '0.75rem 0.75rem',
                    background: 'white',
                    transition: 'border-color 0.15s'
                  }}>
                    <span style={{
                      color: '#9CA3AF',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      whiteSpace: 'nowrap'
                    }}>
                      https://
                    </span>
                    <input
                      type="text"
                      value={formData.website}
                      onChange={handleWebsiteChange}
                      onFocus={() => setFocusedField('website')}
                      onBlur={() => setFocusedField(null)}
                      style={{
                        border: 'none',
                        outline: 'none',
                        padding: 0,
                        margin: 0,
                        flex: 1,
                        fontSize: '0.9375rem',
                        color: '#27272A',
                        background: 'transparent'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Socials Section - Collapsible */}
          <section style={{
            marginBottom: '2rem',
            opacity: expanded.socials ? 1 : 0.5,
            transition: 'opacity 200ms ease'
          }}>
            <button
              type="button"
              onClick={() => toggleSection('socials')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.75rem 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'opacity 150ms ease',
                gap: '0.5rem',
                marginBottom: expanded.socials ? '1rem' : 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              <h2 style={{
                fontSize: '0.75rem',
                fontWeight: expanded.socials ? 600 : 600,
                color: expanded.socials ? '#52525B' : '#A1A1AA',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                margin: 0,
                transition: 'color 200ms ease'
              }}>
                Socials
              </h2>
              <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  style={{
                    transition: 'transform 200ms ease',
                    transform: expanded.socials ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  <path
                    d="M2 4L6 8L10 4"
                    stroke="#A1A1AA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
            </button>

            <div style={{
              overflow: 'hidden',
              transition: 'max-height 200ms ease, opacity 200ms ease',
              maxHeight: expanded.socials ? '500px' : '0',
              opacity: expanded.socials ? 1 : 0
            }}>
              <div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    color: '#52525B'
                  }}>
                    LinkedIn
                  </label>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: `1px solid ${focusedField === 'linkedin' ? '#A1A1AA' : '#E4E4E7'}`,
                    borderRadius: '0.25rem',
                    padding: '1rem 0.75rem',
                    background: 'white',
                    transition: 'border-color 0.15s'
                  }}>
                    <span style={{
                      color: '#9CA3AF',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                    }}>
                      linkedin.com/in/
                    </span>
                    <input
                      type="text"
                      value={formData.linkedin}
                      onChange={handleLinkedinChange}
                      onFocus={() => setFocusedField('linkedin')}
                      onBlur={() => setFocusedField(null)}
                      style={{
                        border: 'none',
                        outline: 'none',
                        padding: 0,
                        margin: 0,
                        flex: 1,
                        fontSize: '0.9375rem',
                        color: '#27272A',
                        background: 'transparent'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '0' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    color: '#52525B'
                  }}>
                    GitHub
                  </label>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: `1px solid ${focusedField === 'github' ? '#A1A1AA' : '#E4E4E7'}`,
                    borderRadius: '0.25rem',
                    padding: '1rem 0.75rem',
                    background: 'white',
                    transition: 'border-color 0.15s'
                  }}>
                    <span style={{
                      color: '#9CA3AF',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                    }}>
                      github.com/
                    </span>
                    <input
                      type="text"
                      value={formData.github}
                      onChange={handleGithubChange}
                      onFocus={() => setFocusedField('github')}
                      onBlur={() => setFocusedField(null)}
                      style={{
                        border: 'none',
                        outline: 'none',
                        padding: 0,
                        margin: 0,
                        flex: 1,
                        fontSize: '0.9375rem',
                        color: '#27272A',
                        background: 'transparent'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <button
            type="submit"
            disabled={!identityComplete || !reachComplete || loading}
            style={{
              width: '100%',
              padding: '0.875rem 1.5rem',
              background: (!identityComplete || !reachComplete || loading) ? '#FAFAFA' : '#52525B',
              color: (!identityComplete || !reachComplete || loading) ? '#A1A1AA' : 'white',
              border: (!identityComplete || !reachComplete || loading) ? '1px solid #E4E4E7' : 'none',
              borderRadius: '0.25rem',
              fontSize: '0.9375rem',
              fontWeight: 500,
              cursor: (!identityComplete || !reachComplete || loading) ? 'not-allowed' : 'pointer',
              transition: 'all 150ms ease',
              letterSpacing: '-0.005em',
              boxShadow: (!identityComplete || !reachComplete || loading) ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.05)'
            }}
            onMouseEnter={(e) => {
              if (identityComplete && reachComplete && !loading) {
                e.currentTarget.style.background = '#3F3F46';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
              } else {
                e.currentTarget.style.borderColor = '#D4D4D8';
                e.currentTarget.style.background = '#FFFFFF';
              }
            }}
            onMouseLeave={(e) => {
              if (identityComplete && reachComplete && !loading) {
                e.currentTarget.style.background = '#52525B';
                e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
              } else {
                e.currentTarget.style.borderColor = '#E4E4E7';
                e.currentTarget.style.background = '#FAFAFA';
              }
            }}
          >
            {loading ? 'Processing...' : 'Continue'}
          </button>
        </form>
      </div>
    </div>
  );
}
