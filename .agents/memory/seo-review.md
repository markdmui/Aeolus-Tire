---
name: SEO Review — August 2026
description: Review of Claude's SEO implementation and prioritized gaps to address later.
---

## What's in place (Claude's work — solid)
- `src/lib/seo.ts` — `usePageMeta` hook + `useJsonLd` hook, applied to all pages
- Static fallback meta tags in `index.html` (title, description, OG, Twitter, canonical, Organization JSON-LD)
- `public/robots.txt` — allows all, points to sitemap
- `public/sitemap.xml` — auto-generated on build from live tire catalog (45 tire pages + 5 static = 50 URLs)
- `scripts/generate-sitemap.ts` — keeps sitemap in sync with tires.generated.ts
- Product JSON-LD on tire product pages (`@type: Product`, name/description/image/brand/category)
- `noindex` on 404 tire routes, `og:type: "product"` on tire pages, canonical URLs

## Priority gaps to fix (when we revisit)

### 🔴 High priority
1. **Prerendering** — SPA = social bots (LinkedIn, Slack, WhatsApp, iMessage, FB) see blank link previews. OG tags are JS-injected; bots don't run JS. Vite supports prerendering at build time. This is the biggest SEO gap.
2. **`opengraph.jpg` doesn't exist** — Default OG image is hardcoded to `/opengraph.jpg` but the file is missing from `public/`. Every page without a custom image points to a 404. Need a branded 1200×630px JPEG fallback.

### 🟡 Medium priority
3. **Tire OG images** — Individual tire pages pass the tire photo PNG (transparent BG) as OG image. Social cards need a JPEG 1200×630px. Raw tire cutout on transparent BG renders black/badly. Need branded per-tire cards or a styled fallback.
4. **Enrich Product JSON-LD** — Missing: `sku` (use slug), `model`, `offers` with `availability: "InStock"`.

### 🟢 Low priority
5. **Enrich Organization JSON-LD** — Add `address` (Oakville, ON), `contactPoint`, `sameAs` (LinkedIn URL).
6. **Richer tire page titles** — "Neo Fuel S | Aeolus Truck Tires" → "Neo Fuel S — Premium Long Haul Steer Tire | Aeolus Canada" (segment + position + geography).
7. **`subtitle` as meta description** — "Spec pending" subtitles make terrible meta descriptions. Add dedicated `metaDescription` field or ensure all subtitles are full sentences.
8. **Sitemap `<lastmod>` dates** — Not critical but helps Google prioritize recrawl.

**Why:** Prerendering + opengraph.jpg are the two highest-leverage fixes — everything else is polish.
