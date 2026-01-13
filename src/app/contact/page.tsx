'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <SectionHeading level={1}>Contact</SectionHeading>
          <p className="text-lg text-[var(--muted)]">
            Have a question or want to discuss a project? Send a message and I'll get back to you soon.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[var(--panel)] border border-[var(--border)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[var(--panel)] border border-[var(--border)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 bg-[var(--panel)] border border-[var(--border)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-6 py-3 bg-[var(--accent)] text-[var(--bg)] font-medium rounded-sm hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="p-4 bg-[var(--success-bg)] border border-[var(--success-border)] rounded-sm">
              <p className="text-sm text-[var(--success-text)]">
                Message sent successfully! I'll get back to you soon.
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="p-4 bg-[var(--error-bg)] border border-[var(--error-border)] rounded-sm">
              <p className="text-sm text-[var(--error-text)]">
                {errorMessage || 'Failed to send message. Please try again.'}
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
