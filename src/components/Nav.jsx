import { useState } from 'react'
import './Nav.css'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#cases', label: 'Cases' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#especialidades', label: 'Especialidades' },
  { href: '#contato', label: 'Contato' },
]

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#" className="nav__logo" onClick={() => setMenuOpen(false)}>
          <img
            src="/header/logo-header-orange.png"
            alt="André Souza"
            className="nav__logo-icon"
          />
          <span className="nav__logo-text">André Souza</span>
        </a>
        <nav className={`nav__links${menuOpen ? ' nav__links--open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className={`nav__toggle${menuOpen ? ' nav__toggle--open' : ''}`}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Nav
