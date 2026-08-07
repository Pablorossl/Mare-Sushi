'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { RESTAURANT } from '@/constants/restaurant'

/**
 * Route-level error boundary. Keeps an unexpected runtime failure inside the
 * brand shell instead of showing the default Next.js error screen, and always
 * leaves the visitor a way to reach the restaurant.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Replace with a real error reporter (Sentry, Vercel observability…).
    console.error(error)
  }, [error])

  return (
    <main className="min-h-svh flex flex-col items-center justify-center text-center px-6 py-24">
      <p className="section-tag centered justify-center">Error</p>

      <h1 className="font-cormorant text-[clamp(2.5rem,7vw,4.5rem)] font-light leading-[1.1] mt-2">
        Algo no ha salido
        <br />
        <em className="not-italic text-brand-red-light">como esperábamos</em>
      </h1>

      <p className="text-[var(--text-muted)] text-base leading-[1.85] mt-6 max-w-[460px]">
        Ha ocurrido un error inesperado. Puedes reintentarlo o llamarnos directamente
        para hacer tu reserva.
      </p>

      <div className="flex gap-4 mt-10 flex-wrap justify-center max-sm:flex-col max-sm:w-full">
        <Button onClick={reset} className="max-sm:w-full">
          Reintentar
        </Button>
        <Button
          as="a"
          href={`tel:${RESTAURANT.phoneHref}`}
          variant="outline"
          className="max-sm:w-full"
        >
          Llamar al restaurante
        </Button>
      </div>
    </main>
  )
}
