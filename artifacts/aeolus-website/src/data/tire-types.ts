// Shared tire types. Hand-maintained — safe to edit.
// The generated catalog (tires.generated.ts) is written against these.

export type TirePosition =
  | "Drive"
  | "Steer"
  | "Trailer"
  | "All Position"
  | "OTR"
  | "Bus"
  | "Steer/Trailer"
  | "";

/**
 * One row of a tire's size/spec chart.
 *
 * Note on tread depth: `tdMm` is millimetres, `td32` is 32nds of an inch —
 * matching the "Tread Depth | mm | 32nds" column pair in the wireframe.
 * These were transposed before; don't swap them back.
 */
export interface TireSpecRow {
  size: string;
  ply: string;
  rimW: string;
  secW: string;
  odIn: string;
  odMm: string;
  tdMm: string;
  td32: string;
  mlSlbs: string;
  mlSpsi: string;
  mlSkg: string;
  mlSkpa: string;
  mlDlbs: string;
  mlDpsi: string;
  mlDkg: string;
  mlDkpa: string;
  liss: string;
  smartway: boolean;
  ms: boolean;
  "3PMSF": boolean;
}

export interface TireFeature {
  title: string;
  body: string;
  image: string;
}

export interface TireData {
  slug: string;
  name: string;
  /** Full wireframe category, e.g. "Premium Long Haul". "" when the bible leaves it blank. */
  segment: string;
  position: TirePosition;
  /** Navbar dropdown section, e.g. "NEO SERIES LONG HAUL". "" keeps the tire out of the dropdown. */
  navGroup: string;
  /** Tire-grid card labels, derived from `segment`. */
  seriesLabel: string;
  categoryLabel: string;
  subtitle: string;
  bullets: string[];
  features: TireFeature[];
  specRows: TireSpecRow[];
  tireImage: string;
  /** Second product photo where the wireframe specifies an `alt`. */
  altImage?: string;
  heroBg: string;
  bgTruck: string;
  cutawayImage: string;
  downloads: {
    catalog: string;
    productSheet: string;
    warranty: string;
    tirePhoto: string;
  };
  tags?: string[];
}

export const SHARED_ASSETS = {
  heroBg: "/assets/tire-hero-bg-1_1782515680443.jpg",
  bgTruck: "/assets/bg-long-haul_1782519244050.jpg",
  cutaway: "/assets/3d-cutaway-V2_1783092089703.png",
  placeholderPhoto: "/assets/Template_1782411546518.png",
  catalog: "/Aeolus-TBR-catalog.pdf",
  productSheet: "/template.pdf",
  warranty: "/Aeolus-TBR-Warranty.pdf",
} as const;
