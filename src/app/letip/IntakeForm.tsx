'use client'

import { useState } from 'react'

export default function IntakeForm() {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    website: '',
    biggestProblem: '',
    timeline: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/letip/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Submission failed')
      }

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        website: '',
        biggestProblem: '',
        timeline: ''
      })
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (status === 'success') {
    return (
      <div className="intake-success">
        <h3>✓ Thanks! We'll reach out within 24 hours.</h3>
        <div className="next-steps">
          <p><strong>What happens next:</strong></p>
          <ol>
            <li>Gladys will email you to schedule the audit</li>
            <li>We'll review your answers before the call</li>
            <li>30-minute conversation about your business</li>
          </ol>
        </div>
        <button onClick={() => { setStatus('idle'); setShowForm(false); }} className="btn-ghost">
          Submit Another
        </button>
      </div>
    )
  }

  if (!showForm) {
    return (
      <div className="cta-strip">
        <h2>Ready for the free audit?</h2>
        <p>30 minutes. No pitch. You'll leave with a clearer picture of your business either way.</p>
        <button onClick={() => setShowForm(true)} className="btn-primary">
          Email Us to Book It
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="form-header">
        <h2>Tell us about your business</h2>
        <p className="section-lede">This helps us prepare for your free 30-minute audit.</p>
      </div>
      <form className="intake-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Your Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          disabled={status === 'loading'}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          disabled={status === 'loading'}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          disabled={status === 'loading'}
        />
      </div>

      <div className="form-group">
        <label htmlFor="business">Business Name *</label>
        <input
          type="text"
          id="business"
          name="business"
          required
          value={formData.business}
          onChange={handleChange}
          disabled={status === 'loading'}
        />
      </div>

      <div className="form-group">
        <label htmlFor="website">Current Website (if any)</label>
        <input
          type="url"
          id="website"
          name="website"
          placeholder="https://"
          value={formData.website}
          onChange={handleChange}
          disabled={status === 'loading'}
        />
      </div>

      <div className="form-group">
        <label htmlFor="biggestProblem">What's the biggest problem with your online presence? *</label>
        <textarea
          id="biggestProblem"
          name="biggestProblem"
          required
          rows={4}
          value={formData.biggestProblem}
          onChange={handleChange}
          disabled={status === 'loading'}
        />
      </div>

      <div className="form-group">
        <label htmlFor="timeline">When do you want to fix it? *</label>
        <select
          id="timeline"
          name="timeline"
          required
          value={formData.timeline}
          onChange={handleChange}
          disabled={status === 'loading'}
        >
          <option value="">Select timeline...</option>
          <option value="asap">ASAP - This is urgent</option>
          <option value="month">Within a month</option>
          <option value="quarter">Next 2-3 months</option>
          <option value="exploring">Just exploring for now</option>
        </select>
      </div>

      {status === 'error' && (
        <div className="form-error">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        className="btn-primary"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Submitting...' : 'Book My Free Audit'}
      </button>
    </form>
    </div>
  )
}
