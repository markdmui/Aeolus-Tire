# Aeolus Truck Tires Website

Commercial/TBR (truck & bus radial) tire site for Aeolus, built as a pnpm-workspace
monorepo. Live-hosted on Replit, git-connected to
`github.com/markdmui/Aeolus-Tire`. This repo is the actual working source — edits
here get pushed to GitHub and pulled by Replit to update the live site.

Aeolus is a **separate client from Sailun** (`D:\Cld\Sailun-TBR-site`) — same truck
tire industry, unrelated brand and codebase. Don't carry Sailun's design tokens,
copy conventions, or component patterns over here; treat as fully independent.

## Stack
- pnpm workspace monorepo, TypeScript throughout (`composite: true` project references)
- `artifacts/aeolus-website` — the actual site: React + Vite, Tailwind CSS, shadcn/ui
  (Radix primitives via `components.json`), wouter for routing, TanStack Query
- `artifacts/api-server` — Express 5 API, Zod validation, Drizzle ORM + PostgreSQL
- `artifacts/mockup-sandbox` — separate Vite sandbox for mockups/prototyping
- `lib/api-spec` — OpenAPI 3.1 spec + Orval codegen → `lib/api-client-react` (React
  Query hooks) and `lib/api-zod` (Zod schemas)
- `lib/db` — Drizzle ORM schema + Postgres connection (`DATABASE_URL` from Replit)
- Root `pnpm run build` / `pnpm run typecheck` build the whole graph via TS project
  references — always typecheck from the root, not inside a single package
- Package manager is enforced: `preinstall` script blocks non-pnpm installs

## Structure (site)
- `artifacts/aeolus-website/src/pages/` — LandingPage, AboutPage, ContactPage,
  TirePage, TireProductPage, not-found
- `artifacts/aeolus-website/src/components/` — Navbar, Footer, TireTechExplorer,
  plus `ui/` (shadcn primitives)
- `artifacts/aeolus-website/src/data/`, `src/hooks/`, `src/lib/`

## Design system (see `aeolus-design-system.md` for full spec)
- Pure black (`#000000`) backgrounds only — no off-white/grey/white backgrounds
- Single accent: Brand Gold `#F2C94C` (plus `#FFD700` for the signature 6px top
  page stripe) — gold is an accent, never a large fill
- Headings: Inter 600, tight/negative letter-spacing, uppercase labels. Body/UI:
  Helvetica Neue / Helvetica / Arial
- Sharp corners everywhere — `border-radius: 0`, no rounded buttons/cards/inputs
- Dark surface layering: `#111112` cards / `#161618` hover, on `#000000` page bg,
  `#2C2C2E` borders and dividers
- Standard transitions `0.3s ease`; card hover lifts `translateY(-5px)`; no
  bounce/spring easing
- Voice: direct, technical, confident, fragments over full sentences
  ("Engineering That Performs.")

## Workflow
1. Edit here with full file access (this is the real source, not a concept/draft copy).
2. `pnpm run typecheck` / `pnpm --filter @workspace/aeolus-website run dev` to
   sanity-check before committing.
3. Commit + push to `github.com/markdmui/Aeolus-Tire`.
4. Replit pulls and the live site updates.
