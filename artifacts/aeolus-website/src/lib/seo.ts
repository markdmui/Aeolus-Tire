import { useEffect } from "react";

export const SITE_NAME = "Aeolus Truck Tires";
export const SITE_URL = "https://aeolustire.ca";
const DEFAULT_OG_IMAGE = "/opengraph.jpg";

function absoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

function setMetaByName(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setMetaByProperty(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export interface PageMetaOptions {
  /** Page-specific title. Rendered as "{title} | Aeolus Truck Tires" unless it already includes the site name. */
  title: string;
  description: string;
  /** Root-relative or absolute image path for social previews. Defaults to /opengraph.jpg. */
  image?: string;
  /** og:type — defaults to "website"; use "product" on tire product pages. */
  type?: string;
  /** Set true on pages that shouldn't be indexed (404, etc). */
  noindex?: boolean;
}

/**
 * Updates document title, meta description, canonical link, and OG/Twitter tags
 * for the current route. This is a client-rendered SPA (no SSR/prerendering), so
 * these tags are correct for crawlers that execute JS (Google) but won't be seen
 * by crawlers that don't (social link-preview bots) — see CLAUDE.md discussion.
 */
export function usePageMeta({ title, description, image, type = "website", noindex = false }: PageMetaOptions) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const ogImage = absoluteUrl(image ?? DEFAULT_OG_IMAGE);
    const canonicalUrl = `${SITE_URL}${window.location.pathname}`;

    document.title = fullTitle;
    setMetaByName("description", description);
    setMetaByName("robots", noindex ? "noindex, follow" : "index, follow");
    setMetaByProperty("og:title", fullTitle);
    setMetaByProperty("og:description", description);
    setMetaByProperty("og:type", type);
    setMetaByProperty("og:url", canonicalUrl);
    setMetaByProperty("og:image", ogImage);
    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", fullTitle);
    setMetaByName("twitter:description", description);
    setMetaByName("twitter:image", ogImage);
    setCanonical(canonicalUrl);
  }, [title, description, image, type, noindex]);
}

/** Injects/removes a <script type="application/ld+json"> tag for the current page. */
export function useJsonLd(id: string, data: Record<string, unknown> | null) {
  useEffect(() => {
    if (!data) return;
    let el = document.getElementById(id) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement("script");
      el.id = id;
      el.type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
    return () => {
      el?.remove();
    };
  }, [id, data]);
}
