import { Database, Home, Landmark, Menu, Users, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import banuataLogo from '../../assets/banuata-logo.png'

const NAV_ITEMS = [
  { to: '/', label: 'Beranda', icon: Home },
  { to: '/data-tenaga', label: 'Data Tenaga', icon: Users },
  { to: '/data-lembaga', label: 'Data Lembaga', icon: Landmark },
] as const

export default function BanuataNavbar() {
  const { pathname } = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [mobileMenuOpen])

  return (
    <nav
      ref={navRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-[#3c0a10] via-[#5a1018] to-[#3c0a10] shadow-xl shadow-black/20'
          : 'bg-gradient-to-r from-[#4a1018] via-[#6b1620] to-[#4a1018]'
      }`}
      aria-label="Navigasi BANUA'TA"
    >
      {/* Gold accent line on top */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-[#e7b665] to-transparent" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link to="/" className="group flex items-center gap-3 py-3.5">
          <img
            className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            src={banuataLogo}
            alt="Logo BANUA'TA"
          />
          <div className="hidden sm:flex flex-col border-l border-[#e7b665]/30 pl-3">
            <span className="text-[10px] font-bold text-[#e7b665] tracking-[.18em] uppercase leading-tight">
              Basis Data Budaya
            </span>
            <span className="text-[10px] font-medium text-amber-100/60 tracking-wider uppercase leading-tight">
              Sulawesi Tengah
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon
            const isActive = item.to === '/' ? pathname === '/' : pathname === item.to
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative flex items-center gap-2 rounded-lg px-4 py-2.5 text-[13px] font-bold tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'bg-[#e7b665] text-[#3c0a10] shadow-md shadow-amber-900/20'
                    : 'text-white hover:bg-white/15 hover:text-[#e7b665]'
                }`}
              >
                <Icon size={15} strokeWidth={2.2} />
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/15 text-white hover:bg-white/25 transition-colors active:scale-95"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu (Slide-down) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-white/10 bg-gradient-to-b from-[#3c0a10]/95 to-[#2a070c]/98 backdrop-blur-xl px-4 pb-5 pt-3">
          <div className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon
              const isActive = item.to === '/' ? pathname === '/' : pathname === item.to
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#e7b665] text-[#3c0a10] shadow-lg shadow-amber-900/25'
                      : 'text-white hover:bg-white/15 active:bg-white/20'
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                      isActive ? 'bg-[#3c0a10]/15' : 'bg-white/10'
                    }`}
                  >
                    <Icon size={16} strokeWidth={2} />
                  </span>
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Mobile CTA */}
          <Link
            to="/data-tenaga"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#e7b665] to-[#d4a050] py-3.5 text-sm font-bold text-[#3c0a10] shadow-lg shadow-amber-900/30 active:scale-[.98] transition-transform"
          >
            <Database size={16} />
            Akses Basis Data
          </Link>
        </div>
      </div>
    </nav>
  )
}
