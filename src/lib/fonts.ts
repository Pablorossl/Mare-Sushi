import { Cormorant_Garamond, Jost } from 'next/font/google'

/**
 * Weights are kept to exactly what the UI renders — every extra weight is
 * another font file on the critical path.
 * Cormorant: 300 / 400 / 500 (+ italic for the review blockquotes).
 * Jost: 300 (body) / 400 / 500.
 */
export const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
})

export const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost-sans',
  display: 'swap',
})

/**
 * The hero kicker renders kanji (海 · 鮨 · 天ぷら). Noto Serif JP used to be
 * loaded for it, but only its `latin` subset was requested — which contains
 * none of those glyphs, so three extra font files were downloaded and the
 * characters still fell back to a system font. Requesting the `japanese`
 * subset instead would cost megabytes for six characters, so the kicker now
 * uses a system Japanese serif stack. See --font-noto-jp in globals.css.
 */
