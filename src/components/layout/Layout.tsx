import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  const { pathname } = useLocation()
  const revealRef = useScrollReveal(pathname)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="site-shell" ref={revealRef} id="top">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
