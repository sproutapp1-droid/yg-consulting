# YG Consulting Website

Professional single-page consultancy website for Yvonne Gan — luxury retail executive with 20+ years of APAC experience (Ferragamo, Dior, Gucci, YSL, Canada Goose, Giuseppe Zanotti).

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS v3
- Framer Motion (animations)
- Lucide React (icons)

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint

## File Structure
```
src/
  app/
    layout.tsx        — Root layout, Google Fonts (Playfair Display, Inter), metadata
    page.tsx          — Composes all sections
    globals.css       — Tailwind directives, CSS variables, smooth scroll
  components/
    Header.tsx        — Sticky nav, transparent→white on scroll
    MobileMenu.tsx    — Slide-out drawer
    Hero.tsx          — Gradient bg, headshot, floating stat cards
    TrustBar.tsx      — Auto-scrolling brand marquee
    ProblemSolution.tsx — Side-by-side comparison cards
    About.tsx         — Bio + credential cards
    Services.tsx      — 6-card grid with Lucide icons
    TrackRecord.tsx   — Dark section, animated stat counters
    HowItWorks.tsx    — 3-step process timeline
    CTA.tsx           — Green gradient CTA section
    Footer.tsx        — 3-column footer
    ui/
      ScrollFadeIn.tsx   — Framer Motion fade-up on scroll
      StatCounter.tsx    — Animated count-up number
      SectionHeading.tsx — Consistent heading + subtitle
  hooks/
    useScrollPosition.ts — Scroll detection for header
  lib/
    constants.ts      — ALL site copy lives here
public/
  images/
    yvonne-headshot.jpg
```

## Design Tokens
- Primary: `#1B4D3E` (dark forest green)
- Accent: `#3ECF8E` (mint green)
- Dark BG: `#0F2E23`
- Surface: `#F8FAF9`
- Fonts: Playfair Display (serif headings), Inter (body)

## i18n (Internationalization)
The site supports EN, Simplified Chinese (zh-CN), and Traditional Chinese (zh-TW) via a language dropdown in the header.
- Translations live in `src/lib/translations.ts`
- Context provider in `src/lib/i18n-context.tsx`
- **Every new addition or update must include translations for all three languages.**
- Components use `useI18n()` hook → `t("keyName")` to access translated strings.

## Content Editing
All copy lives in `src/lib/translations.ts` (for i18n strings) and `src/lib/constants.ts` (for non-translatable data like email, brand names). Edit those files to change any text, stats, services, or process steps.
