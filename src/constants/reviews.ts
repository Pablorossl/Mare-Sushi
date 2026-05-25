import type { Review } from '@/types'

export const REVIEWS: Review[] = [
  {
    id: 'review-01',
    stars: 5,
    text: 'Una experiencia absolutamente sublime. El atún rojo de almadraba fue la revelación del año. Servicio impecable y atmósfera que te transporta a Japón en plena Costa del Sol.',
    author: {
      name: 'Sofía Martínez',
      location: 'Fuengirola',
      date: 'Mayo 2025',
      avatarUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&auto=format&fit=crop&facepad=3&faces=1',
    },
    platform: 'Google',
  },
  {
    id: 'review-02',
    stars: 5,
    text: 'El Mare Roll es lo más innovador que he probado en la Costa del Sol. La combinación de gamba roja local con toro y ponzu trufado es de otro nivel. Obligatorio volver.',
    author: {
      name: 'Carlos Ruiz',
      location: 'Marbella',
      date: 'Abril 2025',
      avatarUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop&facepad=3',
    },
    platform: 'TripAdvisor',
  },
  {
    id: 'review-03',
    stars: 5,
    text: 'Hemos celebrado aquí nuestro aniversario y fue mágico. La atención personalizada, el sake Daiginjo y ese cheesecake japonés... MARE SUSHI tiene alma propia. El mejor de Andalucía.',
    author: {
      name: 'Ana & Javier López',
      location: 'Málaga',
      date: 'Junio 2025',
      avatarUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80&auto=format&fit=crop&facepad=3',
    },
    platform: 'Google',
  },
]
