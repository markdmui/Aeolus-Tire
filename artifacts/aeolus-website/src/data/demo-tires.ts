// Template / demo product pages. Not part of the catalog and not in the
// wireframe — reachable only via the dev shortcut in App.tsx (Ctrl+Shift+X
// then 1 or 2) and by direct URL. Hand-maintained.

import { TireData, TirePosition, SHARED_ASSETS } from "./tire-types";

const T = SHARED_ASSETS;

export const DEMO_TIRES: TireData[] = [
  {
    slug:     "demo-x1",
    name:     "DEMO X1",
    segment:  "Premium Long Haul",
    position: "Drive" as TirePosition,
    navGroup: "",
    seriesLabel:   "PREMIUM",
    categoryLabel: "LONG HAUL",
    subtitle: "Engineered for long-distance journeys ensuring high-speed stability, fuel efficiency, and endurance mile after mile.",
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
        image: "/assets/Template-f1_1782411546517.jpg",
      },
      {
        title: "CLOSED SHOULDER STRUCTURE",
        body: "A reinforced closed shoulder design enhances heat dissipation and traction while maintaining even wear performance—improving handling stability and extending tire durability.",
        image: "/assets/Template-f2_1782411546517.jpg",
      },
      {
        title: "ADVANCED 3D SIPE TECHNOLOGY",
        body: "New 3D sipe solutions in the central and shoulder tread blocks enable better block movement, enhancing snow grip and traction while providing regular wear, lower rolling resistance, reduced noise, and improved control in both dry and wet conditions.",
        image: "/assets/Template-f3_1782411546518.jpg",
      },
    ],
    specRows: [
      { size:"295/75R22.5", ply:"16", rimW:"9.00", secW:"11.7", odIn:"39.9", odMm:"1014", tdMm:"12", td32:"15", mlSlbs:"6600", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"5995", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"146/143M", smartway:false, ms:true, "3PMSF":false },
      { size:"11R22.5",     ply:"16", rimW:"8.25", secW:"11.1", odIn:"41.4", odMm:"1051", tdMm:"12", td32:"15", mlSlbs:"6614", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"6008", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"146/143M", smartway:true,  ms:true, "3PMSF":false },
      { size:"11R24.5",     ply:"16", rimW:"8.25", secW:"11.4", odIn:"43.0", odMm:"1093", tdMm:"12", td32:"15", mlSlbs:"7165", mlSpsi:"120", mlSkg:"3250", mlSkpa:"830", mlDlbs:"6614", mlDpsi:"120", mlDkg:"3000", mlDkpa:"830", liss:"149/146M", smartway:true,  ms:true, "3PMSF":false },
    ],
    tireImage:    T.placeholderPhoto,
    heroBg:       T.heroBg,
    bgTruck:      T.bgTruck,
    cutawayImage: T.cutaway,
    downloads: {
      catalog:      T.catalog,
      productSheet: T.productSheet,
      warranty:     T.warranty,
      tirePhoto:    T.placeholderPhoto,
    },
  },

  {
    slug:     "demo-x2",
    name:     "DEMO X2",
    segment:  "Premium Long Haul",
    position: "Steer" as TirePosition,
    navGroup: "",
    seriesLabel:   "PREMIUM",
    categoryLabel: "LONG HAUL",
    subtitle: "Fuel-efficient steer tire with strong casing, uniform wear and excellent handling.",
    bullets: [
      "Steer tire designed for long haul and super regional applications.",
      "Four groove tread design provides excellent water evacuation, providing improved grip and adherence in wet conditions.",
      "Innovative sipe design combined with low heat generation compound improves cooling, extending tread and casing life.",
      "Groove bottom S design stone ejectors prevent stone retention, improving casing retreadability.",
    ],
    features: [
      { title: "OPTIMIZED TREAD GEOMETRY", body: "Precisely engineered tread blocks and groove angles deliver even contact pressure distribution across the full footprint, maximizing mileage and maintaining consistent handling throughout the tire's service life.", image: "" },
      { title: "REINFORCED SHOULDER DESIGN", body: "A closed-shoulder construction reduces heat build-up at the tire's edges, improving wear consistency and extending casing life for multiple retreads.", image: "" },
      { title: "LOW ROLLING RESISTANCE COMPOUND", body: "Advanced silica-enhanced tread compound lowers hysteresis losses, reducing fuel consumption and CO₂ emissions without compromising wet traction or tread life.", image: "" },
    ],
    specRows: [
      { size:"295/60R22.5", ply:"18", rimW:"9", secW:"11.4", odIn:"36.1", odMm:"916",  tdMm:"15", td32:"18.3", mlSlbs:"7385", mlSpsi:"131", mlSkg:"3350", mlSkpa:"900", mlDlbs:"6779", mlDpsi:"131", mlDkg:"3075", mlDkpa:"900", liss:"150/147K", smartway:false, ms:true, "3PMSF":true },
      { size:"315/70R22.5", ply:"18", rimW:"9", secW:"12.4", odIn:"40.2", odMm:"1020", tdMm:"15", td32:"18.3", mlSlbs:"8818", mlSpsi:"131", mlSkg:"4000", mlSkpa:"900", mlDlbs:"7385", mlDpsi:"131", mlDkg:"3350", mlDkpa:"900", liss:"156/150L", smartway:false, ms:true, "3PMSF":true },
      { size:"315/80R22.5", ply:"18", rimW:"9", secW:"12.3", odIn:"42.5", odMm:"1081", tdMm:"15", td32:"18.3", mlSlbs:"9370", mlSpsi:"131", mlSkg:"4250", mlSkpa:"900", mlDlbs:"7385", mlDpsi:"131", mlDkg:"3350", mlDkpa:"900", liss:"158/150L", smartway:true,  ms:true, "3PMSF":true },
    ],
    tireImage:    T.placeholderPhoto,
    heroBg:       T.heroBg,
    bgTruck:      T.bgTruck,
    cutawayImage: T.cutaway,
    downloads: {
      catalog:      T.catalog,
      productSheet: T.productSheet,
      warranty:     T.warranty,
      tirePhoto:    T.placeholderPhoto,
    },
  },
];
