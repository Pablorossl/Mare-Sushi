import type { RestaurantDetail } from '@/types'

/**
 * Canonical site URL. Override per environment with NEXT_PUBLIC_SITE_URL so
 * metadata, canonicals and the sitemap point at the real deployment.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://maresushi.es'

export const RESTAURANT = {
  name: 'MARE SUSHI',
  tagline: 'Fuengirola · Málaga',
  subtitle: 'Fuengirola · Málaga · España',
  description:
    'Gastronomía japonesa premium en el corazón de la Costa del Sol. Ingredientes frescos, técnica ancestral y creatividad mediterránea.',
  address: {
    street: 'Av. Condes de San Isidro, 24',
    postalCode: '29640',
    city: 'Fuengirola',
    region: 'Málaga',
    country: 'España',
    countryCode: 'ES',
    /** Single-line form used in the reservation sidebar. */
    inline: 'Av. Condes de San Isidro, 24 · Fuengirola, Málaga',
  },
  /** Human-readable phone. Keep `phoneHref` in sync — it powers the tel: link. */
  phone: '+34 952 000 000',
  phoneHref: '+34952000000',
  email: 'reservas@maresushi.es',
  openingSince: '2024',
  /**
   * TODO(owner): replace with the real profile URLs before launch.
   * Entries left as `null` are rendered as non-interactive placeholders
   * instead of dead `href="#"` links.
   */
  socials: {
    instagram: null as string | null,
    facebook: null as string | null,
    tripadvisor: null as string | null,
    google: null as string | null,
  },
  schedule: {
    monday: 'Cerrado',
    tuesdayToThursday: '13:00–16:00 · 20:00–23:00',
    fridayToSunday: '13:00–16:30 · 20:00–23:30',
    summary: 'Mar–Dom: 13:00–16:00 y 20:00–23:30',
  },
} as const

/** Opening hours in schema.org format, derived from RESTAURANT.schedule. */
export const OPENING_HOURS = [
  { days: ['Tuesday', 'Wednesday', 'Thursday'], opens: '13:00', closes: '16:00' },
  { days: ['Tuesday', 'Wednesday', 'Thursday'], opens: '20:00', closes: '23:00' },
  { days: ['Friday', 'Saturday', 'Sunday'], opens: '13:00', closes: '16:30' },
  { days: ['Friday', 'Saturday', 'Sunday'], opens: '20:00', closes: '23:30' },
]

export const RESTAURANT_DETAILS: RestaurantDetail[] = [
  {
    icon: '📍',
    label: 'Dirección',
    value: RESTAURANT.address.inline,
  },
  {
    icon: '🕐',
    label: 'Horario',
    value: RESTAURANT.schedule.summary,
  },
  {
    icon: '📞',
    label: 'Teléfono',
    value: RESTAURANT.phone,
    href: `tel:${RESTAURANT.phoneHref}`,
  },
  {
    icon: '✉',
    label: 'Email',
    value: RESTAURANT.email,
    href: `mailto:${RESTAURANT.email}`,
  },
]

export const MARQUEE_WORDS = [
  'Sushi Premium',
  '·',
  'Fuengirola',
  '·',
  'Ingredientes Frescos',
  '·',
  'Experiencia Japonesa',
  '·',
  'Costa del Sol',
  '·',
  'Reserva Tu Mesa',
  '·',
]

export const ABOUT_PILLARS = [
  {
    id: 'pillar-01',
    title: 'Ingredientes Premium',
    description:
      'Producto fresco de lonja seleccionado cada mañana con los más altos estándares.',
  },
  {
    id: 'pillar-02',
    title: 'Técnica Ancestral',
    description:
      'Formación en Japón y respeto por la tradición del itamae más exigente.',
  },
  {
    id: 'pillar-03',
    title: 'Creatividad Única',
    description:
      'Fusión entre el Mediterráneo y el umami japonés en cada creación.',
  },
  {
    id: 'pillar-04',
    title: 'Experiencia Total',
    description:
      'Ambiente íntimo y sofisticado diseñado para una velada inolvidable.',
  },
]

export const RESERVATION_PARTY_SIZES = [
  '1 persona',
  '2 personas',
  '3 personas',
  '4 personas',
  '5 personas',
  '6 personas',
  '7 personas',
  '8+ personas (llamar)',
]

export const RESERVATION_TIMES = {
  lunch: ['13:00', '13:30', '14:00', '14:30', '15:00'],
  dinner: ['20:00', '20:30', '21:00', '21:30', '22:00', '22:30'],
}
