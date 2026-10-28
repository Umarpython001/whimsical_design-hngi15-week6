// SparkleTrail — tiny one-shot sparkles that pop under the pointer.
// The "super duper" layer, kept honest:
//   - motion is USER-DRIVEN: sparkles only spawn on pointermove
//   - throttled to ~9/s and capped at 12 concurrent pops
//   - each pop lives ~0.6s (one-shot scale+fade, no loops)
//   - pointer:fine devices only; fully off under prefers-reduced-motion
//   - fixed overlay, pointer-events none, aria-hidden — it can never
//     intercept a click or reach an accessibility tree
// Palette: the page's own lime / ink / pumpkin tokens, nothing else.

import { useEffect, useRef, useState } from 'react'
import './startng-whimsy.css'

const TONES = ['sngw-fill-lime', 'sngw-fill-pumpkin', 'sngw-fill-ink']

// Four-point star, viewBox 0 0 16 16
const STAR = 'M8 0l1.8 6.2L16 8l-6.2 1.8L8 16 6.2 9.8 0 8l6.2-1.8Z'

export function SparkleTrail({ className = '', style }) {
  const [pops, setPops] = useState([])
  const last = useRef(0)
  const seq = useRef(0)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)')
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!fine.matches || calm.matches) return undefined

    let alive = true
    const timers = []
    const onMove = (e) => {
      const now = performance.now()
      if (now - last.current < 110) return
      last.current = now
      const id = (seq.current += 1)
      const pop = {
        id,
        x: e.clientX,
        y: e.clientY,
        cls: TONES[id % TONES.length],
        size: 7 + (id % 3) * 3,
        rot: (id * 47) % 360,
        dur: 520 + (id % 4) * 60,
      }
      if (!alive) return
      setPops((ps) => [...ps.slice(-11), pop])
      timers.push(
        setTimeout(() => {
          if (alive) setPops((ps) => ps.filter((q) => q.id !== id))
        }, pop.dur + 80),
      )
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      alive = false
      timers.forEach(clearTimeout)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <div className={`sngw-trailfx ${className}`} style={style} aria-hidden="true">
      {pops.map((p) => (
        <svg
          key={p.id}
          className={`sngw-trailfx__pop ${p.cls}`}
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            rotate: `${p.rot}deg`,
            animationDuration: `${p.dur}ms`,
          }}
          viewBox="0 0 16 16"
          aria-hidden="true"
          focusable="false"
        >
          <path d={STAR} />
        </svg>
      ))}
    </div>
  )
}
