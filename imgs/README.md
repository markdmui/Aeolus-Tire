# imgs — shared asset drop

Tracked in git on purpose: this is the exchange point for images moving between
Mark, Claude Code and Replit. Drop a file here, push, and it is available on the
other side.

**This folder is not served by the site.** Nothing here reaches the browser.
Assets only go live once they are copied into the website's public folder:

| Kind | Destination | Referenced from |
|---|---|---|
| Product photo | `artifacts/aeolus-website/public/tires/Tire-Photos/` | generated automatically from the tire's name |
| Feature image | `artifacts/aeolus-website/public/tires/Feature-Images/` | the `image 1..4` rows in Wireframe-06 sheet 3 |

## Naming

Name product photos exactly as the tire is named in sheet 3 of
`Aeolus-Wireframe-06.xlsx`, with spaces as hyphens — `Neo-Allroads-D3.png`, not
`Allroads-D3.png`. The generator matches on that name, and a mismatch means the
tire silently falls back to the placeholder photo.

Feature images use the token written in the wireframe's `image N` row, e.g.
`Neo-Allroads-D3-f1.png`.

## Format

Transparent PNG. The product pages are pure black, so a white-background JPEG
shows as a white box around the tire. Existing photos are 1800x2400 with an
alpha channel — match that.

## After dropping files in

Run the generator so the catalog picks them up:

```
pnpm --filter @workspace/scripts run generate:tires
```

It warns about any tire still missing artwork.
