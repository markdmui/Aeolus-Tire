import { useEffect, useRef, useState, type CSSProperties } from "react";
import { thumbUrl, fullImageUrl } from "../lib/images";

/**
 * A card thumbnail that recovers on its own.
 *
 * Two separate things used to leave a card blank until the page was reloaded.
 * A dropped request was permanent — one `onerror` swapped in the
 * full-resolution original, a second gave up and set `display:none`, and since
 * both were written straight onto the DOM node React never restored them. And
 * a `loading="lazy"` image whose fetch never started stayed blank while it sat
 * on screen, until some unrelated relayout — opening the spec modal, which
 * toggles `body { overflow }` — nudged the browser into re-checking it.
 *
 * So retries live in React state now, and a watchdog re-requests anything
 * still blank a few seconds after it scrolls into view. Retries are
 * cache-busted: re-assigning the identical URL can replay the failed cache
 * entry instead of going back to the network.
 *
 * The tire photos are all 1800x2400 originals — see lib/images.
 */

/** Failed loads to absorb before the swatch is left empty. */
const MAX_ERRORS = 3;
/** Wait after a failed load before re-requesting. */
const RETRY_MS = 700;
/** How long an on-screen image may stay blank before we re-request it. */
const STALL_MS = 4000;
/** Stall nudges per image, so a genuinely missing file can't loop forever. */
const MAX_NUDGES = 2;
/** Start watching a little before the card reaches the viewport. */
const ROOT_MARGIN = "200px";

type Props = {
  /** Catalog-relative original path, e.g. `/tires/Tire-Photos/ASL01.webp`. */
  tireImage: string;
  alt: string;
  /** On screen at first paint: skip lazy-loading and take fetch priority. */
  eager?: boolean;
  className?: string;
  style?: CSSProperties;
};

export default function TireThumb({ tireImage, alt, eager = false, className, style }: Props) {
  const imgRef = useRef<HTMLImageElement>(null);
  // Bumped for every re-request, and appended to the URL so the browser
  // actually goes back to the network instead of replaying a failed entry.
  const [reload, setReload] = useState(0);
  const [useFull, setUseFull] = useState(false);
  const [failed, setFailed] = useState(false);
  const errors = useRef(0);
  const nudges = useRef(0);
  const retryTimer = useRef<number>(undefined);

  const base = useFull ? fullImageUrl(tireImage) : thumbUrl(tireImage);
  const src = reload === 0 ? base : `${base}?r=${reload}`;

  // Re-request an image that scrolled into view but never resolved.
  useEffect(() => {
    const img = imgRef.current;
    if (!img || failed) return;

    const isLoaded = () => img.complete && img.naturalWidth > 0;
    if (isLoaded()) return;

    let stallTimer: number | undefined;
    const observer = new IntersectionObserver(
      entries => {
        if (!entries.some(e => e.isIntersecting)) return;
        observer.disconnect();
        stallTimer = window.setTimeout(() => {
          if (isLoaded() || nudges.current >= MAX_NUDGES) return;
          nudges.current += 1;
          setReload(r => r + 1);
        }, STALL_MS);
      },
      { rootMargin: ROOT_MARGIN },
    );
    observer.observe(img);

    return () => {
      observer.disconnect();
      if (stallTimer !== undefined) clearTimeout(stallTimer);
    };
  }, [reload, failed]);

  useEffect(() => () => clearTimeout(retryTimer.current), []);

  if (failed) return null;

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      decoding="async"
      width={1800}
      height={2400}
      className={className}
      style={style}
      onLoad={() => clearTimeout(retryTimer.current)}
      onError={() => {
        errors.current += 1;
        if (errors.current >= MAX_ERRORS) { setFailed(true); return; }
        retryTimer.current = window.setTimeout(() => {
          // Second failure: the thumbnail may simply be missing, so fall back
          // to the full-resolution original the card was generated from.
          if (errors.current >= 2) setUseFull(true);
          setReload(r => r + 1);
        }, RETRY_MS);
      }}
    />
  );
}
