import { useEffect, useRef, useState } from 'react'

function Reveal({
  as = 'div',
  children,
  className = '',
  delay = 0,
  style,
  ...props
}) {
  const ref = useRef(null)
  const Element = as
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    const element = ref.current

    if (!element || isVisible) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.18,
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <Element
      {...props}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      ref={ref}
      style={{
        ...style,
        '--reveal-delay': `${delay}ms`,
      }}
    >
      {children}
    </Element>
  )
}

export default Reveal
