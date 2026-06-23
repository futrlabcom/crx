import { Link } from 'react-router-dom'
import { services } from '../data/projects'
import StatsBar from '../components/StatsBar'
import PartnerLogos from '../components/PartnerLogos'
import PageHero from '../components/PageHero'
import ruppmann from '../assets/christoph_ruppmann.png'

export default function Unternehmen() {
  return (
    <>
      {/* PAGE HERO */}
      <PageHero
        breadcrumb="CRX / Unternehmen"
        titleLine1="Aus Berlin."
        titleLine2="Für das, was bleibt."
        subtitle="Zehn Jahre Projektentwicklung – mit großer Leidenschaft für Immobilien."
      >
        <video
          src="/unternehmen.mp4"
          poster="/unternehmen-poster.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,9,7,0.55) 0%, rgba(10,9,7,0.3) 35%, rgba(10,9,7,0.9) 100%)',
          }}
        />
        <div className="absolute inset-0 grid-overlay pointer-events-none opacity-50" />
      </PageHero>

      {/* INTRO */}
      <section className="bg-bone py-32 lg:py-36 px-8 lg:px-12">
        <div className="container-crx grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-24">
          <div>
            <div className="section-num">— 01 / Haltung</div>
            <h2 className="display-h2 text-4xl md:text-5xl lg:text-[56px]">
              CRX entwickelt <em className="text-taupe-500">und hält.</em>
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-stone-600 mb-5 max-w-2xl">
              Mit Projekten im Wert von über 750 Millionen Euro vereinen wir Projektentwicklung und Bestandshaltung unter einem Dach. Wir entwickeln nicht nur Neubauten, sondern halten und pflegen Bestandsimmobilien für die nächste Generation.
            </p>
            <p className="text-lg leading-relaxed text-stone-600 mb-5 max-w-2xl">
              Unser Schwerpunkt liegt in Berlin – ergänzt durch ausgewählte Vorhaben in überregionalen Standorten.
            </p>
            <p className="text-lg leading-relaxed text-stone-600 mb-5 max-w-2xl">
              Was uns von anderen Entwicklern unterscheidet, ist nicht das Tempo, sondern die Zuverlässigkeit.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-cream py-32 lg:py-36 px-8 lg:px-12">
        <div className="container-crx mb-16">
          <div className="section-num">— 02 / Geschäftsfelder</div>
          <h2 className="display-h2 text-4xl md:text-5xl lg:text-[64px] mt-3">
            Drei Disziplinen, <em className="text-taupe-500">eine Handschrift.</em>
          </h2>
        </div>

        <div className="container-crx grid grid-cols-1 md:grid-cols-3 border-t border-l border-stone-400/20">
          {services.map(s => (
            <div
              key={s.title}
              className="p-10 md:p-14 lg:p-16 border-r border-b border-stone-400/20 hover:bg-taupe-100/10 transition-colors"
            >
              <div className="font-display text-sm text-taupe-500 mb-8">{s.num}</div>
              <h3 className="font-display font-normal text-3xl lg:text-[32px] text-stone-800 mb-5 tracking-tight">{s.title}</h3>
              <p className="text-base lg:text-lg leading-relaxed text-stone-600 max-w-md">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <StatsBar />

      {/* RUPPMANN BIO */}
      <section className="bg-bone py-24 lg:py-28 px-8 lg:px-12">
        <div className="container-crx grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-10 lg:gap-14 items-start">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-stone-400 max-w-md">
            <img
              src={ruppmann}
              alt="Christoph Ruppmann"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute bottom-6 left-6 font-display text-white/95 text-base">
              Christoph Ruppmann
            </div>
          </div>

          <div>
            <div className="section-num">— 03 / Geschäftsführung</div>
            <h2 className="display-h2 text-4xl md:text-5xl lg:text-[56px] mb-1">
              Christoph <em className="text-taupe-500">Ruppmann</em>
            </h2>
            <div className="font-display text-lg text-taupe-500 mb-6">
              Gründer & Geschäftsführer
            </div>

            <p className="text-base leading-relaxed text-stone-600 mb-5">
              Christoph Ruppmann ist seit über 15 Jahren in der Projektentwicklung tätig. Verantwortlich bei Hines steuerte er Vorhaben mit einem Gesamtvolumen von mehr als 500 Millionen Euro. Mit CRX Real Estate gründete er sein eigenes Unternehmen und setzt damit seine Leidenschaft für Immobilien fort.
            </p>

            {/*
              VORGÄNGERPROJEKT-BLOCK + PULLQUOTE entfernt 21.05.2026.
              Wird später als eigenes Modul (ZOOM + Stadtquartier Südkreuz) wieder aufgenommen.
            */}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <PartnerLogos
        variant="full"
        caption="In Zusammenarbeit mit renommierten Häusern."
      />

      {/* CTA */}
      <section className="bg-ink text-white py-32 lg:py-36 px-8 lg:px-12 relative overflow-hidden text-center">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(168,152,120,0.18) 0%, transparent 60%)' }}
        />
        <div className="container-crx max-w-3xl mx-auto relative z-10">
          <div className="section-num !text-taupe-100">— Gespräch beginnen</div>
          <h2 className="display-h1 text-5xl md:text-6xl lg:text-7xl mb-6">
            Zukunft bauen,<br />
            <em className="text-taupe-100">Werte schaffen.</em>
          </h2>
          <p className="text-lg leading-relaxed text-white/65 mb-10">
            Ob Grundstück, Bestandsobjekt oder Investmentopportunität – wir sprechen gerne mit Ihnen. Diskret und auf Augenhöhe.
          </p>
          <a
            href="mailto:info@crx-re.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-taupe-500 hover:bg-taupe-700 text-white text-xs uppercase tracking-widest transition-colors"
          >
            Kontakt aufnehmen →
          </a>
        </div>
      </section>
    </>
  )
}
