# MARE SUSHI — Fuengirola

> Auténtica gastronomía japonesa premium en el corazón de la Costa del Sol.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)

---

## Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 15 (App Router) | Framework, SSR, image optimization |
| [React](https://react.dev) | 19 | UI library |
| [TypeScript](https://typescriptlang.org) | 5.8 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | v4 | Utility-first styling |

---

## Project Structure

```
src/
├── app/
│   ├── globals.css            # Tailwind v4 @theme tokens + custom CSS
│   ├── layout.tsx             # Root layout — fonts, metadata, providers
│   ├── page.tsx               # Home page — section composition
│   ├── not-found.tsx          # Branded 404
│   ├── error.tsx              # Route error boundary
│   ├── global-error.tsx       # Root-layout error boundary
│   ├── icon.svg               # Favicon
│   ├── opengraph-image.tsx    # Social card, generated at build (next/og)
│   ├── robots.ts              # robots.txt
│   └── sitemap.ts             # sitemap.xml
│
├── components/
│   ├── ui/                    # Shared, reusable primitives
│   │   ├── Button.tsx         # Polymorphic button (primary / outline)
│   │   ├── ScrollReveal.tsx   # IntersectionObserver reveal wrapper
│   │   ├── SectionHeader.tsx  # Branded section tag + title block
│   │   └── Toast.tsx          # Global notification banner
│   │
│   ├── layout/                # Page-level chrome
│   │   ├── Navbar.tsx         # Sticky nav with scroll-glass effect
│   │   ├── MobileNav.tsx      # Full-screen mobile overlay
│   │   ├── Footer.tsx         # Brand, links, hours, contact
│   │   └── socialIcons.tsx    # Inline social SVG glyphs
│   │
│   ├── seo/
│   │   └── RestaurantJsonLd.tsx # schema.org Restaurant structured data
│   │
│   └── features/              # Domain-specific sections
│       ├── Hero.tsx           # Hero section (server)
│       ├── HeroBackground.tsx # Parallax bg (client, isolated)
│       ├── About.tsx          # Story + pillars section
│       ├── MarqueeBand.tsx    # Animated keyword ticker
│       ├── Gallery.tsx        # Asymmetric photo grid
│       ├── Reviews.tsx        # Customer review cards
│       ├── Menu/
│       │   ├── Menu.tsx       # Section shell (server)
│       │   ├── MenuTabs.tsx   # Tab-switching UI (client)
│       │   └── MenuItem.tsx   # Single dish card (server)
│       └── Reservation/
│           ├── Reservation.tsx     # Section shell (server)
│           ├── ReservationInfo.tsx # Contact sidebar (server)
│           └── ReservationForm.tsx # Form with state (client)
│
├── contexts/
│   ├── NavigationContext.tsx  # Mobile nav open/close state
│   └── ToastContext.tsx       # Global toast message state
│
├── hooks/
│   └── useNavScroll.ts        # Scrolled-past-threshold boolean
│
├── lib/
│   ├── fonts.ts               # next/font Google Fonts config
│   ├── utils.ts               # cn() + getTodayISO() helpers
│   └── providers/
│       └── AppProviders.tsx   # Client context tree wrapper
│
├── constants/
│   ├── menu.ts                # Full menu data (7 categories)
│   ├── reviews.ts             # Customer review data
│   ├── gallery.ts             # Gallery image data
│   ├── navigation.ts          # Nav link definitions
│   └── restaurant.ts          # Brand info, hours, pillars, etc.
│
└── types/
    └── index.ts               # Shared TypeScript interfaces
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm / pnpm / yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/mare-sushi.git
cd mare-sushi

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev          # Start dev server with Turbopack
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with autofix
npm run type-check   # Run TypeScript compiler check
```

---

## Environment Variables

| Variable | Required | Default | Purpose |
|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | `https://maresushi.es` | Canonical origin used by metadata, Open Graph, `robots.txt` and `sitemap.xml`. Set this to the real deployment origin or social previews and canonicals will point at the wrong host. |

No secrets are used by this project — everything renders statically from `src/constants/`.

---

## Architecture Decisions

### Server vs Client Components

| Component | Type | Reason |
|---|---|---|
| `Hero`, `About`, `Gallery`, `Reviews`, `Footer` | Server | Static content — no interactivity needed |
| `HeroBackground` | Client | Parallax scroll + mount animation require DOM |
| `Navbar` | Client | Scroll state for glass-blur effect |
| `MobileNav` | Client | Navigation context (open/close) |
| `MenuTabs` | Client | Tab-switching state |
| `ReservationForm` | Client | Form state, submit handling |
| `Toast` | Client | Reads toast context |

### Data Flow

All data (menu items, reviews, gallery images) lives in `src/constants/`.
Server components import and render it directly — zero API calls on this static site.
To connect to a CMS or database, replace the constants with async fetch functions.

### Styling Strategy

- **Tailwind utilities** — spacing, colors, flex/grid, typography, transitions
- **Custom CSS** (`globals.css`) — keyframe animations, complex pseudo-elements, cursor, reveal system

---

## Deployment

Deploy to Vercel with zero configuration:

```bash
npx vercel
```

Or push to a GitHub repository connected to Vercel for automatic CI/CD.

---

## License

© 2025 MARE SUSHI Fuengirola. All rights reserved.
