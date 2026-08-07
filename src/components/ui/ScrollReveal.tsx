'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3 | 4
  /** Override the wrapping element tag. Defaults to 'div'. */
  as?: keyof React.JSX.IntrinsicElements
}

const DELAY_CLASSES: Record<number, string> = {
  0: '',
  1: 'reveal-delay-1',
  2: 'reveal-delay-2',
  3: 'reveal-delay-3',
  4: 'reveal-delay-4',
}

/**
 * Wraps children in a scroll-triggered reveal animation.
 * The element enters with a fade-up when it scrolls into view.
 * Only adds the `visible` class once — animation does not replay on scroll-out.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Fail open: if the API is unavailable the content must still be visible.
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    // @ts-expect-error — polymorphic element typing
    <Tag ref={ref} className={cn('reveal', DELAY_CLASSES[delay], className)}>
      {children}
    </Tag>
  )
}
