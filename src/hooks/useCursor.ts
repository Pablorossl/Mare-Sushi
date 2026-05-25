'use client'

import { useEffect, useRef } from 'react'

interface CursorRefs {
  dotRef: React.RefObject<HTMLDivElement | null>
  ringRef: React.RefObject<HTMLDivElement | null>
  wrapperRef: React.RefObject<HTMLDivElement | null>
}

/**
 * Animates a two-part custom cursor (dot + lagging ring).
 * The ring uses requestAnimationFrame for smooth interpolation.
 * Returns refs to attach to the cursor elements.
 */
export function useCursor(): CursorRefs {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = 0,
      mouseY = 0,
      ringX = 0,
      ringY = 0
    let frameId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`
        dotRef.current.style.top = `${mouseY}px`
      }
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top = `${ringY}px`
      }
      frameId = requestAnimationFrame(animateRing)
    }

    document.addEventListener('mousemove', onMouseMove)
    frameId = requestAnimationFrame(animateRing)

    const interactiveSelector =
      'a, button, .menu-item, .gallery-item, .review-card'

    const expandCursor = () => wrapperRef.current?.classList.add('cursor-expand')
    const shrinkCursor = () => wrapperRef.current?.classList.remove('cursor-expand')

    const attachListeners = () => {
      document
        .querySelectorAll<HTMLElement>(interactiveSelector)
        .forEach((el) => {
          el.addEventListener('mouseenter', expandCursor)
          el.addEventListener('mouseleave', shrinkCursor)
        })
    }

    // Attach after DOM settles
    attachListeners()

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(frameId)
      document
        .querySelectorAll<HTMLElement>(interactiveSelector)
        .forEach((el) => {
          el.removeEventListener('mouseenter', expandCursor)
          el.removeEventListener('mouseleave', shrinkCursor)
        })
    }
  }, [])

  return { dotRef, ringRef, wrapperRef }
}
