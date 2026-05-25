'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

/**
 * Hero background — Client Component.
 * Handles two effects that require the DOM:
 *  1. Scale-in transition on mount (`.loaded` class)
 *  2. Vertical parallax on scroll
 */
export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Scale-in on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      containerRef.current?.classList.add('loaded')
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  // Parallax scroll
  useEffect(() => {
    const el = containerRef.current

    const handleScroll = () => {
      if (!el) return
      const scrollY = window.scrollY
      if (scrollY < window.innerHeight) {
        el.style.transform = `scale(1) translateY(${scrollY * 0.3}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="hero-bg">
      <Image
        src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1800&q=85&auto=format&fit=crop"
        alt="Experiencia gastronómica japonesa premium en MARE SUSHI Fuengirola"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
    </div>
  )
}
