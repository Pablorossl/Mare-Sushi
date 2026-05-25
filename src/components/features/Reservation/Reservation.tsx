import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ReservationInfo } from './ReservationInfo'
import { ReservationForm } from './ReservationForm'

/**
 * Reservation section — Server Component shell.
 * Splits into two columns:
 *  - Left: static info (server-rendered)
 *  - Right: interactive form (client component)
 */
export function Reservation() {
  return (
    <section
      id="reserva"
      aria-labelledby="reserva-heading"
      className="grid grid-cols-2 gap-28 items-start max-w-[1400px] mx-auto py-36 px-16 border-t border-[var(--border-subtle)] max-lg:grid-cols-1 max-lg:gap-16 max-lg:py-28 max-lg:px-10 max-md:py-20 max-md:px-6"
    >
      {/* Info sidebar */}
      <ReservationInfo />

      {/* Interactive form */}
      <ScrollReveal delay={2}>
        <ReservationForm />
      </ScrollReveal>
    </section>
  )
}
