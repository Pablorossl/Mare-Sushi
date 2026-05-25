'use client'

import { useToast } from '@/contexts/ToastContext'

/**
 * Global toast notification — reads from ToastContext.
 * Mount once in the root layout; trigger via `showToast()` anywhere.
 */
export function Toast() {
  const { isVisible, message } = useToast()

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={`fixed bottom-8 right-8 z-[9998] bg-brand-card border border-brand-red px-8 py-5 rounded text-sm text-brand-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      {message}
    </div>
  )
}
