import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GALLERY_IMAGES } from '@/constants/gallery'

/**
 * Gallery section — Server Component.
 * Renders an asymmetric 12-column CSS grid of food / ambience photography.
 * Grid-span classes (g1–g8) are defined in globals.css and collapse to
 * a single-column stack on mobile.
 */
export function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="py-36 px-16 max-lg:py-28 max-lg:px-10 max-md:py-20 max-md:px-6"
    >
      <ScrollReveal className="text-center mb-16">
        <SectionHeader
          id="gallery-heading"
          tag="Galería"
          centered
          title={
            <>
              Momentos que
              <br />
              <em className="not-italic text-brand-red-light">perduran</em>
            </>
          }
        />
      </ScrollReveal>

      <div
        className="grid [grid-template-columns:repeat(12,1fr)] [grid-template-rows:repeat(3,260px)] gap-2 max-w-[1400px] mx-auto max-lg:[grid-template-columns:repeat(2,1fr)] max-lg:[grid-template-rows:auto] max-md:grid-cols-1 max-md:[grid-template-rows:auto]"
        aria-label="Galería de imágenes de MARE SUSHI"
      >
        {GALLERY_IMAGES.map((image, index) => (
          <ScrollReveal
            key={image.id}
            delay={(index % 4) as 0 | 1 | 2 | 3}
            className={`gallery-item ${image.spanClass} overflow-hidden rounded-sm relative after:absolute after:inset-0 after:bg-brand-black/50 after:opacity-0 after:transition-opacity after:duration-400 hover:after:opacity-100`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.06]"
              loading="lazy"
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
