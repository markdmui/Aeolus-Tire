import feature1Img from "@assets/Template-f1_1782411546517.jpg";
import feature2Img from "@assets/Template-f2_1782411546517.jpg";
import feature3Img from "@assets/Template-f3_1782411546518.jpg";
import tireImg from "@assets/Template_1782411546518.png";
import heroBgImg from "@assets/tire-hero-bg-1_1782515680443.jpg";
import bgTruckImg from "@assets/bg-long-haul_1782483488801.jpg";
import cutawayImg from "@assets/3d-cutaway_1782348127809.png";

export type TirePosition = "Drive" | "Steer" | "Trailer" | "All Position" | "OTR" | "Bus";

export interface TireSpecRow {
  size: string;
  ply: string;
  rimW: string;
  secW: string;
  odIn: string;
  odMm: string;
  td32: string;
  tdMm: string;
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

export interface TireDownloads {
  catalog: string;
  productSheet: string;
  warranty: string;
  tirePhoto: string;
}

export interface TireData {
  slug: string;
  name: string;
  segment: string;
  position: TirePosition;
  subtitle: string;
  bullets: string[];
  features: TireFeature[];
  specRows: TireSpecRow[];
  tireImage: string;
  heroBg: string;
  bgTruck: string;
  cutawayImage: string;
  downloads: TireDownloads;
}

export const TIRES: TireData[] = [
  {
    slug: "neo-fuel-x3",
    name: "Neo Fuel X3",
    segment: "Premium Long Haul",
    position: "Drive",
    subtitle:
      "Engineered for long-distance journeys ensuring high-speed stability, fuel efficiency, and endurance mile after mile.",
    bullets: [
      "4 longitudinal grooves on the tread providing excellent guiding performance.",
      "Optimized ground pressure distribution to ensure product life.",
      "SATT construction for better endurance, effectively securing tire life.",
      "Low rolling resistance formula in tread to maximize fuel efficiency.",
    ],
    features: [
      {
        title: "OPTIMIZED Z-SHAPED GROOVE DESIGN",
        body: "Z-shaped straight grooves with optimized geometry and higher pattern saturation ensure even wear and higher mileage, delivering long-lasting tread life and consistent performance on long-haul routes.",
        image: feature1Img,
      },
      {
        title: "CLOSED SHOULDER STRUCTURE",
        body: "A reinforced closed shoulder design enhances heat dissipation and traction while maintaining even wear performance—improving handling stability and extending tire durability.",
        image: feature2Img,
      },
      {
        title: "ADVANCED 3D SIPE TECHNOLOGY",
        body: "New 3D sipe solutions in the central and shoulder tread blocks enable better block movement, enhancing snow grip and traction while providing regular wear, lower rolling resistance, reduced noise, and improved control in both dry and wet conditions.",
        image: feature3Img,
      },
    ],
    specRows: [
      {
        size: "295/75R22.5", ply: "16", rimW: "9.00", secW: "11.7",
        odIn: "39.9",  odMm: "1014", td32: "15", tdMm: "18.9",
        mlSlbs: "6600", mlSpsi: "120", mlSkg: "3000", mlSkpa: "830",
        mlDlbs: "5995", mlDpsi: "120", mlDkg: "2725", mlDkpa: "830",
        liss: "146/143M", smartway: false, ms: true, "3PMSF": false,
      },
      {
        size: "11R22.5", ply: "16", rimW: "8.25", secW: "11.1",
        odIn: "41.4",  odMm: "1051", td32: "15", tdMm: "18.9",
        mlSlbs: "6614", mlSpsi: "120", mlSkg: "3000", mlSkpa: "830",
        mlDlbs: "6008", mlDpsi: "120", mlDkg: "2725", mlDkpa: "830",
        liss: "146/143M", smartway: true, ms: true, "3PMSF": false,
      },
      {
        size: "11R24.5", ply: "16", rimW: "8.25", secW: "11.4",
        odIn: "43.0",  odMm: "1093", td32: "15", tdMm: "18.9",
        mlSlbs: "7165", mlSpsi: "120", mlSkg: "3250", mlSkpa: "830",
        mlDlbs: "6614", mlDpsi: "120", mlDkg: "3000", mlDkpa: "830",
        liss: "149/146M", smartway: true, ms: true, "3PMSF": false,
      },
    ],
    tireImage: tireImg,
    heroBg: heroBgImg,
    bgTruck: bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/template.png",
    },
  },
];

export function getTireBySlug(slug: string): TireData | undefined {
  return TIRES.find((t) => t.slug === slug);
}
