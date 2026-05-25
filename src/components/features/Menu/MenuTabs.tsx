'use client'

import { useState } from 'react'
import type { MenuCategory } from '@/types'
import { MenuItem } from './MenuItem'

interface MenuTabsProps {
  categories: MenuCategory[]
}

/**
 * Tabbed menu interface — Client Component.
 * Receives all category data from the server (Menu.tsx)
 * and handles tab-switching state client-side.
 */
export function MenuTabs({ categories }: MenuTabsProps) {
  const [activeTab, setActiveTab] = useState(categories[0]?.id ?? '')

  const activeCategory = categories.find((c) => c.id === activeTab)

  return (
    <>
      {/* Tab bar */}
      <div
        role="tablist"
        aria-label="Categorías de la carta"
        className="flex justify-center border-b border-[var(--border-subtle)] mb-14 overflow-x-auto scrollbar-none"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            role="tab"
            aria-selected={activeTab === category.id}
            aria-controls={`tabpanel-${category.id}`}
            id={`tab-${category.id}`}
            onClick={() => setActiveTab(category.id)}
            className={`relative bg-none border-none text-[0.72rem] tracking-[0.2em] uppercase font-[400] px-7 py-4 whitespace-nowrap transition-colors duration-300 after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-px after:bg-brand-red after:transition-transform after:duration-300 ${
              activeTab === category.id
                ? 'text-brand-white after:scale-x-100'
                : 'text-[var(--text-muted)] after:scale-x-0 hover:text-brand-white'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Tab panel */}
      {activeCategory && (
        <div
          role="tabpanel"
          id={`tabpanel-${activeCategory.id}`}
          aria-labelledby={`tab-${activeCategory.id}`}
          className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] max-w-[1200px] mx-auto border border-[var(--border-subtle)] rounded overflow-hidden max-md:grid-cols-1"
        >
          {activeCategory.items.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  )
}
