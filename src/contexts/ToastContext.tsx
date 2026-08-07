'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'

interface ToastContextValue {
  isVisible: boolean
  message: string
  showToast: (message: string, duration?: number) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)
  const [message, setMessage] = useState('')

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Each toast owns the hide timer, so a second toast cannot be cut short by
  // the timer of the first one.
  const showToast = useCallback((msg: string, duration = 4500) => {
    if (timer.current) clearTimeout(timer.current)
    setMessage(msg)
    setIsVisible(true)
    timer.current = setTimeout(() => setIsVisible(false), duration)
  }, [])

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [])

  return (
    <ToastContext.Provider value={{ isVisible, message, showToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}
