# Aeolus Project — Agent Brief
> Hand this file to your agent at the start of every session.

---

## What We're Building
A multi-page **React + Vite** marketing/concept site (same stack as the Sailun TBR project). It is a **concept site** — links can be hoverable but do nothing (`href="#" onClick={(e)=>e.preventDefault()}`). No backend, no auth, no database.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + React Router v6 |
| Bundler | Vite 5 |
| Styling | Plain CSS per page (no Tailwind, no CSS modules, no styled-components) |
| Maps (if needed) | Leaflet + leaflet.markercluster |
| Language | JSX (`.jsx` files), ES modules |
| Runtime | Node / Replit (port 5000, host 0.0.0.0) |

---

## Exact Dependencies (`package.json`)

```json
{
  "type": "module",
  "scripts": {
    "fix-perms": "find public/assets -type f -exec chmod 644 {} +",
    "dev": "npm run fix-perms && vite",
    "build": "npm run fix-perms && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "leaflet": "^1.9.4",
    "leaflet.markercluster": "^1.5.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.28.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^5.4.11"
  }
}
```

---

## `vite.config.js` — copy exactly

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'
import { chmodSync } from 'fs'
import path from 'path'

// Fixes permissions on images uploaded mid-session via the Replit editor
function assetPermissionWatcher() {
  return {
    name: 'asset-permission-watcher',
    configureServer(server) {
      const assetsDir = path.resolve('public/assets')
      server.watcher.add(assetsDir)
      server.watcher.on('add', (filePath) => {
        if (!filePath.startsWith(assetsDir)) return
        try {
          chmodSync(filePath, 0o644)
        } catch (err) {
          server.config.logger.warn(`Could not chmod ${filePath}: ${err.message}`)
        }
      })
    }
  }
}

export default defineConfig({
  plugins: [react(), assetPermissionWatcher()],
  server: {
    port: 5000,
    host: '0.0.0.0',
    allowedHosts: true,
    hmr: { clientPort: 443 }   // required for Replit's proxy
  }
})
```

---

## File Structure

```
src/
  main.jsx                  — ReactDOM.createRoot, mounts <App />
  App.jsx                   — BrowserRouter + Routes, global CSS imports
  pages/                    — one file per route
  components/               — Nav, Footer, ShortHeader (shared)
  hooks/
    usePageStyle.js         — per-page CSS injection (copy verbatim below)
    useHeroImage.js         — hero background rotator (optional)
  styles/
    tokens.css              — design tokens, imported once globally in App.jsx
    nav.css                 — shared nav styles, imported globally
    shortHeader.css         — shared short header styles, imported globally
    <page>.css              — per-page CSS, never imported globally
  data/                     — static JS data files (no API calls)
public/
  assets/
    images/                 — all images served here
```

---

## `src/hooks/usePageStyle.js` — copy verbatim

```js
import { useEffect } from 'react';

export function usePageStyle(css) {
  useEffect(() => {
    const el = document.createElement('style');
    el.setAttribute('data-page-style', '');
    el.textContent = css;
    document.head.appendChild(el);
    return () => { document.head.removeChild(el); };
  }, [css]);
}
```

**Why it exists:** Every page imports its own CSS via `?inline` and injects it on mount, removes it on unmount. This scopes styles per-route without CSS Modules, even when pages reuse the same class names.

**Usage in any page:**
```jsx
import { usePageStyle } from '../hooks/usePageStyle.js';
import pageCss from '../styles/myPage.css?inline';

export default function MyPage() {
  usePageStyle(pageCss);
  // ...
}
```

---

## `src/App.jsx` pattern

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
// ... other page imports
import './styles/tokens.css'   // ← global, imported once
import './styles/nav.css'      // ← global
import './styles/shortHeader.css' // ← global

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* add routes here */}
      </Routes>
    </BrowserRouter>
  )
}
```

---

## Design Tokens (`src/styles/tokens.css`) — copy verbatim

