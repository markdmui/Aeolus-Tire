# Aeolus Truck Tires Website

Commercial/TBR (truck & bus radial) tire site for Aeolus, built as a pnpm-workspace
monorepo. Hosted on **Netlify** (project `aeolus-tire`), git-connected to
`github.com/markdmui/Aeolus-Tire`. This repo is the actual working source — a push
to GitHub is all it takes; Netlify rebuilds by itself. Replit is gone (account
closed 2026-09-28); ignore `.replit`, `.replitignore` and any Replit instructions.

Aeolus is a **separate client from Sailun** (`D:\Cld\Sailun-TBR-site`) — same truck
tire industry, unrelated brand and codebase. Don't carry Sailun's design tokens,
copy conventions, or component patterns over here; treat as fully independent.

## Stack
- pnpm workspace monorepo, TypeScript throughout (`composite: true` project references)
- `artifacts/aeolus-website` — the actual site: React + Vite, Tailwind CSS, shadcn/ui
  (Radix primitives via `components.json`), wouter for routing, TanStack Query
- `artifacts/api-server` — Express 5 API, Zod validation, Drizzle ORM + PostgreSQL.
  **Unused**: only a health route, and the site never calls it. Netlify deploys the
  static site only.
- `artifacts/mockup-sandbox` — separate Vite sandbox for mockups/prototyping
- `lib/api-spec` — OpenAPI 3.1 spec + Orval codegen → `lib/api-client-react` (React
  Query hooks) and `lib/api-zod` (Zod schemas)
- `lib/db` — Drizzle ORM schema + Postgres connection. **Unused**: the schema is empty.
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
   Work on the **`preview`** branch (`git checkout preview`).
2. `pnpm run typecheck` / `pnpm --filter @workspace/aeolus-website run dev` to
   sanity-check before committing.
3. Commit + push to **`preview`** on `github.com/markdmui/Aeolus-Tire`.
4. Netlify builds it in about 30 seconds.

## Deploying (Netlify) — read before every push
| Branch | Link | When it updates | Cost |
| --- | --- | --- | --- |
| `preview` | https://preview--aeolus-tire.netlify.app | every push | free |
| `main` (live) | https://aeolus-tire.netlify.app | only when Mark says "update live" | 15 of 300 monthly credits |

- **Default: push to `preview` only.** Never push or merge to `main` unless Mark
  asks for the live site by name. Each `main` deploy costs credits on the free plan;
  preview builds cost nothing. The client reviews the preview link.
- To update live when asked: `git push origin preview:main` (fast-forward), then
  check the deploy in Netlify.
- Build settings live in `netlify.toml` (build command, publish dir
  `artifacts/aeolus-website/dist/public`, Node 24, SPA fallback). The whole site is
  static; no environment variables needed. `PORT` is only needed for the dev server.
- `netlify.toml` sends `X-Robots-Tag: noindex` on every page so the netlify.app
  links stay out of Google. **Remove it when the client's real domain goes live.**
- pnpm 11 is pinned (`packageManager` in root package.json). pnpm 11 ignores
  `onlyBuiltDependencies`; build-script approvals live in `allowBuilds` in
  `pnpm-workspace.yaml`. If an install fails with `ERR_PNPM_IGNORED_BUILDS`, add the
  package there, and delete any `set this to true or false` placeholder pnpm writes.
- `pnpm-workspace.yaml` overrides strip non-Linux native binaries (Replit leftover),
  so a *fresh* install can't build on Windows. Netlify builds on Linux and is fine.
  An existing local `node_modules` still works.
- Contact form posts to Netlify Forms (hidden blueprint form in `index.html`; field
  names must match `ContactPage.tsx`). Notifications go to Mark's email.
