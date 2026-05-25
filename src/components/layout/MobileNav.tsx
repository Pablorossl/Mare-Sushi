'use client'

import { useNavigation } from '@/contexts/NavigationContext'
import { MOBILE_NAV_LINKS } from '@/constants/navigation'

/**
 * Full-screen mobile navigation overlay.
 * Slides in from the top when isMobileNavOpen is true.
 * Closes automatically when a link is tapped.
 */
export function MobileNav() {
  const { isMobileNavOpen, closeMobileNav } = useNavigation()

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación móvil"
      aria-hidden={!isMobileNavOpen}
      className={`fixed inset-0 bg-brand-black z-[999] flex flex-col items-center justify-center gap-8 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isMobileNavOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Close button */}
      <button
        onClick={closeMobileNav}
        aria-label="Cerrar menú"
        className="absolute top-6 right-6 text-brand-white/60 hover:text-brand-white text-3xl leading-none transition-colors duration-300"
      >
        ✕
      </button>

      {MOBILE_NAV_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={closeMobileNav}
          className="font-cormorant text-[2.5rem] font-light text-brand-white no-underline tracking-[0.05em] transition-colors duration-300 hover:text-brand-red"
        >
          {link.label}
        </a>
      ))}
    </div>
  )
}
