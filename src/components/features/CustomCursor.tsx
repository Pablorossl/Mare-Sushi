'use client'

import { useCursor } from '@/hooks/useCursor'

/**
 * Custom two-part cursor: sharp dot + lagging ring.
 * Hidden automatically on touch devices via CSS (max-md).
 * Uses mix-blend-mode: difference for the inversion effect.
 */
export function CustomCursor() {
  const { dotRef, ringRef, wrapperRef } = useCursor()

  return (
    <div ref={wrapperRef} className="cursor" aria-hidden="true">
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </div>
  )
}
