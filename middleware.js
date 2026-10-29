import { next } from '@vercel/functions'

// Vercel Routing Middleware — läuft vor Cache und SPA-Fallback (rewrite → index.html).
// Entfernte Inhalte antworten mit 410 Gone, damit Google sie sauber aus dem Index
// nimmt (kein Redirect, kein 200-Soft-404 durch den SPA-Fallback).
//
// - Projekt "Frontier" (entfernt 29.10.2026): jeder Pfad, der "frontier" enthält —
//   /projekte/frontier, Unterpfade, Trailing Slash, /portfolio-item/frontier,
//   Assets unter /projects/frontier/*, alte WordPress-Uploads.
// - /og-image.jpg: altes Social-Vorschaubild zeigte Frontier (ersetzt durch /og-crx.jpg).
const GONE = [/frontier/i]
const GONE_EXACT = new Set(['/og-image.jpg'])

export const config = {
  matcher: ['/:path(.*[Ff][Rr][Oo][Nn][Tt][Ii][Ee][Rr].*)', '/og-image.jpg'],
}

export default function middleware(request) {
  let path = new URL(request.url).pathname
  try { path = decodeURIComponent(path) } catch {}

  if (!GONE_EXACT.has(path) && !GONE.some(re => re.test(path))) return next()

  return new Response(
    '<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="robots" content="noindex">' +
      '<title>Inhalt entfernt – CRX Real Estate</title></head><body style="font-family:sans-serif;padding:3rem">' +
      '<h1>Dieser Inhalt ist nicht mehr verfügbar.</h1><p><a href="/projekte">Zu unseren Projekten</a></p></body></html>',
    {
      status: 410,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Robots-Tag': 'noindex',
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
    },
  )
}
