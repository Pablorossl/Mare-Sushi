import type { MenuItem as MenuItemType } from '@/types'

interface MenuItemProps {
  item: MenuItemType
}

/**
 * Single menu card — Server Component.
 * Renders one dish with number, name, price, description, and optional tag.
 */
export function MenuItem({ item }: MenuItemProps) {
  return (
    <article className="menu-item group relative overflow-hidden bg-brand-card px-8 py-7 flex items-start gap-5 transition-colors duration-300 hover:bg-brand-charcoal border border-transparent before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0 before:bg-[var(--red-glow)] hover:before:w-[3px] before:transition-[width] before:duration-400">
      <span className="font-cormorant text-[0.85rem] text-[var(--text-dim)] font-light min-w-[28px] pt-0.5 shrink-0">
        {item.num}
      </span>

      <div className="flex-1">
        <div className="flex justify-between items-baseline mb-1.5 gap-2">
          <span className="font-cormorant text-[1.15rem] font-[500] tracking-[0.02em] min-w-0">
            {item.name}
          </span>
          <span className="text-[0.85rem] text-brand-gold font-[400] whitespace-nowrap shrink-0 ml-1">
            {item.price}
          </span>
        </div>

        <p className="text-[0.8rem] text-[var(--text-muted)] leading-[1.55]">
          {item.description}
        </p>

        {item.tag && (
          <span className="inline-block mt-2.5 bg-[var(--red-glow)] border border-brand-red/30 text-brand-red-light text-[0.6rem] tracking-[0.15em] uppercase px-2.5 py-1 rounded-sm">
            {item.tag}
          </span>
        )}
      </div>
    </article>
  )
}
