import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects, projectStats, contact } from '../data/projects'
import ProjectMedia from '../components/ProjectMedia'
import PartnerLogos from '../components/PartnerLogos'
import logoWhite from '../assets/logo_white.png'

// Hero spielt nur Walsrode im Loop (CRX-Intro-Video entfernt 12.06.2026)
const HERO_VIDEO = '/projects/walsrode/hero.mp4'

// Hero rotiert durch 3 Titel/Subline-Varianten alle 5s.
const HERO_VARIANTS = [
  {
    line1: 'Für das,',
    line2: 'was bleibt.',
    subtitle: 'Wir entwickeln und halten Immobilien in Berlin und ausgewählten deutschen Städten — gebaut für Generationen, nicht für die nächste Konjunktur.',
  },
  {
    line1: 'Räume,',
    line2: 'die bleiben.',
    subtitle: 'Projektentwicklung und Bestandshaltung unter einem Dach. Wir bauen für Jahrzehnte, nicht für den schnellen Verkauf.',
  },
  {
    line1: 'Entwickeln.',
    line2: 'Halten. Bleiben.',
    subtitle: 'Mit Projekten in Berlin und ganz Deutschland schaffen wir Bestand, der trägt — wirtschaftlich, ökologisch, städtebaulich.',
  },
]
const HERO_ROTATION_MS = 5000

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}

