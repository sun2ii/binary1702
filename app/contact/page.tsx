'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    serviceInterest: '',
    planInterest: searchParams?.get('plan') || '',
    message: '',
    referralSource: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      return !match[2] ? match[1] : `(${match[1]}) ${match[2]}${match[3] ? `-${match[3]}` : ''}`;
    }
    return value;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      setFormData(prev => ({ ...prev, [name]: formatPhone(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (formData.phone.replace(/\D/g, '').length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.serviceInterest) newErrors.serviceInterest = 'Please select a service';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide at least 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          businessName: '',
          email: '',
          phone: '',
          serviceInterest: '',
          planInterest: '',
          message: '',
          referralSource: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />

      <main>
        <section className="section">
          <div className="container-wide" style={{ maxWidth: '1000px' }}>
            <div className="text-center mb-8">
              <h1 className="mb-3">Contact Us</h1>
              <p className="text-large text-secondary">
                Let's discuss how we can help your business grow
              </p>
            </div>

            <div className="grid grid-2" style={{ alignItems: 'start' }}>
              {/* Contact Information */}
              <div className="card">
                <h3 className="mb-4">Get In Touch</h3>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#71717A', marginBottom: '0.5rem' }}>Email</h4>
                  <a href="mailto:ben@binary1702.com" style={{ color: '#6B8F71', fontSize: '1rem' }}>
                    ben@binary1702.com
                  </a>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#71717A', marginBottom: '0.5rem' }}>Phone</h4>
                  <a href="tel:+19165957155" style={{ color: '#6B8F71', fontSize: '1rem' }}>
                    +1 916-595-7155
                  </a>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#71717A', marginBottom: '0.5rem' }}>Location</h4>
                  <p className="text-secondary" style={{ fontSize: '1rem', margin: 0, lineHeight: '1.6' }}>
                    Orangevale, California
                  </p>
                </div>

                <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #E4E4E7' }}>
                  <p className="text-small text-secondary">
                    We'll get back to you within 24 hours
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="card">
                <h3 className="mb-4">Schedule a Discovery Call</h3>

                {submitStatus === 'success' && (
                  <div style={{
                    background: '#E8F5E9',
                    border: '1px solid #2E7D32',
                    borderRadius: '0.5rem',
                    padding: '1rem',
                    marginBottom: '1.5rem',
                  }}>
                    <p style={{ color: '#2E7D32', margin: 0 }}>
                      ✓ Thank you! We'll be in touch within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div style={{
                    background: '#FFEBEE',
                    border: '1px solid #C62828',
                    borderRadius: '0.5rem',
                    padding: '1rem',
                    marginBottom: '1.5rem',
                  }}>
                    <p style={{ color: '#C62828', margin: 0 }}>
                      Something went wrong. Please try again or email us directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    {errors.fullName && <p className="form-error">{errors.fullName}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="businessName">Business or Company Name *</label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    {errors.businessName && <p className="form-error">{errors.businessName}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    {errors.email && <p className="form-error">{errors.email}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(XXX) XXX-XXXX"
                      disabled={isSubmitting}
                    />
                    {errors.phone && <p className="form-error">{errors.phone}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="serviceInterest">What are you interested in? *</label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    >
                      <option value="">Select a service</option>
                      <option value="Custom Software Development">Custom Software Development</option>
                      <option value="Business Automation">Business Automation</option>
                      <option value="CRM Implementation">CRM Implementation</option>
                      <option value="API Integrations">API Integrations</option>
                      <option value="General Inquiry">Not Sure / General Inquiry</option>
                    </select>
                    {errors.serviceInterest && <p className="form-error">{errors.serviceInterest}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="planInterest">Preferred Service Plan (Optional)</label>
                    <select
                      id="planInterest"
                      name="planInterest"
                      value={formData.planInterest}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    >
                      <option value="">Select a plan (optional)</option>
                      <option value="basic">Basic Plan ($297/month)</option>
                      <option value="growth">Growth Plan ($497/month)</option>
                      <option value="advanced">Advanced Plan ($997+/month)</option>
                      <option value="custom">Custom Project</option>
                      <option value="exploring">Just Exploring</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Tell us about your project or needs *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What challenges are you facing? What are you hoping to achieve?"
                      rows={6}
                      disabled={isSubmitting}
                    />
                    {errors.message && <p className="form-error">{errors.message}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="referralSource">How did you hear about us? (Optional)</label>
                    <select
                      id="referralSource"
                      name="referralSource"
                      value={formData.referralSource}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    >
                      <option value="">Select an option (optional)</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Referral">Referral</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="button"
                    style={{ width: '100%' }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="text-small text-muted" style={{ marginTop: '1rem', textAlign: 'center' }}>
                    Prefer to reach out directly? Email{' '}
                    <Link href="mailto:ben@binary1702.com" style={{ color: '#6B8F71' }}>
                      ben@binary1702.com
                    </Link>{' '}
                    or call{' '}
                    <Link href="tel:+19165957155" style={{ color: '#6B8F71' }}>
                      +1 916-595-7155
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <>
        <Header />
        <main>
          <section className="section">
            <div className="container-wide" style={{ maxWidth: '1000px' }}>
              <div className="text-center">
                <h1>Contact Us</h1>
                <p className="text-large text-secondary">Loading...</p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    }>
      <ContactForm />
    </Suspense>
  );
}
