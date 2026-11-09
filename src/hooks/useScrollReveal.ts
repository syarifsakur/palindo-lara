import { useEffect, useRef } from 'react'

/** Observe `.fade-up` elements and add `.is-visible` when they enter the viewport */
export function useScrollReveal(triggerKey?: string) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    )

    // Slight delay to allow DOM transition on route changes
    const timer = setTimeout(() => {
      const targets = el.querySelectorAll('.fade-up')
      targets.forEach((t) => observer.observe(t))
    }, 60)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [triggerKey])

  return ref
}
