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
The site supports 8 languages via a language dropdown in the header, with auto-detection from browser settings:
- EN (English)
- zh-CN (Simplified Chinese)
- zh-TW (Traditional Chinese)
- IT (Italian)
- KO (Korean)
- FR (French)
- JA (Japanese)
- ES (Spanish)

- Translations live in `src/lib/translations.ts`
- Context provider in `src/lib/i18n-context.tsx` (includes `detectLocale()` for auto-detection)
- **Every new addition or update must include translations for all 8 languages.**
- Components use `useI18n()` hook → `t("keyName")` to access translated strings.

## Pages & Routes
| Route | Purpose | Status |
|---|---|---|
| `/` | Home page — hero, trust bar, problem/solution, about, services, track record, how it works, CTA | Done |
| `/experience` | Experience timeline page — 7 career entries with highlights | Done |
| `/expertise` | Hub page — 6 expertise area cards with links | Done |
| `/expertise/business-development-asia` | SEO page — business development, store openings, landlord networks | Done |
| `/expertise/retail-expert-asia` | SEO page — retail operations, P&L, KPIs, team building | Done |
| `/expertise/brand-expansion-asia` | SEO page — JV buyouts, market entry, regional expansion | Done |
| `/expertise/startup-business-asia` | SEO page — launching from zero, e-commerce, multi-brand retail | Done |
| `/expertise/luxury-retail-asia` | SEO page — luxury P&L, VIP/CRM, brand portfolio | Done |
| `/expertise/fashion-retail-asia` | SEO page — VM, capsule collections, fashion buying | Done |
| `/sitemap.xml` | Dynamic sitemap for yganconsulting.com (9 URLs) | Done |
| `/robots.txt` | Robots file pointing to sitemap | Done |

## SEO & Domain
- **Domain**: `yganconsulting.com` (set in `metadataBase` in layout.tsx)
- Each expertise page has keyword-optimized `<title>` (< 60 chars) and `<meta description>` (~155 chars)
- Target keywords: Business Development in Asia, Retail in Asia, Brand Expansion, Start Up Business Asia, Luxury Retail Asia, Fashion Retail Asia
- Additional SEO keywords woven into body copy: China market entry, APAC retail expansion, luxury brand consulting, landlord negotiation, visual merchandising, franchise/wholesale distribution

## File Structure
```
src/
  app/
    layout.tsx             — Root layout, Google Fonts, metadata (domain: yganconsulting.com)
    page.tsx               — Home page (composes all sections)
    globals.css            — Tailwind directives, CSS variables, smooth scroll
    sitemap.ts             — Dynamic sitemap generator
    robots.ts              — Robots.txt
    experience/page.tsx    — Experience timeline page
    expertise/page.tsx     — Hub/index page (6 expertise cards)
    expertise/business-development-asia/page.tsx
    expertise/retail-expert-asia/page.tsx
    expertise/brand-expansion-asia/page.tsx
    expertise/startup-business-asia/page.tsx
    expertise/luxury-retail-asia/page.tsx
    expertise/fashion-retail-asia/page.tsx
  components/
    Header.tsx             — Sticky nav with Expertise link
    MobileMenu.tsx         — Slide-out drawer with Expertise link
    Hero.tsx               — Gradient bg, headshot, floating stat cards
    TrustBar.tsx           — Auto-scrolling brand marquee
    ProblemSolution.tsx    — Side-by-side comparison cards
    About.tsx              — Bio + credential cards
    Services.tsx           — 6-card grid with Lucide icons
    TrackRecord.tsx        — Dark section, animated stat counters
    HowItWorks.tsx         — 3-step process timeline
    ExperienceContent.tsx  — Experience timeline component
    ExpertiseHub.tsx       — Hub page listing 6 expertise areas as cards
    ExpertisePageLayout.tsx — Shared layout for individual expertise pages
    RelatedExpertise.tsx   — Cross-link card grid for related expertise
    CTA.tsx                — Green gradient CTA + contact form
    Footer.tsx             — 3-column footer with Expertise link
    AnnouncementBar.tsx    — Rotating announcements
    LanguageDropdown.tsx   — Language switcher
    ui/
      ScrollFadeIn.tsx     — Framer Motion fade-up on scroll
      StatCounter.tsx      — Animated count-up number
      SectionHeading.tsx   — Consistent heading + subtitle
  hooks/
    useScrollPosition.ts   — Scroll detection for header
  lib/
    constants.ts           — Non-translatable data (email, brand names, stats)
    translations.ts        — All i18n strings for 8 languages (~2700 lines)
    i18n-context.tsx       — Locale context, browser detection, localStorage
    expertise-data.ts      — Expertise page config (slugs, keys, stats, related pages, metadata)
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
The site supports 8 languages via a language dropdown in the header, with auto-detection from browser settings:
- EN (English)
- zh-CN (Simplified Chinese)
- zh-TW (Traditional Chinese)
- IT (Italian)
- KO (Korean)
- FR (French)
- JA (Japanese)
- ES (Spanish)

- Translations live in `src/lib/translations.ts`
- Context provider in `src/lib/i18n-context.tsx` (includes `detectLocale()` for auto-detection)
- **Every new addition or update must include translations for all 8 languages.**
- Components use `useI18n()` hook → `t("keyName")` to access translated strings.

## Content Editing
All copy lives in `src/lib/translations.ts` (for i18n strings) and `src/lib/constants.ts` (for non-translatable data like email, brand names). Edit those files to change any text, stats, services, or process steps. Expertise page config (slugs, metadata, stats, related pages) lives in `src/lib/expertise-data.ts`.