```css
:root {
  --ink: #1a1a1a;
  --paper: #ffffff;
  --paper-grey: #f0f0f0;
  --image-fill: #e8e8e8;
  --hairline: #d6d6d6;
  --muted: #595959;
  --label-grey: #888888;
  --meta-grey: #999999;
  --accent: #0066b3;
  --accent-deep: #005096;
  --accent-bright: #3d9be6;
  --surface-hover: #eaf2fa;
  --cert-off: #ebebeb;
  --cert-on: #ffdd8d;
  --dark-bg: #141414;
  --dark-paper: #f5f5f5;
  --dark-image: #232323;
  --dark-hairline: #3a3a3a;
  --dark-navy-bg: #103158;
  --font: 'Liberation Sans', Helvetica, 'Helvetica Neue', Arial, sans-serif;
  --max: 1280px;
  --gutter: 32px;
  --baseline: 8px;
  --hero-img: none;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  font-family: var(--font); color: var(--ink); background: var(--paper);
  line-height: 1.5; -webkit-font-smoothing: antialiased;
  font-variant-numeric: tabular-nums;
}
a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
.wrap, .container { max-width: var(--max); margin: 0 auto; padding: 0 var(--gutter); }
.accent { color: var(--accent); }
.eyebrow { font-size: 0.75rem; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: var(--accent); margin-bottom: 12px; display: block; }
.section-head { font-size: clamp(1.5rem,3vw,1.85rem); font-weight: 400; line-height: 1.15; letter-spacing: -0.01em; color: var(--ink); margin: 0; }
```

---

## CSS Rules — strictly enforced

1. **`tokens.css` is the only place** `:root`, `*`, `html`, `body`, or bare `a {}` are defined. Never redefine these in a page CSS file.
2. **Every page CSS file** must scope all rules under a unique root class, e.g. `.my-page .hero h1 { }` — never bare element selectors at the top level.
3. **No global CSS imports in pages** — use `usePageStyle(css)` with `?inline` imports only.
4. **Three files are globally imported** in `App.jsx` only: `tokens.css`, `nav.css`, `shortHeader.css`.

---

## Two Shared Header Patterns — never hand-roll a new one

### 1. Full hero header (page-specific)
Used on landing/marketing pages. Each page builds its own hero section with the shared `<Nav />` component inside it.

### 2. Short header (`<ShortHeader />`)
Used on utility pages (contact, search, dealers, etc.). Import and drop in:
```jsx
import ShortHeader from '../components/ShortHeader.jsx';
// inside JSX:
<ShortHeader active="dealers" />
```
The `active` prop highlights the correct nav item.

---

## Links — concept site rule

**All links that don't navigate to a real route must be null links that do nothing:**
```jsx
<a href="#" onClick={(e) => e.preventDefault()}>Label</a>
```
Never use `href="#something"` (scrolls/jumps). Never leave a dead `href` pointing to a non-existent route. Real internal routes use React Router `<Link to="/path">`.

---

## Images

- All images live in `public/assets/images/` and are served at `/assets/images/filename.ext`
- Reference in JSX: `<img src="/assets/images/hero.jpg" alt="..." />`
- Never inline base64 images in CSS or JSX
- Uploaded images on Replit may need `chmod 644` — the `fix-perms` script and `assetPermissionWatcher` handle this automatically

---

## Git / GitHub Workflow

- GitHub repo: `https://github.com/markdmui/sailun-truck-site` (Sailun reference)
- One agent edits at a time — finish a session, push to GitHub, then the other agent pulls
- Push: `git push origin main`
- Pull (in Replit): ask Replit Agent to "pull from git"
- Never have two agents editing the same files simultaneously

---

## Replit Workflow Config

The dev server is managed by a workflow named **`Static Server`** running `npm run dev`. It must be restarted after dependency changes. Vite HMR handles CSS/JSX changes instantly without a restart.
