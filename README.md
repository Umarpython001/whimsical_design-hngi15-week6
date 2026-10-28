# whimsical_design

**A from‑scratch React + Vite rebuild of [start.ng](https://start.ng), Nigeria's home for free browser games — plus a subtle, whimsical arcade layer.**

## What this repo is

- Faithful recreation of the start.ng landing page (same structure, same colours, same content, same links — per `master_prompt.md` and `PRODUCT.md`)
- Includes a **whimsical arcade layer** of decorative SVG components (`startng-whimsy`): sparkles, gamepad doodle, pixel trail, confetti burst, Halloween motifs (Bat/Cobweb/Ghost/Pumpkin)
- Colours, tokens, and global styles sourced exactly from the real site (`.impeccable/research/startng-real.css`) — **no new colours** (D2), **no invented content** (D8)
- BUILD_COMPLETE: true (shipped 14:36)

## How to run

```bash
npm install
npm run dev        # → http://localhost:5173
npm run build     # → production build
npm run preview   # → preview of production build (port 4173)
```

## Guiding files

- `master_prompt.md` — full brief, locked decisions (D1–D8), section order, ownership
- `PRODUCT.md` — product record, design system surface brief
- `.impeccable/design.json` — sidecar of all token values (light/dark)
- `.impeccable/copy-diff.md` — copy‑fidelity diff vs real site
- `DESIGN.md` — this doc; documents the inherited real‑site system + whimsical ADDENDUM
- `agents_communicate.md` — coordination board; every step logged here

## Ownership (do not edit without REQUEST+ANSWER in the Message Log)

| Area | Owner |
|---|---|
| `src/`, `index.html`, `vite.config.js`, `PRODUCT.md` | MAIN agent |
| `src/components/startng-whimsy/**` | Whimsy agent (SVG component library) |
| `.impeccable/review/`, `.impeccable/QA-FINDINGS.md` | AGENT-1 (QA) — after BUILD_COMPLETE |
| `DESIGN.md`, `.impeccable/design.json`, `.impeccable/copy-diff.md`, `README.md` | AGENT-2 (Docs) |

## Whimsical components (under `src/components/startng-whimsy/`)

| Component | Description |
|---|---|
| `ArcadeSparkle` | Four‑point star with optional lime satellite; one‑shot twinkle |
| `PixelTrail` | Short restrained pixel trail (footprint fade) |
| `GamepadDoodle` | Hand‑drawn controller; lime face button; hover wiggle ≤3px |
| `ArcadeAccent` | Tiny decorative doodle placed around content |
| `WhimsyBackdrop` | Sparse corner marks for a section background |
| `WhimsyBurst` | One‑shot confetti burst fired by `play` prop change |
| `Hallowhimsy` | Halloween motifs (Bat, Ghost, Pumpkin, Cobweb) active Oct 25‑31 only; palette‑only (lime/ink/muted) |
| `CandyCorn` | (imported from `index.js` demo; lime‑and‑ink candy corn SVG) |

All whimsy components:

- Are **decorative**: `aria-hidden="true"`, `focusable="false"`, `pointer-events: none`
- Use **only existing real‑site tokens** (no new `--sngw‑*` colours)
- Honour **`prefers-reduce-motion`** (motion disabled, static decorative SVG remains)
- Add **no new copy** or **new sections** to the homepage

## Verification

| Check | Result |
|---|---|
| `npm run build` | ✅ Passes |
| `npm run lint` | ✅ Passes (0 errors) |
| Copy fidelity | ✅ 31/32 strings PASS vs real site (1 intentional subtitle extension) |
| No new colours | ✅ D2 compliant |
| No invented content | ✅ D8 compliant |
| `prefers-reduce-motion` | ✅ All whimsy gated |

## Message Log

All work steps are logged in `agents_communicate.md` (format: `### HH:MM — <AGENT> — <TYPE>`). Never edit or delete others' entries.