export default function Home() {
  // Show top 6 neubau projects on home — uniform clean grid like /projekte
  const showcase = projects.filter(p => p.type === 'neubau').slice(0, 6)

  // Hero title rotation — läuft immer (außer reduced-motion)
  const [variantIdx, setVariantIdx] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const id = setInterval(() => {
      setVariantIdx(i => (i + 1) % HERO_VARIANTS.length)
    }, HERO_ROTATION_MS)
    return () => clearInterval(id)
  }, [])

  const variant = HERO_VARIANTS[variantIdx]

  return (
    <>
      {/* ─── 1 · HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[640px] h-[78vh] bg-ink text-white overflow-hidden flex flex-col justify-center">
        <video
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Vertikaler Scrim — oben/unten dunkel */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,9,7,0.55) 0%, rgba(10,9,7,0.3) 35%, rgba(10,9,7,0.9) 100%)',
          }}
        />
        {/* Horizontaler Scrim — links dunkel für Titel-Lesbarkeit */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.30) 45%, rgba(0,0,0,0) 75%)',
          }}
        />
        <div className="absolute inset-0 grid-overlay pointer-events-none opacity-50" />

        {/* Content — linksbündig, vertikal mittig im Hero, klarer Abstand zum Nav */}
        <div className="container-crx px-8 lg:px-12 relative z-10 w-full pt-24 lg:pt-32">
          {/* Titel — rotiert. min-height knapp an realer Titelhöhe (2 Zeilen) */}
          <div className="relative min-h-[8.5rem] sm:min-h-[11rem] lg:min-h-[14rem]">
            <h1
              key={`title-${variantIdx}`}
              className="font-display motion-safe:animate-fade-up"
              style={{
                fontSize: 'clamp(4.25rem, 8.5vw, 9rem)',
                fontWeight: 600,
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                animationDuration: '0.6s',
              }}
            >
              {variant.line1}<br />
              <em className="not-italic text-taupe-100" style={{ fontWeight: 300 }}>
                {variant.line2}
              </em>
            </h1>
          </div>

          {/* Subtitle — rotiert synchron, eng am Titel */}
          <div className="relative min-h-[5rem] mt-2 lg:mt-3 mb-9 max-w-[52ch]">
            <p
              key={`sub-${variantIdx}`}
              className="leading-relaxed text-white/85 motion-safe:animate-fade-up"
              style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
                fontWeight: 300,
                animationDuration: '0.6s',
              }}
            >
              {variant.subtitle}
            </p>
          </div>

          {/* Button — statisch */}
          <Link
            to="/projekte"
            className="inline-flex items-center gap-3.5 px-7 py-4 border border-white/25 hover:bg-taupe-500 hover:border-taupe-500 text-white text-xs uppercase tracking-widest transition-all duration-300 group"
          >
            Unsere Projekte
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>

          {/* Slider-Dots */}
          <div className="flex items-center gap-2 mt-10" role="tablist" aria-label="Hero-Variante wählen">
            {HERO_VARIANTS.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === variantIdx}
                aria-label={`Variante ${i + 1}`}
                onClick={() => setVariantIdx(i)}
                className={`h-px transition-all duration-500 ${
                  i === variantIdx ? 'w-8 bg-taupe-100' : 'w-5 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] text-white/35">
          SCROLL ↓
        </div>
      </section>

      {/* ─── 2 · PARTNERS (Trust-Anchor) ───────────────────────────── */}
      <PartnerLogos variant="compact" caption="In Kooperation mit" />

      {/* ─── 3 · ÜBER UNS — Kurz-Preview ───────────────────────────── */}
      <section className="bg-bone py-24 lg:py-32 px-8 lg:px-12">
        <div className="container-crx grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-24">
          <div>
            <div className="section-num">— 01 / Über uns</div>
            <h2 className="display-h2 text-5xl md:text-6xl lg:text-[68px] leading-[1.02]">
              Aus Berlin.<br />
              <em className="text-taupe-500">Für das, was bleibt.</em>
            </h2>
          </div>
          <div className="pt-3 flex flex-col">
            <p className="text-lg leading-relaxed text-stone-600 mb-5 max-w-xl">
              CRX entwickelt und hält. Wir vereinen Projektentwicklung und Bestandshaltung unter einem Dach.
            </p>
            <p className="text-lg leading-relaxed text-stone-600 mb-8 max-w-xl">
              Wir entwickeln nicht für die nächste Konjunktur, sondern für die nächsten Jahrzehnte – ökologisch, ökonomisch, städtebaulich.
            </p>
            <Link
              to="/unternehmen"
              className="inline-flex items-center gap-3 self-start text-taupe-700 hover:text-char text-xs uppercase tracking-widest border-b border-taupe-300 hover:border-char pb-1 transition-colors"
            >
              Mehr über uns →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 4 · AUSGEWÄHLTE PROJEKTE ─────────────────────────────── */}
      <section className="bg-bone pb-24 lg:pb-32 px-8 lg:px-12" id="projekte">
        <div className="container-crx mb-14 lg:mb-20 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end">
          <div className="max-w-3xl">
            <div className="section-num">— 02 / Portfolio</div>
            <h2 className="display-h2 text-4xl md:text-5xl lg:text-[64px] mb-6">
              Ausgewählte <em className="text-taupe-500">Projekte.</em>
            </h2>
            <p className="text-lg lg:text-xl text-stone-600 leading-relaxed max-w-2xl">
              Elf Vorhaben in vier Städten, über 235.000 m² Bruttogeschossfläche – ein Auszug aus dem Portfolio, das wir entwickeln und halten.
            </p>
          </div>
          <Link
            to="/projekte"
            className="self-start lg:self-end text-xs uppercase tracking-widest text-stone-800 border-b border-taupe-500 pb-1 hover:text-taupe-500 transition-colors whitespace-nowrap"
          >
            Alle Projekte →
          </Link>
        </div>

        <div className="container-crx grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-16 lg:gap-y-24">
          {showcase.map(p => (
            <Link key={p.slug} to={`/projekte/${p.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-sand mb-6">
                <ProjectMedia
                  image={p.cardImage}
                  video={p.cardVideo}
                  imgFilter={p.cardImageFilter}
                  alt={p.title}
                  imgClassName="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-baseline justify-between mb-3 text-[11px] tracking-widest uppercase text-stone-400">
                <span>{p.hide_location ? '' : p.location}</span>
                <span>{p.status}{p.year ? ` · ${p.year}` : ''}</span>
              </div>
              <h3 className="font-display font-light text-3xl lg:text-[40px] leading-[1.05] tracking-[-0.02em] text-stone-800 mb-2">
                {p.title}
              </h3>
              <p className="text-base text-stone-600">
                {p.nutzung}
                {p.bgf && <><span className="text-stone-400 mx-1.5">·</span> {p.bgf}</>}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── 5 · TRACK RECORD — Zahlen die zählen ─────────────────── */}
      <section className="bg-ink text-white py-24 lg:py-28 px-8 lg:px-12 border-t border-white/5">
        <div className="container-crx mb-12 lg:mb-16">
          <div className="section-num !text-taupe-100">— Track Record</div>
          <h2 className="display-h2 text-3xl md:text-4xl lg:text-[44px] max-w-2xl">
            Zahlen, die <em className="text-taupe-100">zählen.</em>
          </h2>
        </div>
        <div className="container-crx grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6">
          {projectStats.map((s, i) => (
            <div
              key={i}
              className={`px-1 lg:px-6 ${i > 0 ? 'lg:border-l border-white/10' : ''}`}
            >
              <div className="font-display font-light text-5xl md:text-6xl lg:text-[64px] leading-none tracking-[-0.03em]">
                {s.num}
                {s.unit && <span className="text-base lg:text-lg text-taupe-100 ml-1.5">{s.unit}</span>}
              </div>
              <div className="text-[10px] tracking-widest uppercase text-white/45 mt-5">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 6 · DAS UNTERNEHMEN — Preview ─────────────────────────── */}
      <section className="bg-cream py-24 lg:py-32 px-8 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Office-Bild — Platzhalter bis Asset folgt */}
          <div
            className="relative aspect-[4/3] overflow-hidden flex items-center justify-center"
            style={{ background: 'radial-gradient(ellipse at 50% 50%, #2E2A24 0%, #0A0907 75%)' }}
          >
            <img
              src={logoWhite}
              alt=""
              aria-hidden="true"
              className="h-12 lg:h-16 w-auto opacity-25"
            />
            <span className="absolute bottom-4 left-5 text-[10px] tracking-widest uppercase text-white/40">
              Office · Bild folgt
            </span>
          </div>

          <div>
            <div className="section-num">— 03 / Das Unternehmen</div>
            <h2 className="font-display font-light text-4xl md:text-5xl lg:text-[56px] tracking-[-0.02em] leading-[1.05] mb-8">
              Berliner Projektentwickler und <em className="text-taupe-500">Bestandshalter.</em>
            </h2>

            <p className="text-base lg:text-lg text-stone-600 leading-relaxed mb-5 max-w-xl">
              CRX Real Estate entwickelt und hält. Unser Schwerpunkt liegt in Berlin – ergänzt durch ausgewählte Vorhaben in deutschen Großstädten.
            </p>
            <p className="text-base lg:text-lg text-stone-600 leading-relaxed mb-10 max-w-xl">
              Wir entwickeln nicht für die nächste Konjunktur, sondern für die nächsten Jahrzehnte. Bestand ist für uns kein Restposten, sondern Strategie.
            </p>

            <Link
              to="/unternehmen"
              className="inline-flex items-center gap-3 text-taupe-700 hover:text-char text-xs uppercase tracking-widest border-b border-taupe-300 hover:border-char pb-1 transition-colors"
            >
              Mehr über uns →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 7 · KONTAKT-CTA ──────────────────────────────────────── */}
      <section className="bg-ink text-white py-28 lg:py-36 px-8 lg:px-12 relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(168,152,120,0.16) 0%, transparent 60%)' }}
        />
        <div className="container-crx relative z-10 text-center mb-14 lg:mb-16">
          <div className="section-num !text-taupe-100">— 04 / Kontakt</div>
          <h2 className="display-h2 text-4xl md:text-5xl lg:text-[64px] mb-5">
            Kontaktiere <em className="text-taupe-100">uns.</em>
          </h2>
          <p className="text-lg leading-relaxed text-white/65 max-w-xl mx-auto">
            Investoren, Mieter, Partner. Wir nehmen uns Zeit.
          </p>
        </div>

        <div className="container-crx relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Card 1 — Allgemeiner Kontakt */}
          <a
            href={`mailto:${contact.email}`}
            className="group block bg-char border border-white/10 hover:border-taupe-300 hover:bg-white/[0.04] p-8 lg:p-10 transition-colors duration-300"
          >
            <div className="text-[10px] tracking-widest uppercase text-taupe-100 mb-5">
              Allgemeiner Kontakt
            </div>
            <h3 className="font-display font-light text-2xl lg:text-3xl tracking-[-0.02em] mb-3">
              Wir antworten.
            </h3>
            <p className="text-sm text-white/55 leading-relaxed mb-8">
              Investoren, Mieter, Presse, Bewerbungen, Kooperationen – schreiben Sie uns direkt.
            </p>
            <span className="inline-flex items-center gap-2.5 text-xs uppercase tracking-widest text-white group-hover:text-taupe-100 transition-colors">
              {contact.email}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </a>

          {/* Card 2 — Ankaufsprofil */}
          <Link
            to="/ankaufsprofil"
            className="group block bg-char border border-white/10 hover:border-taupe-300 hover:bg-white/[0.04] p-8 lg:p-10 transition-colors duration-300"
          >
            <div className="text-[10px] tracking-widest uppercase text-taupe-100 mb-5">
              Ankaufsprofil
            </div>
            <h3 className="font-display font-light text-2xl lg:text-3xl tracking-[-0.02em] mb-3">
              Für Verkäufer &amp; Makler
            </h3>
            <p className="text-sm text-white/55 leading-relaxed mb-8">
              Grundstücke und Bestandsobjekte – Neubau ab 5.000 m², Bestand ab 10 Einheiten. Diskret, verbindlich, schnell.
            </p>
            <span className="inline-flex items-center gap-2.5 text-xs uppercase tracking-widest text-white group-hover:text-taupe-100 transition-colors">
              Profil ansehen
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </Link>
        </div>
      </section>
    </>
  )
}
