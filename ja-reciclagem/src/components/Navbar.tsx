import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../assets/logo.jpeg'
import { WHATSAPP_NUMBER, WHATSAPP_URL } from '../constants'
import './Navbar.css'

const navLinks = [
  { href: '#sobre',      label: 'Sobre Nós' },
  { href: '#servicos',   label: 'Serviços' },
  { href: '#localizacao',label: 'Localização' },
  { href: '#contato',    label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#hero" className="navbar__brand">
          <img src={logo} alt="J.A Reciclagem logo" className="navbar__logo" />
          <span className="navbar__name">
            J.A <span>Reciclagem</span>
          </span>
        </a>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary navbar__cta"
            onClick={handleNavClick}
          >
            <Phone size={16} />
            {WHATSAPP_NUMBER}
          </a>
        </nav>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
