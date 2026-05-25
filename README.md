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
│   └── page.tsx               # Home page — section composition
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
│   │   └── Footer.tsx         # Brand, links, hours, contact
│   │
│   └── features/              # Domain-specific sections
│       ├── CustomCursor.tsx   # Custom two-part cursor (desktop)
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
│   ├── useNavScroll.ts        # Scrolled-past-threshold boolean
│   └── useCursor.ts           # Custom cursor animation logic
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
npm run type-check   # Run TypeScript compiler check
```

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
| `CustomCursor`, `Toast` | Client | DOM events / context |

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
