import { RESTAURANT_DETAILS } from '@/constants/restaurant'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

/**
 * Reservation info column — Server Component.
 * Sticky sidebar with address, hours, phone, and email.
 */
export function ReservationInfo() {
  return (
    <div className="lg:sticky lg:top-28">
      <ScrollReveal>
        <SectionHeader
          id="reserva-heading"
          tag="Reservas"
          title={
            <>
              Reserva tu
              <br />
              <em className="not-italic text-brand-red-light">experiencia</em>
            </>
          }
        />
      </ScrollReveal>

      <ScrollReveal delay={2}>
        <p className="text-[var(--text-muted)] text-base leading-[1.85] mt-6 mb-10">
          Garantiza tu mesa para una velada inolvidable. Para grupos de más de 8 personas
          o eventos privados, contáctanos directamente.
        </p>

        <div>
          {RESTAURANT_DETAILS.map((detail, index) => (
            <div
              key={detail.label}
              className={`flex items-start gap-4 pb-6 mb-6 ${
                index < RESTAURANT_DETAILS.length - 1
                  ? 'border-b border-[var(--border-subtle)]'
                  : ''
              }`}
            >
              <span
                className="text-brand-red mt-0.5 text-base min-w-[18px]"
                aria-hidden="true"
              >
                {detail.icon}
              </span>
              <div className="min-w-0">
                <h3 className="text-[0.72rem] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-1">
                  {detail.label}
                </h3>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="font-cormorant text-[1.15rem] font-[400] text-brand-white no-underline break-words transition-colors duration-300 hover:text-brand-red-light"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="font-cormorant text-[1.15rem] font-[400] text-brand-white break-words">
                    {detail.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  )
}
