import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { REVIEWS } from '@/constants/reviews'
import type { Review } from '@/types'

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-5" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-brand-gold text-[0.85rem]" aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className={"relative bg-brand-card border border-[var(--border-subtle)] rounded p-9 transition-all duration-300 hover:border-[var(--border-strong)] hover:-translate-y-1 before:content-['\"'] before:font-cormorant before:text-[8rem] before:leading-[0.6] before:text-brand-red/12 before:absolute before:top-6 before:right-6 before:pointer-events-none"}>
      <StarRating count={review.stars} />

      <blockquote className="font-cormorant text-[1.1rem] font-light leading-[1.75] text-brand-cream italic mb-7">
        "{review.text}"
      </blockquote>

      <footer className="flex items-center gap-4 pt-5 border-t border-[var(--border-subtle)]">
        <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[var(--border-strong)] shrink-0">
          <Image
            src={review.author.avatarUrl}
            alt={review.author.name}
            fill
            sizes="44px"
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-[0.85rem] font-[400]">{review.author.name}</p>
          <p className="text-[0.72rem] text-[var(--text-muted)] mt-0.5">
            {review.author.location} · {review.author.date}
          </p>
        </div>
        <span className="text-brand-red text-[0.7rem] tracking-[0.1em] uppercase ml-auto">
          {review.platform}
        </span>
      </footer>
    </article>
  )
}

/**
 * Reviews section — Server Component.
 * Renders static Google / TripAdvisor review cards in a 3-column grid.
 */
export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="py-36 px-16 bg-brand-dark border-t border-[var(--border-subtle)] max-lg:py-28 max-lg:px-10 max-md:py-20 max-md:px-6"
    >
      <div className="max-w-[1200px] mx-auto mb-14">
        <ScrollReveal>
          <p className="section-tag mb-3">Opiniones</p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2
            id="reviews-heading"
            className="font-cormorant text-[clamp(2.2rem,4.5vw,3.5rem)] font-light leading-[1.1] tracking-[-0.01em]"
          >
            Lo que dicen
            <br />
            <em className="not-italic text-brand-red-light">nuestros clientes</em>
          </h2>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-3 gap-6 max-w-[1200px] mx-auto max-lg:grid-cols-1">
        {REVIEWS.map((review, index) => (
          <ScrollReveal key={review.id} delay={((index + 1) % 4) as 0 | 1 | 2 | 3}>
            <ReviewCard review={review} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
