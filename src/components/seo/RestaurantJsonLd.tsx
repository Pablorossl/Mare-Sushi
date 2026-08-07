import { OPENING_HOURS, RESTAURANT, SITE_URL } from '@/constants/restaurant'

/**
 * schema.org `Restaurant` structured data — Server Component.
 *
 * Deliberately omits `aggregateRating` / `review`: the testimonials rendered in
 * the Reviews section are placeholder copy, and marking up unverified reviews is
 * a Google structured-data policy violation. Add them back only once they are
 * pulled from the real Google / TripAdvisor profiles.
 */
export function RestaurantJsonLd() {
  const sameAs = Object.values(RESTAURANT.socials).filter(
    (url): url is string => typeof url === 'string' && url.length > 0,
  )

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${SITE_URL}/#restaurant`,
    name: RESTAURANT.name,
    description: RESTAURANT.description,
    url: SITE_URL,
    telephone: RESTAURANT.phone,
    email: RESTAURANT.email,
    servesCuisine: ['Japonesa', 'Sushi', 'Mediterránea'],
    priceRange: '€€',
    acceptsReservations: true,
    currenciesAccepted: 'EUR',
    address: {
      '@type': 'PostalAddress',
      streetAddress: RESTAURANT.address.street,
      postalCode: RESTAURANT.address.postalCode,
      addressLocality: RESTAURANT.address.city,
      addressRegion: RESTAURANT.address.region,
      addressCountry: RESTAURANT.address.countryCode,
    },
    openingHoursSpecification: OPENING_HOURS.map((slot) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
    // Omitted entirely rather than emitted empty when no profiles are set.
    ...(sameAs.length > 0 ? { sameAs } : {}),
  }

  return (
    <script
      type="application/ld+json"
      // Static, developer-authored data. `<` is escaped so the payload can
      // never terminate the surrounding <script> element.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
      }}
    />
  )
}
