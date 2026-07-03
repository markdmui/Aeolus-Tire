import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DEFAULT_CUTAWAY_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABEwAAANbCAYAAABYdQoXAAAKMGlDQ1BJQ0MgUHJvZmlsZQAAeJydlndUVNcWh8+9d3qhzTAUKUPvvQ0gvTep0kRhmBlgKAMOMzSxIaICEUVEBBVBgiIGjIYisSKKhYBgwR6QIKDEYBRRUXkzslZ05eW9l5ffH2d9a5+99z1n733WugCQvP25vHRYCoA0noAf4uVKj4yKpmP7AQzwAAPMAGCyMjMCQj3DgEg+Hm70TJET+CIIgDd3xCsAN428g+h08P9JmpXBF4jSBInYgs3JZIm4UMSp2YIMsX1GxNT4FDHDKDHzRQcUsbyYExfZ8LPPIjuLmZ3GY4tYfOYMdhpbzD0i3pol5IgY8RdxURaXky3iWyLWTBWmcUX8VhybxmFmAoAiie0CDitJxKYiJvHDQtxEvBQAHCnxK47/igWcHIH4Um7pGbl8bmKSgK7L0qOb2doy6N6c7FSOQGAUxGSlMPlsult6WgaTlwvA4p0/S0ZcW7qoyNZmttbWRubGZl8V6r9u/k2Je7tIr4I/9wyi9X2x/ZVfej0AjFlRbXZ8scXvBaBjMwDy97/YNA8CICnqW/vAV/ehiecklSSDIsDMxyc7ONuZyWMbigv6h/+nwN/TV94zF6f4oD92dk8AUpgro4rqx0lPThXx6ZgaTxaEb/XmI/3HgX5/DMISTwOFzeKKIcNGUcXmJonbz2FwBN51H5/L+UxP/YdiftDjXIlEaPgFqrDGQGqAC5Nc+gKIQARJzQLQD/dE3f3w4EL+8CNWJxbn/LOjfs8Jl4iWTm/g5zi0kjM4S8rMW98TPEqABAUgCKlAAKkAD6AIjYA5sgD1wBh7AFwSCMBAFVgEWSAJpgA+yQT7YCIpACdgBdoNqUAsaQBNoASdABzgNLoDL4Dq4AW6DB2AEjIPnYAa8AfMQBGEhMkSBFCBVSAsygMwhBuQIeUD+UAgUBcVBiRAPEkL50CaoBCqHqqE6qAn6HjoFXYCuQoPQPWgUmoJ+h97DCEyCqbAyrA2bwAzYBfaDw+CVcCK8Gs6DC+HtcBVcDx+D2+EL8HX4NjwCP4dnEYAQERqihhghDMQNCUSikQSEj6xDipFKpB5pQbqQXuQmMoJMI+9QGBQFRUcZoexR3qjlKBZqNWodqhRVjTqCakf1oG6iRlEzqE9oMloJbYC2Q/ugI9GJ6Gx0EboS3YhuQ19C30aPo99gMBgaRgdjg/HGRGGSMWswpZj9mFbMecwgZgwzi8ViFbAGWAdsIJaJFWCLsHuxx7DnsEPYcexbHBGnijPHeeKicTxcAa4SdxR3FjeEm8DN46XwWng7fCCejc/Fl+Eb8F34Afw4fp4gTdAhOBDCCMmEjYQqQgvhEuEh4RWRSFQn2hKDiVziBmIV8TjxCnGU+I4kQ9InuZFiSELSdtJh0nnSPdIrMpmsTXYmR5MF5O3kJvJF8mPyWwmKhLGEjwRbYr1EjUS7xJDEC0m8pJaki+QqyTzJSsmTkgOS01J4KW0pNymm1DqpGqlTUsNSs9IUaTPpQOk06VLpo9JXpSdlsDLaMh4ybJlCmUMyF2XGKAhFg+JGYVE2URoolyjjVAxVh+pDTaaWUL+j9lNnZGVkLWXDZXNka2TPyI7QEJo2zYeWSiujnaDdob2XU5ZzkePIbZNrkRuSm5NfIu8sz5Evlm+Vvy3/XoGu4KGQorBToUPhkSJKUV8xWDFb8YDiJcXpJdQl9ktYS4qXnFhyXwlW0lcKUVqjdEipT2lWWUXZSzlDea/yReVpFZqKs0qySoXKWZUpVYqqoypXtUL1nOozuizdhZ5Kr6L30GfUlNS81YRqdWr9avPqOurL1QvUW9UfaRA0GBoJGhUa3RozmqqaAZr5ms2a97XwWgytJK09Wr1ac9o62hHaW7Q7tCd15HV8dPJ0mnUe6pJ1nXRX69br3tL";

interface Point {
  id: number;
  title: string;
  bullets: string[];
  x: number;
  y: number;
}

interface TireTechExplorerProps {
  imageSrc?: string;
  points?: Point[];
  imageAlt?: string;
}

