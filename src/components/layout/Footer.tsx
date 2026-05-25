import { RESTAURANT, FOOTER_NAV_LINKS } from '@/constants/restaurant'
import { FOOTER_NAV_LINKS as NAV } from '@/constants/navigation'

/**
 * Site-wide footer — Server Component.
 * Contains brand description, nav links, schedule, contact and legal.
 */
export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-[var(--border-subtle)] pt-20 pb-8 px-16 max-lg:px-10 max-md:px-6">
      {/* Grid */}
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-16 max-w-[1400px] mx-auto mb-16 max-lg:grid-cols-2 max-lg:gap-12 max-md:grid-cols-1 max-md:gap-10">
        {/* Brand column */}
        <div>
          <span className="font-cormorant text-[1.8rem] font-[500] tracking-[0.15em] text-brand-white block">
            {RESTAURANT.name}
          </span>
          <span className="text-[0.6rem] tracking-[0.35em] text-brand-red uppercase block mt-1">
            {RESTAURANT.tagline}
          </span>
          <p className="text-[0.88rem] text-[var(--text-muted)] leading-[1.8] mt-5 max-w-[280px]">
            {RESTAURANT.description}
          </p>

          {/* Social links */}
          <div className="flex gap-3 mt-6">
            {[
              { href: RESTAURANT.socials.instagram, label: 'Instagram', text: 'ig' },
              { href: RESTAURANT.socials.facebook, label: 'Facebook', text: 'fb' },
              { href: RESTAURANT.socials.tripadvisor, label: 'TripAdvisor', text: 'ta' },
              { href: RESTAURANT.socials.google, label: 'Google', text: 'G' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 border border-[var(--border-subtle)] rounded-full flex items-center justify-center text-[var(--text-muted)] text-sm no-underline transition-all duration-300 hover:border-brand-red hover:text-brand-red hover:-translate-y-0.5"
              >
                {social.text}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-[0.68rem] tracking-[0.3em] uppercase text-brand-white font-[400] mb-5">
            Navegación
          </h4>
          <ul className="list-none">
            {NAV.map((link) => (
              <li key={link.href} className="mb-3">
                <a
                  href={link.href}
                  className="text-[var(--text-muted)] no-underline text-[0.88rem] transition-colors duration-300 hover:text-brand-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Schedule */}
        <div>
          <h4 className="text-[0.68rem] tracking-[0.3em] uppercase text-brand-white font-[400] mb-5">
            Horario
          </h4>
          <p className="text-[var(--text-muted)] text-[0.88rem] leading-[1.9]">
            Lunes
            <br />
            <span className="text-brand-red text-[0.82rem]">Cerrado</span>
          </p>
          <p className="text-[var(--text-muted)] text-[0.88rem] leading-[1.9] mt-3">
            Mar – Jue
            <br />
            13:00–16:00 · 20:00–23:00
          </p>
          <p className="text-[var(--text-muted)] text-[0.88rem] leading-[1.9] mt-3">
            Vie – Dom
            <br />
            13:00–16:30 · 20:00–23:30
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[0.68rem] tracking-[0.3em] uppercase text-brand-white font-[400] mb-5">
            Contacto
          </h4>
          <p className="text-[var(--text-muted)] text-[0.88rem] leading-[1.9]">
            Av. Condes de San Isidro, 24
            <br />
            29640 Fuengirola
            <br />
            Málaga, España
          </p>
          <p className="text-[var(--text-muted)] text-[0.88rem] mt-3">{RESTAURANT.phone}</p>
          <p className="text-[var(--text-muted)] text-[0.88rem] mt-1">{RESTAURANT.email}</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1400px] mx-auto pt-8 border-t border-[var(--border-subtle)] flex justify-between items-center flex-wrap gap-4 max-md:flex-col max-md:text-center">
        <p className="text-[0.78rem] text-[var(--text-dim)]">
          © 2025 MARE SUSHI Fuengirola. Todos los derechos reservados.
        </p>
        <p className="text-[0.78rem] text-[var(--text-dim)]">
          Diseñado con <span className="text-brand-red">❤</span> en la Costa del Sol
        </p>
      </div>
    </footer>
  )
}
