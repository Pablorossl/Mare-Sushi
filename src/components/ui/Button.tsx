import { cn } from '@/lib/utils'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type BaseProps = {
  variant?: 'primary' | 'outline'
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button'; href?: never }

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

/**
 * Polymorphic button / link component that preserves brand styling.
 * Use `as="a"` with an `href` for navigation, otherwise renders a <button>.
 */
export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  const baseClasses =
    'relative overflow-hidden inline-flex items-center justify-center px-10 py-4 text-[0.75rem] font-[400] tracking-[0.2em] uppercase rounded-sm transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]'

  const variantClasses = {
    primary:
      'bg-brand-red border border-brand-red text-brand-white before:absolute before:inset-0 before:bg-white/10 before:-translate-x-full before:transition-transform before:duration-[350ms] hover:before:translate-x-0 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(192,57,43,0.3)]',
    outline:
      'bg-transparent border border-white/30 text-brand-white hover:border-brand-white hover:-translate-y-0.5',
  }

  const classes = cn(baseClasses, variantClasses[variant], className)

  if ((props as ButtonAsAnchor).as === 'a') {
    const { as: _as, ...anchorProps } = props as ButtonAsAnchor
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  const { as: _as, ...buttonProps } = props as ButtonAsButton
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