const SAMPLE_POINTS: Point[] = [
  {
    id: 1,
    title: "Bionic Pattern Groove",
    bullets: ["Reduce pattern noise", "Improve hydroplaning"],
    x: 20,
    y: 10,
  },
  {
    id: 2,
    title: "Super High Tensile Belt",
    bullets: ["Handling", "Lower rolling resistance", "Improved retreadability"],
    x: 41,
    y: 60,
  },
  {
    id: 3,
    title: "Tread Profile Balance Contact Technology",
    bullets: [
      "Better contact pressure under the footprint area",
      "Improved belt integrity and retreadability",
      "Even wear over the life of the tire",
    ],
    x: 55,
    y: -5,
  },
  {
    id: 4,
    title: "Anti-Deformation Groove Technology",
    bullets: ["Reduce friction energy and even wear", "High mileage"],
    x: 30,
    y: -4,
  },
  {
    id: 5,
    title: "3D-Side",
    bullets: ["Lower rolling resistance", "Enhance tractive grip"],
    x: 44,
    y: 12,
  },
  {
    id: 6,
    title: "Hexagonal Bead Wire",
    bullets: [
      "High flexibility, easy fitting",
      "Thermal stability of the bead",
      "Improved bead wire durability",
      "Retreadability",
    ],
    x: 20,
    y: 78,
  },
  {
    id: 7,
    title: "Spiral Technology",
    bullets: ["Enhanced even wear", "Extended tire life", "Retreadability", "Handling"],
    x: 88,
    y: 22,
  },
];

export default function TireTechExplorer({
  imageSrc = DEFAULT_CUTAWAY_IMAGE,
  points = SAMPLE_POINTS,
  imageAlt = "Tire technology cutaway diagram",
}: TireTechExplorerProps) {
  const [activeId, setActiveId] = useState<number | null>(points[0]?.id ?? null);

  return (
    <section className="w-full bg-black py-6 sm:py-10 lg:py-14" style={{ paddingTop: "calc(3.5rem + 40px)" }}>
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 calc(4vw + 20px)" }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        {/* Cutaway image + dot buttons */}
        <motion.div
          className="relative w-full self-start"
          style={{ aspectRatio: "16 / 11" }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.64, ease: "easeOut" }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-contain"
          />

          {points.map((point, idx) => {
            const isActive = point.id === activeId;
            return (
              <motion.button
                key={point.id}
                type="button"
                aria-label={point.title}
                aria-expanded={isActive}
                onClick={() => setActiveId(point.id)}
                onMouseEnter={() => setActiveId(point.id)}
                onFocus={() => setActiveId(point.id)}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: isActive ? 0.85 : 0.7, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  backgroundColor: isActive ? "#fbbf24" : "#000",
                  color: isActive ? "#000" : "#fff",
                  opacity: isActive ? 0.95 : 0.7,
                  y: isActive ? -6 : 0,
                }}
                transition={{
                  opacity: { duration: 0.4, delay: 0.3 + idx * 0.07 },
                  y: { type: "spring", stiffness: 350, damping: 22 },
                  backgroundColor: { duration: 0.2 },
                  color: { duration: 0.2 },
                }}
                style={{
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                  border: isActive ? "1.5px solid #fbbf24" : "1.5px solid #F2C94C",
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                  width: "36px",
                  height: "36px",
                }}
                className={[
                  "flex items-center justify-center",
                  "text-sm font-semibold rounded-full",
                  "shadow-[2px_4px_7px_1px_rgba(0,0,0,0.8)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                ].join(" ")}
              >
                {point.id}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Feature list */}
        <motion.ul
          className="flex flex-col border-l border-neutral-800 pl-8"
          style={{ minHeight: "400px", justifyContent: "flex-start" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
          }}
        >
          {points.map((point) => {
            const isActive = point.id === activeId;
            return (
              <motion.li
                key={point.id}
                className="py-0"
                variants={{
                  hidden: { opacity: 0, x: 40 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.44, ease: "easeOut" } },
                }}
              >
                <button
                  type="button"
                  aria-expanded={isActive}
                  onClick={() => setActiveId(point.id)}
                  onMouseEnter={() => setActiveId(point.id)}
                  onFocus={() => setActiveId(point.id)}
                  className={[
                    "w-full text-left border-l-2 transition-colors duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400",
                    isActive
                      ? "rounded-l-xl border-amber-400 bg-neutral-900 px-5 py-4 -ml-0.5"
                      : "rounded-none border-transparent px-0 py-2",
                  ].join(" ")}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={[
                        "text-base font-semibold tabular-nums transition-colors duration-200",
                        isActive ? "text-amber-400" : "text-neutral-500",
                      ].join(" ")}
                    >
                      {String(point.id).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-base capitalize transition-colors duration-200 ${isActive ? "font-semibold text-neutral-100" : "font-normal"}`}
                      style={isActive ? {} : { color: "#ccc" }}
                    >
                      {point.title}
                    </span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="bullets"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <ul className="mt-1 ml-9 space-y-0.5">
                          {point.bullets.map((bullet, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: 50, y: 8 }}
                              animate={{ opacity: 1, x: 0, y: 0 }}
                              transition={{ duration: 0.26, delay: i * 0.08, ease: "easeOut" }}
                              className="text-sm text-neutral-400 leading-relaxed list-disc"
                            >
                              {bullet}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
      </div>
    </section>
  );
}
