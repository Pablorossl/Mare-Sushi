'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

/**
 * Hero background — Client Component.
 * Handles two effects that require the DOM:
 *  1. Slow scale-in transition on mount (inner `.hero-bg-inner`)
 *  2. Vertical parallax on scroll (outer `.hero-bg`)
 *
 * The two live on separate elements on purpose: driving both from one node
 * meant every parallax frame inherited the 8s scale-in transition, so the
 * background lagged seconds behind the scroll.
 */
export function HeroBackground() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  // Scale-in on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      innerRef.current?.classList.add('loaded')
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  // Parallax scroll — rAF-throttled, and disabled when the visitor asks for
  // reduced motion.
  useEffect(() => {
    const el = parallaxRef.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches) return

    let frame = 0

    const update = () => {
      frame = 0
      const scrollY = window.scrollY
      if (scrollY < window.innerHeight) {
        el.style.transform = `translate3d(0, ${scrollY * 0.3}px, 0)`
      }
    }

    const handleScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={parallaxRef} className="hero-bg">
      <div ref={innerRef} className="hero-bg-inner">
        <Image
          src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1920&q=80&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </div>
  )
}
