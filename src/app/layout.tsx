import type { Metadata, Viewport } from 'next'
import { cormorantGaramond, jost, notoSerifJP } from '@/lib/fonts'
import { AppProviders } from '@/lib/providers/AppProviders'
import { Navbar } from '@/components/layout/Navbar'
import { MobileNav } from '@/components/layout/MobileNav'
import { Toast } from '@/components/ui/Toast'
import './globals.css'

export const metadata: Metadata = {
  title: 'MARE SUSHI — Fuengirola · Experiencia Japonesa Premium',
  description:
    'MARE SUSHI Fuengirola — Auténtica gastronomía japonesa premium en el corazón de Fuengirola, Málaga. Reserva tu mesa.',
  metadataBase: new URL('https://maresushi.es'),
  openGraph: {
    title: 'MARE SUSHI — Fuengirola',
    description: 'Auténtica gastronomía japonesa premium en la Costa del Sol.',
    type: 'website',
    locale: 'es_ES',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
    <html
      lang="es"
      className={`${cormorantGaramond.variable} ${jost.variable} ${notoSerifJP.variable}`}
    >
      <body>
        <AppProviders>
          {/* Client components that need shared state */}
          <MobileNav />
          <Navbar />

          {/* Page content */}
          {children}

          {/* Global notifications */}
          <Toast />
        </AppProviders>
      </body>
    </html>
  )
}
