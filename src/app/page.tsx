import { Hero } from '@/components/features/Hero'
import { MarqueeBand } from '@/components/features/MarqueeBand'
import { About } from '@/components/features/About'
import { Menu } from '@/components/features/Menu/Menu'
import { Gallery } from '@/components/features/Gallery'
import { Reviews } from '@/components/features/Reviews'
import { Reservation } from '@/components/features/Reservation/Reservation'
import { Footer } from '@/components/layout/Footer'

/**
 * Home page — Server Component.
 * Composes all sections in render order.
 * Each section is independently responsible for its own layout.
 */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <MarqueeBand />
      <About />
      <Menu />
      <Gallery />
      <Reviews />
      <Reservation />
      <Footer />
    </main>
  )
}
