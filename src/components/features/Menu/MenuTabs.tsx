'use client'

import { useRef, useState, type KeyboardEvent } from 'react'
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
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const activeCategory = categories.find((c) => c.id === activeTab)
  const activeIndex = categories.findIndex((c) => c.id === activeTab)

  /**
   * WAI-ARIA tabs pattern: arrow keys move between tabs, Home/End jump to the
   * ends. Without this the tablist is unusable with a keyboard, because the
   * roving tabindex leaves only one tab reachable via Tab.
   */
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const lastIndex = categories.length - 1
    let nextIndex: number | null = null

    switch (e.key) {
      case 'ArrowRight':
        nextIndex = activeIndex >= lastIndex ? 0 : activeIndex + 1
        break
      case 'ArrowLeft':
        nextIndex = activeIndex <= 0 ? lastIndex : activeIndex - 1
        break
      case 'Home':
        nextIndex = 0
        break
      case 'End':
        nextIndex = lastIndex
        break
      default:
        return
    }

    e.preventDefault()
    setActiveTab(categories[nextIndex].id)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <>
      {/*
        Tab bar. The scroll container and the flex row are separate on purpose:
        `justify-center` on an overflowing scroll container makes the leading
        tabs overflow past scrollLeft: 0, so on narrow screens the first
        categories were clipped and unreachable. `w-max` + `mx-auto` centres the
        row while it fits and scrolls cleanly once it doesn't.
      */}
      <div className="border-b border-[var(--border-subtle)] mb-14 overflow-x-auto scrollbar-none">
        <div
          role="tablist"
          aria-label="Categorías de la carta"
          className="flex w-max mx-auto"
        >
          {categories.map((category, index) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              ref={(node) => {
                tabRefs.current[index] = node
              }}
              aria-selected={activeTab === category.id}
              aria-controls={`tabpanel-${category.id}`}
              id={`tab-${category.id}`}
              tabIndex={activeTab === category.id ? 0 : -1}
              onClick={() => setActiveTab(category.id)}
              onKeyDown={handleKeyDown}
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
      </div>

      {/* Tab panel */}
      {activeCategory && (
        <div
          role="tabpanel"
          id={`tabpanel-${activeCategory.id}`}
          aria-labelledby={`tab-${activeCategory.id}`}
          tabIndex={0}
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
