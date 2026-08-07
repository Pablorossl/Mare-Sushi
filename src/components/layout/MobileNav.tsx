'use client'

import { useEffect, useRef } from 'react'
import { useNavigation } from '@/contexts/NavigationContext'
import { MOBILE_NAV_LINKS } from '@/constants/navigation'

/**
 * Full-screen mobile navigation overlay.
 * Slides in from the top when isMobileNavOpen is true.
 * Closes automatically when a link is tapped, on Escape, and returns focus
 * to whatever opened it.
 */
export function MobileNav() {
  const { isMobileNavOpen, closeMobileNav } = useNavigation()
  const panelRef = useRef<HTMLDivElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  const lastFocused = useRef<HTMLElement | null>(null)

  // Lock body scroll while the overlay is visible.
  // Compensating for the scrollbar keeps the page from shifting sideways
  // the moment the menu opens.
  useEffect(() => {
    if (!isMobileNavOpen) return

    const { body } = document
    const scrollbar = window.innerWidth - document.documentElement.clientWidth
    const prevOverflow = body.style.overflow
    const prevPadding = body.style.paddingRight

    body.style.overflow = 'hidden'
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`

    return () => {
      body.style.overflow = prevOverflow
      body.style.paddingRight = prevPadding
    }
  }, [isMobileNavOpen])

  // Escape to close + focus management
  useEffect(() => {
    if (!isMobileNavOpen) return

    lastFocused.current = document.activeElement as HTMLElement | null
    // Wait for the panel to become focusable before moving focus into it.
    const focusTimer = setTimeout(() => firstLinkRef.current?.focus(), 50)

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        closeMobileNav()
        return
      }

      // Keep Tab inside the panel while it is modal.
      if (e.key !== 'Tab') return
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>('a[href], button')
      if (!focusables || focusables.length === 0) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      clearTimeout(focusTimer)
      document.removeEventListener('keydown', onKeyDown)
      lastFocused.current?.focus()
    }
  }, [isMobileNavOpen, closeMobileNav])

  return (
    <div
      ref={panelRef}
      id="mobile-nav"
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación móvil"
      // `inert` removes the panel from the tab order and the accessibility
      // tree while closed — `aria-hidden` alone would leave the links
      // focusable, which is an accessibility violation.
      inert={!isMobileNavOpen}
      className={`fixed inset-0 bg-brand-black z-[999] flex flex-col items-center justify-center gap-8 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isMobileNavOpen
          ? 'translate-y-0 pointer-events-auto mobile-nav-open'
          : '-translate-y-full pointer-events-none'
      }`}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={closeMobileNav}
        aria-label="Cerrar menú"
        className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center text-brand-white/70 hover:text-brand-white text-2xl leading-none transition-colors duration-300"
      >
        <span aria-hidden="true">✕</span>
      </button>

      {MOBILE_NAV_LINKS.map((link, index) => (
        <a
          key={link.href}
          ref={index === 0 ? firstLinkRef : undefined}
          href={link.href}
          onClick={closeMobileNav}
          style={{ transitionDelay: `${index * 60 + 200}ms` }}
          className="mobile-nav-link font-cormorant text-[2.5rem] font-light text-brand-white no-underline tracking-[0.05em] hover:text-brand-red-light"
        >
          {link.label}
        </a>
      ))}
    </div>
  )
}
