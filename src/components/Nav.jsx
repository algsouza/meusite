import './Nav.css'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#cases', label: 'Cases' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#especialidades', label: 'Especialidades' },
  { href: '#contato', label: 'Contato' },
]

function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#" className="nav__logo">
          Andre Pizza
        </a>
        <nav className="nav__links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Nav
