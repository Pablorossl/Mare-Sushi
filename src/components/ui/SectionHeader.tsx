import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  tag: string
  title: React.ReactNode
  centered?: boolean
  className?: string
}

/**
 * Reusable section header with branded tag line + display title.
 * Use `centered` prop to center-align (menu, gallery) vs left-align (about, reviews).
 */
export function SectionHeader({ tag, title, centered = false, className }: SectionHeaderProps) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      <p className={cn('section-tag mb-3', centered && 'centered justify-center')}>
        {tag}
      </p>
      <h2 className="font-cormorant text-[clamp(2.2rem,4.5vw,3.5rem)] font-light leading-[1.1] tracking-[-0.01em]">
        {title}
      </h2>
    </div>
  )
}
