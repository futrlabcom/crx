import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ThemeSwitcher from './components/ThemeSwitcher'
import Home from './pages/Home'
import Unternehmen from './pages/Unternehmen'
import Projekte from './pages/Projekte'
import ProjektDetail from './pages/ProjektDetail'
import Fonts from './pages/Fonts'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/unternehmen" element={<Unternehmen />} />
          <Route path="/projekte" element={<Projekte />} />
          <Route path="/projekte/:slug" element={<ProjektDetail />} />
          <Route path="/fonts" element={<Fonts />} />
        </Routes>
      </main>
      <Footer />
      <ThemeSwitcher />
    </>
  )
}
