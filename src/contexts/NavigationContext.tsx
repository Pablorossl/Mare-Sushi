'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

interface NavigationContextValue {
  isMobileNavOpen: boolean
  toggleMobileNav: () => void
  closeMobileNav: () => void
}

const NavigationContext = createContext<NavigationContextValue | null>(null)

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const toggleMobileNav = () => setIsMobileNavOpen((prev) => !prev)
  const closeMobileNav = () => setIsMobileNavOpen(false)

  return (
    <NavigationContext.Provider
      value={{ isMobileNavOpen, toggleMobileNav, closeMobileNav }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation(): NavigationContextValue {
  const ctx = useContext(NavigationContext)
  if (!ctx) throw new Error('useNavigation must be used within NavigationProvider')
  return ctx
}
