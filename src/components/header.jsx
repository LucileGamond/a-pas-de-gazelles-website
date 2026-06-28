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
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__title" href="#accueil" aria-label="À Pas de Gazelles, accueil">
          À Pas de Gazelles
        </a>

        <nav className="site-navigation" aria-label="Navigation principale">
          <ul className="site-navigation__list">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a className="site-navigation__link" href={item.href}>
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
