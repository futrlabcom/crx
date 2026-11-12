import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { getConsent } from '../lib/analytics'

// Standortkarte auf den Projektseiten (MapLibre GL + MapTiler-Kacheln).
//
// - Key kommt aus der Umgebungsvariable VITE_MAPTILER_KEY (Vercel).
// - Position: project.geo.coords ([lng, lat]) hat Vorrang, sonst wird
//   project.geo.q einmalig über die MapTiler-Geocoding-API aufgelöst.
// - DSGVO: Karte lädt erst nach Cookie-Einwilligung oder nach Klick auf
//   „Karte laden" (Zwei-Klick-Lösung), weil dabei die IP an MapTiler geht.
// - Schlägt etwas fehl (kein Key, Adresse nicht gefunden, Stil nicht ladbar),
//   bleibt der bisherige Raster-Platzhalter stehen.

const KEY = import.meta.env.VITE_MAPTILER_KEY
const STYLE_URL = `https://api.maptiler.com/maps/dataviz-dark/style.json?key=${KEY}`
const MAP_CONSENT_KEY = 'crx-map-consent'

function hasMapConsent() {
  if (getConsent() === 'granted') return true
  try {
    return localStorage.getItem(MAP_CONSENT_KEY) === 'granted'
  } catch {
    return false
  }
}

async function resolveCoords(geo) {
  if (Array.isArray(geo.coords)) return geo.coords

  const cacheKey = `crx-geo:${geo.q}`
  try {
    const cached = sessionStorage.getItem(cacheKey)
    if (cached) return JSON.parse(cached)
  } catch { /* ohne Cache weiter */ }

  const params = new URLSearchParams({ key: KEY, limit: '1', language: 'de' })
  if (geo.country) params.set('country', geo.country)
  const res = await fetch(
    `https://api.maptiler.com/geocoding/${encodeURIComponent(geo.q)}.json?${params}`
  )
  if (!res.ok) throw new Error(`Geocoding ${res.status}`)
  const feature = (await res.json()).features?.[0]
  const coords =
    feature?.center ||
    (feature?.geometry?.type === 'Point' ? feature.geometry.coordinates : null)
  if (!coords) throw new Error('Adresse nicht gefunden')

  try {
    sessionStorage.setItem(cacheKey, JSON.stringify(coords))
  } catch { /* egal */ }
  return coords
}

// Basisstil auf die warmen CRX-Töne umfärben.
function applyCrxPalette(map) {
  const set = (id, prop, val) => {
    try { map.setPaintProperty(id, prop, val) } catch { /* Layer ohne diese Eigenschaft */ }
  }
  for (const layer of map.getStyle().layers) {
    const src = (layer['source-layer'] || '').toLowerCase()
    const id = layer.id.toLowerCase()
    const isWater = src.includes('water') || id.includes('water')

    if (layer.type === 'background') {
      set(layer.id, 'background-color', '#171512')
    } else if (layer.type === 'fill') {
      set(layer.id, 'fill-color', isWater ? '#0A0907' : src === 'building' ? '#24201B' : '#1C1916')
      if (src === 'building') set(layer.id, 'fill-outline-color', '#2E2A24')
    } else if (layer.type === 'fill-extrusion') {
      set(layer.id, 'fill-extrusion-color', '#24201B')
    } else if (layer.type === 'line') {
      set(
        layer.id,
        'line-color',
        isWater ? '#0A0907' : src.includes('transportation') ? '#3F392F' : '#2A2620'
      )
    } else if (layer.type === 'symbol') {
      set(layer.id, 'text-color', '#8C8478')
      set(layer.id, 'text-halo-color', '#0A0907')
      set(layer.id, 'icon-opacity', 0.4)
    }
  }
}

function Placeholder({ title, showPin }) {
  return (
    <>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,187,160,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(201,187,160,0.06) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      {showPin && (
        <div className="absolute top-[45%] left-[55%]">
          <div
            className="w-4 h-4 bg-taupe-500 rounded-full"
            style={{ boxShadow: '0 0 0 8px rgba(138,122,92,0.3), 0 0 0 16px rgba(138,122,92,0.15)' }}
          />
          <div className="absolute -top-8 left-6 font-display text-sm text-taupe-100">{title}</div>
        </div>
      )}
    </>
  )
}

