"""
Generate tire-card thumbnails for the Tire Finder grid.

The finder renders 45 cards at once. Pointing those at the full-resolution
photos (1800x2400, ~410 KB each) meant ~20 MB per page load, which is why
thumbnails showed up blank on a first visit -- nothing was failing, the images
simply had not arrived yet.

Used by both card grids: the Tire Finder and the /tires lineup.

Width is set by the widest card render on either grid. The lineup's cards are
the larger of the two, and -- counter-intuitively -- they peak on *narrow*
desktops, not wide ones: just under the 1024px breakpoint the grid drops to 4
columns and each card gets wider, drawing the image at ~430 CSS px (its
scale(1.906) transform is why the drawn size exceeds the card box). 900px
covers that at a 2x device pixel ratio.

Product pages, the finder's spec modal and the lightbox keep using the
full-resolution originals; only the card grids use these.

  Regenerate: pnpm --filter @workspace/scripts run generate:thumbs
  Add --force to rebuild thumbnails that are already up to date.

Output goes to Tire-Photos/thumbs/ using the same filename and the same WebP
format as the source, so a missing thumbnail can always fall back to the
original by dropping "thumbs/" from the path.
"""

import sys
from pathlib import Path

from PIL import Image

THUMB_WIDTH = 900
WEBP_QUALITY = 80

ROOT = Path(__file__).resolve().parent.parent
SRC_DIR = ROOT / "artifacts" / "aeolus-website" / "public" / "tires" / "Tire-Photos"
OUT_DIR = SRC_DIR / "thumbs"


def human(n: int) -> str:
    return f"{n / 1024 / 1024:.2f} MB" if n >= 1024 * 1024 else f"{n / 1024:.0f} KB"


def main() -> int:
    force = "--force" in sys.argv

    if not SRC_DIR.is_dir():
        print(f"! source directory not found: {SRC_DIR}")
        return 1

    sources = sorted(p for p in SRC_DIR.glob("*.webp") if p.is_file())
    if not sources:
        print(f"! no .webp files in {SRC_DIR}")
        return 1

    OUT_DIR.mkdir(exist_ok=True)

    built = skipped = 0
    src_bytes = out_bytes = 0
    odd_ratios = []

    for src in sources:
        dst = OUT_DIR / src.name
        src_bytes += src.stat().st_size

        if dst.exists() and not force and dst.stat().st_mtime >= src.stat().st_mtime:
            out_bytes += dst.stat().st_size
            skipped += 1
            continue

        with Image.open(src) as im:
            # Keep alpha; these are cut-out product shots on transparency.
            im = im.convert("RGBA")
            ratio = im.width / im.height
            if abs(ratio - 0.75) > 0.01:
                odd_ratios.append(f"{src.name} ({im.width}x{im.height})")
            height = round(THUMB_WIDTH * im.height / im.width)
            im.resize((THUMB_WIDTH, height), Image.LANCZOS).save(
                dst, "WEBP", quality=WEBP_QUALITY, method=6
            )

        out_bytes += dst.stat().st_size
        built += 1

    print(f"Thumbnails in {OUT_DIR.relative_to(ROOT)}")
    print(f"  {built} built, {skipped} already current  ({len(sources)} source images)")
    print(f"  {human(src_bytes)} of originals -> {human(out_bytes)} of thumbnails")
    if src_bytes:
        print(f"  card grid now loads {src_bytes / out_bytes:.1f}x less image data")

    if odd_ratios:
        print(f"\n{len(odd_ratios)} image(s) are not the usual 3:4 -- card framing may differ:")
        for name in odd_ratios:
            print(f"  ! {name}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
