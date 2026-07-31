const heroBgImg   = "/assets/tire-hero-bg-1_1782515680443.jpg";
const bgTruckImg  = "/assets/bg-long-haul_1782519244050.jpg";
const cutawayImg  = "/assets/3d-cutaway-V2_1783092089703.png";
const placeholderPhoto = "/assets/Template_1782411546518.png";

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

export interface TireFeature { title: string; body: string; image: string; }

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
  downloads: { catalog: string; productSheet: string; warranty: string; tirePhoto: string; };
}

export const TIRES: TireData[] = [

  // ─── Neo Fuel X3 (template / shortcut alias) ───────────
  {
    slug:     "neo-fuel-x3",
    name:     "Neo Fuel S",
    segment:  "Premium Long Haul",
    position: "Steer" as TirePosition,
    subtitle: "Fuel-efficient steer tire with strong casing, uniform wearand excellent handling.",
    bullets: [
      "Steer tire designed for long haul and super regional applications",
      "Four groove tread design provides excellent water evacuation, providing improved grip and adherence in wet conditions",
      "Innovative sipe design combined with low heat generation compound improves cooling, extending tread and casing life",
      "Grove bottom S design stone ejectors prevent stone retention, improving casing retreadability",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
      { size:"295/60R22.5", ply:"18", rimW:"9", secW:"11.4", odIn:"36.1", odMm:"916",  td32:"15", tdMm:"18.3", mlSlbs:"7385", mlSpsi:"131", mlSkg:"3350", mlSkpa:"900", mlDlbs:"6779", mlDpsi:"131", mlDkg:"3075", mlDkpa:"900", liss:"150/147K", smartway:false, ms:true, "3PMSF":true },
      { size:"315/70R22.5", ply:"18", rimW:"9", secW:"12.4", odIn:"40.2", odMm:"1020", td32:"15", tdMm:"18.3", mlSlbs:"8818", mlSpsi:"131", mlSkg:"4000", mlSkpa:"900", mlDlbs:"7385", mlDpsi:"131", mlDkg:"3350", mlDkpa:"900", liss:"156/150L", smartway:false, ms:true, "3PMSF":true },
      { size:"315/80R22.5", ply:"18", rimW:"9", secW:"12.3", odIn:"42.5", odMm:"1081", td32:"15", tdMm:"18.3", mlSlbs:"9370", mlSpsi:"131", mlSkg:"4250", mlSkpa:"900", mlDlbs:"7385", mlDpsi:"131", mlDkg:"3350", mlDkpa:"900", liss:"158/150L", smartway:false, ms:true, "3PMSF":true },
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

  // ─── Neo Fuel S ────────────────────────────────────────
  {
    slug:     "neo-fuel-s",
    name:     "Neo Fuel S",
    segment:  "Premium Long Haul",
    position: "Steer" as TirePosition,
    subtitle: "Fuel-efficient steer tire with strong casing, uniform wearand excellent handling.",
    bullets: [
      "Steer tire designed for long haul and super regional applications",
      "Four groove tread design provides excellent water evacuation, providing improved grip and adherence in wet conditions",
      "Innovative sipe design combined with low heat generation compound improves cooling, extending tread and casing life",
      "Grove bottom S design stone ejectors prevent stone retention, improving casing retreadability",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"295/60R22.5", ply:"18", rimW:"9", secW:"11.4", odIn:"36.1", odMm:"916", td32:"15", tdMm:"18.3", mlSlbs:"7385", mlSpsi:"131", mlSkg:"3350", mlSkpa:"900", mlDlbs:"6779", mlDpsi:"131", mlDkg:"3075", mlDkpa:"900", liss:"150/147K", smartway:false, ms:true, "3PMSF":true },
        { size:"315/70R22.5", ply:"18", rimW:"9", secW:"12.4", odIn:"40.2", odMm:"1020", td32:"15", tdMm:"18.3", mlSlbs:"8818", mlSpsi:"131", mlSkg:"4000", mlSkpa:"900", mlDlbs:"7385", mlDpsi:"131", mlDkg:"3350", mlDkpa:"900", liss:"156/150L", smartway:false, ms:true, "3PMSF":true },
        { size:"315/80R22.5", ply:"18", rimW:"9", secW:"12.3", odIn:"42.5", odMm:"1081", td32:"15", tdMm:"18.3", mlSlbs:"9370", mlSpsi:"131", mlSkg:"4250", mlSkpa:"900", mlDlbs:"7385", mlDpsi:"131", mlDkg:"3350", mlDkpa:"900", liss:"158/150L", smartway:false, ms:true, "3PMSF":true },
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

  // ─── Neo Fuel S+ ───────────────────────────────────────
  {
    slug:     "neo-fuel-s-plus",
    name:     "Neo Fuel S+",
    segment:  "Premium Long Haul",
    position: "Steer" as TirePosition,
    subtitle: "Wide-base steer tire delivering maximum fuel savings, 3PMS-rated all-season capability.",
    bullets: [
      "Wide-base steer tire for long haul and super regional fleets seeking maximum fuel efficiency",
      "Low rolling resistance compound combined with optimized tread geometry reduces fuel consumption",
      "3PMS designation ensures reliable traction in winter conditions",
      "M+S rated for year-round performance on varied road surfaces",
      "Groove bottom stone ejectors protect casing retreadability",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
      { size:"315/60R22.5", ply:"20", rimW:"9.75", secW:"12.2", odIn:"37.2", odMm:"944", td32:"14", tdMm:"17.6", mlSlbs:"8267", mlSpsi:"131", mlSkg:"3750", mlSkpa:"900", mlDlbs:"6945", mlDpsi:"131", mlDkg:"3150", mlDkpa:"900", liss:"154/148L", smartway:false, ms:true, "3PMSF":true },
    ],
    tireImage:    placeholderPhoto,
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    placeholderPhoto,
    },
  },

  // ─── Neo Fuel D ────────────────────────────────────────
  {
    slug:     "neo-fuel-d",
    name:     "Neo Fuel D",
    segment:  "Premium Long Haul",
    position: "Drive" as TirePosition,
    subtitle: "Long-distance drive tire with high mileage, traction and fuel efficiency.",
    bullets: [
      "Drive position tire for long haul and super regional applications",
      "Wide tread design and dual layer compound improves mileage, reducing operating costs",
      "Open block design provides excellent traction in wet conditions, improving safety",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"315/80R22.5", ply:"18", rimW:"9", secW:"12.3", odIn:"42.7", odMm:"1085", td32:"17", tdMm:"21", mlSlbs:"8818", mlSpsi:"123", mlSkg:"4000", mlSkpa:"850", mlDlbs:"7385", mlDpsi:"123", mlDkg:"3350", mlDkpa:"850", liss:"156/150L", smartway:false, ms:true, "3PMSF":false },
    ],
    tireImage:    "/tires/Tire-Photos/Neo-Fuel-D.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/Neo-Fuel-D.png",
    },
  },

  // ─── Neo Fuel D2 ───────────────────────────────────────
  {
    slug:     "neo-fuel-d2",
    name:     "Neo Fuel D2",
    segment:  "Premium Long Haul",
    position: "Drive" as TirePosition,
    subtitle: "Long-haul drive tire with enhanced traction, durableand puncture protection.",
    bullets: [
      "Drive axle tire for long haul and super regional applications, available in wide base single size",
      "295/60R22.5 size offers directional tread for improved traction and adherence",
      "Bottom grove design reduces stone retention, improving casing life and retreadability",
      "Low profile design and 18 ply capacity for over dimensional loads provides increased fleet operator flexibility",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"295/60R22.5", ply:"18", rimW:"9", secW:"11.5", odIn:"36.3", odMm:"922", td32:"16", tdMm:"19.5", mlSlbs:"7385", mlSpsi:"131", mlSkg:"3350", mlSkpa:"900", mlDlbs:"6779", mlDpsi:"131", mlDkg:"3075", mlDkpa:"900", liss:"150/147K", smartway:false, ms:true, "3PMSF":true },
        { size:"445/50R22.5", ply:"20", rimW:"14", secW:"17.4", odIn:"40.3", odMm:"1024", td32:"20", tdMm:"24.6", mlSlbs:"10196", mlSpsi:"120", mlSkg:"4625", mlSkpa:"830", mlDlbs:"", mlDpsi:"", mlDkg:"", mlDkpa:"", liss:"161L", smartway:false, ms:true, "3PMSF":false },
    ],
    tireImage:    "/tires/Tire-Photos/Neo-Fuel-D2.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/Neo-Fuel-D2.png",
    },
  },

  // ─── Neo Fuel D3 ───────────────────────────────────────
  {
    slug:     "neo-fuel-d3",
    name:     "Neo Fuel D3",
    segment:  "Premium Long Haul",
    position: "Drive" as TirePosition,
    subtitle: "Durable drive tire with high mileage, strong tractionand fuel efficiency.",
    bullets: [
      "Drive position tire for long haul and super regional applications",
      "Extra wide tread with 3D sipes and closed shoulder tread pattern provide excellent mileage, reducing operating cost",
      "SATT technology ensures an even contact patch, reducing irregular wear and extending tire life",
      "Low rolling resistance tread compound improves fuel economy, Reducing operating costs",
    ],
    features: [
      { title:"3D Sipe & Block Pattern Design", body:"Innovative block pattern and 3-dimensional sipe design deliver excellent traction, handling stabilityand driving performance across long-haul applications.", image:"/tires/Feature-Images/Neo-Fuel-D3-f1.jpg" },
      { title:"Wider Tread Profile", body:"A widened tread pattern ensures better ground contact and even wear distribution, effectively extending tire mileage and improving overall durability.", image:"/tires/Feature-Images/Neo-Fuel-D3-f2.jpg" },
      { title:"Low Rolling Resistance Compound", body:"The specially developed low rolling resistance tread compound minimizes energy loss during operation, significantly enhancing fuel efficiency without compromising grip.", image:"/tires/Feature-Images/Neo-Fuel-D3-f4.jpg" },
    ],
    specRows: [
        { size:"295/75R22.5", ply:"16", rimW:"9", secW:"297", odIn:"40.4", odMm:"1025", td32:"21", tdMm:"26", mlSlbs:"6600", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"5995", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"146/143M", smartway:false, ms:true, "3PMSF":false },
        { size:"11R22.5", ply:"16", rimW:"8.25", secW:"11", odIn:"41.9", odMm:"1063", td32:"21", tdMm:"25.8", mlSlbs:"6614", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"6008", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"146/143L", smartway:true, ms:true, "3PMSF":false },
        { size:"11R24.5", ply:"16", rimW:"8.25", secW:"11.5", odIn:"43.5", odMm:"1105", td32:"21", tdMm:"25.8", mlSlbs:"7165", mlSpsi:"120", mlSkg:"3250", mlSkpa:"830", mlDlbs:"6614", mlDpsi:"120", mlDkg:"3000", mlDkpa:"830", liss:"149/146L", smartway:true, ms:true, "3PMSF":false },
    ],
    tireImage:    "/tires/Tire-Photos/Neo-Fuel-D3.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/Neo-Fuel-D3.png",
    },
  },

  // ─── Neo Fuel T+ ───────────────────────────────────────
  {
    slug:     "neo-fuel-t-plus",
    name:     "Neo Fuel T+",
    segment:  "Premium Long Haul",
    position: "Trailer" as TirePosition,
    subtitle: "Long-haul trailer tire with strong casing, uniform wearand fuel efficiency.",
    bullets: [
      "Speciality tire for low deck trailers carrying over dimensional loads for use in long haul and super regional applications",
      "Longitudinal grooves reduce heat generation and improve wet weather adherence, increasing safety",
      "Low rolling resistance tread compound improves fuel economy, lowering operating costs",
    ],
    features: [
      { title:"New Tread Block Pitch Sequence", body:"The completely redesigned tread block pitch sequence improves overall performance by delivering higher mileage, lower rolling resistance, excellent even wear, reduced noiseand enhanced tear resistance for long service life in demanding operations.", image:"/tires/Feature-Images/Neo-Fuel-Tplus-f1.jpg" },
      { title:"Five Wide Circumference Ribs", body:"The five wide longitudinal ribs provide strong tear strength and structural stability, contributing to better tear resistance and improved durability under heavy-duty usage.", image:"/tires/Feature-Images/Neo-Fuel-Tplus-f2.jpg" },
      { title:"Zigzag Side Grooves & Straight Center Grooves", body:"The combination of wide zig-zag grooves on the shoulders and straight grooves in the center ensures effective stone ejection and excellent water evacuation, enhancing protection and improving safety on wet or debris-filled roads.", image:"/tires/Feature-Images/Neo-Fuel-Tplus-f3.jpg" },
    ],
    specRows: [
        { size:"435/50R19.5", ply:"20", rimW:"14", secW:"17.2", odIn:"36.5", odMm:"927", td32:"12", tdMm:"15.1", mlSlbs:"9921", mlSpsi:"131", mlSkg:"4500", mlSkpa:"900", mlDlbs:"", mlDpsi:"", mlDkg:"", mlDkpa:"", liss:"160J", smartway:false, ms:true, "3PMSF":false },
    ],
    tireImage:    "/tires/Tire-Photos/Neo-Fuel-T+.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/Neo-Fuel-T+.png",
    },
  },

  // ─── Neo Fuel T2 ───────────────────────────────────────
  {
    slug:     "neo-fuel-t2",
    name:     "Neo Fuel T2",
    segment:  "Premium Long Haul",
    position: "Trailer" as TirePosition,
    subtitle: "Long-haul trailer tire with excellent drainage, even wearand fuel-saving performance.",
    bullets: [
      "Trailer position tire available in wide base sizes for long haul applications",
      "Longitudinal grooves reduce heat generation and improve wet weather adherence, increasing safety",
      "Wide base casing design and low rolling resistance compound improves fuel economy, reducing operating costs",
      "Wide base design reduces unsprung weight, allowing for increased bulk haul capacity, increasing revenue potential",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"445/50R22.5", ply:"20", rimW:"14", secW:"17.4", odIn:"39.6", odMm:"1006", td32:"11", tdMm:"13.2", mlSlbs:"10196", mlSpsi:"120", mlSkg:"4625", mlSkpa:"830", mlDlbs:"", mlDpsi:"", mlDkg:"", mlDkpa:"", liss:"161L", smartway:false, ms:true, "3PMSF":false },
    ],
    tireImage:    "/tires/Tire-Photos/Neo-Fuel-T2.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/Neo-Fuel-T2.png",
    },
  },

  // ─── Neo Fuel T3 ───────────────────────────────────────
  {
    slug:     "neo-fuel-t3",
    name:     "Neo Fuel T3",
    segment:  "Premium Long Haul",
    position: "Trailer" as TirePosition,
    subtitle: "Stable long-haul trailer tire with stone ejection, high tractionand long mileage.",
    bullets: [
      "Shallow tread long haul trailer tire",
      "Longitudinal grooves and full depth sipes improve wet and dry handling for increased driver comfort",
      "Grove bottom stone ejectors reduce stone retention, increasing retreadability",
      "Optimized tread design reduces irregular wear, increasing mileage and lowering operating costs",
    ],
    features: [
      { title:"Closed Shoulder & Stone Ejection", body:"Reinforced closed shoulders with ejectors at the groove bottom promote more even wear and effective stone release, reducing tread/casing damage and maintaining long service life.", image:"/tires/Feature-Images/Neo-Fuel-T3-f1.jpg" },
      { title:"Z-Type Straight Grooves", body:"Special Z-shaped straight grooves improve handling stability and tracking, supporting confident control on highway runs.", image:"/tires/Feature-Images/Neo-Fuel-T3-f2.jpg" },
      { title:"Dual-Layer High-Silica Compound", body:"A two-layer tread with high silica content delivers lower rolling resistance and better fuel efficiency, while preserving reliable grip in varied conditions.", image:"/tires/Feature-Images/Neo-Fuel-T3-f4.jpg" },
    ],
    specRows: [
        { size:"11R22.5", ply:"16", rimW:"8.25", secW:"11", odIn:"41.3", odMm:"1050", td32:"10", tdMm:"13", mlSlbs:"6614", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"6008", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"144/142M (148/145L)", smartway:false, ms:true, "3PMSF":false },
        { size:"295/75R22.5", ply:"14", rimW:"9", secW:"11.6", odIn:"39.4", odMm:"1001", td32:"10", tdMm:"13", mlSlbs:"6173", mlSpsi:"110", mlSkg:"2800", mlSkpa:"760", mlDlbs:"5677", mlDpsi:"110", mlDkg:"2575", mlDkpa:"760", liss:"144/141M", smartway:false, ms:false, "3PMSF":false },
    ],
    tireImage:    "/tires/Tire-Photos/Neo-Fuel-T3.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/Neo-Fuel-T3.png",
    },
  },

  // ─── Neo Fuel G3 ───────────────────────────────────────
  {
    slug:     "neo-fuel-g3",
    name:     "Neo Fuel G3",
    segment:  "Premium Long Haul",
    position: "Trailer" as TirePosition,
    subtitle: "Steer tire with excellent stability, long lifespanand superior fuel efficiency.",
    bullets: [
      "All position rib tire for long haul and super regional applications",
      "Longitudinal grooves improve wet and dry handling for increased driver comfort",
      "SATT technology ensures an even contact patch, reducing irregular wear and extending tire life",
      "Low rolling resistance tread compound improves fuel economy, lowering operating costs",
    ],
    features: [
      { title:"OPTIMIZED Z-SHAPED GROOVE DESIGN", body:"Z-shaped straight grooves with optimized geometry and higher pattern saturation ensure even wear and higher mileage, delivering long-lasting tread life and consistent performance on long-haul routes.", image:"/tires/Feature-Images/Neo-Fuel-G3-f1.jpg" },
      { title:"CLOSED SHOULDER STRUCTURE", body:"A reinforced closed shoulder design enhances heat dissipation and traction while maintaining even wear performance—improving handling stability and extending tire durability.", image:"/tires/Feature-Images/Neo-Fuel-G3-f2.jpg" },
      { title:"ADVANCED 3D SIPE TECHNOLOGY", body:"New 3D sipe solutions in the central and shoulder tread blocks enable better block movement, enhancing snow grip and traction while providing regular wear, lower rolling resistance, reduced noiseand improved control in both dry and wet conditions.", image:"/tires/Feature-Images/Neo-Fuel-G3-f3.jpg" },
    ],
    specRows: [
        { size:"295/75R22.5", ply:"16", rimW:"9", secW:"296", odIn:"39.9", odMm:"1014", td32:"15", tdMm:"18.9", mlSlbs:"6600", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"5995", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"146/143M", smartway:false, ms:true, "3PMSF":false },
        { size:"11R22.5", ply:"16", rimW:"8.25", secW:"11.1", odIn:"41.4", odMm:"1051", td32:"15", tdMm:"18.9", mlSlbs:"6614", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"6008", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"146/143M", smartway:true, ms:true, "3PMSF":false },
        { size:"11R24.5", ply:"16", rimW:"8.25", secW:"11.4", odIn:"43", odMm:"1093", td32:"15", tdMm:"18.9", mlSlbs:"7165", mlSpsi:"120", mlSkg:"3250", mlSkpa:"830", mlDlbs:"6614", mlDpsi:"120", mlDkg:"3000", mlDkpa:"830", liss:"149/146M", smartway:true, ms:true, "3PMSF":false },
    ],
    tireImage:    "/tires/Tire-Photos/Neo-Fuel-G3.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/Neo-Fuel-G3.png",
    },
  },

  // ─── Neo Allroads S ────────────────────────────────────
  {
    slug:     "neo-allroads-s",
    name:     "Neo Allroads S",
    segment:  "Premium Regional",
    position: "Steer" as TirePosition,
    subtitle: "Regional truck tire with zig-zag grooves, low rolling resistance, excellent mileage, durability.",
    bullets: [
      "Steer position tire for small cargo vans operating in regional and urban applications",
      "Longitudinal grooves improve wet and dry handling for increased driver comfort",
      "Improved mileage with wider and deeper tread design",
      "Four groove design provides excellent water evacuation, providing improved grip and adherence in wet conditions",
      "Variable angle groove angle pitch design reduces stone retention, increasing retreadability",
      "High silica tread compound improves adherence in a wide range of temperatures",
    ],
    features: [
      { title:"Zig-Zag Grooves with Ejectors", body:"The zig-zag groove design with stone-ejector features enhances braking performance, water expulsionand steering precision while effectively preventing stone trapping for longer tread life.", image:"/tires/Feature-Images/Neo-Allroads-S-f1.jpg" },
      { title:"3D Numerical-Simulation Design", body:"Developed through advanced 3D numerical-simulation technology, the tread structure ensures efficient heat dissipation, longer mileage, lower rolling resistanceand improved comfort on both dry and wet roads.", image:"/tires/Feature-Images/Neo-Allroads-S-f2.jpg" },
      { title:"Optimized Footprint Profile", body:"The optimized tread profile distributes footprint pressure evenly, reducing irregular wear and extending tire life for greater long-term value.", image:"/tires/Feature-Images/Neo-Allroads-S-f3.jpg" },
    ],
    specRows: [
        { size:"295/80R22.5", ply:"18", rimW:"9", secW:"309", odIn:"41.7", odMm:"1059", td32:"17", tdMm:"20.8", mlSlbs:"8250", mlSpsi:"131", mlSkg:"3750", mlSkpa:"900", mlDlbs:"7150", mlDpsi:"131", mlDkg:"3250", mlDkpa:"900", liss:"154/149M", smartway:false, ms:true, "3PMSF":true },
        { size:"11R24.5", ply:"16", rimW:"8.25", secW:"11.5", odIn:"43.3", odMm:"1100", td32:"18", tdMm:"22", mlSlbs:"7165", mlSpsi:"120", mlSkg:"3250", mlSkpa:"830", mlDlbs:"6614", mlDpsi:"120", mlDkg:"3000", mlDkpa:"830", liss:"149/146L", smartway:false, ms:true, "3PMSF":false },
        { size:"11R22.5", ply:"16", rimW:"8.25", secW:"10.9", odIn:"41.5", odMm:"1053", td32:"16", tdMm:"20.2", mlSlbs:"6945", mlSpsi:"120", mlSkg:"3150", mlSkpa:"830", mlDlbs:"6393", mlDpsi:"120", mlDkg:"2900", mlDkpa:"830", liss:"148/145M", smartway:false, ms:true, "3PMSF":true },
        { size:"215/75R17.5", ply:"16", rimW:"6", secW:"8.5", odIn:"30.1", odMm:"764", td32:"13", tdMm:"16.4", mlSlbs:"3748", mlSpsi:"102", mlSkg:"1700", mlSkpa:"700", mlDlbs:"3527", mlDpsi:"102", mlDkg:"1600", mlDkpa:"700", liss:"126/124M", smartway:false, ms:true, "3PMSF":true },
        { size:"215/75R17.5", ply:"18", rimW:"6", secW:"8.5", odIn:"30", odMm:"763", td32:"13", tdMm:"16.4", mlSlbs:"4806", mlSpsi:"123", mlSkg:"2180", mlSkpa:"850", mlDlbs:"4542", mlDpsi:"123", mlDkg:"2060", mlDkpa:"850", liss:"135/133J", smartway:false, ms:true, "3PMSF":true },
        { size:"225/70R19.5", ply:"14", rimW:"6.75", secW:"8.9", odIn:"31.9", odMm:"810", td32:"14", tdMm:"17.6", mlSlbs:"3968", mlSpsi:"110", mlSkg:"1800", mlSkpa:"760", mlDlbs:"3748", mlDpsi:"110", mlDkg:"1700", mlDkpa:"760", liss:"128/126M", smartway:false, ms:true, "3PMSF":true },
        { size:"225/75R17.5", ply:"16", rimW:"6.75", secW:"8.7", odIn:"30.6", odMm:"778", td32:"13", tdMm:"16.4", mlSlbs:"4079", mlSpsi:"120", mlSkg:"1850", mlSkpa:"830", mlDlbs:"3858", mlDpsi:"120", mlDkg:"1750", mlDkpa:"830", liss:"129/127M", smartway:false, ms:true, "3PMSF":true },
        { size:"225/80R17.5", ply:"14", rimW:"6.75", secW:"9.2", odIn:"31.8", odMm:"807", td32:"15", tdMm:"18.9", mlSlbs:"4079", mlSpsi:"110", mlSkg:"1850", mlSkpa:"760", mlDlbs:"3858", mlDpsi:"110", mlDkg:"1750", mlDkpa:"760", liss:"129/127L", smartway:false, ms:true, "3PMSF":false },
        { size:"235/75R17.5", ply:"16", rimW:"6.75", secW:"9.3", odIn:"31.4", odMm:"797", td32:"13", tdMm:"16.4", mlSlbs:"4409", mlSpsi:"112", mlSkg:"2000", mlSkpa:"775", mlDlbs:"4189", mlDpsi:"112", mlDkg:"1900", mlDkpa:"775", liss:"132/130M", smartway:false, ms:true, "3PMSF":true },
        { size:"235/75R17.5", ply:"18", rimW:"6.75", secW:"9.3", odIn:"31.3", odMm:"795", td32:"13", tdMm:"16.4", mlSlbs:"6008", mlSpsi:"120", mlSkg:"2725", mlSkpa:"830", mlDlbs:"5677", mlDpsi:"120", mlDkg:"2575", mlDkpa:"830", liss:"143/141J", smartway:false, ms:true, "3PMSF":true },
        { size:"245/70R17.5", ply:"18", rimW:"7.5", secW:"9.9", odIn:"31.3", odMm:"796", td32:"15", tdMm:"18.9", mlSlbs:"4938", mlSpsi:"123", mlSkg:"2240", mlSkpa:"850", mlDlbs:"4674", mlDpsi:"123", mlDkg:"2120", mlDkpa:"850", liss:"136/134M", smartway:false, ms:true, "3PMSF":true },
        { size:"275/70R22.5", ply:"18", rimW:"8.25", secW:"11.1", odIn:"38", odMm:"964", td32:"17", tdMm:"20.8", mlSlbs:"6945", mlSpsi:"131", mlSkg:"3150", mlSkpa:"900", mlDlbs:"6393", mlDpsi:"131", mlDkg:"2900", mlDkpa:"900", liss:"148/145M", smartway:false, ms:true, "3PMSF":true },
        { size:"285/70R19.5", ply:"16", rimW:"8.25", secW:"11.1", odIn:"35.1", odMm:"892", td32:"14", tdMm:"17.6", mlSlbs:"6614", mlSpsi:"123", mlSkg:"3000", mlSkpa:"850", mlDlbs:"6173", mlDpsi:"123", mlDkg:"2800", mlDkpa:"850", liss:"146/144L", smartway:false, ms:true, "3PMSF":true },
        { size:"315/70R22.5", ply:"18", rimW:"9", secW:"12.3", odIn:"40.1", odMm:"1018", td32:"16", tdMm:"19.5", mlSlbs:"8818", mlSpsi:"131", mlSkg:"4000", mlSkpa:"900", mlDlbs:"7385", mlDpsi:"131", mlDkg:"3350", mlDkpa:"900", liss:"156/150L", smartway:false, ms:true, "3PMSF":true },
        { size:"315/80R22.5", ply:"18", rimW:"9", secW:"12.4", odIn:"42.7", odMm:"1085", td32:"17", tdMm:"20.8", mlSlbs:"9370", mlSpsi:"131", mlSkg:"4250", mlSkpa:"900", mlDlbs:"7385", mlDpsi:"131", mlDkg:"3350", mlDkpa:"900", liss:"158/150L", smartway:false, ms:true, "3PMSF":true },
        { size:"315/80R22.5", ply:"20", rimW:"9", secW:"12.5", odIn:"42.6", odMm:"1083", td32:"17", tdMm:"20.8", mlSlbs:"9370", mlSpsi:"131", mlSkg:"4250", mlSkpa:"900", mlDlbs:"7385", mlDpsi:"131", mlDkg:"3350", mlDkpa:"900", liss:"158/150K", smartway:false, ms:true, "3PMSF":false },
    ],
    tireImage:    "/tires/Tire-Photos/Neo-Allroads-S.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/Neo-Allroads-S.png",
    },
  },

  // ─── Neo Allroads S+ ───────────────────────────────────
  {
    slug:     "neo-allroads-s-plus",
    name:     "Neo Allroads S+",
    segment:  "Premium Regional",
    position: "Steer" as TirePosition,
    subtitle: "Truck tire with deep tread, Z-grooves, excellent handling, stone-resistant, long-lasting durability.",
    bullets: [
      "Steer axle tire for regional applications",
      "4 groove longitudinal design improves handling and reduces braking distances in low adherence conditions",
      "Increased tread depth improves mileage, reducing operating costs",
      "Variable pitch groove and stone ejectors reduce stone retention, increasing retreadability",
      "Wide tread design and dual layer compound improves mileage, reducing operating costs",
    ],
    features: [
      { title:"Zig-Zag Grooves & Shoulder Contour Design", body:"Zig-zag grooves with robust longitudinal ribs and an optimized shoulder tread contour ensure balanced footprint pressure, providing shorter braking distance, excellent water expulsion, precise steering controland extended mileage with even wear.", image:"/tires/Feature-Images/Neo-Allroads-Splus-f1.jpg" },
      { title:"Full-Depth 3D Sipes", body:"Advanced full-depth 3D sipes improve traction and handling in both dry and wet conditions, while lowering rolling resistance and reducing road noise for a smoother, quieter ride.", image:"/tires/Feature-Images/Neo-Allroads-Splus-f2.jpg" },
      { title:"Dual-Layer Tread Compound", body:"The dual-layer tread compound design enhances heat dissipation and wear resistance, offering longer mileage and stable performance over extended regional operations.", image:"/tires/Feature-Images/compound-img.jpg" },
    ],
    specRows: [
        { size:"385/65R22.5", ply:"20", rimW:"11.75", secW:"15.1", odIn:"42.2", odMm:"1072", td32:"15", tdMm:"19", mlSlbs:"11023", mlSpsi:"131", mlSkg:"5000", mlSkpa:"900", mlDlbs:"", mlDpsi:"", mlDkg:"", mlDkpa:"", liss:"164K", smartway:false, ms:true, "3PMSF":true },
        { size:"385/55R22.5", ply:"20", rimW:"11.75", secW:"15.1", odIn:"39.5", odMm:"1003", td32:"15", tdMm:"19", mlSlbs:"9921", mlSpsi:"131", mlSkg:"4500", mlSkpa:"900", mlDlbs:"", mlDpsi:"", mlDkg:"", mlDkpa:"", liss:"160K", smartway:false, ms:true, "3PMSF":false },
    ],
    tireImage:    "/tires/Tire-Photos/Neo-Allroads-S+.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/Neo-Allroads-S+.png",
    },
  },

  // ─── Neo Allroads D ────────────────────────────────────
  {
    slug:     "neo-allroads-d",
    name:     "Neo Allroads D",
    segment:  "Premium Regional",
    position: "Drive" as TirePosition,
    subtitle: "Regional drive tire with deep traction, quiet rideand long-lasting Durable.",
    bullets: [
      "Drive position tire for small cargo vans operating in regional and urban applications",
      "Special tread block pitch design for improved traction, increasing safety in poor weather",
      "Buttressed block design and optimized shoulder design provides even wear, improving mileage and reducing operating costs",
      "Variable tread block size reduces noise, increasing driver comfort",
      "Dual layer compound improves mileage, reducing operating costs",
    ],
    features: [
      { title:"Optimized Footprint", body:"The wider tread design and 3-D simulation-optimized footprint ensure balanced contact pressure, delivering longer mileage, uniform wearand reduced rolling resistance for improved fuel efficiency.", image:"/tires/Feature-Images/Neo-Allroads-D-f1.jpg" },
      { title:"Enhanced Traction & Comfort", body:"A non-directional tread pattern with an optimized pitch design delivers confident grip and handling stability while lowering noise for a smoother, more comfortable ride.", image:"/tires/Feature-Images/Neo-Allroads-D-f2.jpg" },
      { title:"Reinforced Durability", body:"Reinforcement ribs between tread blocks and a new-generation low rolling-resistance compound strengthen the casing, extend service lifeand maintain performance across demanding conditions.", image:"/tires/Feature-Images/Neo-Allroads-D-f3.jpg" },
    ],
    specRows: [
        { size:"215/75R17.5", ply:"16", rimW:"6", secW:"8.5", odIn:"30.2", odMm:"766", td32:"15", tdMm:"18.9", mlSlbs:"3748", mlSpsi:"102", mlSkg:"1700", mlSkpa:"700", mlDlbs:"3527", mlDpsi:"102", mlDkg:"1600", mlDkpa:"700", liss:"126/124M", smartway:false, ms:true, "3PMSF":true },
        { size:"215/75R17.5", ply:"18", rimW:"6", secW:"8.4", odIn:"30.2", odMm:"768", td32:"15", tdMm:"18.9", mlSlbs:"4806", mlSpsi:"123", mlSkg:"2180", mlSkpa:"850", mlDlbs:"4542", mlDpsi:"123", mlDkg:"2060", mlDkpa:"850", liss:"135/133J", smartway:false, ms:true, "3PMSF":true },
        { size:"225/70R19.5", ply:"14", rimW:"6.75", secW:"8.9", odIn:"31.9", odMm:"810", td32:"15", tdMm:"18.9", mlSlbs:"3968", mlSpsi:"110", mlSkg:"1800", mlSkpa:"760", mlDlbs:"3748", mlDpsi:"110", mlDkg:"1700", mlDkpa:"760", liss:"128/126M", smartway:false, ms:true, "3PMSF":true },
        { size:"235/75R17.5", ply:"16", rimW:"6.75", secW:"9.3", odIn:"31.5", odMm:"801", td32:"16", tdMm:"20", mlSlbs:"4409", mlSpsi:"112", mlSkg:"2000", mlSkpa:"775", mlDlbs:"4189", mlDpsi:"112", mlDkg:"1900", mlDkpa:"775", liss:"132/130M", smartway:false, ms:true, "3PMSF":true },
        { size:"235/75R17.5", ply:"18", rimW:"6.75", secW:"9.2", odIn:"31.5", odMm:"801", td32:"16", tdMm:"20", mlSlbs:"6008", mlSpsi:"127", mlSkg:"2725", mlSkpa:"875", mlDlbs:"5677", mlDpsi:"127", mlDkg:"2575", mlDkpa:"875", liss:"143/141J", smartway:false, ms:true, "3PMSF":true },
        { size:"285/70R19.5", ply:"16", rimW:"8.25", secW:"11.1", odIn:"35.3", odMm:"897", td32:"16", tdMm:"20", mlSlbs:"6614", mlSpsi:"123", mlSkg:"3000", mlSkpa:"850", mlDlbs:"6173", mlDpsi:"123", mlDkg:"2800", mlDkpa:"850", liss:"146/144L", smartway:false, ms:true, "3PMSF":true },
        { size:"265/70R19.5", ply:"16", rimW:"7.5", secW:"10.1181102362205", odIn:"34.43001181102363", odMm:"874.5223", td32:"17", tdMm:"21", mlSlbs:"5512", mlSpsi:"120", mlSkg:"2500", mlSkpa:"830", mlDlbs:"5203", mlDpsi:"120", mlDkg:"2360", mlDkpa:"830", liss:"140/138M", smartway:false, ms:true, "3PMSF":false },
        { size:"265/70R19.5", ply:"18", rimW:"7.5", secW:"10.1", odIn:"34.4", odMm:"874", td32:"17", tdMm:"21", mlSlbs:"6008", mlSpsi:"120", mlSkg:"2725", mlSkpa:"830", mlDlbs:"5677", mlDpsi:"120", mlDkg:"2575", mlDkpa:"830", liss:"143/141J", smartway:false, ms:true, "3PMSF":false },
    ],
    tireImage:    "/tires/Tire-Photos/Neo-Allroads-D.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/Neo-Allroads-D.png",
    },
  },

  // ─── Neo Allroads D+ ───────────────────────────────────
  {
    slug:     "neo-allroads-d-plus",
    name:     "Neo Allroads D+",
    segment:  "Premium Regional",
    position: "Drive" as TirePosition,
    subtitle: "Durable drive tire with strong traction, long lifespanand excellent handling.",
    bullets: [
      "Drive position tire for regional applications",
      "Wide directional tread pattern provides excellent mileage, reducing operating costs",
      "Special 3D sipe design ensures tread block stability while also providing excellent wet weather traction",
      "Robust belt package provides increased durability, improving retreadability",
      "Dual tread compound and sipe design improves wear while reducing operating temperatures, extending casing life",
    ],
    features: [
      { title:"Full-Depth 3D Sipes", body:"Advanced 3D sipes run through the full tread depth, creating an interlocking effect that improves traction and ensures even wear throughout the tire’s service life.", image:"/tires/Feature-Images/Neo-Allroads-Dplus-f1.jpg" },
      { title:"Optimized Transversal & Directional Groove Design", body:"Transversal grooves with optimized geometry and a newly engineered directional tread pattern deliver higher mileage, lower rolling resistanceand better traction. The unique pitch sequence also enhances stone rejection, keeping the tread clean and efficient on varied surfaces.", image:"/tires/Feature-Images/Neo-Allroads-Dplus-f2.jpg" },
      { title:"Reinforced Block Rib", body:"Strong reinforcement ribs between tread blocks increase structural strength and driving stability, enhancing durability, safetyand even wear for longer tire life.", image:"/tires/Feature-Images/Neo-Allroads-Dplus-f3.jpg" },
    ],
    specRows: [
        { size:"11R22.5", ply:"16", rimW:"8.25", secW:"11", odIn:"42", odMm:"1067", td32:"23", tdMm:"28", mlSlbs:"6614", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"6008", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"146/143L", smartway:false, ms:true, "3PMSF":true },
        { size:"295/60R22.5", ply:"18", rimW:"9", secW:"11.5", odIn:"36.5", odMm:"926", td32:"18", tdMm:"23", mlSlbs:"7385", mlSpsi:"131", mlSkg:"3350", mlSkpa:"900", mlDlbs:"6779", mlDpsi:"131", mlDkg:"3075", mlDkpa:"900", liss:"150/147K ", smartway:false, ms:true, "3PMSF":true },
        { size:"315/80R22.5", ply:"18", rimW:"9", secW:"12.4", odIn:"42.9", odMm:"1090", td32:"21", tdMm:"27", mlSlbs:"8818", mlSpsi:"123", mlSkg:"4000", mlSkpa:"850", mlDlbs:"7385", mlDpsi:"123", mlDkg:"3350", mlDkpa:"850", liss:"156/150L", smartway:false, ms:true, "3PMSF":true },
    ],
    tireImage:    "/tires/Tire-Photos/Neo-Allroads-D+.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/Neo-Allroads-D+.png",
    },
  },

  // ─── Neo Allroads D3 ───────────────────────────────────
  {
    slug:     "neo-allroads-d3",
    name:     "Neo Allroads D3",
    segment:  "Premium Regional",
    position: "Drive" as TirePosition,
    subtitle: "Durable drive tire for heavy trucks offering high mileage and strong performance.",
    bullets: [
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"11R24.5", ply:"16", rimW:"8.25", secW:"11.5", odIn:"43.6", odMm:"1107", td32:"23", tdMm:"29", mlSlbs:"7165", mlSpsi:"120", mlSkg:"3250", mlSkpa:"830", mlDlbs:"6614", mlDpsi:"120", mlDkg:"3000", mlDkpa:"830", liss:"149/146L", smartway:false, ms:true, "3PMSF":false },
        { size:"11R22.5", ply:"16", rimW:"7.5", secW:"11.1", odIn:"42", odMm:"1068", td32:"23", tdMm:"28", mlSlbs:"6614", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"6008", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"148/145L", smartway:false, ms:true, "3PMSF":false },
    ],
    tireImage:    placeholderPhoto,
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    placeholderPhoto,
    },
  },

  // ─── Neo Allroads T2 ───────────────────────────────────
  {
    slug:     "neo-allroads-t2",
    name:     "Neo Allroads T2",
    segment:  "Premium Regional",
    position: "Trailer" as TirePosition,
    subtitle: "Regional trailer tire with long lifespan, quiet rideand reliable handling.",
    bullets: [
      "Trailer position tire designed for drop axle and smaller trailer applications in regional applications",
      "Wide, deep tread provides excellent mileage, reducing operating costs",
      "Variable tread block size reduces noise, increasing driver comfort",
      "Variable pitch groove and stone ejectors reduce stone retention, increasing retreadability",
      "High silica tread compound improves adherence in a wide range of temperatures",
    ],
    features: [
      { title:"Wider Zig-Zag Grooves with Deeper Tread", body:"The wider zig-zag groove design with deep tread enhances mileage, tractionand stone rejection while providing superior tear resistance and water evacuation for consistent regional performance.", image:"/tires/Feature-Images/Neo-Allroads-T2-f1.jpg" },
      { title:"Optimized Pitch Design", body:"An optimized tread pitch layout minimizes road noise, improves driving comfortand promotes even wear across the tread surface, extending tire life and ride quality.", image:"/tires/Feature-Images/Neo-Allroads-T2-f2.jpg" },
      { title:"High-Silica Compound with Full Rubberized Cord", body:"The high-silica tread compound combined with a fully rubberized cord structure reduces rolling resistance and heat generation, delivering better structural integrity, fatigue resistanceand long-term durability.", image:"/tires/Feature-Images/compound-img.jpg" },
    ],
    specRows: [
        { size:"215/75R17.5", ply:"18", rimW:"6", secW:"8.6", odIn:"29.9", odMm:"760", td32:"13", tdMm:"16", mlSlbs:"4806", mlSpsi:"123", mlSkg:"2180", mlSkpa:"850", mlDlbs:"4542", mlDpsi:"123", mlDkg:"2060", mlDkpa:"850", liss:"136/134J", smartway:false, ms:true, "3PMSF":true },
        { size:"235/75R17.5", ply:"18", rimW:"6.75", secW:"9.3", odIn:"31.2", odMm:"792", td32:"13", tdMm:"16", mlSlbs:"6008", mlSpsi:"127", mlSkg:"2725", mlSkpa:"875", mlDlbs:"5677", mlDpsi:"127", mlDkg:"2575", mlDkpa:"875", liss:"143/141J", smartway:false, ms:true, "3PMSF":true },
        { size:"245/70R17.5", ply:"18", rimW:"7.5", secW:"9.9", odIn:"30.8", odMm:"783", td32:"11", tdMm:"14", mlSlbs:"6008", mlSpsi:"127", mlSkg:"2725", mlSkpa:"875", mlDlbs:"5677", mlDpsi:"127", mlDkg:"2575", mlDkpa:"875", liss:"143/141J", smartway:false, ms:true, "3PMSF":true },
        { size:"265/70R19.5", ply:"18", rimW:"7.5", secW:"10.3", odIn:"34.1", odMm:"867", td32:"13", tdMm:"16", mlSlbs:"6008", mlSpsi:"123", mlSkg:"2725", mlSkpa:"850", mlDlbs:"5677", mlDpsi:"123", mlDkg:"2575", mlDkpa:"850", liss:"143/141J", smartway:false, ms:true, "3PMSF":false },
        { size:"285/70R19.5", ply:"18", rimW:"8.25", secW:"11", odIn:"35.1", odMm:"891", td32:"15", tdMm:"18", mlSlbs:"7385", mlSpsi:"131", mlSkg:"3350", mlSkpa:"900", mlDlbs:"6945", mlDpsi:"131", mlDkg:"3150", mlDkpa:"900", liss:"150/148J", smartway:false, ms:true, "3PMSF":true },
        { size:"385/55R22.5", ply:"24", rimW:"12.25", secW:"15.11811023622047", odIn:"39.4703937007874", odMm:"1002.548", td32:"16", tdMm:"20", mlSlbs:"11023", mlSpsi:"131", mlSkg:"5000", mlSkpa:"900", mlDlbs:"", mlDpsi:"", mlDkg:"", mlDkpa:"", liss:"164K", smartway:false, ms:true, "3PMSF":false },
        { size:"385/65R22.5", ply:"20", rimW:"11.75", secW:"15.3", odIn:"42.1", odMm:"1068", td32:"17", tdMm:"21", mlSlbs:"11023", mlSpsi:"131", mlSkg:"5000", mlSkpa:"900", mlDlbs:"", mlDpsi:"", mlDkg:"", mlDkpa:"", liss:"164K", smartway:false, ms:true, "3PMSF":false },
        { size:"425/65R22.5", ply:"20", rimW:"13", secW:"16.3", odIn:"44.1", odMm:"1119", td32:"17", tdMm:"21", mlSlbs:"11354", mlSpsi:"120", mlSkg:"5150", mlSkpa:"825", mlDlbs:"", mlDpsi:"", mlDkg:"", mlDkpa:"", liss:"165K", smartway:false, ms:true, "3PMSF":true },
        { size:"445/65R22.5", ply:"20", rimW:"13", secW:"17.3", odIn:"45.1", odMm:"1146", td32:"17", tdMm:"21", mlSlbs:"12787", mlSpsi:"131", mlSkg:"5800", mlSkpa:"900", mlDlbs:"", mlDpsi:"", mlDkg:"", mlDkpa:"", liss:"169K", smartway:false, ms:true, "3PMSF":true },
    ],
    tireImage:    "/tires/Tire-Photos/Neo-Allroads-T2.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/Neo-Allroads-T2.png",
    },
  },

  // ─── Neo Allroads T3 ───────────────────────────────────
  {
    slug:     "neo-allroads-t3",
    name:     "Neo Allroads T3",
    segment:  "Premium Regional",
    position: "Trailer" as TirePosition,
    subtitle: "Third-generation all-roads trailer tire for long service life and consistent regional performance.",
    bullets: [
      "Trailer position tire for regional mixed-service applications",
      "Wide, deep tread design maximises mileage, reducing total cost of ownership",
      "Zig-zag groove pattern with stone ejectors prevents stone retention and improves casing retreadability",
      "M+S rated tread compound provides reliable traction across a range of road and weather conditions",
      "High silica compound lowers rolling resistance for improved fuel economy",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
      { size:"11R22.5", ply:"16", rimW:"8.25", secW:"10.9", odIn:"41.3", odMm:"1050", td32:"15", tdMm:"19", mlSlbs:"6614", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"6008", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"148/145L", smartway:false, ms:true, "3PMSF":false },
    ],
    tireImage:    placeholderPhoto,
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    placeholderPhoto,
    },
  },

  // ─── ASR79 ─────────────────────────────────────────────
  {
    slug:     "asr79",
    name:     "ASR79",
    segment:  "Premium Regional",
    position: "Steer" as TirePosition,
    subtitle: "Durable tire with strong grip, even wearand reliable performance in all conditions.",
    bullets: [
      "Steer position tire for regional applications",
      "4 groove longitudinal design improves handling and reduces braking distances in low adherence conditions",
      "Shoulder rib design provides equal weight distribution across the contact patch, improving wear and reducing operating costs",
      "Groove bottom stone ejectors reduce stone retention, increasing retreadability",
      "Wide tread combined with functional sipes and deeper grooves improve mileage, reducing lowering costs",
      "High silica tread compound improves adherence in a wide range of temperatures",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"10R22.5", ply:"16", rimW:"7.5", secW:"9.8", odIn:"40.2", odMm:"1022", td32:"15", tdMm:"19", mlSlbs:"6173", mlSpsi:"131", mlSkg:"2800", mlSkpa:"900", mlDlbs:"5842", mlDpsi:"131", mlDkg:"2650", mlDkpa:"900", liss:"144/142M", smartway:false, ms:true, "3PMSF":true },
        { size:"11R22.5", ply:"16", rimW:"8.25", secW:"11", odIn:"41.4", odMm:"1051", td32:"15", tdMm:"19", mlSlbs:"6614", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"6008", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"146/143M", smartway:false, ms:true, "3PMSF":true },
        { size:"12R22.5", ply:"18", rimW:"9", secW:"11.9", odIn:"42.7", odMm:"1085", td32:"17", tdMm:"21", mlSlbs:"7826", mlSpsi:"135", mlSkg:"3550", mlSkpa:"930", mlDlbs:"7165", mlDpsi:"135", mlDkg:"3250", mlDkpa:"930", liss:"152/149M", smartway:false, ms:true, "3PMSF":true },
        { size:"255/70R22.5", ply:"16", rimW:"7.5", secW:"10", odIn:"36.6", odMm:"930", td32:"15", tdMm:"19", mlSlbs:"5512", mlSpsi:"120", mlSkg:"2500", mlSkpa:"830", mlDlbs:"5071", mlDpsi:"120", mlDkg:"2300", mlDkpa:"830", liss:"140/137M", smartway:false, ms:true, "3PMSF":true },
        { size:"275/70R22.5", ply:"18", rimW:"8.25", secW:"10.8", odIn:"38", odMm:"964", td32:"15", tdMm:"19", mlSlbs:"6945", mlSpsi:"131", mlSkg:"3150", mlSkpa:"900", mlDlbs:"6393", mlDpsi:"131", mlDkg:"2900", mlDkpa:"900", liss:"148/145M", smartway:false, ms:true, "3PMSF":true },
        { size:"245/70R19.5", ply:"18", rimW:"7.5", secW:"9.8", odIn:"33.5", odMm:"850", td32:"15", tdMm:"19", mlSlbs:"6173", mlSpsi:"131", mlSkg:"2800", mlSkpa:"900", mlDlbs:"5842", mlDpsi:"131", mlDkg:"2650", mlDkpa:"900", liss:"144/142J", smartway:false, ms:true, "3PMSF":true },
        { size:"265/70R19.5", ply:"16", rimW:"7.5", secW:"10.2", odIn:"34.1", odMm:"866", td32:"13", tdMm:"16", mlSlbs:"6008", mlSpsi:"120", mlSkg:"2725", mlSkpa:"830", mlDlbs:"5677", mlDpsi:"120", mlDkg:"2575", mlDkpa:"830", liss:"143/141J", smartway:false, ms:true, "3PMSF":false },
    ],
    tireImage:    "/tires/Tire-Photos/ASR79.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/ASR79.png",
    },
  },

  // ─── ADR78 ─────────────────────────────────────────────
  {
    slug:     "adr78",
    name:     "ADR78",
    segment:  "Premium Regional",
    position: "Drive" as TirePosition,
    subtitle: "Drive tire for regional and long haul with deep grooves, optimized tread, even wear, low noise.",
    bullets: [
      "Drive position tire for small cargo vans operating in regional and urban applications",
      "Buttressed block design and optimized shoulder design provides even wear, improving mileage and reducing operating costs",
      "Variable tread block size reduces noise, increasing driver comfort",
      "Optimized shoulder design provides even wear and increased mileage, reducing operating cost",
      "Dual tread compound improves wear while reducing operating temperatures, extending casing life",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"12R22.5", ply:"18", rimW:"9", secW:"11.9", odIn:"43.1", odMm:"1096", td32:"23", tdMm:"28.3", mlSlbs:"7826", mlSpsi:"135", mlSkg:"3550", mlSkpa:"930", mlDlbs:"7165", mlDpsi:"135", mlDkg:"3250", mlDkpa:"930", liss:"152/149M", smartway:false, ms:true, "3PMSF":false },
        { size:"245/70R19.5", ply:"18", rimW:"7.5", secW:"9.8", odIn:"33.7", odMm:"855", td32:"17", tdMm:"21.4", mlSlbs:"6173", mlSpsi:"131", mlSkg:"2800", mlSkpa:"900", mlDlbs:"5842", mlDpsi:"131", mlDkg:"2650", mlDkpa:"900", liss:"144/142J", smartway:false, ms:true, "3PMSF":true },
    ],
    tireImage:    "/tires/Tire-Photos/ADR78.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/ADR78.png",
    },
  },

  // ─── Neo Construct D ───────────────────────────────────
  {
    slug:     "neo-construct-d",
    name:     "Neo Construct D",
    segment:  "Premium On/Off Road",
    position: "Drive" as TirePosition,
    subtitle: "Truck tire with self-cleaning pattern, deep grooves, heavy-load capability, uniform wear, long-lasting.",
    bullets: [
      "Drive tire for On/ Off road applications",
      "Deep, open shoulder tread pattern provides excellent traction, improving productivity",
      "Buttressed tread blocks ensure even wear, reducing operating costs",
      "Cut and chip resistant compound reduces penetrations and down time, improving productivity",
      "Increased load capacity when used in off road applications, increasing fleet efficiency",
      "Dual tread compound improves wear while reducing operating temperatures, extending casing life",
    ],
    features: [
      { title:"Non-Directional Tread Design", body:"A newly developed tread block pitch sequence with wider zig-zag grooves delivers longer mileage, even wearand strong traction. It also enhances water evacuation, stone rejectionand handling stability without compromising grip.", image:"/tires/Feature-Images/Neo-Construct-D-f1.jpg" },
      { title:"Optimized Footprint & Shoulder", body:"Balanced footprint and reinforced shoulder structure enhance wear resistance, promote even wearand improve driving stability under heavy loads.", image:"/tires/Feature-Images/Neo-Construct-D-f2.jpg" },
      { title:"On/Off-Road Compound", body:"Specially formulated tread compound enhances puncture resistance and durability, ensuring consistent performance and reliability across construction and off-road environments.", image:"/tires/Feature-Images/on-off-road-compound.jpg" },
    ],
    specRows: [
        { size:"11R22.5", ply:"16", rimW:"8.25", secW:"10.8", odIn:"42.1", odMm:"1068", td32:"25", tdMm:"31", mlSlbs:"6614", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"6008", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"146/143L", smartway:false, ms:true, "3PMSF":false },
        { size:"11R24.5", ply:"16", rimW:"8.25", secW:"11.4", odIn:"43.6", odMm:"1108", td32:"23", tdMm:"29", mlSlbs:"7165", mlSpsi:"120", mlSkg:"3250", mlSkpa:"830", mlDlbs:"6614", mlDpsi:"120", mlDkg:"3000", mlDkpa:"830", liss:"149/146L", smartway:false, ms:true, "3PMSF":false },
        { size:"12R22.5", ply:"18", rimW:"9", secW:"11.9", odIn:"43.2", odMm:"1096", td32:"24", tdMm:"30", mlSlbs:"7826", mlSpsi:"135", mlSkg:"3550", mlSkpa:"930", mlDlbs:"7165", mlDpsi:"135", mlDkg:"3250", mlDkpa:"930", liss:"152/149L", smartway:false, ms:true, "3PMSF":false },
        { size:"13R22.5", ply:"18", rimW:"9.75", secW:"12.7", odIn:"44.6", odMm:"1132", td32:"22", tdMm:"28", mlSlbs:"8818", mlSpsi:"127", mlSkg:"4000", mlSkpa:"875", mlDlbs:"7385", mlDpsi:"127", mlDkg:"3350", mlDkpa:"875", liss:"156/150K", smartway:false, ms:true, "3PMSF":true },
        { size:"315/80R22.5", ply:"18", rimW:"9", secW:"12.4", odIn:"43.1", odMm:"1095", td32:"23", tdMm:"29", mlSlbs:"8818", mlSpsi:"123", mlSkg:"4000", mlSkpa:"850", mlDlbs:"7385", mlDpsi:"123", mlDkg:"3350", mlDkpa:"850", liss:"156/150K", smartway:false, ms:true, "3PMSF":true },
        { size:"425/65R22.5", ply:"20", rimW:"13", secW:"17", odIn:"44.7", odMm:"1135", td32:"24", tdMm:"30", mlSlbs:"11354", mlSpsi:"120", mlSkg:"5150", mlSkpa:"825", mlDlbs:"", mlDpsi:"", mlDkg:"", mlDkpa:"", liss:"165K", smartway:false, ms:true, "3PMSF":true },
        { size:"315/80R22.5", ply:"22", rimW:"9.75", secW:"12.4", odIn:"43.1", odMm:"1094", td32:"23", tdMm:"29", mlSlbs:"9998", mlSpsi:"131", mlSkg:"4535", mlSkpa:"900", mlDlbs:"9094", mlDpsi:"131", mlDkg:"4125", mlDkpa:"900", liss:"167/164F", smartway:false, ms:true, "3PMSF":false },
        { size:"325/95R24", ply:"22", rimW:"8.5", secW:"12.7", odIn:"48.5", odMm:"1233", td32:"21", tdMm:"26", mlSlbs:"10472", mlSpsi:"123", mlSkg:"4750", mlSkpa:"850", mlDlbs:"9921", mlDpsi:"123", mlDkg:"4500", mlDkpa:"850", liss:"162/160K", smartway:false, ms:true, "3PMSF":false },
    ],
    tireImage:    "/tires/Tire-Photos/Neo-Construct-D.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/Neo-Construct-D.png",
    },
  },

  // ─── Neo Construct G ───────────────────────────────────
  {
    slug:     "neo-construct-g",
    name:     "Neo Construct G",
    segment:  "Premium On/Off Road",
    position: "All Position" as TirePosition,
    subtitle: "Truck tire with interchanging pattern, deep transverse grooves, heavy-load support, uniform wear, long-lasting.",
    bullets: [
      "All position tire for On/ Off road applications",
      "Variable angle grooves and bottom stone ejectors reduce stone retention, increasing retreadability",
      "Cut and chip resistant compound reduces penetrations and down time, improving productivity",
      "Special lateral block design offers better traction and avoids irregular wear, reducing operating cost",
      "Wider tread with deeper grooves improves mileage, reducing operating costs",
      "Increased load capacity when used in off road applications, increasing fleet efficiency",
      "Dual tread compound improves wear while reducing operating temperatures, extending casing life",
    ],
    features: [
      { title:"Non-Directional Tread Design", body:"A newly developed tread block pitch sequence with wider zig-zag grooves delivers longer mileage, even wearand strong traction. It also enhances water evacuation, stone rejectionand handling stability without compromising grip.", image:"/tires/Feature-Images/Neo-Construct-G-f1.jpg" },
      { title:"Reinforced Structure", body:"The new reinforcement design supports higher load capacity, providing greater structural strength and improved driving safety under demanding working conditions.", image:"/tires/Feature-Images/Neo-Construct-G-f2.jpg" },
      { title:"On/Off-Road Compound", body:"Specially formulated tread compound enhances puncture resistance and durability, ensuring consistent performance and reliability across construction and off-road environments.", image:"/tires/Feature-Images/on-off-road-compound.jpg" },
    ],
    specRows: [
        { size:"11R22.5", ply:"16", rimW:"8.25", secW:"10.8", odIn:"41.7", odMm:"1058", td32:"20", tdMm:"25", mlSlbs:"6614", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"6008", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"146/143L", smartway:false, ms:true, "3PMSF":false },
        { size:"11R24.5", ply:"16", rimW:"8.25", secW:"11.4", odIn:"43.3", odMm:"1099", td32:"19", tdMm:"24", mlSlbs:"7165", mlSpsi:"120", mlSkg:"3250", mlSkpa:"830", mlDlbs:"6614", mlDpsi:"120", mlDkg:"3000", mlDkpa:"830", liss:"149/146L", smartway:false, ms:true, "3PMSF":false },
        { size:"13R22.5", ply:"18", rimW:"9.75", secW:"12.7", odIn:"44.3", odMm:"1126", td32:"18", tdMm:"23", mlSlbs:"8818", mlSpsi:"127", mlSkg:"4000", mlSkpa:"875", mlDlbs:"7385", mlDpsi:"127", mlDkg:"3350", mlDkpa:"875", liss:"156/150K ", smartway:false, ms:true, "3PMSF":true },
        { size:"315/80R22.5", ply:"18", rimW:"9", secW:"12.5", odIn:"42.7", odMm:"1084", td32:"17", tdMm:"21", mlSlbs:"9370", mlSpsi:"131", mlSkg:"4250", mlSkpa:"900", mlDlbs:"7385", mlDpsi:"131", mlDkg:"3350", mlDkpa:"900", liss:"158/150K", smartway:false, ms:true, "3PMSF":true },
        { size:"315/80R22.5", ply:"22", rimW:"9.75", secW:"12.5", odIn:"42.7", odMm:"1084", td32:"17", tdMm:"21", mlSlbs:"9998", mlSpsi:"131", mlSkg:"4535", mlSkpa:"900", mlDlbs:"9094", mlDpsi:"131", mlDkg:"4125", mlDkpa:"900", liss:"162/156J", smartway:false, ms:true, "3PMSF":false },
        { size:"325/95R24", ply:"22", rimW:"8.5", secW:"12.7", odIn:"48.4", odMm:"1229", td32:"19", tdMm:"24", mlSlbs:"10472", mlSpsi:"123", mlSkg:"4750", mlSkpa:"850", mlDlbs:"9921", mlDpsi:"123", mlDkg:"4500", mlDkpa:"850", liss:"162/160K", smartway:false, ms:true, "3PMSF":false },
        { size:"425/65R22.5", ply:"20", rimW:"13", secW:"16.5", odIn:"44.3", odMm:"1125", td32:"19", tdMm:"24", mlSlbs:"11354", mlSpsi:"120", mlSkg:"5150", mlSkpa:"825", mlDlbs:"", mlDpsi:"", mlDkg:"", mlDkpa:"", liss:"165K", smartway:false, ms:true, "3PMSF":true },
    ],
    tireImage:    "/tires/Tire-Photos/Aeolus-Neo-Construct-G.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/Aeolus-Neo-Construct-G.png",
    },
  },

  // ─── Neo Winter D ──────────────────────────────────────
  {
    slug:     "neo-winter-d",
    name:     "Neo Winter D",
    segment:  "Premium Winter",
    position: "Drive" as TirePosition,
    subtitle: "Drive axle winter tire with deep 3D sipe tread, 3PMS-rated for severe snow conditions.",
    bullets: [
      "Drive axle tire engineered for severe winter and mixed regional service",
      "High-density transverse 3D groove design delivers excellent grip in snow and low-traction conditions",
      "Special winter compound maintains flexibility in cold temperatures for consistent braking and traction",
      "3PMS designation for severe snow service",
      "High silica content reduces rolling resistance, improving fuel efficiency",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
      { size:"245/70R19.5", ply:"18", rimW:"7.5", secW:"9.9", odIn:"33.7", odMm:"857", td32:"17", tdMm:"21", mlSlbs:"6173", mlSpsi:"131", mlSkg:"2800", mlSkpa:"900", mlDlbs:"5842", mlDpsi:"131", mlDkg:"2650", mlDkpa:"900", liss:"144/142J", smartway:false, ms:true, "3PMSF":true },
      { size:"315/70R22.5", ply:"18", rimW:"9", secW:"12.3", odIn:"40.4", odMm:"1027", td32:"22", tdMm:"27.7", mlSlbs:"8267", mlSpsi:"131", mlSkg:"3750", mlSkpa:"900", mlDlbs:"7385", mlDpsi:"131", mlDkg:"3350", mlDkpa:"900", liss:"154/150L", smartway:false, ms:true, "3PMSF":true },
    ],
    tireImage:    placeholderPhoto,
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    placeholderPhoto,
    },
  },

  // ─── Neo Winter S ──────────────────────────────────────
  {
    slug:     "neo-winter-s",
    name:     "Neo Winter S",
    segment:  "Premium Winter",
    position: "Steer" as TirePosition,
    subtitle: "Enhanced winter performance with innovative tread, strong shouldersand 3PMS traction.",
    bullets: [
      "All position traction tire for regional transit applications",
      "High density transverse 3D groove design for excellent grip in low traction conditions providing improved safety",
      "Four groove tread design improves adherence in low traction conditions",
      "Special tread compound designed to provide excellent traction in cold climates",
      "High silica compound reduces rolling resistance, improving fuel efficiency",
      "3PMS Designation",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"315/80R22.5", ply:"18", rimW:"9", secW:"12.4", odIn:"42.6", odMm:"1081", td32:"17", tdMm:"21", mlSlbs:"9370", mlSpsi:"131", mlSkg:"4250", mlSkpa:"900", mlDlbs:"7385", mlDpsi:"131", mlDkg:"3350", mlDkpa:"900", liss:"158/150L", smartway:false, ms:true, "3PMSF":true },
        { size:"385/55R22.5", ply:"20", rimW:"12.25", secW:"11.8", odIn:"39.3", odMm:"997", td32:"14", tdMm:"17", mlSlbs:"9921", mlSpsi:"131", mlSkg:"4500", mlSkpa:"900", mlDlbs:"", mlDpsi:"", mlDkg:"", mlDkpa:"", liss:"160K", smartway:false, ms:true, "3PMSF":true },
        { size:"12R22.5", ply:"18", rimW:"9", secW:"11.9", odIn:"43.2", odMm:"1096", td32:"24", tdMm:"29.6", mlSlbs:"7826", mlSpsi:"135", mlSkg:"3550", mlSkpa:"930", mlDlbs:"7165", mlDpsi:"135", mlDkg:"3250", mlDkpa:"930", liss:"152/149L", smartway:false, ms:true, "3PMSF":false },
        { size:"13R22.5", ply:"18", rimW:"9.75", secW:"12.7", odIn:"44.6", odMm:"1132", td32:"22", tdMm:"27.7", mlSlbs:"8818", mlSpsi:"127", mlSkg:"4000", mlSkpa:"875", mlDlbs:"7385", mlDpsi:"127", mlDkg:"3350", mlDkpa:"875", liss:"156/150K", smartway:false, ms:true, "3PMSF":true },
        { size:"315/80R22.5", ply:"18", rimW:"9", secW:"12.4", odIn:"43.1", odMm:"1095", td32:"23", tdMm:"29", mlSlbs:"8818", mlSpsi:"123", mlSkg:"4000", mlSkpa:"850", mlDlbs:"7385", mlDpsi:"123", mlDkg:"3350", mlDkpa:"850", liss:"156/150K", smartway:false, ms:true, "3PMSF":true },
        { size:"425/65R22.5", ply:"20", rimW:"13", secW:"17", odIn:"44.7", odMm:"1135", td32:"24", tdMm:"30.2", mlSlbs:"11354", mlSpsi:"120", mlSkg:"5150", mlSkpa:"825", mlDlbs:"", mlDpsi:"", mlDkg:"", mlDkpa:"", liss:"165K", smartway:false, ms:true, "3PMSF":true },
    ],
    tireImage:    "/tires/Tire-Photos/Neo-Winter-S.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/Neo-Winter-S.png",
    },
  },

  // ─── Neo Allseason D ───────────────────────────────────
  {
    slug:     "neo-allseason-d",
    name:     "Neo Allseason D",
    segment:  "Premium Winter",
    position: "Drive" as TirePosition,
    subtitle: "Drive axle winter tire with 3D sipes, reinforced casing, high traction, long-lasting.",
    bullets: [
      "Drive axle tire for extreme regional winter conditions",
      "High density transverse 3D groove design for excellent grip in low traction conditions providing improved safety",
      "Special tread compound designed to provide excellent traction in cold climates",
      "High silica compound reduces rolling resistance, improving fuel efficiency",
      "3PMS Designation",
    ],
    features: [
      { title:"Optimized Tread Depth with 3D Groove Design", body:"An optimized tread depth combined with a high-density transverse 3D groove pattern delivers excellent grip on snowy and wet roads while reducing road noise for a smoother, quieter ride.", image:"/tires/Feature-Images/Neo-Allseason-D-f1.jpg" },
      { title:"High-Silica All-Season Compound", body:"The unique tread compound with high silica content maintains flexibility at low temperatures, ensuring reliable traction, lower rolling resistanceand enhanced tread integrity throughout the seasons.", image:"/tires/Feature-Images/compound-img.jpg" },
      { title:"Reinforced Steel Cord & High-Strength Carcass", body:"A fully rubberized steel cord structure and high-strength carcass wire improve puncture resistance, durabilityand overall driving safety under regional operating conditions.", image:"/tires/Feature-Images/Neo-Allseason-D-f3.jpg" },
    ],
    specRows: [
        { size:"11R22.5", ply:"16", rimW:"8.25", secW:"10.9", odIn:"42", odMm:"1066", td32:"23", tdMm:"28.3", mlSlbs:"6614", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"6008", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"146/143M", smartway:false, ms:true, "3PMSF":true },
        { size:"11R24.5", ply:"16", rimW:"8.25", secW:"11.3", odIn:"43.6", odMm:"1107", td32:"23", tdMm:"28.3", mlSlbs:"7165", mlSpsi:"120", mlSkg:"3250", mlSkpa:"830", mlDlbs:"6614", mlDpsi:"120", mlDkg:"3000", mlDkpa:"830", liss:"149/146M", smartway:false, ms:true, "3PMSF":true },
        { size:"11R22.5", ply:"16", rimW:"8.25", secW:"10.8", odIn:"42.1", odMm:"1068", td32:"25", tdMm:"30.9", mlSlbs:"6614", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"6008", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"146/143L", smartway:false, ms:true, "3PMSF":false },
        { size:"11R24.5", ply:"16", rimW:"8.25", secW:"11.4", odIn:"43.6", odMm:"1108", td32:"23", tdMm:"29", mlSlbs:"7165", mlSpsi:"120", mlSkg:"3250", mlSkpa:"830", mlDlbs:"6614", mlDpsi:"120", mlDkg:"3000", mlDkpa:"830", liss:"149/146L", smartway:false, ms:true, "3PMSF":false },
        { size:"12R22.5", ply:"18", rimW:"9", secW:"11.9", odIn:"43.2", odMm:"1096", td32:"24", tdMm:"29.6", mlSlbs:"7826", mlSpsi:"135", mlSkg:"3550", mlSkpa:"930", mlDlbs:"7165", mlDpsi:"135", mlDkg:"3250", mlDkpa:"930", liss:"152/149L", smartway:false, ms:true, "3PMSF":false },
        { size:"13R22.5", ply:"18", rimW:"9.75", secW:"12.7", odIn:"44.6", odMm:"1132", td32:"22", tdMm:"27.7", mlSlbs:"8818", mlSpsi:"127", mlSkg:"4000", mlSkpa:"875", mlDlbs:"7385", mlDpsi:"127", mlDkg:"3350", mlDkpa:"875", liss:"156/150K", smartway:false, ms:true, "3PMSF":true },
        { size:"315/80R22.5", ply:"18", rimW:"9", secW:"12.4", odIn:"43.1", odMm:"1095", td32:"23", tdMm:"29", mlSlbs:"8818", mlSpsi:"123", mlSkg:"4000", mlSkpa:"850", mlDlbs:"7385", mlDpsi:"123", mlDkg:"3350", mlDkpa:"850", liss:"156/150K", smartway:false, ms:true, "3PMSF":true },
        { size:"425/65R22.5", ply:"20", rimW:"13", secW:"17", odIn:"44.7", odMm:"1135", td32:"24", tdMm:"30.2", mlSlbs:"11354", mlSpsi:"120", mlSkg:"5150", mlSkpa:"825", mlDlbs:"", mlDpsi:"", mlDkg:"", mlDkpa:"", liss:"165K", smartway:false, ms:true, "3PMSF":true },
    ],
    tireImage:    "/tires/Tire-Photos/Neo-Allseason-D.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/Neo-Allseason-D.png",
    },
  },

  // ─── Neo Icedrive ──────────────────────────────────────
  {
    slug:     "neo-icedrive",
    name:     "Neo Icedrive",
    segment:  "Premium Winter",
    position: "Drive" as TirePosition,
    subtitle: "Dedicated ice and winter drive tire with deep sipe density and 3PMS certification.",
    bullets: [
      "Drive axle tire purpose-built for ice and severe winter conditions",
      "Ultra-high sipe density maximises biting edges for superior grip on ice and compacted snow",
      "Special ice-formulated compound remains pliable at extreme low temperatures for consistent traction",
      "3PMS designation for severe snow service",
      "Reinforced shoulder design resists irregular wear common in stop-and-go winter operations",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
      { size:"11R22.5",    ply:"18", rimW:"8.25", secW:"11.1", odIn:"42",   odMm:"1068", td32:"22", tdMm:"28",   mlSlbs:"6945", mlSpsi:"123", mlSkg:"3150", mlSkpa:"850", mlDlbs:"6393", mlDpsi:"123", mlDkg:"2900", mlDkpa:"850", liss:"148/145J", smartway:false, ms:true, "3PMSF":true },
      { size:"245/70R19.5",ply:"16", rimW:"7.5",  secW:"9.8",  odIn:"33.7", odMm:"856",  td32:"20", tdMm:"25",   mlSlbs:"4938", mlSpsi:"120", mlSkg:"2240", mlSkpa:"830", mlDlbs:"4674", mlDpsi:"120", mlDkg:"2120", mlDkpa:"830", liss:"136/134J", smartway:false, ms:true, "3PMSF":true },
      { size:"225/80R17.5",ply:"14", rimW:"6.75", secW:"9.1",  odIn:"31.9", odMm:"809",  td32:"16", tdMm:"19.5", mlSlbs:"3417", mlSpsi:"110", mlSkg:"1550", mlSkpa:"760", mlDlbs:"3307", mlDpsi:"110", mlDkg:"1500", mlDkpa:"760", liss:"123/122L", smartway:false, ms:true, "3PMSF":true },
    ],
    tireImage:    placeholderPhoto,
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    placeholderPhoto,
    },
  },

  // ─── Neo Urban G ───────────────────────────────────────
  {
    slug:     "neo-urban-g",
    name:     "Neo Urban G",
    segment:  "Premium Urban",
    position: "Bus" as TirePosition,
    subtitle: "High-mileage urban bus tire with strong casing, heat controland durability.",
    bullets: [
      "All position tire suitable for urban transit applications",
      "Deep tread for improved mileage, reduces operating costs",
      "4 groove tread pattern improves traction and adherence for increased safety",
      "Special S groove design reduces heat generation, extending casing life and improving retreadability",
      "Specially designed sidewall reduces damage from curbing, extending casing life",
      "High silica compound reduces rolling resistance, improving fuel efficiency",
    ],
    features: [
      { title:"Non-Directional Tread Design", body:"New tread block pitch sequence provides higher mileage, better tractionand lower rolling resistance with uniform wear for long urban service life.", image:"/tires/Feature-Images/Neo-Urban-G-f1.jpg" },
      { title:"Advanced 3D Sipe Technology", body:"3D sipes in central and shoulder blocks enhance snow traction, comfortand handling in dry and wet roads, while ensuring regular wear and low rolling resistance.", image:"/tires/Feature-Images/Neo-Urban-G-f2.jpg" },
      { title:"Wide Zig-Zag Grooves", body:"Wider groove geometry ensures effective stone ejection, tear resistanceand excellent water evacuation under frequent braking and stop-and-go conditions.", image:"/tires/Feature-Images/Neo-Urban-G-f3.jpg" },
    ],
    specRows: [
        { size:"275/70R22.5", ply:"18", rimW:"8.25", secW:"11.1", odIn:"38", odMm:"966", td32:"18", tdMm:"22.7", mlSlbs:"7385", mlSpsi:"131", mlSkg:"3350", mlSkpa:"900", mlDlbs:"6945", mlDpsi:"131", mlDkg:"3150", mlDkpa:"900", liss:"150/148J", smartway:false, ms:true, "3PMSF":true },
        { size:"305/70R22.5", ply:"20", rimW:"9", secW:"12.1", odIn:"39.3", odMm:"998", td32:"19", tdMm:"23.9", mlSlbs:"7826", mlSpsi:"131", mlSkg:"3550", mlSkpa:"900", mlDlbs:"7385", mlDpsi:"131", mlDkg:"3350", mlDkpa:"900", liss:"152/150L", smartway:false, ms:true, "3PMSF":true },
    ],
    tireImage:    "/tires/Tire-Photos/Neo-Urban-G.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/Neo-Urban-G.png",
    },
  },

  // ─── Neo Urban D ───────────────────────────────────────
  {
    slug:     "neo-urban-d",
    name:     "Neo Urban D",
    segment:  "Premium Urban",
    position: "Drive" as TirePosition,
    subtitle: "Urban drive tire with deep tread, 3PMS rating and superior traction for city fleets.",
    bullets: [
      "Drive axle tire designed for urban transit, distribution and city bus applications",
      "Deep tread with wide zig-zag grooves delivers high mileage and effective stone ejection",
      "3D sipe technology enhances traction in wet and light winter conditions",
      "3PMS designation for year-round urban operation",
      "Specially designed sidewall protects against curbing damage, extending casing life",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
      { size:"11R22.5",   ply:"16", rimW:"8.25", secW:"10.9", odIn:"41.7", odMm:"1060", td32:"21", tdMm:"26",   mlSlbs:"6614", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"6008", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"146/143J", smartway:false, ms:true, "3PMSF":true },
      { size:"275/70R22.5",ply:"18", rimW:"8.25", secW:"11.2", odIn:"38.2", odMm:"971",  td32:"21", tdMm:"25.8", mlSlbs:"6945", mlSpsi:"131", mlSkg:"3150", mlSkpa:"900", mlDlbs:"6393", mlDpsi:"131", mlDkg:"2900", mlDkpa:"900", liss:"148/145J", smartway:false, ms:true, "3PMSF":true },
    ],
    tireImage:    placeholderPhoto,
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    placeholderPhoto,
    },
  },

  // ─── ASL06 ─────────────────────────────────────────────
  {
    slug:     "asl06",
    name:     "ASL06",
    segment:  "Standard Long Haul",
    position: "Steer" as TirePosition,
    subtitle: "Steer bus tire with heat-dissipating grooves, high silica, durable sidewall protection.",
    bullets: [
      "Steer position tire for long haul applications",
      "Deeper tread for improved mileage, reducing operating costs",
      "4 groove tread pattern improves traction and adherence for increased safety",
      "Special S groove design reduces heat generation, extending casing life and improving retreadability",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"11R22.5", ply:"16", rimW:"8.25", secW:"10.9", odIn:"41.4", odMm:"1051", td32:"15", tdMm:"19", mlSlbs:"6614", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"6008", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"146/143M", smartway:false, ms:false, "3PMSF":false },
    ],
    tireImage:    "/tires/Tire-Photos/ASL06.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/ASL06.png",
    },
  },

  // ─── ASL01 ─────────────────────────────────────────────
  {
    slug:     "asl01",
    name:     "ASL01",
    segment:  "",
    position: "Steer" as TirePosition,
    subtitle: "",
    bullets: [
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"295/60R22.5", ply:"18", rimW:"9", secW:"11.5", odIn:"37.5", odMm:"952", td32:"16", tdMm:"20", mlSlbs:"7385", mlSpsi:"131", mlSkg:"3350", mlSkpa:"900", mlDlbs:"6779", mlDpsi:"131", mlDkg:"3075", mlDkpa:"900", liss:"150/147K", smartway:false, ms:true, "3PMSF":false },
    ],
    tireImage:    placeholderPhoto,
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    placeholderPhoto,
    },
  },

  // ─── ADL58 ─────────────────────────────────────────────
  {
    slug:     "adl58",
    name:     "ADL58",
    segment:  "Standard Long Haul",
    position: "Drive" as TirePosition,
    subtitle: "Drive tire for long haul with excellent mileage, even wearand high retreadability performance.",
    bullets: [
      "Drive position tire for long haul applications",
      "5 rib design and optimized tread patter provide excellent mileage, reducing operating cost",
      "Deep tread provides improved traction in wet conditions",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"11R22.5", ply:"16", rimW:"8.25", secW:"11", odIn:"42", odMm:"1066", td32:"21", tdMm:"26", mlSlbs:"6614", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"6008", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"146/143L", smartway:false, ms:true, "3PMSF":false },
        { size:"11R24.5", ply:"16", rimW:"8.25", secW:"11.1", odIn:"43.5", odMm:"1104", td32:"21", tdMm:"26", mlSlbs:"7165", mlSpsi:"120", mlSkg:"3250", mlSkpa:"830", mlDlbs:"6614", mlDpsi:"120", mlDkg:"3000", mlDkpa:"830", liss:"149/146L", smartway:false, ms:true, "3PMSF":false },
        { size:"295/75R22.5", ply:"14", rimW:"8.25", secW:"11.6", odIn:"40.2", odMm:"1022", td32:"21", tdMm:"26", mlSlbs:"6173", mlSpsi:"110", mlSkg:"2800", mlSkpa:"760", mlDlbs:"5677", mlDpsi:"110", mlDkg:"2575", mlDkpa:"760", liss:"144/141M", smartway:false, ms:true, "3PMSF":false },
    ],
    tireImage:    "/tires/Tire-Photos/ADL58.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/ADL58.png",
    },
  },

  // ─── ATL08 ─────────────────────────────────────────────
  {
    slug:     "atl08",
    name:     "ATL08",
    segment:  "Standard Long Haul",
    position: "Trailer" as TirePosition,
    subtitle: "Shallow-tread trailer tire for long distances, excellent water evacuation, low noise, efficiency.",
    bullets: [
      "Shallow tread trailer tire for long haul applications",
      "Provides excellent handling for increased driver comfort, reducing fatigue",
      "Full depth longitudinal grooves for improved adherence, improving safety",
      "Low rolling resistance tread design improves fuel economy, reducing operating cost",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"285/75R24.5", ply:"14", rimW:"8.25", secW:"8.6", odIn:"40.9", odMm:"1039", td32:"11", tdMm:"13.9", mlSlbs:"6173", mlSpsi:"110", mlSkg:"2800", mlSkpa:"760", mlDlbs:"5677", mlDpsi:"110", mlDkg:"2575", mlDkpa:"760", liss:"144/141M", smartway:false, ms:false, "3PMSF":false },
    ],
    tireImage:    "/tires/Tire-Photos/ATL08.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/ATL08.png",
    },
  },

  // ─── ATR65 ─────────────────────────────────────────────
  {
    slug:     "atr65",
    name:     "ATR65",
    segment:  "Standard Regional",
    position: "Trailer" as TirePosition,
    subtitle: "Wide-base trailer tire with 3PMS rating, designed for regional and super-regional fleets.",
    bullets: [
      "All-position trailer tire for regional and super-regional applications",
      "Wide-base single sizes reduce axle weight and improve fuel efficiency",
      "3PMS designation ensures performance in severe winter conditions",
      "M+S rated for year-round traction on mixed road surfaces",
      "Deep tread depth extends service life and improves cost-per-kilometre",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
      { size:"385/55R19.5", ply:"18", rimW:"12.25", secW:"15.1", odIn:"36.4", odMm:"925",  td32:"15", tdMm:"19", mlSlbs:"8818", mlSpsi:"131", mlSkg:"4000", mlSkpa:"900", mlDlbs:"", mlDpsi:"", mlDkg:"", mlDkpa:"", liss:"156J",  smartway:false, ms:true, "3PMSF":true },
      { size:"385/65R22.5", ply:"20", rimW:"11.75", secW:"15.1", odIn:"42",   odMm:"1068", td32:"17", tdMm:"21", mlSlbs:"9921", mlSpsi:"131", mlSkg:"4500", mlSkpa:"900", mlDlbs:"", mlDpsi:"", mlDkg:"", mlDkpa:"", liss:"160K", smartway:false, ms:true, "3PMSF":true },
    ],
    tireImage:    placeholderPhoto,
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    placeholderPhoto,
    },
  },

  // ─── ASR30 ─────────────────────────────────────────────
  {
    slug:     "asr30",
    name:     "ASR30",
    segment:  "Standard Regional",
    position: "All Position" as TirePosition,
    subtitle: "Steer and trailer tire for regional use with excellent wet weather performance.",
    bullets: [
      "Suitable for steer and axle positions in regional applications",
      "Low profile design for oversized and high volume loads for improved fleet efficiency",
      "Deep tread design provides improved adherence in low traction conditions",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"11R22.5", ply:"16", rimW:"8.25", secW:"11.1", odIn:"41.6", odMm:"1055", td32:"16", tdMm:"20.2", mlSlbs:"6614", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"6008", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"146/143M", smartway:false, ms:false, "3PMSF":false },
        { size:"255/70R22.5", ply:"16", rimW:"7.5", secW:"10.1", odIn:"36.5", odMm:"928", td32:"15", tdMm:"18.3", mlSlbs:"5512", mlSpsi:"120", mlSkg:"2500", mlSkpa:"830", mlDlbs:"5071", mlDpsi:"120", mlDkg:"2300", mlDkpa:"830", liss:"140/137M", smartway:false, ms:true, "3PMSF":true },
        { size:"275/70R22.5", ply:"18", rimW:"8.25", secW:"10.7", odIn:"37.9", odMm:"963", td32:"15", tdMm:"18.9", mlSlbs:"6945", mlSpsi:"131", mlSkg:"3150", mlSkpa:"900", mlDlbs:"6393", mlDpsi:"131", mlDkg:"2900", mlDkpa:"900", liss:"148/145M", smartway:false, ms:true, "3PMSF":true },
    ],
    tireImage:    "/tires/Tire-Photos/ASR30.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/ASR30.png",
    },
  },

  // ─── ASR35 ─────────────────────────────────────────────
  {
    slug:     "asr35",
    name:     "ASR35",
    segment:  "Standard Regional",
    position: "Steer" as TirePosition,
    subtitle: "Steer tire for last-mile delivery, fully retreadable, cost-effective, reliable regional performance.",
    bullets: [
      "Steer axle tire for regional applications",
      "Designed for use on “Last mile” delivery vehicles",
      "Excellent value and fully retreadable casing lowers operating costs",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"205/75R17.5", ply:"14", rimW:"6", secW:"8", odIn:"29.6", odMm:"752", td32:"13", tdMm:"16.4", mlSlbs:"3527", mlSpsi:"110", mlSkg:"1600", mlSkpa:"760", mlDlbs:"3307", mlDpsi:"110", mlDkg:"1500", mlDkpa:"760", liss:"124/122M", smartway:false, ms:true, "3PMSF":true },
        { size:"215/75R17.5", ply:"18", rimW:"6", secW:"8.4", odIn:"30", odMm:"762", td32:"13", tdMm:"16.4", mlSlbs:"4806", mlSpsi:"120", mlSkg:"2180", mlSkpa:"830", mlDlbs:"4542", mlDpsi:"120", mlDkg:"2060", mlDkpa:"830", liss:"135/133J", smartway:false, ms:true, "3PMSF":true },
        { size:"235/75R17.5", ply:"18", rimW:"6.75", secW:"9.3", odIn:"31.2", odMm:"793", td32:"13", tdMm:"16.4", mlSlbs:"6008", mlSpsi:"120", mlSkg:"2725", mlSkpa:"830", mlDlbs:"5677", mlDpsi:"120", mlDkg:"2575", mlDkpa:"830", liss:"143/141J", smartway:false, ms:true, "3PMSF":true },
    ],
    tireImage:    "/tires/Tire-Photos/ASR35.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/ASR35.png",
    },
  },

  // ─── ASR69 ─────────────────────────────────────────────
  {
    slug:     "asr69",
    name:     "ASR69",
    segment:  "Standard Regional",
    position: "Steer" as TirePosition,
    subtitle: "Steer tire for regional use, low heat, improved casing life, excellent handling.",
    bullets: [
      "Steer axle tire for regional applications",
      "Low rolling resistance tread pattern for improved fuel economy, reducing operating cost",
      "Low heat generation compound improves casing life for increased retreadability",
      "Provides excellent handling for increased driver comfort, reducing fatigue",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"315/70R22.5", ply:"18", rimW:"9", secW:"12.2", odIn:"40", odMm:"1016", td32:"17", tdMm:"20.8", mlSlbs:"8818", mlSpsi:"120", mlSkg:"4000", mlSkpa:"830", mlDlbs:"7385", mlDpsi:"120", mlDkg:"3350", mlDkpa:"830", liss:"156/150L", smartway:false, ms:true, "3PMSF":true },
        { size:"315/80R22.5", ply:"20", rimW:"9", secW:"8.5", odIn:"42.5", odMm:"1080", td32:"17", tdMm:"20.8", mlSlbs:"9094", mlSpsi:"131", mlSkg:"4125", mlSkpa:"900", mlDlbs:"8267", mlDpsi:"131", mlDkg:"3750", mlDkpa:"900", liss:"157/154M", smartway:false, ms:true, "3PMSF":true },
    ],
    tireImage:    "/tires/Tire-Photos/ASR69.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/ASR69.png",
    },
  },

  // ─── ASR65 ─────────────────────────────────────────────
  {
    slug:     "asr65",
    name:     "ASR65",
    segment:  "Standard Regional",
    position: "Steer" as TirePosition,
    subtitle: "Regional steer tire with high mileage, M+S traction and durable, retreadable casing.",
    bullets: [
      "Steer axle tire for regional mixed-service routes",
      "Wide tread with optimised groove geometry provides even wear and extended mileage",
      "M+S rated for reliable traction in wet and light winter conditions",
      "Groove bottom stone ejectors prevent stone retention, protecting casing retreadability",
      "Available in metric and traditional sizes for fleet flexibility",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
      { size:"10R22.5",    ply:"16", rimW:"7.5",  secW:"9.9",  odIn:"40.1", odMm:"1019", td32:"15", tdMm:"18", mlSlbs:"6173", mlSpsi:"131", mlSkg:"2800", mlSkpa:"900", mlDlbs:"5842", mlDpsi:"131", mlDkg:"2650", mlDkpa:"900", liss:"144/142M", smartway:false, ms:true, "3PMSF":false },
      { size:"275/70R22.5",ply:"18", rimW:"8.25", secW:"10.9", odIn:"37.9", odMm:"964",  td32:"15", tdMm:"19", mlSlbs:"6945", mlSpsi:"131", mlSkg:"3150", mlSkpa:"900", mlDlbs:"6393", mlDpsi:"131", mlDkg:"2900", mlDkpa:"900", liss:"148/145M", smartway:false, ms:true, "3PMSF":false },
    ],
    tireImage:    placeholderPhoto,
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    placeholderPhoto,
    },
  },

  // ─── ADR24 ─────────────────────────────────────────────
  {
    slug:     "adr24",
    name:     "ADR24",
    segment:  "Standard Regional",
    position: "Drive" as TirePosition,
    subtitle: "Drive tire for regional use with M+S pattern, good tractionand higher load capacity.",
    bullets: [
      "Drive axle tire suitable for regional applications",
      "M&S designation for improved traction in poor conditions, improving safety",
      "Deep tread provides extended mileage, reducing operating cost",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"12R24.5", ply:"18", rimW:"9", secW:"11.9", odIn:"44.7", odMm:"1135", td32:"21", tdMm:"26", mlSlbs:"8267", mlSpsi:"135", mlSkg:"3750", mlSkpa:"930", mlDlbs:"7606", mlDpsi:"135", mlDkg:"3450", mlDkpa:"930", liss:"154/151M", smartway:false, ms:true, "3PMSF":false },
    ],
    tireImage:    "/tires/Tire-Photos/ADR24.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/ADR24.png",
    },
  },

  // ─── ADR26 ─────────────────────────────────────────────
  {
    slug:     "adr26",
    name:     "ADR26",
    segment:  "Standard Regional",
    position: "Drive" as TirePosition,
    subtitle: "Drive position tire for regional applications, providing high traction and safety in slippery road conditions.",
    bullets: [
      "Drive tire for use in regional applications",
      "Provides excellent handling for increased driver comfort, reducing fatigue",
      "Open shoulder design provides excellent traction on mud and snow",
      "Deep tread provides long mileage, reducing operating cost",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"11R22.5", ply:"16", rimW:"8.25", secW:"11", odIn:"41.8", odMm:"1063", td32:"21", tdMm:"26", mlSlbs:"6945", mlSpsi:"120", mlSkg:"3150", mlSkpa:"830", mlDlbs:"6173", mlDpsi:"120", mlDkg:"2800", mlDkpa:"830", liss:"148/144M", smartway:false, ms:true, "3PMSF":true },
        { size:"11R24.5", ply:"16", rimW:"8.25", secW:"11.1", odIn:"43.5", odMm:"1104", td32:"21", tdMm:"26", mlSlbs:"7165", mlSpsi:"120", mlSkg:"3250", mlSkpa:"830", mlDlbs:"6614", mlDpsi:"120", mlDkg:"3000", mlDkpa:"830", liss:"149/146L", smartway:false, ms:true, "3PMSF":false },
    ],
    tireImage:    "/tires/Tire-Photos/ADR26.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/ADR26.png",
    },
  },

  // ─── ADR35 ─────────────────────────────────────────────
  {
    slug:     "adr35",
    name:     "ADR35",
    segment:  "Standard Regional",
    position: "Drive" as TirePosition,
    subtitle: "Drive tire for highway, regional, urban use with 3PMS for winter traction on last-mile vehicles.",
    bullets: [
      "Drive axle tire for smaller delivery vehicles in regional applications",
      "Provides excellent handling for increased driver comfort, reducing fatigue",
      "M&S designation for improved traction in poor conditions, improving safety",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"205/75R17.5", ply:"14", rimW:"6", secW:"8.2", odIn:"29.8", odMm:"757", td32:"16", tdMm:"20.2", mlSlbs:"3417", mlSpsi:"110", mlSkg:"1550", mlSkpa:"760", mlDlbs:"3197", mlDpsi:"110", mlDkg:"1450", mlDkpa:"760", liss:"124/122M", smartway:false, ms:true, "3PMSF":true },
        { size:"215/75R17.5", ply:"18", rimW:"6", secW:"8.4", odIn:"30.3", odMm:"769", td32:"16", tdMm:"20.2", mlSlbs:"4806", mlSpsi:"120", mlSkg:"2180", mlSkpa:"830", mlDlbs:"4542", mlDpsi:"120", mlDkg:"2060", mlDkpa:"830", liss:"135/133J", smartway:false, ms:true, "3PMSF":true },
        { size:"235/75R17.5", ply:"18", rimW:"6.75", secW:"9.3", odIn:"31.5", odMm:"801", td32:"17", tdMm:"21.4", mlSlbs:"6008", mlSpsi:"131", mlSkg:"2725", mlSkpa:"900", mlDlbs:"5677", mlDpsi:"131", mlDkg:"2575", mlDkpa:"900", liss:"143/141J", smartway:false, ms:true, "3PMSF":true },
        { size:"245/70R17.5", ply:"18", rimW:"7.5", secW:"9.9", odIn:"31.2", odMm:"792", td32:"17", tdMm:"20.8", mlSlbs:"4938", mlSpsi:"131", mlSkg:"2240", mlSkpa:"900", mlDlbs:"4674", mlDpsi:"131", mlDkg:"2120", mlDkpa:"900", liss:"136/134M", smartway:false, ms:true, "3PMSF":true },
    ],
    tireImage:    "/tires/Tire-Photos/ADR35.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/ADR35.png",
    },
  },

  // ─── ADR55 ─────────────────────────────────────────────
  {
    slug:     "adr55",
    name:     "ADR55",
    segment:  "Standard Regional",
    position: "Drive" as TirePosition,
    subtitle: "Drive tire for regional use with 3PMS, excellent winter tractionand low heat for durability.",
    bullets: [
      "Drive axle tire for regional applications",
      "M&S designation for improved traction in poor conditions, improving safety",
      "Provides excellent handling for increased driver comfort, reducing fatigue",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"10R22.5", ply:"16", rimW:"7.5", secW:"10.2", odIn:"40.4", odMm:"1025", td32:"16", tdMm:"19.5", mlSlbs:"6173", mlSpsi:"131", mlSkg:"2800", mlSkpa:"900", mlDlbs:"5842", mlDpsi:"131", mlDkg:"2650", mlDkpa:"900", liss:"144/142M", smartway:false, ms:true, "3PMSF":true },
        { size:"12R22.5", ply:"18", rimW:"9", secW:"11.8", odIn:"42.9", odMm:"1090", td32:"23", tdMm:"29", mlSlbs:"7826", mlSpsi:"135", mlSkg:"3550", mlSkpa:"930", mlDlbs:"7165", mlDpsi:"135", mlDkg:"3250", mlDkpa:"930", liss:"152/149M", smartway:false, ms:true, "3PMSF":true },
        { size:"255/70R22.5", ply:"16", rimW:"7.5", secW:"10", odIn:"36.9", odMm:"936", td32:"20", tdMm:"25.2", mlSlbs:"5512", mlSpsi:"120", mlSkg:"2500", mlSkpa:"830", mlDlbs:"5071", mlDpsi:"120", mlDkg:"2300", mlDkpa:"830", liss:"140/137M", smartway:false, ms:true, "3PMSF":true },
        { size:"275/70R22.5", ply:"18", rimW:"8.25", secW:"10.8", odIn:"38.4", odMm:"975", td32:"20", tdMm:"25.2", mlSlbs:"6945", mlSpsi:"131", mlSkg:"3150", mlSkpa:"900", mlDlbs:"6393", mlDpsi:"131", mlDkg:"2900", mlDkpa:"900", liss:"148/145M", smartway:false, ms:true, "3PMSF":true },
    ],
    tireImage:    "/tires/Tire-Photos/ADR55.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/ADR55.png",
    },
  },

  // ─── ADR69 ─────────────────────────────────────────────
  {
    slug:     "adr69",
    name:     "ADR69",
    segment:  "Standard Regional",
    position: "Drive" as TirePosition,
    subtitle: "Drive tire for regional use with 3PMS tread, excellent tractionand 20-ply load capacity.",
    bullets: [
      "Drive axle tire for regional applications",
      "Provides excellent handling for increased driver comfort, reducing fatigue",
      "M&S designation for improved traction in poor conditions, improving safety",
      "Deep tread design provides increased mileage, reducing operating cost",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"315/70R22.5", ply:"18", rimW:"9", secW:"12.3", odIn:"40.5", odMm:"1029", td32:"23", tdMm:"29", mlSlbs:"7606", mlSpsi:"120", mlSkg:"3450", mlSkpa:"830", mlDlbs:"6945", mlDpsi:"120", mlDkg:"3150", mlDkpa:"830", liss:"152/148M", smartway:false, ms:true, "3PMSF":true },
        { size:"315/80R22.5", ply:"20", rimW:"9", secW:"12.6", odIn:"43.1", odMm:"1094", td32:"23", tdMm:"29", mlSlbs:"9094", mlSpsi:"131", mlSkg:"4125", mlSkpa:"900", mlDlbs:"8267", mlDpsi:"131", mlDkg:"3750", mlDkpa:"900", liss:"157/154M", smartway:false, ms:true, "3PMSF":true },
    ],
    tireImage:    "/tires/Tire-Photos/ADR69.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/ADR69.png",
    },
  },

  // ─── ADR57 ─────────────────────────────────────────────
  {
    slug:     "adr57",
    name:     "ADR57",
    segment:  "Standard Regional",
    position: "Drive" as TirePosition,
    subtitle: "Drive tire for regional use with improved slippery traction, low heatand high-speed performance.",
    bullets: [
      "Drive axle tire for regional applications",
      "M&S designation for improved traction in poor conditions, improving safety",
      "Provides excellent handling for increased driver comfort, reducing fatigue",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"11R22.5", ply:"16", rimW:"8.25", secW:"10.9", odIn:"41.9", odMm:"1063", td32:"21", tdMm:"26", mlSlbs:"6614", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"6008", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"146/143M", smartway:false, ms:true, "3PMSF":false },
        { size:"11R24.5", ply:"16", rimW:"8.25", secW:"11.1", odIn:"43.5", odMm:"1104", td32:"21", tdMm:"26", mlSlbs:"7165", mlSpsi:"120", mlSkg:"3250", mlSkpa:"830", mlDlbs:"6614", mlDpsi:"120", mlDkg:"3000", mlDkpa:"830", liss:"149/146M", smartway:false, ms:true, "3PMSF":false },
    ],
    tireImage:    "/tires/Tire-Photos/ADR57.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/ADR57.png",
    },
  },

  // ─── AGR26 ─────────────────────────────────────────────
  {
    slug:     "agr26",
    name:     "AGR26",
    segment:  "Standard Regional",
    position: "All Position" as TirePosition,
    subtitle: "All-position regional tire with chip-resistant compound, excellent retreadability, durable for trailers.",
    bullets: [
      "All position tire for regional applications",
      "Improved performance in high scrub trailer applications, extending service life and reducing operating cost",
      "Deep tread provides improved mileage, reducing operating cost",
      "Cut and chip resistant compound provides additional protection from punctures, reducing down time",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"11R22.5", ply:"16", rimW:"8.25", secW:"10.9", odIn:"41.6", odMm:"1057", td32:"19", tdMm:"23.3", mlSlbs:"6614", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"6008", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"146/143L", smartway:false, ms:false, "3PMSF":false },
        { size:"11R24.5", ply:"16", rimW:"8.25", secW:"11.4", odIn:"43.3", odMm:"1100", td32:"19", tdMm:"23.3", mlSlbs:"7165", mlSpsi:"120", mlSkg:"3250", mlSkpa:"830", mlDlbs:"6614", mlDpsi:"120", mlDkg:"3000", mlDkpa:"830", liss:"149/146L", smartway:false, ms:false, "3PMSF":false },
        { size:"315/80R22.5", ply:"20", rimW:"9", secW:"12.6", odIn:"42.5", odMm:"1080", td32:"19", tdMm:"23.3", mlSlbs:"10196", mlSpsi:"131", mlSkg:"4625", mlSkpa:"900", mlDlbs:"8267", mlDpsi:"131", mlDkg:"3750", mlDkpa:"900", liss:"161/154K", smartway:false, ms:false, "3PMSF":false },
    ],
    tireImage:    "/tires/Tire-Photos/AGR26.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/AGR26.png",
    },
  },

  // ─── ASL67 ─────────────────────────────────────────────
  {
    slug:     "asl67",
    name:     "ASL67",
    segment:  "Standard Long Haul",
    position: "Steer" as TirePosition,
    subtitle: "Steer tire for long haul with deep tread, excellent traction, SmartWay verified.",
    bullets: [
      "Steer tire designed for long haul application",
      "Excellent road holding characteristics",
      "18/32” tread depth for improved traction and adherence",
      "Smartway verified",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"11R22.5", ply:"16", rimW:"8.25", secW:"11.1", odIn:"41.4", odMm:"1052", td32:"15", tdMm:"19", mlSlbs:"6614", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"6008", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"146/143M", smartway:true, ms:true, "3PMSF":false },
        { size:"11R24.5", ply:"16", rimW:"8.25", secW:"11.3", odIn:"43.1", odMm:"1094", td32:"15", tdMm:"19", mlSlbs:"7165", mlSpsi:"120", mlSkg:"3250", mlSkpa:"830", mlDlbs:"6614", mlDpsi:"120", mlDkg:"3000", mlDkpa:"830", liss:"149/146M", smartway:true, ms:false, "3PMSF":false },
        { size:"295/75R22.5", ply:"14", rimW:"8.25", secW:"11.3", odIn:"39.9", odMm:"1014", td32:"15", tdMm:"19", mlSlbs:"6173", mlSpsi:"110", mlSkg:"2800", mlSkpa:"760", mlDlbs:"5677", mlDpsi:"110", mlDkg:"2575", mlDkpa:"760", liss:"144/141M", smartway:true, ms:false, "3PMSF":false },
    ],
    tireImage:    placeholderPhoto,
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    placeholderPhoto,
    },
  },

  // ─── ADC52 ─────────────────────────────────────────────
  {
    slug:     "adc52",
    name:     "ADC52",
    segment:  "Standard On/Off",
    position: "Drive" as TirePosition,
    subtitle: "Heavy-duty drive tire with reinforced carcass, large blocks, cut-resistant compoundand improved traction.",
    bullets: [
      "Drive tire for On/ Off road applications",
      "Large tread blocks and directional tread design provide excellent traction in adverse conditions",
      "Open shoulder design helps to reduce operating temperatures, extending tire life",
      "Reinforced casing and bead package provides improved protection and increased load carrying capacity in off road applications for improved productivity",
      "Anti cut and chip compound  protects against punctures, reducing down time",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"11R22.5", ply:"16", rimW:"8.25", secW:"11", odIn:"42", odMm:"1068", td32:"24", tdMm:"30.2", mlSlbs:"6614", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"6008", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"146/143K", smartway:false, ms:true, "3PMSF":true },
        { size:"13R22.5", ply:"18", rimW:"9.75", secW:"12.4", odIn:"44.9", odMm:"1141", td32:"24", tdMm:"30.2", mlSlbs:"8267", mlSpsi:"120", mlSkg:"3750", mlSkpa:"830", mlDlbs:"7606", mlDpsi:"120", mlDkg:"3450", mlDkpa:"830", liss:"154/151K", smartway:false, ms:true, "3PMSF":true },
        { size:"315/80R22.5", ply:"20", rimW:"9", secW:"12.5", odIn:"43.1", odMm:"1095", td32:"23", tdMm:"29", mlSlbs:"9094", mlSpsi:"131", mlSkg:"4125", mlSkpa:"900", mlDlbs:"8267", mlDpsi:"131", mlDkg:"3750", mlDkpa:"900", liss:"157/154K", smartway:false, ms:true, "3PMSF":true },
    ],
    tireImage:    "/tires/Tire-Photos/ADC52.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/ADC52.png",
    },
  },

  // ─── ADC53 ─────────────────────────────────────────────
  {
    slug:     "adc53",
    name:     "ADC53",
    segment:  "Standard On/Off",
    position: "Drive" as TirePosition,
    subtitle: "Drive tire with reinforced bead, stronger carcass, optimized tread, excellent traction, even wear, water evacuation.",
    bullets: [
      "Drive axle tire for use in extreme off road conditions",
      "Reinforced bead design increases load capacity for improved productivity",
      "Designed to be 30% stronger than a standard casing to allow for increased capacity, improving productivity.",
      "Optimized tread design provides excellent grip in aggressive or low traction conditions",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"11R22.5", ply:"16", rimW:"8.25", secW:"10.9", odIn:"41.9", odMm:"1065", td32:"23", tdMm:"28.3", mlSlbs:"6614", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"6008", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"146/143L", smartway:false, ms:true, "3PMSF":true },
        { size:"11R24.5", ply:"16", rimW:"8.25", secW:"11.4", odIn:"43.5", odMm:"1106", td32:"23", tdMm:"28.3", mlSlbs:"7165", mlSpsi:"120", mlSkg:"3250", mlSkpa:"830", mlDlbs:"6614", mlDpsi:"120", mlDkg:"3000", mlDkpa:"830", liss:"149/146L", smartway:false, ms:true, "3PMSF":false },
        { size:"12R22.5", ply:"18", rimW:"9", secW:"11.9", odIn:"42.6", odMm:"1082", td32:"20", tdMm:"24.6", mlSlbs:"7826", mlSpsi:"135", mlSkg:"3550", mlSkpa:"930", mlDlbs:"7165", mlDpsi:"135", mlDkg:"3250", mlDkpa:"930", liss:"152/149L", smartway:false, ms:true, "3PMSF":true },
        { size:"13R22.5", ply:"18", rimW:"9.75", secW:"12.5", odIn:"44.4", odMm:"1128", td32:"21", tdMm:"26", mlSlbs:"8267", mlSpsi:"120", mlSkg:"3750", mlSkpa:"830", mlDlbs:"7606", mlDpsi:"120", mlDkg:"3450", mlDkpa:"830", liss:"154/151K", smartway:false, ms:true, "3PMSF":true },
        { size:"275/70R22.5", ply:"18", rimW:"8.25", secW:"10.8", odIn:"38.3", odMm:"972", td32:"21", tdMm:"26", mlSlbs:"6945", mlSpsi:"131", mlSkg:"3150", mlSkpa:"900", mlDlbs:"6393", mlDpsi:"131", mlDkg:"2900", mlDkpa:"900", liss:"148/145L", smartway:false, ms:true, "3PMSF":true },
        { size:"315/80R22.5", ply:"18", rimW:"9", secW:"12.4", odIn:"42.8", odMm:"1088", td32:"20", tdMm:"24.6", mlSlbs:"8267", mlSpsi:"120", mlSkg:"3750", mlSkpa:"830", mlDlbs:"7606", mlDpsi:"120", mlDkg:"3450", mlDkpa:"830", liss:"154/151M", smartway:false, ms:true, "3PMSF":true },
        { size:"315/80R22.5", ply:"20", rimW:"9", secW:"12.5", odIn:"42.8", odMm:"1088", td32:"20", tdMm:"24.6", mlSlbs:"9094", mlSpsi:"131", mlSkg:"4125", mlSkpa:"900", mlDlbs:"8267", mlDpsi:"131", mlDkg:"3750", mlDkpa:"900", liss:"157/154M", smartway:false, ms:true, "3PMSF":true },
    ],
    tireImage:    "/tires/Tire-Photos/ADC53.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/ADC53.png",
    },
  },

  // ─── AGC08 ─────────────────────────────────────────────
  {
    slug:     "agc08",
    name:     "AGC08",
    segment:  "Standard On/Off",
    position: "Trailer" as TirePosition,
    subtitle: "All-position tire for on/off-road use, designed for poor road conditions.",
    bullets: [
      "All position tire best suited to steer and trailer applications in ON/ Off applications",
      "Chip and cut compound provides added protection in poor road conditions, reducing down time",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"11R22.5", ply:"16", rimW:"8.25", secW:"10.9", odIn:"41.5", odMm:"1055", td32:"17", tdMm:"20.8", mlSlbs:"6614", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"6008", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"146/143L", smartway:false, ms:true, "3PMSF":true },
        { size:"11R24.5", ply:"16", rimW:"8.25", secW:"11.4", odIn:"43.1", odMm:"1094", td32:"17", tdMm:"20.8", mlSlbs:"7165", mlSpsi:"120", mlSkg:"3250", mlSkpa:"830", mlDlbs:"6614", mlDpsi:"120", mlDkg:"3000", mlDkpa:"830", liss:"149/146L", smartway:false, ms:false, "3PMSF":false },
        { size:"12R22.5", ply:"18", rimW:"9", secW:"12.1", odIn:"42.4", odMm:"1077", td32:"17", tdMm:"21.4", mlSlbs:"7826", mlSpsi:"135", mlSkg:"3550", mlSkpa:"930", mlDlbs:"7165", mlDpsi:"135", mlDkg:"3250", mlDkpa:"930", liss:"152/149L", smartway:false, ms:true, "3PMSF":true },
        { size:"12R24.5", ply:"18", rimW:"9", secW:"11.9", odIn:"44.4", odMm:"1127", td32:"17", tdMm:"21.4", mlSlbs:"8267", mlSpsi:"135", mlSkg:"3750", mlSkpa:"930", mlDlbs:"7606", mlDpsi:"135", mlDkg:"3450", mlDkpa:"930", liss:"154/151L", smartway:false, ms:false, "3PMSF":false },
        { size:"315/80R22.5", ply:"20", rimW:"9", secW:"12.6", odIn:"42.5", odMm:"1081", td32:"17", tdMm:"20.8", mlSlbs:"9094", mlSpsi:"131", mlSkg:"4125", mlSkpa:"900", mlDlbs:"8267", mlDpsi:"131", mlDkg:"3750", mlDkpa:"900", liss:"161/154K", smartway:false, ms:true, "3PMSF":true },
        { size:"315/80R22.5", ply:"22", rimW:"9", secW:"12.6", odIn:"42.5", odMm:"1081", td32:"17", tdMm:"20.8", mlSlbs:"9998", mlSpsi:"131", mlSkg:"4535", mlSkpa:"900", mlDlbs:"9094", mlDpsi:"131", mlDkg:"4125", mlDkpa:"900", liss:"160/157L", smartway:false, ms:true, "3PMSF":false },
    ],
    tireImage:    "/tires/Tire-Photos/AGC08.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/AGC08.png",
    },
  },

  // ─── AGC28 ─────────────────────────────────────────────
  {
    slug:     "agc28",
    name:     "AGC28",
    segment:  "Standard On/Off",
    position: "Trailer" as TirePosition,
    subtitle: "All-position tire for mixed roads, wide grooves, low heat, high load capacity.",
    bullets: [
      "All position product for mixed road use",
      "Wide groves for good adherence in slippery conditions",
      "Low heat generation and excellent load capacity",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"255/70R22.5", ply:"16", rimW:"7.5", secW:"10.1", odIn:"36.9", odMm:"937", td32:"18", tdMm:"22", mlSlbs:"5512", mlSpsi:"120", mlSkg:"2500", mlSkpa:"830", mlDlbs:"5071", mlDpsi:"120", mlDkg:"2300", mlDkpa:"830", liss:"140/137M", smartway:false, ms:true, "3PMSF":true },
        { size:"275/70R22.5", ply:"18", rimW:"8.25", secW:"10.8", odIn:"38.2", odMm:"970", td32:"18", tdMm:"22", mlSlbs:"6945", mlSpsi:"131", mlSkg:"3150", mlSkpa:"900", mlDlbs:"6393", mlDpsi:"131", mlDkg:"2900", mlDkpa:"900", liss:"148/145M", smartway:false, ms:true, "3PMSF":true },
        { size:"385/55R22.5", ply:"20", rimW:"12.25", secW:"15.11811023622047", odIn:"39.56692913385827", odMm:"1005", td32:"17", tdMm:"21", mlSlbs:"9370", mlSpsi:"131", mlSkg:"4250", mlSkpa:"900", mlDlbs:"", mlDpsi:"", mlDkg:"", mlDkpa:"", liss:"158L", smartway:false, ms:true, "3PMSF":false },
        { size:"385/65R22.5", ply:"20", rimW:"11.75", secW:"15.2", odIn:"42.1", odMm:"1070", td32:"17", tdMm:"21", mlSlbs:"11023", mlSpsi:"131", mlSkg:"5000", mlSkpa:"900", mlDlbs:"", mlDpsi:"", mlDkg:"", mlDkpa:"", liss:"164K", smartway:false, ms:true, "3PMSF":true },
        { size:"425/65R22.5", ply:"20", rimW:"12.25", secW:"16.6", odIn:"44.1", odMm:"1121", td32:"17", tdMm:"21", mlSlbs:"11354", mlSpsi:"120", mlSkg:"5150", mlSkpa:"830", mlDlbs:"", mlDpsi:"", mlDkg:"", mlDkpa:"", liss:"165K", smartway:false, ms:true, "3PMSF":true },
        { size:"445/65R22.5", ply:"20", rimW:"13", secW:"17.5", odIn:"45.2", odMm:"1148", td32:"17", tdMm:"21", mlSlbs:"12787", mlSpsi:"131", mlSkg:"5800", mlSkpa:"900", mlDlbs:"", mlDpsi:"", mlDkg:"", mlDkpa:"", liss:"169K", smartway:false, ms:true, "3PMSF":true },
    ],
    tireImage:    placeholderPhoto,
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    placeholderPhoto,
    },
  },

  // ─── AGM10 ─────────────────────────────────────────────
  {
    slug:     "agm10",
    name:     "AGM10",
    segment:  "Standard Off Road",
    position: "OTR" as TirePosition,
    subtitle: "All-position tire for on/off-road use, open tread, excellent traction on poor surfaces.",
    bullets: [
      "All position tire for Off road applications",
      "Designed for poor road conditions",
      "Large tread block and open groove design provides excellent traction in the most extreme conditions",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"11R22.5", ply:"16", rimW:"8.25", secW:"10.9", odIn:"41.9", odMm:"1065", td32:"22", tdMm:"27.7", mlSlbs:"6614", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"6008", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"146/143G", smartway:false, ms:false, "3PMSF":false },
        { size:"12R22.5", ply:"18", rimW:"9", secW:"12", odIn:"42.8", odMm:"1087", td32:"22", tdMm:"27.1", mlSlbs:"7826", mlSpsi:"135", mlSkg:"3550", mlSkpa:"930", mlDlbs:"7165", mlDpsi:"135", mlDkg:"3250", mlDkpa:"930", liss:"152/149G", smartway:false, ms:false, "3PMSF":false },
        { size:"13R22.5", ply:"18", rimW:"9.75", secW:"12.4", odIn:"44.8", odMm:"1137", td32:"23", tdMm:"28.3", mlSlbs:"8267", mlSpsi:"120", mlSkg:"3750", mlSkpa:"830", mlDlbs:"7606", mlDpsi:"120", mlDkg:"3450", mlDkpa:"830", liss:"154/151G", smartway:false, ms:false, "3PMSF":false },
    ],
    tireImage:    "/tires/Tire-Photos/AGM10.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/AGM10.png",
    },
  },

  // ─── AGM84 ─────────────────────────────────────────────
  {
    slug:     "agm84",
    name:     "AGM84",
    segment:  "Standard Off Road",
    position: "OTR" as TirePosition,
    subtitle: "Drive tire for off-road use, wide tread, puncture-resistant, high traction, long-lasting.",
    bullets: [
      "Drive and trailer tire for use in Off road applications",
      "Wide tread provides improved wear, improving tread life",
      "Large tread blocks with open design provides excellent traction in extreme off road conditions",
      "Cut and chip resistant compound reduces punctures and penetrations, reducing down time",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"11R22.5", ply:"16", rimW:"8.25", secW:"10.9", odIn:"42.3", odMm:"1075", td32:"26", tdMm:"32.8", mlSlbs:"6614", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"6008", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"146/143G", smartway:false, ms:false, "3PMSF":false },
        { size:"11R24.5", ply:"16", rimW:"8.25", secW:"11.5", odIn:"43.9", odMm:"1116", td32:"26", tdMm:"32.8", mlSlbs:"7165", mlSpsi:"120", mlSkg:"3250", mlSkpa:"830", mlDlbs:"6614", mlDpsi:"120", mlDkg:"3000", mlDkpa:"830", liss:"149/146G", smartway:false, ms:false, "3PMSF":false },
    ],
    tireImage:    "/tires/Tire-Photos/AGM84.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/AGM84.png",
    },
  },

  // ─── ADW80 ─────────────────────────────────────────────
  {
    slug:     "adw80",
    name:     "ADW80",
    segment:  "Standard Winter",
    position: "Drive" as TirePosition,
    subtitle: "Drive tire for winter with 3PMS, high-density grooves, low-temperature compoundand excellent snow traction.",
    bullets: [
      "Regional winter drive tire suitable for inter city coaches and tractors",
      "Multiple sipes in each tread block provide biting edges for excellent traction and braking performance",
      "Special tread compound is designed for cold weather, assuring maximum grip",
      "3PMS designation assure excellent winter traction, improving safety",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"315/70R22.5", ply:"18", rimW:"9", secW:"12.4", odIn:"40.7", odMm:"1033", td32:"24", tdMm:"30.2", mlSlbs:"7606", mlSpsi:"120", mlSkg:"3450", mlSkpa:"830", mlDlbs:"6945", mlDpsi:"120", mlDkg:"3150", mlDkpa:"830", liss:"152/148M", smartway:false, ms:true, "3PMSF":true },
        { size:"315/80R22.5", ply:"18", rimW:"9", secW:"12.6", odIn:"43.2", odMm:"1096", td32:"24", tdMm:"30.2", mlSlbs:"8267", mlSpsi:"120", mlSkg:"3750", mlSkpa:"830", mlDlbs:"7606", mlDpsi:"120", mlDkg:"3450", mlDkpa:"830", liss:"154/151M", smartway:false, ms:true, "3PMSF":true },
        { size:"315/80R22.5", ply:"20", rimW:"9", secW:"12.6", odIn:"43.2", odMm:"1096", td32:"24", tdMm:"30.2", mlSlbs:"9094", mlSpsi:"131", mlSkg:"4125", mlSkpa:"900", mlDlbs:"8267", mlDpsi:"131", mlDkg:"3750", mlDkpa:"900", liss:"157/154M", smartway:false, ms:true, "3PMSF":true },
    ],
    tireImage:    "/tires/Tire-Photos/ADW80.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/ADW80.png",
    },
  },

  // ─── ADW81 ─────────────────────────────────────────────
  {
    slug:     "adw81",
    name:     "ADW81",
    segment:  "Standard Winter",
    position: "Drive" as TirePosition,
    subtitle: "Drive tire for winter with 3PMS, low-temperature tread compound, high-density grooves, excellent snow traction.",
    bullets: [
      "Regional winter drive tire for regional applications",
      "Multiple sipes in each tread block provide biting edges for excellent traction and braking performance",
      "Special tread compound is designed for cold weather, assuring maximum grip",
      "3PMS designation assure excellent winter traction, improving safety",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"11R22.5", ply:"16", rimW:"8.25", secW:"10.9", odIn:"41.9", odMm:"1065", td32:"21", tdMm:"26.5", mlSlbs:"6614", mlSpsi:"120", mlSkg:"3000", mlSkpa:"830", mlDlbs:"6008", mlDpsi:"120", mlDkg:"2725", mlDkpa:"830", liss:"146/143M", smartway:false, ms:true, "3PMSF":true },
        { size:"11R24.5", ply:"16", rimW:"8.25", secW:"11.4", odIn:"43.5", odMm:"1105", td32:"21", tdMm:"26.5", mlSlbs:"7165", mlSpsi:"120", mlSkg:"3250", mlSkpa:"830", mlDlbs:"6614", mlDpsi:"120", mlDkg:"3000", mlDkpa:"830", liss:"149/146M", smartway:false, ms:true, "3PMSF":true },
    ],
    tireImage:    "/tires/Tire-Photos/ADW81.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/ADW81.png",
    },
  },

  // ─── ADW82 ─────────────────────────────────────────────
  {
    slug:     "adw82",
    name:     "ADW82",
    segment:  "Standard Winter",
    position: "Drive" as TirePosition,
    subtitle: "Drive tire for winter and urban last-mile use with 3PMS, low-temperature compound, excellent traction.",
    bullets: [
      "Winter drive tire for use in regional and urban pick up and delivery applications",
      "Multiple sipes in each tread block provide biting edges for excellent traction and braking performance",
      "Special tread compound is designed for cold weather, assuring maximum grip",
      "3PMS designation assure excellent winter traction, improving safety",
    ],
    features: [
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
      { title:"", body:"", image:"" },
    ],
    specRows: [
        { size:"225/70R19.5", ply:"14", rimW:"6.75", secW:"8.9", odIn:"32", odMm:"812", td32:"15", tdMm:"18.9", mlSlbs:"3968", mlSpsi:"110", mlSkg:"1800", mlSkpa:"760", mlDlbs:"3748", mlDpsi:"110", mlDkg:"1700", mlDkpa:"760", liss:"128/126M", smartway:false, ms:true, "3PMSF":true },
        { size:"245/70R19.5", ply:"16", rimW:"7.5", secW:"9.8", odIn:"33.3", odMm:"845", td32:"16", tdMm:"19.5", mlSlbs:"4938", mlSpsi:"120", mlSkg:"2240", mlSkpa:"830", mlDlbs:"4674", mlDpsi:"120", mlDkg:"2120", mlDkpa:"830", liss:"136/134M", smartway:false, ms:true, "3PMSF":true },
    ],
    tireImage:    "/tires/Tire-Photos/ADW82.png",
    heroBg:       heroBgImg,
    bgTruck:      bgTruckImg,
    cutawayImage: cutawayImg,
    downloads: {
      catalog:      "/Aeolus-TBR-catalog.pdf",
      productSheet: "/template.pdf",
      warranty:     "/Aeolus-TBR-Warranty.pdf",
      tirePhoto:    "/tires/Tire-Photos/ADW82.png",
    },
  },

];

export function getTireBySlug(slug: string): TireData | undefined {
  return TIRES.find((t) => t.slug === slug);
}