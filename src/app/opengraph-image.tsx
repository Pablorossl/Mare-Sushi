import { ImageResponse } from 'next/og'
import { RESTAURANT } from '@/constants/restaurant'

export const alt = 'MARE SUSHI — Gastronomía japonesa premium en Fuengirola, Málaga'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Social share card, generated at build time by next/og (no extra dependency,
 * no external asset to keep in sync). Uses system fonts only so the build does
 * not need to fetch a webfont binary.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #080808 0%, #1a0d0b 55%, #080808 100%)',
          color: '#f8f6f2',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 14,
            textTransform: 'uppercase',
            color: '#e05041',
          }}
        >
          Fuengirola · Málaga
        </div>

        <div
          style={{
            fontSize: 130,
            letterSpacing: 18,
            marginTop: 26,
            fontWeight: 500,
          }}
        >
          {RESTAURANT.name}
        </div>

        <div
          style={{
            width: 90,
            height: 3,
            background: '#c0392b',
            marginTop: 34,
            marginBottom: 34,
          }}
        />

        <div style={{ fontSize: 34, color: '#b3b0aa', letterSpacing: 2 }}>
          El arte del sushi premium
        </div>
      </div>
    ),
    size,
  )
}
