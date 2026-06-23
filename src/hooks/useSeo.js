import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE = 'https://crx-re.com'
const BASE_TITLE = 'CRX Real Estate'

// Pro Pfad: title + meta-description. Detailseiten (/projekte/:slug) bekommen
// einen generischen Titel — der wird in ProjektDetail per setDocumentMeta
// überschrieben falls feiner gewünscht.
const ROUTES = {
  '/':              { title: 'CRX Real Estate – Projektentwicklung & Bestand in Berlin', desc: 'CRX entwickelt und hält Immobilien in Berlin und ausgewählten deutschen Städten. 750 Mio € Projektvolumen · 11 Projekte · 4 Städte · 12 Jahre Erfahrung.' },
  '/unternehmen':   { title: 'Unternehmen – CRX Real Estate', desc: 'CRX Real Estate – Berliner Projektentwickler und Bestandshalter. Über 750 Mio € Projektvolumen, geführt von Christoph Ruppmann.' },
  '/projekte':      { title: 'Projekte – CRX Real Estate', desc: 'Neubauprojekte und Bestandsobjekte von CRX Real Estate in Berlin und ausgewählten deutschen Städten.' },
  '/investments':   { title: 'Investments – CRX Real Estate', desc: 'Entwicklung, Bestand und Venture Capital – die drei Investment-Stränge von CRX Real Estate.' },
  '/ankaufsprofil': { title: 'Ankaufsprofil – CRX Real Estate', desc: 'CRX kauft diskret und entscheidet schnell. Wir suchen Entwicklungsgrundstücke und Bestandsobjekte in Berlin und wachstumsstarken Lagen.' },
  '/impressum':     { title: 'Impressum – CRX Real Estate', desc: 'Impressum der CRX Management GmbH, Berlin.' },
  '/datenschutz':   { title: 'Datenschutz – CRX Real Estate', desc: 'Datenschutzerklärung der CRX Management GmbH.' },
}

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function useSeo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = ROUTES[pathname]
    const canonical = `${SITE}${pathname === '/' ? '/' : pathname}`

    if (meta) {
      document.title = meta.title
      setMeta('name', 'description', meta.desc)
      setMeta('property', 'og:title', meta.title)
      setMeta('property', 'og:description', meta.desc)
      setMeta('name', 'twitter:title', meta.title)
      setMeta('name', 'twitter:description', meta.desc)
    } else if (pathname.startsWith('/projekte/')) {
      // Detail-Titel kommt aus ProjektDetail selbst; hier nur ein sinnvoller Default.
      document.title = `Projekt – ${BASE_TITLE}`
    }

    setMeta('property', 'og:url', canonical)
    setCanonical(canonical)
  }, [pathname])
}
