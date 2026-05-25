/**
 * Lightweight class name merger — no external deps required.
 * For more complex merging (Tailwind conflict resolution) add
 * `clsx` + `tailwind-merge` and replace this implementation.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Returns today's date as an ISO string (YYYY-MM-DD),
 * safe to call during SSR (no window dependency).
 */
export function getTodayISO(): string {
  return new Date().toISOString().split('T')[0]
}
