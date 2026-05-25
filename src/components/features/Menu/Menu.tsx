import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { MENU_CATEGORIES } from '@/constants/menu'
import { MenuTabs } from './MenuTabs'

/**
 * Menu section — Server Component shell.
 * Fetches (static) data and passes it down to the client <MenuTabs>
 * so the tab-switching UI doesn't block SSR.
 */
export function Menu() {
  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="py-36 px-16 bg-brand-dark border-t border-b border-[var(--border-subtle)] max-lg:py-28 max-lg:px-10 max-md:py-20 max-md:px-6"
    >
      <ScrollReveal className="text-center max-w-[600px] mx-auto mb-16">
        <SectionHeader
          id="menu-heading"
          tag="Nuestra Carta"
          centered
          title={
            <>
              Una sinfonía
              <br />
              de{' '}
              <em className="not-italic text-brand-red-light">sabores</em>
            </>
          }
        />
      </ScrollReveal>

      {/* Client tab switcher — receives all data from server */}
      <MenuTabs categories={MENU_CATEGORIES} />
    </section>
  )
}
