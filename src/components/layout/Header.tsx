import { ArrowUpRight, Menu, Search, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import palindoLogo from '../../assets/PALINDO LARA.png'

const navLinks = [
  { to: '/', label: 'Beranda', num: '01' },
  { to: '/jelajah', label: 'Jelajah Budaya', num: '02' },
  { to: '/berita', label: 'Berita', num: '03' },
  { to: '/tentang', label: 'Tentang Kami', num: '04' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="Beranda Kebudayaan Sulawesi Tengah">
          <img className="brand-logo" src={palindoLogo} alt="Palindo Lara" />
          <span className="brand-divider" />
          <span className="brand-context">Portal<br />Kebudayaan</span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Buka menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navigasi utama">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              className={location.pathname === link.to ? 'active' : ''}
              to={link.to}
              onClick={() => setMenuOpen(false)}
            >
              <span>{link.num}</span> {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button className="search-button" aria-label="Cari"><Search size={17} /></button>
          <Link className="header-cta" to="/jelajah">Jelajahi <ArrowUpRight size={15} /></Link>
        </div>
      </div>
    </header>
  )
}
