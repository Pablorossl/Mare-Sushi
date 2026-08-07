'use client'

import { useNavigation } from '@/contexts/NavigationContext'
import { useNavScroll } from '@/hooks/useNavScroll'
import { NAV_LINKS } from '@/constants/navigation'
import { cn } from '@/lib/utils'

/**
 * Sticky top navigation bar.
 * Applies a glass-blur background once the user scrolls past 60px.
 * Delegates mobile nav state to NavigationContext.
 */
export function Navbar() {
  const isScrolled = useNavScroll()
  const { toggleMobileNav, isMobileNavOpen } = useNavigation()

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        'fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
        isScrolled
          ? 'px-16 py-4 bg-black/92 backdrop-blur-xl border-b border-[var(--border-subtle)]'
          : 'px-16 py-6',
        // Tablet
        'max-lg:px-10',
        // Mobile
        'max-md:px-6',
        isScrolled && 'max-md:py-4',
      )}
    >
      {/* Logo — plain anchor: next/link adds routing overhead for a same-page hash */}
      <a
        href="#hero"
        aria-label="MARE SUSHI Fuengirola — ir al inicio"
        className="flex flex-col items-start no-underline"
      >
        <span className="font-cormorant text-2xl font-[500] tracking-[0.15em] text-brand-white leading-none">
          MARE SUSHI
        </span>
        <span className="text-[0.62rem] tracking-[0.35em] text-brand-red-light uppercase font-[400] mt-0.5">
          Fuengirola · Málaga
        </span>
      </a>

      {/* Desktop links */}
      <div className="flex gap-10 items-center max-md:hidden">
        {NAV_LINKS.map((link) =>
          link.isCta ? (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.75rem] tracking-[0.2em] uppercase font-[400] text-brand-white border border-brand-red px-6 py-2.5 rounded-sm bg-transparent transition-all duration-300 hover:bg-brand-red"
            >
              {link.label}
            </a>
          ) : (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[0.75rem] tracking-[0.2em] uppercase font-[400] text-[var(--text-muted)] transition-colors duration-300 hover:text-brand-white after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-px after:bg-brand-red after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
            >
              {link.label}
            </a>
          ),
        )}
      </div>

      {/* Hamburger — mobile only */}
      <button
        type="button"
        className={cn(
          // w/h-11 keeps the tap target at the 44px WCAG minimum
          'hidden max-md:flex flex-col items-center justify-center gap-[5px] w-11 h-11 -mr-2.5 bg-transparent border-none',
          isMobileNavOpen && 'hamburger-open',
        )}
        onClick={toggleMobileNav}
        aria-controls="mobile-nav"
        aria-label={isMobileNavOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
        aria-expanded={isMobileNavOpen}
      >
        <span className="hamburger-line hamburger-line-1" />
        <span className="hamburger-line hamburger-line-2" />
        <span className="hamburger-line hamburger-line-3" />
      </button>
    </nav>
  )
}
