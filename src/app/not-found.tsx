import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { RESTAURANT } from '@/constants/restaurant'

export const metadata: Metadata = {
  title: 'Página no encontrada',
  robots: { index: false, follow: true },
}

/**
 * Branded 404. Without this Next.js serves its default white error page,
 * which is jarring against the site's dark identity.
 */
export default function NotFound() {
  return (
    <main className="min-h-svh flex flex-col items-center justify-center text-center px-6 py-24">
      <p className="section-tag centered justify-center">Error 404</p>

      <h1 className="font-cormorant text-[clamp(2.5rem,7vw,4.5rem)] font-light leading-[1.1] mt-2">
        Esta página
        <br />
        <em className="not-italic text-brand-red-light">no está en la carta</em>
      </h1>

      <p className="text-[var(--text-muted)] text-base leading-[1.85] mt-6 max-w-[460px]">
        La página que buscas no existe o ha cambiado de dirección. Vuelve al inicio para
        descubrir nuestra carta o reservar tu mesa.
      </p>

      <div className="flex gap-4 mt-10 flex-wrap justify-center max-sm:flex-col max-sm:w-full">
        <Button as="a" href="/" className="max-sm:w-full">
          Volver al inicio
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
