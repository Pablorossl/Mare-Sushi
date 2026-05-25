'use client'

import Link from 'next/link'
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
  const { toggleMobileNav } = useNavigation()

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
      {/* Logo */}
      <Link href="#" className="flex flex-col items-start no-underline group">
        <span className="font-cormorant text-2xl font-[500] tracking-[0.15em] text-brand-white leading-none">
          MARE SUSHI
        </span>
        <span className="text-[0.62rem] tracking-[0.35em] text-brand-red uppercase font-[400] mt-0.5">
          Fuengirola · Málaga
        </span>
      </Link>

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
        className="hidden max-md:flex flex-col gap-[5px] bg-transparent border-none p-1"
        onClick={toggleMobileNav}
        aria-label="Abrir menú de navegación"
        aria-expanded={false}
      >
        <span className="block w-6 h-px bg-brand-white transition-all duration-300" />
        <span className="block w-6 h-px bg-brand-white transition-all duration-300" />
        <span className="block w-6 h-px bg-brand-white transition-all duration-300" />
      </button>
    </nav>
  )
}
