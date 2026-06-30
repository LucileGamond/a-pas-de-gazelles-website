import { useEffect, useRef, useState } from 'react'
import '../styles/header.css'

const navigationItems = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Notre équipe', href: '#equipe' },
  { label: 'Le Trek’in', href: '#trek' },
  { label: 'L’association', href: '#association' },
  { label: 'Cap sur 2027', href: '#preparation' },
  { label: 'Soutenir', href: '#soutien' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const closeWithEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', closeWithEscape)
    return () => window.removeEventListener('keydown', closeWithEscape)
  }, [isMenuOpen])

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__title" href="#accueil" aria-label="À Pas de Gazelles, accueil">
          À Pas de Gazelles
        </a>

        <button
          ref={menuButtonRef}
          className="site-navigation__toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span className="site-navigation__toggle-label">
            {isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          </span>
          <span className="site-navigation__toggle-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav
          id="main-navigation"
          className={`site-navigation${isMenuOpen ? ' site-navigation--open' : ''}`}
          aria-label="Navigation principale"
        >
          <ul className="site-navigation__list">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  className="site-navigation__link"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
