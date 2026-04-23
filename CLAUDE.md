# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build (also validates types via Next.js)
npm run lint     # ESLint
npx tsc --noEmit # type-check without building
```

There is no test suite.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript** (strict)
- **Tailwind CSS v4** — configured entirely via `src/app/globals.css` (`@import "tailwindcss"` + `@theme inline`); there is no `tailwind.config.js`
- **Framer Motion v12** · **lucide-react v1.8**
- Path alias: `@/*` → `src/*`

## Architecture

### Rendering model
Pages (`src/app/**/page.tsx`) are **server components** so they can export `metadata`. All animation-bearing sections are `"use client"` components imported from `src/components/sections/`. Server components can freely import client components but not vice versa.

### Directory layout

| Path | Purpose |
|---|---|
| `src/app/` | Routes, layouts, API handlers (`route.ts`) |
| `src/components/layout/` | `Navbar`, `Footer` — server components, rendered by root layout |
| `src/components/sections/` | Full-page sections (Hero, ServiceGrid, Stats, …); most are `"use client"` |
| `src/components/ui/` | Primitive building blocks: `Button`, `Card`, `AnimatedDiv`, `SectionWrapper`, `SectionHeading` |
| `src/lib/constants.ts` | Single source of truth for all site copy, services, stats, nav links, and `siteConfig` |

### UI primitives

- **`SectionWrapper`** — `py-20`, `max-w-[1280px]` container; accepts `bg="light|dark|transparent"` and optional `id`/`className`
- **`AnimatedDiv`** — Framer Motion `whileInView` fade+slide; props: `direction`, `delay`, `duration`; always `viewport={{ once: true }}`
- **`Button`** — extends `HTMLMotionProps<"button">` (not `ButtonHTMLAttributes`) to avoid the `onDrag` type conflict with Framer Motion; renders `motion(Link)` when `href` is provided
- **`Card`** — vertical layout (icon → title → description) with `whileHover` lift; used in service grids
- **`PageHero`** — shared dark-bg page banner; props: `title`, `subtitle?`, `breadcrumbs: { label, href? }[]`

### Data flow
All content lives in `src/lib/constants.ts` (`siteConfig`, `navLinks`, `services`, `stats`, `values`). Section components import directly from there — no data fetching.

### API routes
`src/app/api/contact/route.ts` is a placeholder POST handler. Pattern: named `export async function POST(request: Request)` using the standard Web `Response.json()` API.

## Key gotchas

**lucide-react v1.x has no brand icons.** `Facebook`, `Instagram`, `Linkedin`, `Twitter` do not exist and will cause a TS error. Use utility alternatives (`Users`, `Briefcase`, `Camera`, `X`). The Footer has social icon code commented out for this reason.

**Tailwind v4 class overrides.** Because utility order in the stylesheet determines specificity (not class-string order in JSX), use the `!` prefix (`!bg-secondary`, `!text-white`) when a className prop must beat a variant-generated class inside a component. This pattern appears in Hero and CTABanner buttons.

**`motion(Link)` for animated links.** `Button` uses `const MotionLink = motion(Link)` to apply `whileHover`/`whileTap` to Next.js `<Link>`. This works because `Link` forwards refs.

**Server/client boundary.** `SectionWrapper` and `SectionHeading` have no `"use client"` — they're server components. When imported inside a `"use client"` component they run on the client too, which is fine (no server-only APIs used). Pages stay as server components; wrap animated content in client section components rather than adding `"use client"` to the page.

**WhyChooseUs vs CoreValues.** Both render `values` from constants but use different layouts: `WhyChooseUs` uses a horizontal `motion.div` (icon-left, text-right); `CoreValues` uses the vertical `Card` component. Don't merge them.
