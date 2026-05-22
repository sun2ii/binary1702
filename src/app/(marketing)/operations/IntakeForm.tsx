'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function IntakeForm() {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    teamSize: '',
    revenue: '',
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
      const response = await fetch('/api/operations/intake', {
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
        teamSize: '',
        revenue: '',
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
      <div className="max-w-[600px] mx-auto mt-12 bg-paper border border-accent rounded-lg p-12 text-center">
        <h3 className="text-[28px] font-bold mb-6 text-accent">✓ Thanks! We'll reach out within 24 hours.</h3>
        <div className="bg-paper-deep border border-rule rounded-lg p-6 mb-8 text-left">
          <p className="font-semibold mb-3"><strong>What happens next:</strong></p>
          <ol className="ml-5 text-ink-soft space-y-2 list-decimal">
            <li>We'll review your answers and your current setup</li>
            <li>Ben or Gladys will email you within 1 business day</li>
            <li>Quick conversation to confirm fit</li>
            <li>Schedule the Diagnostic if it makes sense</li>
          </ol>
        </div>
        <button
          onClick={() => { setStatus('idle'); setShowForm(false); }}
          className="px-6 py-3 rounded-md border border-rule bg-transparent text-ink hover:bg-ink hover:text-paper transition-colors cursor-pointer"
        >
          Submit Another
        </button>
      </div>
    )
  }

  if (!showForm) {
    return (
      <div className="max-w-[720px] mx-auto text-center bg-gradient-to-br from-paper-deep to-paper border border-rule rounded-lg p-14">
        <h2 className="text-[clamp(28px,3.6vw,42px)] font-bold leading-[1.2] tracking-tight mb-4">
          Ready to book the Internal Diagnostic?
        </h2>
        <p className="text-lg text-ink-soft mb-7">
          Tell us about your team. We'll respond within 24 hours with whether the Diagnostic is the right fit.
        </p>
        <button
          onClick={() => setShowForm(true)}
          className="inline-flex items-center gap-2 px-[22px] py-[14px] text-[15px] font-medium rounded-md bg-ink text-paper hover:bg-accent-deep transition-colors cursor-pointer border-0"
        >
          Start Here
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-[clamp(28px,3.6vw,42px)] font-bold leading-[1.2] tracking-tight mb-4">
          Tell us about your team
        </h2>
        <p className="text-lg text-ink-soft max-w-[680px] mx-auto">
          This helps us understand if the Internal Diagnostic is the right fit.
        </p>
      </div>
      <form className="max-w-[600px] mx-auto bg-paper-deep border border-rule rounded-lg p-10" onSubmit={handleSubmit}>
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 font-semibold text-[14px] text-ink">Your Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          disabled={status === 'loading'}
          className="w-full bg-paper border border-rule rounded-md px-4 py-3 text-ink focus:outline-none focus:border-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 font-semibold text-[14px] text-ink">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          disabled={status === 'loading'}
          className="w-full bg-paper border border-rule rounded-md px-4 py-3 text-ink focus:outline-none focus:border-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="phone" className="block mb-2 font-semibold text-[14px] text-ink">Phone *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          disabled={status === 'loading'}
          className="w-full bg-paper border border-rule rounded-md px-4 py-3 text-ink focus:outline-none focus:border-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="business" className="block mb-2 font-semibold text-[14px] text-ink">Business Name *</label>
        <input
          type="text"
          id="business"
          name="business"
          required
          value={formData.business}
          onChange={handleChange}
          disabled={status === 'loading'}
          className="w-full bg-paper border border-rule rounded-md px-4 py-3 text-ink focus:outline-none focus:border-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="teamSize" className="block mb-2 font-semibold text-[14px] text-ink">Team Size *</label>
        <select
          id="teamSize"
          name="teamSize"
          required
          value={formData.teamSize}
          onChange={handleChange}
          disabled={status === 'loading'}
          className="w-full bg-paper border border-rule rounded-md px-4 py-3 text-ink focus:outline-none focus:border-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="">Select team size...</option>
          <option value="1-5">1-5 people</option>
          <option value="6-10">6-10 people</option>
          <option value="11-15">11-15 people</option>
          <option value="16-25">16-25 people</option>
          <option value="25+">25+ people</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="revenue" className="block mb-2 font-semibold text-[14px] text-ink">Revenue Range *</label>
        <select
          id="revenue"
          name="revenue"
          required
          value={formData.revenue}
          onChange={handleChange}
          disabled={status === 'loading'}
          className="w-full bg-paper border border-rule rounded-md px-4 py-3 text-ink focus:outline-none focus:border-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="">Select revenue...</option>
          <option value="<$500k">&lt;$500k</option>
          <option value="$500k-$1M">$500k-$1M</option>
          <option value="$1M-$3M">$1M-$3M</option>
          <option value="$3M-$5M">$3M-$5M</option>
          <option value="$5M+">$5M+</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="biggestProblem" className="block mb-2 font-semibold text-[14px] text-ink">What's the biggest internal problem right now? *</label>
        <textarea
          id="biggestProblem"
          name="biggestProblem"
          required
          rows={4}
          placeholder="e.g. 'Everything lives in group chats, new hires take forever to onboard, I'm the bottleneck for everything'"
          value={formData.biggestProblem}
          onChange={handleChange}
          disabled={status === 'loading'}
          className="w-full bg-paper border border-rule rounded-md px-4 py-3 text-ink focus:outline-none focus:border-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed resize-y min-h-[100px]"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="timeline" className="block mb-2 font-semibold text-[14px] text-ink">When do you want to fix it? *</label>
        <select
          id="timeline"
          name="timeline"
          required
          value={formData.timeline}
          onChange={handleChange}
          disabled={status === 'loading'}
          className="w-full bg-paper border border-rule rounded-md px-4 py-3 text-ink focus:outline-none focus:border-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="">Select timeline...</option>
          <option value="asap">ASAP - This is urgent</option>
          <option value="month">Within a month</option>
          <option value="quarter">Next 2-3 months</option>
          <option value="exploring">Just exploring for now</option>
        </select>
      </div>

      {status === 'error' && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 rounded-md mb-5 text-[14px]">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-6 py-4 text-[15px] font-medium rounded-md bg-ink text-paper hover:bg-accent-deep transition-colors cursor-pointer border-0 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
      >
        {status === 'loading' ? 'Submitting...' : 'Submit'}
      </button>
    </form>
    </div>
  )
}
