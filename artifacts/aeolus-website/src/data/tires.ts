const heroBgImg   = "/assets/tire-hero-bg-1_1782515680443.jpg";
const bgTruckImg  = "/assets/bg-long-haul_1782519244050.jpg";
const cutawayImg  = "/assets/3d-cutaway-V2_1783092089703.png";

// Feature image helper — returns per-tire path, falls back to shared placeholder
const f = (slug: string, n: 1 | 2 | 3) =>
  `/tires/Feature-Images/${slug}-f${n}.jpg`;
const placeholder = (n: 1 | 2 | 3) =>
  `/assets/Template-f${n}_178241154651${n === 1 ? "7" : n === 2 ? "7" : "8"}.jpg`;

export type TirePosition = "Drive" | "Steer" | "Trailer" | "All Position" | "OTR" | "Bus";

export interface TireSpecRow {
  size:    string;
  ply:     string;
  rimW:    string;
  secW:    string;
  odIn:    string;
  odMm:    string;
  td32:    string;
  tdMm:    string;
  mlSlbs:  string;
  mlSpsi:  string;
  mlSkg:   string;
  mlSkpa:  string;
  mlDlbs:  string;
  mlDpsi:  string;
  mlDkg:   string;
  mlDkpa:  string;
  liss:    string;
  smartway: boolean;
  ms:       boolean;
  "3PMSF":  boolean;
}

export interface TireFeature {
  title: string;
  body:  string;
  image: string;
}

export interface TireData {
  slug:        string;
  name:        string;
  segment:     string;
  position:    TirePosition;
  subtitle:    string;
  bullets:     string[];
  features:    TireFeature[];
  specRows:    TireSpecRow[];
  tireImage:   string;
  heroBg:      string;
  bgTruck:     string;
  cutawayImage: string;
  downloads: {
    catalog:      string;
    productSheet: string;
    warranty:     string;
    tirePhoto:    string;
  };
}

export const TIRES: TireData[] = [

  // ─── Neo Fuel S ──────────────────────────────────────────────────────────────
  {
    slug:     "neo-fuel-s",
    name:     "Neo Fuel S",
    segment:  "Premium Long Haul",
    position: "Steer",
    subtitle: "Fuel-efficient steer tire with strong casing, uniform wear and excellent handling.",
    bullets: [
      "Steer tire designed for long haul and super regional applications.",
      "Four groove tread design provides excellent water evacuation, improving grip and adherence in wet conditions.",
      "Innovative sipe design combined with low heat generation compound improves cooling, extending tread and casing life.",
      "Groove bottom S-design stone ejectors prevent stone retention, improving casing retreadability.",
    ],
    features: [
      {
        title: "FOUR GROOVE TREAD DESIGN",
        body:  "Four longitudinal grooves channel water efficiently away from the contact patch, maximizing wet grip and aquaplaning resistance across all highway conditions.",
        image: placeholder(1),
      },
      {
        title: "LOW HEAT GENERATION COMPOUND",
        body:  "Innovative sipe design paired with a low heat generation compound keeps running temperatures down, extending both tread life and casing integrity for reliable retreading.",
        image: placeholder(2),
      },
      {
        title: "S-DESIGN STONE EJECTORS",
        body:  "Groove bottom S-shaped stone ejectors actively push out debris during rotation, protecting the casing from penetration damage and maximizing retreadability.",
        image: placeholder(3),
      },
    ],
    specRows: [
      {
        size: "295/60R22.5", ply: "18", rimW: "9.00", secW: "11.4",
        odIn: "36.1", odMm: "916",  td32: "15", tdMm: "18.3",
        mlSlbs: "7385", mlSpsi: "131", mlSkg: "3350", mlSkpa: "900",
        mlDlbs: "6779", mlDpsi: "131", mlDkg: "3075", mlDkpa: "900",
        liss: "150/147K", smartway: false, ms: true, "3PMSF": true,
      },
      {
        size: "315/70R22.5", ply: "18", rimW: "9.00", secW: "12.4",
        odIn: "40.2", odMm: "1020", td32: "15", tdMm: "18.3",
        mlSlbs: "8818", mlSpsi: "131", mlSkg: "4000", mlSkpa: "900",
        mlDlbs: "7385", mlDpsi: "131", mlDkg: "3350", mlDkpa: "900",
        liss: "156/150L", smartway: false, ms: true, "3PMSF": true,
      },
      {
        size: "315/80R22.5", ply: "18", rimW: "9.00", secW: "12.3",
        odIn: "42.5", odMm: "1081", td32: "15", tdMm: "18.3",
        mlSlbs: "9370", mlSpsi: "131", mlSkg: "4250", mlSkpa: "900",
        mlDlbs: "7385", mlDpsi: "131", mlDkg: "3350", mlDkpa: "900",
        liss: "158/150L", smartway: false, ms: true, "3PMSF": true,
      },
    ],
    tireImage:    "/tires/Tire-Photos/Neo-Fuel-S.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/Neo-Fuel-S.png",
    },
  },

];

export function getTireBySlug(slug: string): TireData | undefined {
  return TIRES.find((t) => t.slug === slug);
}
