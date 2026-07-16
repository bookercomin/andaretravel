# Andare Travel — Homepage

A production-quality Next.js 15 (App Router + TypeScript) homepage for Andare Travel, a boutique
European travel design company specializing in Italy.

## Stack

- **Next.js 15** (App Router, React Server Components by default)
- **TypeScript**
- **Tailwind CSS** with a custom design token system (warm cream, olive, terracotta, deep navy, stone)
- **Framer Motion** for scroll-triggered reveals, staggered cards, and the hero parallax
- **@fontsource/fraunces** + **@fontsource/inter** (self-hosted, no external font requests at runtime)
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx        Root layout, global metadata, Organization/LocalBusiness JSON-LD
  page.tsx           Homepage — assembles all sections, Breadcrumb/FAQ/Service JSON-LD
  sitemap.ts          Dynamic sitemap.xml
  robots.ts           Dynamic robots.txt
  privacy/, terms/    Placeholder legal pages (replace before launch)
components/
  layout/             Navbar, Footer
  sections/           One component per homepage section (Hero, ItalySpotlight, Services, etc.)
  motion/Reveal.tsx    Reusable Framer Motion scroll-reveal wrappers
  ui/button.tsx        Small shadcn/ui-style button primitive
lib/
  data.ts              All homepage content (destinations, services, testimonials, etc.) —
                       edit this file to update copy without touching components
  utils.ts             `cn()` class-merging helper
public/images/         Real photography (already resized/compressed for web)
```

## Replacing photography

All images in `public/images` are already your own photos, resized to a 2400px max dimension and
compressed for the web. To swap any image, replace the file at the same path (or update the path in
`lib/data.ts` / the relevant component) and keep the descriptive `alt` text accurate for SEO and
accessibility.

## Extending the site

- **New destination pages**: add a route under `app/destinations/[slug]/page.tsx` and link to it from
  `lib/data.ts` (the `destinations` array already has a `slug` field ready for this).
- **Blog**: add `app/blog/[slug]/page.tsx` and a content source of your choice (MDX, a headless CMS, etc.).
- **Booking**: the "Book a Call" CTA section has a placeholder for a Calendly embed — swap in the real
  embed code in `components/sections/BookACall.tsx`.
- **Real pricing/services**: edit `services` in `lib/data.ts`.

## SEO notes

- Metadata, Open Graph, and Twitter cards are set in `app/layout.tsx`.
- Organization, LocalBusiness, BreadcrumbList, FAQPage, and Service JSON-LD are included.
- Update `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` to your real production
  domain before launch.
- The FAQ section's visible content and its FAQPage schema are kept in sync via
  `components/sections/FAQ.tsx` — edit the `faqs` array there to update both at once.

## Accessibility & performance

- Single `<h1>` per page, semantic landmarks (`header`, `nav`, `main`, `section`, `footer`).
- Visible focus states, skip-to-content link, `prefers-reduced-motion` respected globally.
- Images use `next/image` with responsive `sizes`, lazy-loading below the fold, and `priority` only on
  the hero image.
