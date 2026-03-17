import { useEffect, useState } from 'react'
import Icon from './Icon'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 520)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      aria-label="Retour en haut"
      className={`scroll-top ${isVisible ? 'is-visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      type="button"
    >
      <Icon name="arrowUp" />
    </button>
  )
}

export default ScrollToTop
