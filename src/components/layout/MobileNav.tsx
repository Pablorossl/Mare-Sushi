'use client'

import { useEffect } from 'react'
import { useNavigation } from '@/contexts/NavigationContext'
import { MOBILE_NAV_LINKS } from '@/constants/navigation'

/**
 * Full-screen mobile navigation overlay.
 * Slides in from the top when isMobileNavOpen is true.
 * Closes automatically when a link is tapped.
 * Locks body scroll while open.
 */
export function MobileNav() {
  const { isMobileNavOpen, closeMobileNav } = useNavigation()

  // Lock body scroll while the overlay is visible
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileNavOpen])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación móvil"
      aria-hidden={!isMobileNavOpen}
      className={`fixed inset-0 bg-brand-black z-[999] flex flex-col items-center justify-center gap-8 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isMobileNavOpen
          ? 'translate-y-0 pointer-events-auto mobile-nav-open'
          : '-translate-y-full pointer-events-none'
      }`}
    >
      {/* Close button */}
      <button
        onClick={closeMobileNav}
        aria-label="Cerrar menú"
        className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center text-brand-white/60 hover:text-brand-white text-2xl leading-none transition-colors duration-300"
      >
        ✕
      </button>

      {MOBILE_NAV_LINKS.map((link, index) => (
        <a
          key={link.href}
          href={link.href}
          onClick={closeMobileNav}
          style={{ transitionDelay: `${index * 60 + 200}ms` }}
          className="mobile-nav-link font-cormorant text-[2.5rem] font-light text-brand-white no-underline tracking-[0.05em] hover:text-brand-red"
        >
          {link.label}
        </a>
      ))}
    </div>
  )
}
