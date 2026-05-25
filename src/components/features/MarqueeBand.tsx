import { MARQUEE_WORDS } from '@/constants/restaurant'

const REPEAT_COUNT = 4

/**
 * Horizontal marquee band — Server Component.
 * The CSS animation (`marquee-track`) is defined in globals.css.
 * Content is duplicated 4× to create a seamless infinite scroll illusion.
 */
export function MarqueeBand() {
  const items = Array.from({ length: REPEAT_COUNT }, (_, i) =>
    MARQUEE_WORDS.map((word, j) => ({ word, key: `${i}-${j}` })),
  ).flat()

  return (
    <div
      className="bg-brand-red py-3.5 overflow-hidden flex whitespace-nowrap"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {items.map(({ word, key }) => (
          <span
            key={key}
            className="text-[0.7rem] tracking-[0.3em] uppercase px-12 text-white/85 font-[400]"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  )
}
