import { useEffect, useState } from 'react'
import Icon from './Icon'

function Navbar({ navigation, person }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 920) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleClose = () => setIsOpen(false)

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#hero" aria-label="Retour en haut de page">
          <span className="brand-mark">MM</span>
          <span className="brand-copy">
            <span className="brand-name">{person.name}</span>
            <span className="brand-role">{person.title}</span>
          </span>
        </a>

        <button
          aria-controls="site-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="nav-toggle"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          <Icon name={isOpen ? 'close' : 'menu'} />
        </button>

        <nav
          className={`nav-links ${isOpen ? 'is-open' : ''}`}
          id="site-navigation"
        >
          {navigation.map((item) => (
            <a
              className="nav-link"
              href={item.href}
              key={item.href}
              onClick={handleClose}
            >
              {item.label}
            </a>
          ))}
          <a
            className="button button--ghost button--small nav-cta"
            href="#contact"
            onClick={handleClose}
          >
            Me contacter
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
