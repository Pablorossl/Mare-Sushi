import type { Metadata, Viewport } from 'next'
import { cormorantGaramond, jost } from '@/lib/fonts'
import { AppProviders } from '@/lib/providers/AppProviders'
import { Navbar } from '@/components/layout/Navbar'
import { MobileNav } from '@/components/layout/MobileNav'
import { Toast } from '@/components/ui/Toast'
import { RestaurantJsonLd } from '@/components/seo/RestaurantJsonLd'
import { SITE_URL } from '@/constants/restaurant'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'MARE SUSHI — Fuengirola · Experiencia Japonesa Premium',
    template: '%s | MARE SUSHI Fuengirola',
  },
  description:
    'MARE SUSHI Fuengirola — Auténtica gastronomía japonesa premium en el corazón de Fuengirola, Málaga. Reserva tu mesa.',
  metadataBase: new URL(SITE_URL),
  applicationName: 'MARE SUSHI',
  authors: [{ name: 'MARE SUSHI' }],
  creator: 'MARE SUSHI',
  keywords: [
    'sushi Fuengirola',
    'restaurante japonés Fuengirola',
    'sushi Málaga',
    'restaurante japonés Costa del Sol',
    'omakase Fuengirola',
    'reservar sushi Fuengirola',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MARE SUSHI — Fuengirola',
    description: 'Auténtica gastronomía japonesa premium en la Costa del Sol.',
    type: 'website',
    locale: 'es_ES',
    url: '/',
    siteName: 'MARE SUSHI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MARE SUSHI — Fuengirola',
    description: 'Auténtica gastronomía japonesa premium en la Costa del Sol.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#080808',
  colorScheme: 'dark',
}

/**
 * Root layout — Server Component.
 * Applies Google Fonts via next/font (zero layout shift, self-hosted).
 * Wraps the tree in client-side providers (navigation, toast).
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${cormorantGaramond.variable} ${jost.variable}`}>
      <head>
        {/* Warm up the image CDN before the hero image is requested */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        {/*
          No-JS fallback. ScrollReveal starts at opacity 0 and is revealed by an
          IntersectionObserver, so without JS every section below the fold would
          stay invisible.

          This is a <noscript> stylesheet rather than a `no-js` class stripped by
          an inline script: mutating <html>'s className before React hydrates
          makes the server HTML and the client DOM disagree, which React reports
          as a hydration attribute mismatch. <noscript> is inert when JS runs, so
          it cannot desync.
        */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<style>
              .reveal,
              .mobile-nav-link,
              .hero-animate-1,
              .hero-animate-2,
              .hero-animate-3,
              .hero-animate-4,
              .hero-animate-5,
              .hero-scroll-indicator {
                opacity: 1 !important;
                transform: none !important;
                animation: none !important;
              }
            </style>`,
          }}
        />
      </head>
      <body>
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>

        <AppProviders>
          {/* Client components that need shared state */}
          <MobileNav />
          <Navbar />

          {/* Page content */}
          {children}

          {/* Global notifications */}
          <Toast />
        </AppProviders>

        <RestaurantJsonLd />
      </body>
    </html>
  )
}
