// One-shot scroll reveal for elements marked .sngw-rise.
// Progressive enhancement in both directions:
//   - without JS (or under prefers-reduced-motion, or on ancient browsers)
//     nothing is ever hidden — content is simply visible
//   - with JS, initReveal() arms the hiding class BEFORE first paint
//     (call it from a layout effect / top-level effect), then each element
//     rises+fades in once when it enters the viewport, with a stagger
//     driven by --sngw-rise-delay (set per nth-child in the stylesheet)
// A 900ms failsafe force-reveals everything, so full-page screenshots and
// any observer edge case can never leave content invisible.

export function initReveal() {
  if (typeof window === 'undefined') return () => {}
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}
  if (!('IntersectionObserver' in window)) return () => {}

  const root = document.documentElement
  root.classList.add('sngw-reveal-armed')
  const els = Array.from(document.querySelectorAll('.sngw-rise'))

  const io = new IntersectionObserver(
    (entries) => {
      for (const en of entries) {
        if (en.isIntersecting) {
          en.target.classList.add('sngw-rise--in')
          io.unobserve(en.target)
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
  )
  els.forEach((el) => io.observe(el))

  const failsafe = setTimeout(() => {
    els.forEach((el) => el.classList.add('sngw-rise--in'))
  }, 900)

  return () => {
    clearTimeout(failsafe)
    io.disconnect()
    root.classList.remove('sngw-reveal-armed')
  }
}
