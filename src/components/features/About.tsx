import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ABOUT_PILLARS, RESTAURANT } from '@/constants/restaurant'

/**
 * About section — Server Component.
 * Two-column layout: visual stack on the left, text + pillars on the right.
 */
export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="grid grid-cols-2 gap-24 items-center max-w-[1400px] mx-auto py-36 px-16 max-lg:grid-cols-1 max-lg:gap-16 max-lg:py-28 max-lg:px-10 max-md:py-20 max-md:px-6"
    >
      {/* Visual */}
      <ScrollReveal className="relative">
        {/* Main image */}
        <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&q=85&auto=format&fit=crop"
            alt="Cocina de sushi premium en MARE SUSHI"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover brightness-90 contrast-105"
            loading="lazy"
          />
        </div>

        {/* Accent image — hidden on tablet */}
        <div className="absolute bottom-[-3rem] right-[-3rem] w-[55%] aspect-square rounded-sm overflow-hidden border-[6px] border-brand-black max-lg:hidden">
          <Image
            src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=85&auto=format&fit=crop"
            alt="Detalle de sashimi premium"
            fill
            sizes="30vw"
            className="object-cover brightness-85 contrast-110"
            loading="lazy"
          />
        </div>

        {/* Year badge */}
        <div className="absolute top-8 left-[-2rem] bg-brand-red px-6 py-6 text-center rounded-sm shadow-[0_20px_60px_rgba(192,57,43,0.3)] max-lg:left-4">
          <span className="font-cormorant text-[2.5rem] font-light leading-none block">
            {RESTAURANT.openingSince}
          </span>
          <span className="text-[0.6rem] tracking-[0.2em] uppercase text-white/75">
            Apertura · Fuengirola
          </span>
        </div>
      </ScrollReveal>

      {/* Text */}
      <div className="pl-4 max-lg:pl-0">
        <ScrollReveal delay={1}>
          <SectionHeader
            id="about-heading"
            tag="Nuestra Historia"
            title={
              <>
                Tradición japonesa,
                <br />
                <em className="not-italic text-brand-red-light">alma mediterránea</em>
              </>
            }
          />
        </ScrollReveal>

        <ScrollReveal delay={3} className="mt-7">
          <p className="text-[var(--text-muted)] text-base leading-[1.85] mb-6">
            MARE SUSHI nace de la pasión por la gastronomía japonesa más auténtica y la
            riqueza del mar Mediterráneo. Cada pieza es una obra de arte efímera,
            concebida para deleitar todos los sentidos.
          </p>
          <p className="text-[var(--text-muted)] text-base leading-[1.85]">
            Nuestro chef, formado en Tokio y apasionado por el producto local, selecciona
            a diario los mejores pescados y mariscos de las lonjas de la Costa del Sol. La
            frescura no es una promesa: es nuestra filosofía.
          </p>
        </ScrollReveal>

        {/* Pillars */}
        <ScrollReveal delay={4} className="grid grid-cols-2 gap-6 mt-10 max-md:grid-cols-1">
          {ABOUT_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="border-t border-[var(--border-strong)] pt-5"
            >
              <div className="text-brand-red text-lg mb-2" aria-hidden="true">
                ✦
              </div>
              <h4 className="font-cormorant text-[1.15rem] font-[500] mb-1.5">
                {pillar.title}
              </h4>
              <p className="text-[0.82rem] text-[var(--text-muted)] leading-[1.6]">
                {pillar.description}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
