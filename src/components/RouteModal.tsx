'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function RouteModal() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user has already made a choice in this session
    const hasChosenRoute = sessionStorage.getItem('route-chosen')
    if (!hasChosenRoute) {
      setIsOpen(true)
    }
  }, [])

  const handleChoice = (route: string) => {
    sessionStorage.setItem('route-chosen', 'true')
    setIsOpen(false)
    if (route !== '/') {
      router.push(route)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative bg-paper border-2 border-rule rounded-[12px] shadow-2xl max-w-[500px] w-[calc(100vw-32px)] p-8">
        <h2 className="text-[28px] font-bold tracking-tight mb-3 text-ink">
          Welcome to Binary 1702
        </h2>
        <p className="text-ink-soft mb-8 text-[16px] leading-[1.5]">
          Choose your path:
        </p>

        <div className="space-y-3">
          <button
            onClick={() => handleChoice('/msp')}
            className="w-full text-left px-6 py-4 bg-paper-deep border border-rule rounded-lg hover:border-accent hover:bg-accent/5 transition-all group"
          >
            <div className="font-semibold text-[17px] text-ink mb-1 group-hover:text-accent transition-colors">
              MSP Member
            </div>
            <div className="text-[14px] text-ink-mute">
              Partnership program for managed service providers
            </div>
          </button>

          <button
            onClick={() => handleChoice('/letip')}
            className="w-full text-left px-6 py-4 bg-paper-deep border border-rule rounded-lg hover:border-accent hover:bg-accent/5 transition-all group"
          >
            <div className="font-semibold text-[17px] text-ink mb-1 group-hover:text-accent transition-colors">
              LeTip Group
            </div>
            <div className="text-[14px] text-ink-mute">
              Website & systems for owner-led service businesses
            </div>
          </button>

          <button
            onClick={() => handleChoice('/')}
            className="w-full text-left px-6 py-4 bg-paper-deep border border-rule rounded-lg hover:border-accent hover:bg-accent/5 transition-all group"
          >
            <div className="font-semibold text-[17px] text-ink mb-1 group-hover:text-accent transition-colors">
              Just take me to the home page
            </div>
            <div className="text-[14px] text-ink-mute">
              View the main operating partnership site
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
