import type { RestaurantDetail } from '@/types'

export const RESTAURANT = {
  name: 'MARE SUSHI',
  tagline: 'Fuengirola · Málaga',
  subtitle: 'Fuengirola · Málaga · España',
  description:
    'Gastronomía japonesa premium en el corazón de la Costa del Sol. Ingredientes frescos, técnica ancestral y creatividad mediterránea.',
  address: 'Av. Condes de San Isidro, 24 · Fuengirola, Málaga',
  addressFull: 'Av. Condes de San Isidro, 24\n29640 Fuengirola\nMálaga, España',
  phone: '+34 952 000 000',
  email: 'reservas@maresushi.es',
  openingSince: '2024',
  socials: {
    instagram: '#',
    facebook: '#',
    tripadvisor: '#',
    google: '#',
  },
  schedule: {
    monday: 'Cerrado',
    tuesdayToThursday: '13:00–16:00 · 20:00–23:00',
    fridayToSunday: '13:00–16:30 · 20:00–23:30',
    summary: 'Mar–Dom: 13:00–16:00 y 20:00–23:30',
  },
} as const

export const RESTAURANT_DETAILS: RestaurantDetail[] = [
  {
    icon: '📍',
    label: 'Dirección',
    value: 'Av. Condes de San Isidro, 24 · Fuengirola, Málaga',
  },
  {
    icon: '🕐',
    label: 'Horario',
    value: 'Mar–Dom: 13:00–16:00 y 20:00–23:30',
  },
  {
    icon: '📞',
    label: 'Teléfono',
    value: '+34 952 000 000',
  },
  {
    icon: '✉',
    label: 'Email',
    value: 'reservas@maresushi.es',
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
