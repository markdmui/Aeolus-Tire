---
name: Layered Background Images
description: Full-bleed image section that visually bleeds behind the next content block — creates depth and connects separate sections.
---

# Layered Background Images

A section whose background image extends below its own content, and the following section overlaps it with a transparent background. Creates a layered, editorial depth effect.

## When to use
When you want an image (hero truck, landscape, factory shot) to visually "connect" two separate content blocks rather than hard-cutting between them.

## Structure (React/TSX)

```tsx
{/* SECTION A — image sits behind everything including Section B */}
<section style={{ position: "relative", backgroundColor: "#0a0a0a", overflow: "hidden" }}>

  {/* 1. Full-bleed background image — absolutely positioned, covers the whole section */}
  <div style={{
    position: "absolute",
    inset: 0,
    backgroundImage: "url('/your-image.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center right",
  }} />

  {/* 2. Gradient overlay — fades image left→right so text on the left stays readable */}
  <div style={{
    position: "absolute",
    inset: 0,
    background: "linear-gradient(90deg,
      rgba(10,10,10,0.92) 0%,
      rgba(10,10,10,0.75) 38%,
      rgba(10,10,10,0.20) 72%,
      rgba(10,10,10,0.04) 100%)",
  }} />

  {/* 3. Content — sits on top of image via z-index */}
  <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "92px" }}>
    {/* ... text content ... */}

    {/* 4. Yellow rule — visual separator between content and the tail */}
    <div style={{
      borderTop: "2px solid var(--accent-yellow)",
      marginTop: "94px",   // push rule down to give image breathing room
    }} />
  </div>

  {/* 5. Tail — extra height so the image is visible below the rule */}
  <div style={{ height: "260px" }} />
</section>

{/* SECTION B — overlaps Section A's tail; transparent bg reveals image behind header */}
<section style={{
  backgroundColor: "transparent",   // ← key: lets Section A's image show through
  position: "relative",
  zIndex: 2,
  marginTop: "-220px",              // ← pulls this section up over the tail
}}>
  <div className="container">
    {/* Header / kicker / heading — image visible here */}
    ...

    {/* Grid or cards — give these their OWN dark background */}
    <div style={{ backgroundColor: "var(--bg-dark)", border: "1px solid var(--border-color)" }}>
      ...
    </div>
  </div>
</section>
```

## Key values to tune
| Value | What it controls |
|---|---|
| `height: "260px"` on tail | How much image is visible below the rule |
| `marginTop: "-220px"` on Section B | How far Section B overlaps the tail |
| `marginTop: "94px"` on rule | Space between text and rule (moves rule down) |
| Gradient stops (38%, 72%) | How aggressively the image fades on the left |

**Why:** `backgroundColor: "transparent"` on Section B is only effective because Section B has `position: relative; zIndex: 2` and is visually overlapping Section A (via negative marginTop). Section A's absolutely-positioned image div fills the full section height including the tail, so it shows through the transparent area above.

**How to apply:** Use any time a full-bleed photo should visually connect two sections. The next section's header floats over the image; its content blocks (cards, grids) carry their own dark background so they remain readable.
