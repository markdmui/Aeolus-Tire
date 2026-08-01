// Generates public/sitemap.xml from the live tire catalog so it can never
// drift out of sync with what's actually routable — same reasoning as why
// tires.generated.ts is the single source of truth for the Navbar/TirePage.
// Runs automatically before `vite build` (see package.json).

import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { CATALOG_TIRES } from "../src/data/tires";

const SITE_URL = "https://aeolustire.ca";
const __dirname = dirname(fileURLToPath(import.meta.url));

const STATIC_ROUTES: { path: string; priority: string }[] = [
  { path: "/", priority: "1.0" },
  { path: "/tires", priority: "0.9" },
  { path: "/tire-finder", priority: "0.8" },
  { path: "/about", priority: "0.6" },
  { path: "/contact", priority: "0.6" },
];

const urls = [
  ...STATIC_ROUTES.map(({ path, priority }) => ({ loc: `${SITE_URL}${path}`, priority })),
  ...CATALOG_TIRES.map(({ slug }) => ({ loc: `${SITE_URL}/tires/${slug}`, priority: "0.7" })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ loc, priority }) => `  <url>\n    <loc>${loc}</loc>\n    <priority>${priority}</priority>\n  </url>`).join("\n")}
</urlset>
`;

const outPath = resolve(__dirname, "../public/sitemap.xml");
writeFileSync(outPath, xml);
console.log(`Wrote ${urls.length} URLs to ${outPath}`);
