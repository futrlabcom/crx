import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import useSeo from './hooks/useSeo'
import Home from './pages/Home'
import Unternehmen from './pages/Unternehmen'
import Projekte from './pages/Projekte'
import ProjektDetail from './pages/ProjektDetail'
import Ankaufsprofil from './pages/Ankaufsprofil'
import Investments from './pages/Investments'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import Fonts from './pages/Fonts'
import Kontakt from './pages/Kontakt'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function SeoManager() {
  useSeo()
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SeoManager />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/unternehmen" element={<Unternehmen />} />
          <Route path="/projekte" element={<Projekte />} />
          <Route path="/projekte/:slug" element={<ProjektDetail />} />
          <Route path="/ankaufsprofil" element={<Ankaufsprofil />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/fonts" element={<Fonts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}
