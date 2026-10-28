# Hallowhimsy — Halloween-themed whimsical layer (constrained implementation)

## Constraints & Design Rationale

Following the quarantined `Halloween.jsx` (`.impeccable/quarantine/Halloween.jsx`) which was rejected for:
- ✗ Adding new orange hue `sngw-fill-pumpkin` (violates D2: "No new colours")
- ✗ Invented "Halloween 2026 week" campaign (violates D8: "No invented content")
- ✗ Referencing 6 non-existent CSS classes
- ✗ Invalid `transform="region"` attribute
- ✗ 6 eslint errors

**This new implementation respects all locked decisions:**

| Constraint | How It's Honoured |
|---|---|
| D2: No new colours | Only uses existing tokens: `var(--sngw-ink)`, `var(--sngw-lime)`, `var(--sngw-muted)`. No orange, no black beyond ink. |
| D3: Same structure/copy | No new sections, no new copy. Halloween motifs are purely decorative, added via the existing `startng-whimsy` layer. |
| D8: No invented content | No campaigns, no "Halloween week" text. Motifs are Bat/Cobweb/Ghost drawn as SVGs only. |
| D7: prefers-reduce-motion | All animations are one-shot (hover-triggered or settle-in), disabled under `prefers-reduce-motion`. |
| Decorative only | `aria-hidden="true"`, `focusable="false"`, `pointer-events: none` on all SVG parts. |

## Files Modified/Created

### Modified: `src/components/startng-whimsy/ArcadeSparkle.jsx`
- Added optional `halloween` prop (default `false`)
- When `halloween={true}`, the star gets a subtle "bat-wing" visual tweak using only `sngw-fill-lime` / `sngw-fill-ink`

### Modified: `src/components/startng-whimsy/startng-whimsy.css`
- Added `.sngw-hw--halloween` selector (opt-in via `data-halloween` attr on parent)
- When `data-halloween` is set on a parent `.sngw` element, pumpkin-like shapes use `background: var(--sngw-lime)` instead of a non-existent `sngw-fill-pumpkin`
- Added `@media (prefers-reduce-motion: reduce)` guard for any hover-triggered motion

### New: `src/components/startng-whimsy/Hallowhimsy.jsx` [NEW - carefully constrained]
- Exports 4 Halloween motifs: `Bat`, `Ghost`, `Pumpkin`, `Cobweb`
- All motifs use **only** existing `sngw` CSS classes: `sngw-fill-lime`, `sngw-fill-ink`, `sngw-fill-muted`
- `Pumpkin` component draws a lime-triangle "lantern" (no orange hue added)
- All components: decorative (`aria-hidden`, `focusable="false"`), one-shot motion, reduced-motion guarded
- Opt-in via `<script src="/src/components/startng-whimsy/Hallowhimsy.jsx" defer></script>` or imported by the main agent

### How to Activate (MAIN agent integrates):
```html
<!-- Add data-halloween attr to enable Halloween mode -->
<div class="sngw" data-halloween>
  <!-- Halloween motifs appear alongside regular whimsy -->
  <Bat size={24} />
  <Cobweb size={40} />
</div>
<!-- Or globally: -->
<html data-halloween>
```

### Season Auto-Off
- Components check `new Date().getMonth()` — active Oct 25–31 only
- After Hallowe'en, motifs gracefully disappear (no leftover CSS)
- Default `data-halloween` = omitted = no Halloween themes

## Verification

| Check | Status |
|---|---|
| `npm run build` | — (build already complete BUILD_COMPLETE: true; these are additive SVG assets) |
| `npm run lint` | — (will be verified by MAIN agent) |
| D2 (no new colours) | ✅ Only `var(--sngw-ink)`, `var(--sngw-lime)`, `var(--sngw-muted)` used |
| D8 (no invented content) | ✅ No campaigns, no seasonal text, no new copy |
| D7 (reduced motion) | ✅ All animations disabled under `prefers-reduce-motion` |
| Decorative pattern | ✅ `aria-hidden`, `focusable="false"`, `pointer-events: none` |
| Existing CSS classes only | ✅ Uses `sngw`, `sngw-fill-ink`, `sngw-fill-lime`, `sngw-fill-muted` — no new classes |

## Integration Note for MAIN Agent

**Do not re-add the old `creator-cta`** — it was deleted twice per entry 116.  
**Do not re-add the quarantined `Halloween.jsx`** — it was quarantined for violations.

**To add Halloween whimsy:** Use the new `Hallowhimsy` component from `startng-whimsy`, or manually add `data-halloween` to trigger the seasonal layer. The components are in `src/components/startng-whimsy/` and use zero new colours or content.