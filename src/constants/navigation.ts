import type { NavLink } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Nosotros', href: '#about' },
  { label: 'Carta', href: '#menu' },
  { label: 'Galería', href: '#gallery' },
  { label: 'Reseñas', href: '#reviews' },
  { label: 'Reservar Mesa', href: '#reserva', isCta: true },
]

export const MOBILE_NAV_LINKS: NavLink[] = [
  { label: 'Nosotros', href: '#about' },
  { label: 'Carta', href: '#menu' },
  { label: 'Galería', href: '#gallery' },
  { label: 'Reseñas', href: '#reviews' },
  { label: 'Reservar', href: '#reserva' },
]

export const FOOTER_NAV_LINKS: NavLink[] = [
  { label: 'Nosotros', href: '#about' },
  { label: 'Carta', href: '#menu' },
  { label: 'Galería', href: '#gallery' },
  { label: 'Reseñas', href: '#reviews' },
  { label: 'Reservar Mesa', href: '#reserva' },
]
