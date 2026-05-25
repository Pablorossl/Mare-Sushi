'use client'

import { useEffect, useState } from 'react'

/**
 * Returns true when the page has been scrolled past a given threshold (px).
 * Uses a passive scroll listener for optimal performance.
 */
export function useNavScroll(threshold = 60): boolean {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > threshold)

    // Set initial state in case page loads mid-scroll
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return isScrolled
}
