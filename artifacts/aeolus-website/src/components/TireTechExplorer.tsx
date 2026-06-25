import { useState } from "react";

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
    title: "Bionic pattern groove",
    bullets: ["Reduce pattern noise", "Improve hydroplaning"],
    x: 16,
    y: 21,
  },
  {
    id: 2,
    title: "Super high tensile belt",
    bullets: ["Handling", "Lower rolling resistance", "Improved retreadability"],
    x: 27,
    y: 51,
  },
  {
    id: 3,
    title: "Tread profile balance contact technology",
    bullets: [
      "Better contact pressure under the footprint area",
      "Improved belt integrity and retreadability",
      "Even wear over the life of the tire",
    ],
    x: 60,
    y: 8,
  },
  {
    id: 4,
    title: "Anti-deformation groove technology",
    bullets: ["Reduce friction energy and even wear", "High mileage"],
    x: 32,
    y: 8,
  },
  {
    id: 5,
    title: "3D-side",
    bullets: ["Lower rolling resistance", "Enhance tractive grip"],
    x: 40,
    y: 8,
  },
  {
    id: 6,
    title: "Hexagonal bead wire",
    bullets: [
      "High flexibility, easy fitting",
      "Thermal stability of the bead",
      "Improved bead wire durability",
      "Retreadability",
    ],
    x: 47,
    y: 94,
  },
  {
    id: 7,
    title: "Spiral technology",
    bullets: ["Enhanced even wear", "Extended tire life", "Retreadability", "Handling"],
    x: 89,
    y: 17,
  },
];

export default function TireTechExplorer({
  imageSrc = DEFAULT_CUTAWAY_IMAGE,
  points = SAMPLE_POINTS,
  imageAlt = "Tire technology cutaway diagram",
}: TireTechExplorerProps) {
  const [activeId, setActiveId] = useState<number | null>(points[0]?.id ?? null);

  return (
    <section className="w-full bg-black p-6 sm:p-10 lg:p-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative w-full" style={{ aspectRatio: "16 / 11" }}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-contain"
          />

          {points.map((point) => {
            const isActive = point.id === activeId;
            return (
              <button
                key={point.id}
                type="button"
                aria-label={point.title}
                aria-expanded={isActive}
                onClick={() => setActiveId(point.id)}
                onMouseEnter={() => setActiveId(point.id)}
                onFocus={() => setActiveId(point.id)}
                style={{
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                  backgroundColor: isActive ? "#fbbf24" : "#000",
                  color: isActive ? "#000" : "#ccc",
                  border: isActive ? "none" : "1.5px solid #999",
                  opacity: isActive ? 1 : 0.7,
                }}
                className={[
                  "absolute -translate-x-1/2 -translate-y-1/2",
                  "flex items-center justify-center",
                  "w-7 h-7 text-sm font-semibold rounded-full",
                  "shadow-[2px_4px_7px_1px_rgba(0,0,0,0.8)]",
                  "transition-all duration-200 ease-out",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                  isActive ? "scale-110 ring-2 ring-amber-200" : "hover:scale-110",
                ].join(" ")}
              >
                {point.id}
              </button>
            );
          })}
        </div>

        <ul className="flex flex-col border-l border-neutral-800 pl-8">
          {points.map((point) => {
            const isActive = point.id === activeId;
            return (
              <li key={point.id} className="py-0">
                <button
                  type="button"
                  aria-expanded={isActive}
                  onClick={() => setActiveId(point.id)}
                  onMouseEnter={() => setActiveId(point.id)}
                  onFocus={() => setActiveId(point.id)}
                  className={[
                    "w-full text-left border-l-2 transition-all duration-300 ease-out",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400",
                    isActive
                      ? "rounded-l-xl border-amber-400 bg-neutral-900 px-5 py-4 -ml-0.5"
                      : "rounded-none border-transparent px-0 py-0",
                  ].join(" ")}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={[
                        "text-base font-semibold tabular-nums",
                        isActive ? "text-amber-400" : "text-neutral-500",
                      ].join(" ")}
                    >
                      {String(point.id).padStart(2, "0")}
                    </span>
                    <span className={`text-base capitalize ${isActive ? "font-semibold text-neutral-100" : "font-normal"}`} style={isActive ? {} : { color: "#ccc" }}>
                      {point.title}
                    </span>
                  </div>

                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isActive ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <ul className="mt-1 ml-9 space-y-0.5">
                        {point.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="text-sm text-neutral-400 leading-relaxed list-disc"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
