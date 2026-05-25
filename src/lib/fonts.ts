import { Cormorant_Garamond, Jost, Noto_Serif_JP } from 'next/font/google'

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
})

export const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-jost-sans',
  display: 'swap',
})

export const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
})
