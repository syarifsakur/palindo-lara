import { ArrowUpRight, Menu, Search, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import banuataLogo from '../../assets/banuata-logo.png'

const navLinks = [
  { to: '/', label: 'Beranda', num: '01' },
  { to: '/#deskripsi', label: 'Tentang Banua’ta', num: '02' },
  { to: '/#tenaga', label: 'Data Tenaga', num: '03' },
  { to: '/#lembaga', label: 'Data Lembaga', num: '04' },
  { to: '/jelajah', label: 'Jelajah Budaya', num: '05' },
  { to: '/berita', label: 'Berita', num: '06' },
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

  const [currentPath, setCurrentPath] = useState(location.pathname + location.hash)
  if (currentPath !== location.pathname + location.hash) {
    setCurrentPath(location.pathname + location.hash)
    setMenuOpen(false)
  }

  const handleNavClick = (to: string) => {
    setMenuOpen(false)
    if (to.startsWith('/#')) {
      const id = to.replace('/#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="Beranda BANUA’TA Sulawesi Tengah">
          <img className="brand-logo h-10 max-w-[150px] object-contain" src={banuataLogo} alt="BANUA’TA" />
          <span className="brand-divider" />
          <span className="brand-context font-serif tracking-wide text-xs">Basis Data<br /><strong className="text-amber-500 font-bold">Budaya Sulteng</strong></span>
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
              className={location.pathname === link.to || (link.to.startsWith('/#') && location.hash === link.to.replace('/', '')) ? 'active' : ''}
              to={link.to}
              onClick={() => handleNavClick(link.to)}
            >
              <span>{link.num}</span> {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a className="search-button" href="#tenaga" aria-label="Cari Data"><Search size={17} /></a>
          <a className="header-cta" href="#tenaga">Basis Data <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </header>
  )
}
