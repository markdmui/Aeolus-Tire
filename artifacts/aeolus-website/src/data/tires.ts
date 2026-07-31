// Single source of truth for the tire catalog.
//
//   tires.generated.ts  — the tires in sheet 3 of Aeolus-Wireframe-06.xlsx.
//                         AUTO-GENERATED; regenerate with
//                         `pnpm --filter @workspace/scripts run generate:tires`.
//   demo-tires.ts       — template pages, not real products.
//
// The catalog is exactly the wireframe. ADC54 and ASR79ii were removed on
// 2026-07-31 for not appearing in it; their photos remain in
// public/tires/Tire-Photos if they ever come back.
//
// Navbar and TirePage both derive their lists from TIRES; do not hand-maintain
// a parallel catalog in either of them.

import { TireData } from "./tire-types";
import { BIBLE_TIRES, NAV_GROUP_ORDER } from "./tires.generated";
import { DEMO_TIRES } from "./demo-tires";

export type { TireData, TirePosition, TireSpecRow, TireFeature } from "./tire-types";
export { SHARED_ASSETS } from "./tire-types";
export { NAV_GROUP_ORDER };

/** Everything with a product page, demos included. */
export const TIRES: TireData[] = [...DEMO_TIRES, ...BIBLE_TIRES];

/** Real products only — what the catalog, nav and finder should show. */
export const CATALOG_TIRES: TireData[] = BIBLE_TIRES;

/** Catalog tires grouped for the Navbar dropdown, in NAV_GROUP_ORDER order. */
export const NAV_SECTIONS: { category: string; tires: TireData[] }[] =
  NAV_GROUP_ORDER
    .map(category => ({
      category,
      tires: CATALOG_TIRES.filter(t => t.navGroup === category),
    }))
    .filter(section => section.tires.length > 0);

export function getTireBySlug(slug: string): TireData | undefined {
  return TIRES.find(t => t.slug === slug);
}
