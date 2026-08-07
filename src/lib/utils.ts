/**
 * Lightweight class name merger — no external deps required.
 * For more complex merging (Tailwind conflict resolution) add
 * `clsx` + `tailwind-merge` and replace this implementation.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Returns today's date as YYYY-MM-DD in the *local* timezone.
 *
 * `toISOString()` would convert to UTC first, which reports yesterday for any
 * local time before the UTC offset (e.g. 00:30 in Madrid during CEST) and would
 * let the reservation form accept a past date.
 */
export function getTodayISO(): string {
  const now = new Date()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${now.getFullYear()}-${month}-${day}`
}
