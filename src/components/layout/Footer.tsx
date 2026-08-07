import { RESTAURANT } from '@/constants/restaurant'
import { FOOTER_NAV_LINKS } from '@/constants/navigation'
import { SOCIAL_ICONS } from './socialIcons'

const SOCIALS = [
  { key: 'instagram', href: RESTAURANT.socials.instagram, label: 'Instagram' },
  { key: 'facebook', href: RESTAURANT.socials.facebook, label: 'Facebook' },
  { key: 'tripadvisor', href: RESTAURANT.socials.tripadvisor, label: 'TripAdvisor' },
  { key: 'google', href: RESTAURANT.socials.google, label: 'Google' },
] as const

const SOCIAL_CLASSES =
  'w-10 h-10 border border-[var(--border-subtle)] rounded-full flex items-center justify-center text-[var(--text-muted)] no-underline transition-all duration-300'

/**
 * Site-wide footer — Server Component.
 * Contains brand description, nav links, schedule, contact and legal.
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark border-t border-[var(--border-subtle)] pt-20 pb-8 px-16 max-lg:px-10 max-md:px-6">
      {/* Grid */}
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-16 max-w-[1400px] mx-auto mb-16 max-lg:grid-cols-2 max-lg:gap-12 max-md:grid-cols-1 max-md:gap-10">
        {/* Brand column */}
        <div>
          <span className="font-cormorant text-[1.8rem] font-[500] tracking-[0.15em] text-brand-white block">
            {RESTAURANT.name}
          </span>
          <span className="text-[0.6rem] tracking-[0.35em] text-brand-red-light uppercase block mt-1">
            {RESTAURANT.tagline}
          </span>
          <p className="text-[0.88rem] text-[var(--text-muted)] leading-[1.8] mt-5 max-w-[280px]">
            {RESTAURANT.description}
          </p>

          {/* Social links — rendered only when a real profile URL is configured */}
          <ul className="flex gap-3 mt-6 list-none">
            {SOCIALS.map((social) => (
              <li key={social.key}>
                {social.href ? (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${RESTAURANT.name} en ${social.label} (se abre en una ventana nueva)`}
                    className={`${SOCIAL_CLASSES} hover:border-brand-red hover:text-brand-red-light hover:-translate-y-0.5`}
                  >
                    {SOCIAL_ICONS[social.key]}
                  </a>
                ) : (
                  <span
                    aria-hidden="true"
                    className={`${SOCIAL_CLASSES} opacity-40`}
                  >
                    {SOCIAL_ICONS[social.key]}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <nav aria-labelledby="footer-nav-heading">
          <h2
            id="footer-nav-heading"
            className="text-[0.68rem] tracking-[0.3em] uppercase text-brand-white font-[400] mb-5"
          >
            Navegación
          </h2>
          <ul className="list-none">
            {FOOTER_NAV_LINKS.map((link) => (
              <li key={link.href} className="mb-3">
                <a
                  href={link.href}
                  className="inline-block py-0.5 text-[var(--text-muted)] no-underline text-[0.88rem] transition-colors duration-300 hover:text-brand-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Schedule */}
        <div>
          <h2 className="text-[0.68rem] tracking-[0.3em] uppercase text-brand-white font-[400] mb-5">
            Horario
          </h2>
          <p className="text-[var(--text-muted)] text-[0.88rem] leading-[1.9]">
            Lunes
            <br />
            <span className="text-brand-red-light text-[0.82rem]">
              {RESTAURANT.schedule.monday}
            </span>
          </p>
          <p className="text-[var(--text-muted)] text-[0.88rem] leading-[1.9] mt-3">
            Mar – Jue
            <br />
            {RESTAURANT.schedule.tuesdayToThursday}
          </p>
          <p className="text-[var(--text-muted)] text-[0.88rem] leading-[1.9] mt-3">
            Vie – Dom
            <br />
            {RESTAURANT.schedule.fridayToSunday}
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-[0.68rem] tracking-[0.3em] uppercase text-brand-white font-[400] mb-5">
            Contacto
          </h2>
          <address className="not-italic text-[var(--text-muted)] text-[0.88rem] leading-[1.9]">
            {RESTAURANT.address.street}
            <br />
            {RESTAURANT.address.postalCode} {RESTAURANT.address.city}
            <br />
            {RESTAURANT.address.region}, {RESTAURANT.address.country}
            <div className="mt-3">
              <a
                href={`tel:${RESTAURANT.phoneHref}`}
                className="inline-block py-0.5 no-underline transition-colors duration-300 hover:text-brand-white"
              >
                {RESTAURANT.phone}
              </a>
            </div>
            <div className="mt-1">
              <a
                href={`mailto:${RESTAURANT.email}`}
                className="inline-block py-0.5 no-underline transition-colors duration-300 hover:text-brand-white"
              >
                {RESTAURANT.email}
              </a>
            </div>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1400px] mx-auto pt-8 border-t border-[var(--border-subtle)] flex justify-between items-center flex-wrap gap-4 max-md:flex-col max-md:text-center">
        <p className="text-[0.78rem] text-[var(--text-dim)]">
          © {currentYear} {RESTAURANT.name} {RESTAURANT.address.city}. Todos los derechos
          reservados.
        </p>
        <p className="text-[0.78rem] text-[var(--text-dim)]">
          Diseñado con{' '}
          <span className="text-brand-red-light" aria-hidden="true">
            ❤
          </span>
          <span className="sr-only">amor</span> en la Costa del Sol
        </p>
      </div>
    </footer>
  )
}
