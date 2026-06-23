import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logoWhite from '../assets/logo_white.png'

const links = [
  { to: '/unternehmen', label: 'Unternehmen' },
  { to: '/projekte',    label: 'Projekte' },
  { to: '/investments', label: 'Investments' },
  { to: '/ankaufsprofil', label: 'Ankaufsprofil' },
  { to: '#kontakt',     label: 'Kontakt' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/95 backdrop-blur-sm py-4' : 'py-6'
      }`}
        style={!scrolled ? { background: 'linear-gradient(180deg, rgba(10,9,7,0.7) 0%, transparent 100%)' } : {}}
      >
        <div className="container-crx px-8 lg:px-12 flex justify-between items-center">
          <Link to="/" aria-label="CRX Real Estate Startseite">
            <img src={logoWhite} alt="CRX Real Estate" className="h-10 lg:h-12 w-auto" />
          </Link>

          <div className="hidden md:flex gap-9 text-xs tracking-wider uppercase">
            {links.map(l => l.disabled ? (
              <span key={l.label} className="text-white/40 cursor-not-allowed">{l.label}</span>
            ) : l.to.startsWith('#') ? (
              <a key={l.label} href={l.to} className="text-white/85 hover:text-taupe-100 transition-colors">{l.label}</a>
            ) : (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  `transition-colors ${isActive ? 'text-taupe-100' : 'text-white/85 hover:text-taupe-100'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Menü"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-ink md:hidden flex flex-col items-center justify-center gap-8 text-white">
          {links.map(l => l.disabled ? (
            <span key={l.label} className="text-white/40 text-lg uppercase tracking-wider">{l.label}</span>
          ) : l.to.startsWith('#') ? (
            <a key={l.label} href={l.to} onClick={() => setOpen(false)} className="text-lg uppercase tracking-wider hover:text-taupe-100">{l.label}</a>
          ) : (
            <Link key={l.label} to={l.to} onClick={() => setOpen(false)} className="text-lg uppercase tracking-wider hover:text-taupe-100">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
