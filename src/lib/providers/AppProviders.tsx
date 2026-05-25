'use client'

import { NavigationProvider } from '@/contexts/NavigationContext'
import { ToastProvider } from '@/contexts/ToastContext'
import type { ReactNode } from 'react'

/**
 * Root client-side providers tree.
 * Wraps the entire app so shared state (navigation, toast)
 * is accessible from any component without prop drilling.
 */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <NavigationProvider>
      <ToastProvider>{children}</ToastProvider>
    </NavigationProvider>
  )
}
