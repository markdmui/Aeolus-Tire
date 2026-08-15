const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

/**
 * Card-sized copy of a tire photo — 900px wide, generated with
 * `pnpm --filter @workspace/scripts run generate:thumbs`.
 *
 * The originals are 1800x2400 and average 410 KB. Any grid that shows the whole
 * catalogue at once (the Tire Finder, the /tires lineup) would pull ~19 MB
 * without these. 900px covers the widest card render — ~430 CSS px on the
 * lineup grid just below its 1024px breakpoint — at 2x device pixel ratio.
 *
 * Card use only. A large or full-bleed image should keep the original — see
 * the product page hero, the finder's spec modal and the lightbox.
 */
export const thumbUrl = (tireImage: string) =>
  `${BASE}${tireImage.replace("/Tire-Photos/", "/Tire-Photos/thumbs/")}`;

/** Full-resolution original, for when a thumbnail is missing or fails. */
export const fullImageUrl = (tireImage: string) => `${BASE}${tireImage}`;

/**
 * Warm a set of thumbnails in the background once the browser is idle, so a
 * lazy-loaded card is already cached by the time it scrolls into view instead
 * of starting its download at that moment. Returns a cancel function.
 *
 * Skipped when the browser reports data-saver or a 2G-class connection, where
 * deferring the images is the whole point.
 */
export function prefetchThumbs(urls: string[]): () => void {
  const conn = (navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string };
  }).connection;
  if (conn?.saveData || /(^|-)2g$/.test(conn?.effectiveType ?? "")) return () => {};

  let cursor = 0;
  let cancelled = false;

  const fetchNext = () => {
    if (cancelled || cursor >= urls.length) return;
    const img = new Image();
    img.onload = img.onerror = fetchNext;
    img.src = urls[cursor++];
  };
  const start = () => { for (let i = 0; i < 4; i++) fetchNext(); };

  // Safari only shipped requestIdleCallback recently; fall back to a timer.
  const hasIdle = typeof window.requestIdleCallback === "function";
  const handle = hasIdle
    ? window.requestIdleCallback(start, { timeout: 2000 })
    : window.setTimeout(start, 500);

  return () => {
    cancelled = true;
    if (hasIdle) window.cancelIdleCallback(handle);
    else clearTimeout(handle);
  };
}
