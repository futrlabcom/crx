import { Link } from 'react-router-dom'
import logoWhite from '../assets/logo_white.png'
import { contact } from '../data/projects'

export default function Footer() {
  return (
    <footer className="bg-ink text-white/50 text-xs border-t border-white/5" id="kontakt">
      <div className="container-crx px-8 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/5">
          <div className="md:col-span-1">
            <img src={logoWhite} alt="CRX Real Estate" className="h-11 w-auto mb-5" />
            <p className="leading-relaxed max-w-xs">
              {contact.company}<br />
              {contact.street}<br />
              {contact.city}<br />
              <a href={`tel:${contact.phoneRaw}`} className="hover:text-taupe-100 transition-colors">{contact.phone}</a>
            </p>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-widest mb-5 font-medium">Navigation</h4>
            <Link to="/unternehmen" className="block py-1.5 hover:text-taupe-100 transition-colors">Unternehmen</Link>
            <Link to="/projekte" className="block py-1.5 hover:text-taupe-100 transition-colors">Projekte</Link>
            <Link to="/investments" className="block py-1.5 hover:text-taupe-100 transition-colors">Investments</Link>
            <Link to="/ankaufsprofil" className="block py-1.5 hover:text-taupe-100 transition-colors">Ankaufsprofil</Link>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-widest mb-5 font-medium">Kontakt</h4>
            <Link to="/kontakt" className="block py-1.5 hover:text-taupe-100 transition-colors">Kontaktformular</Link>
            <a href={`tel:${contact.phoneRaw}`} className="block py-1.5 hover:text-taupe-100 transition-colors">{contact.phone}</a>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-widest mb-5 font-medium">Rechtliches</h4>
            <Link to="/impressum" className="block py-1.5 hover:text-taupe-100 transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="block py-1.5 hover:text-taupe-100 transition-colors">Datenschutz</Link>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event('crx:open-cookie-settings'))}
              className="block py-1.5 text-left hover:text-taupe-100 transition-colors"
            >
              Cookie-Einstellungen
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between gap-2 text-xs">
          <span>© {new Date().getFullYear()} CRX Real Estate</span>
          <a href="https://futrlab.com" target="_blank" rel="noopener noreferrer" className="hover:text-taupe-100 transition-colors">
            realized by futrlab.com
          </a>
        </div>
      </div>
    </footer>
  )
}