export default function ProjectMap({ project }) {
  const { geo, title } = project
  const boxRef = useRef(null)
  const mapNodeRef = useRef(null)
  const [allowed, setAllowed] = useState(hasMapConsent)
  const [inView, setInView] = useState(false)
  const [status, setStatus] = useState('idle') // idle | ready | error

  // Erst laden, wenn der Abschnitt in die Nähe des Viewports kommt.
  useEffect(() => {
    const node = boxRef.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      entries => {
        if (entries.some(e => e.isIntersecting)) {
          setInView(true)
          io.disconnect()
        }
      },
      { rootMargin: '400px' }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!allowed || !inView) return
    if (!KEY) {
      setStatus('error')
      return
    }

    let cancelled = false
    let map = null
    setStatus('idle')

    ;(async () => {
      try {
        const [{ default: maplibregl }, coords] = await Promise.all([
          import('maplibre-gl'),
          resolveCoords(geo),
          import('maplibre-gl/dist/maplibre-gl.css'),
        ])
        if (cancelled || !mapNodeRef.current) return

        let loaded = false
        map = new maplibregl.Map({
          container: mapNodeRef.current,
          style: STYLE_URL,
          center: coords,
          zoom: geo.zoom ?? 14,
          attributionControl: { compact: true },
          cooperativeGestures: true, // Seite scrollt normal; Zoom per Strg/⌘ + Scrollen bzw. zwei Fingern
          dragRotate: false,
          pitchWithRotate: false,
        })
        map.touchZoomRotate.disableRotation()
        map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'bottom-right')

        map.on('style.load', () => applyCrxPalette(map))
        map.on('error', () => {
          if (!loaded && !cancelled) setStatus('error')
        })
        map.once('load', () => {
          loaded = true
          if (cancelled) return

          const pin = document.createElement('div')
          pin.className = 'crx-map-pin'
          const dot = document.createElement('span')
          dot.className = 'crx-map-pin__dot'
          const label = document.createElement('span')
          label.className = 'crx-map-pin__label'
          label.textContent = title
          pin.append(dot, label)
          new maplibregl.Marker({ element: pin, anchor: 'center' }).setLngLat(coords).addTo(map)

          setStatus('ready')
        })
      } catch {
        if (!cancelled) setStatus('error')
      }
    })()

    return () => {
      cancelled = true
      if (map) map.remove()
    }
  }, [allowed, inView, geo, title])

  const allowMap = () => {
    try {
      localStorage.setItem(MAP_CONSENT_KEY, 'granted')
    } catch { /* gilt dann nur für diesen Seitenaufruf */ }
    setAllowed(true)
  }

  return (
    <div
      ref={boxRef}
      className="relative aspect-[4/3] bg-stone-800 border border-white/10 rounded-sm overflow-hidden"
    >
      <Placeholder title={title} showPin={allowed} />

      {allowed && status !== 'error' && (
        <div
          ref={mapNodeRef}
          className={`crx-map absolute inset-0 transition-opacity duration-700 ${status === 'ready' ? 'opacity-100' : 'opacity-0'}`}
          aria-label={`Karte: Standort ${title}`}
        />
      )}

      {!allowed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <button
            type="button"
            onClick={allowMap}
            className="px-6 py-3.5 bg-taupe-500 hover:bg-taupe-700 text-white text-xs uppercase tracking-widest transition-colors"
          >
            Karte laden
          </button>
          <p className="mt-5 max-w-xs text-xs leading-relaxed text-white/50">
            Beim Laden der Karte werden Daten an den Kartendienst MapTiler übertragen.{' '}
            <Link to="/datenschutz" className="text-taupe-100 underline underline-offset-2 hover:text-white transition-colors">
              Datenschutz
            </Link>
          </p>
        </div>
      )}
    </div>
  )
}
