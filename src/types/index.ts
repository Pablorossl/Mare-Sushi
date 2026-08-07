// ─── Menu ──────────────────────────────────────────────────────────────────

export interface MenuItem {
  id: string
  num: string
  name: string
  price: string
  description: string
  tag?: string
}

export interface MenuCategory {
  id: string
  label: string
  items: MenuItem[]
}

// ─── Gallery ───────────────────────────────────────────────────────────────

export interface GalleryImage {
  id: string
  src: string
  alt: string
  /** CSS grid span class name (e.g. "g1", "g2", …) */
  spanClass: string
}

// ─── Reviews ───────────────────────────────────────────────────────────────

export type ReviewPlatform = 'Google' | 'TripAdvisor'

export interface Review {
  id: string
  stars: number
  text: string
  author: {
    name: string
    location: string
    date: string
    avatarUrl: string
  }
  platform: ReviewPlatform
}

// ─── Navigation ────────────────────────────────────────────────────────────

export interface NavLink {
  label: string
  href: string
  isCta?: boolean
}

// ─── Restaurant ────────────────────────────────────────────────────────────

export interface RestaurantDetail {
  icon: string
  label: string
  value: string
  /** When present the value is rendered as a link (tel: / mailto:). */
  href?: string
}

// ─── Form ──────────────────────────────────────────────────────────────────

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export interface ReservationFormData {
  nombre: string
  telefono: string
  personas: string
  fecha: string
  hora: string
  email: string
  notas: string
}
