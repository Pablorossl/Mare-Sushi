import { HeroBackground } from './HeroBackground'
import { Button } from '@/components/ui/Button'

/**
 * Hero section — Server Component.
 * Static content is rendered on the server for optimal performance.
 * The background image / parallax is isolated in <HeroBackground> (client).
 */
export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Bienvenida a MARE SUSHI"
      className="relative h-svh min-h-[600px] md:h-screen md:min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax (client) */}
      <HeroBackground />

      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[rgba(8,8,8,0.88)] via-[rgba(8,8,8,0.55)] to-[rgba(8,8,8,0.75)]"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-[900px]">
        <p
          lang="ja"
          className="font-noto-jp text-[0.9rem] tracking-[0.5em] text-brand-red-light font-[300] mb-6 hero-animate-1"
        >
          海 · 鮨 · 天ぷら
        </p>

        <h1 className="font-cormorant text-[clamp(3.5rem,8vw,7rem)] font-light leading-[0.95] tracking-[-0.01em] mb-1 hero-animate-2 max-md:text-[3rem]">
          El arte
          <br />
          del{' '}
          <em className="not-italic font-light text-brand-red-light">sushi</em>
          <br />
          premium
        </h1>

        <p className="text-[clamp(0.75rem,1.5vw,0.85rem)] tracking-[0.3em] uppercase text-[var(--text-muted)] my-6 font-light hero-animate-3">
          Fuengirola · Málaga · España
        </p>

        <div
          aria-hidden="true"
          className="w-[60px] h-px bg-brand-red mx-auto mb-8 hero-animate-4"
        />

        <div className="flex gap-5 justify-center flex-wrap hero-animate-5 max-sm:flex-col max-sm:items-center max-sm:gap-3">
          <Button as="a" href="#reserva" className="max-sm:w-full">
            Reservar Mesa
          </Button>
          <Button as="a" href="#menu" variant="outline" className="max-sm:w-full">
            Ver Carta
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        aria-hidden="true"
      >
        <span className="text-[0.6rem] tracking-[0.3em] text-[var(--text-muted)] uppercase">
          Explorar
        </span>
        <div className="w-px h-[50px] bg-gradient-to-b from-brand-red to-transparent [animation:scrollPulse_2s_ease-in-out_infinite]" />
      </div>
    </section>
  )
}
