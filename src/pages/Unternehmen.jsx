import { Link } from 'react-router-dom'
import { services, partners } from '../data/projects'
import StatsBar from '../components/StatsBar'
import ruppmann from '../assets/christoph_ruppmann.png'

export default function Unternehmen() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative min-h-[520px] h-[70vh] bg-ink text-white overflow-hidden flex items-end px-8 lg:px-12 pb-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 80% 40%, rgba(168,152,120,0.25) 0%, transparent 55%), linear-gradient(180deg, rgba(10,9,7,0.4) 0%, #0A0907 100%)',
          }}
        />
        <div className="absolute inset-0 grid-overlay pointer-events-none" />
        <div className="container-crx relative z-10">
          <div className="text-xs uppercase tracking-widest text-white/40 mb-6">
            CRX <span className="text-taupe-100">/</span> Unternehmen
          </div>
          <h1 className="display-h1 text-6xl md:text-8xl lg:text-[120px]">
            Aus Berlin.<br />
            <em className="text-taupe-100 font-light">Für das, was bleibt.</em>
          </h1>
          <div className="font-display text-xl md:text-2xl text-white/70 mt-6 max-w-xl">
            Zehn Jahre Projektentwicklung – mit der Geduld eines Bauherrn und der Disziplin eines Investors.
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-bone py-32 lg:py-36 px-8 lg:px-12">
        <div className="container-crx grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-24">
          <div>
            <div className="section-num">— 01 / Haltung</div>
            <h2 className="display-h2 text-4xl md:text-5xl lg:text-[56px]">
              Wir bauen Immobilien, die <em className="text-taupe-500">Generationen verbinden.</em>
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-stone-600 mb-5 max-w-2xl">
              CRX Real Estate ist ein Berliner Projektentwickler mit einem Projektvolumen von über 500 Millionen Euro. Unser Schwerpunkt liegt in Berlin – ergänzt durch ausgewählte Vorhaben in deutschen Großstädten.
            </p>
            <p className="text-lg leading-relaxed text-stone-600 mb-5 max-w-2xl">
              Wir entwickeln nicht für die nächste Konjunktur, sondern für die nächsten Jahrzehnte. Nachhaltigkeit ist für uns keine Marketingdisziplin, sondern eine Frage der Bilanz: ökologisch, ökonomisch, städtebaulich.
            </p>
            <p className="text-lg leading-relaxed text-stone-600 mb-5 max-w-2xl">
              Was uns von anderen Entwicklern unterscheidet, ist nicht das Tempo. Sondern wie lange unsere Projekte tragen, nachdem das Baugerüst längst abgebaut ist.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-cream py-32 lg:py-36 px-8 lg:px-12">
        <div className="container-crx mb-16">
          <div className="section-num">— 02 / Geschäftsfelder</div>
          <h2 className="display-h2 text-4xl md:text-5xl lg:text-[64px] mt-3">
            Sechs Disziplinen, <em className="text-taupe-500">eine Handschrift.</em>
          </h2>
        </div>

        <div className="container-crx grid grid-cols-1 md:grid-cols-3 border-t border-l border-stone-400/20">
          {services.map(s => (
            <div
              key={s.title}
              className="p-9 md:p-12 border-r border-b border-stone-400/20 hover:bg-taupe-100/10 transition-colors"
            >
              <div className="font-display text-sm text-taupe-500 mb-6">{s.num}</div>
              <h3 className="font-display font-normal text-2xl text-stone-800 mb-4 tracking-tight">{s.title}</h3>
              <p className="text-sm leading-relaxed text-stone-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <StatsBar />

      {/* RUPPMANN BIO */}
      <section className="bg-bone py-32 lg:py-36 px-8 lg:px-12">
        <div className="container-crx grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-400">
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
            <h2 className="display-h2 text-4xl md:text-5xl lg:text-[56px] mb-3">
              Christoph <em className="text-taupe-500">Ruppmann</em>
            </h2>
            <div className="font-display text-lg text-taupe-500 mb-8">
              Gründer & Geschäftsführer
            </div>

            <p className="text-base leading-relaxed text-stone-600 mb-5">
              Christoph Ruppmann ist seit über zwei Jahrzehnten in der Projektentwicklung tätig. Vor der Gründung seines eigenen Unternehmens war er als Projektleiter bei Hines verantwortlich für Vorhaben mit einem Gesamtvolumen von mehr als 500 Millionen Euro.
            </p>

            <blockquote className="border-l-2 border-taupe-500 pl-6 my-8 font-display text-xl md:text-2xl leading-snug text-stone-800">
              "Gute Immobilien erkennt man daran, dass sie zwanzig Jahre nach Fertigstellung noch immer nicht renoviert werden müssen."
            </blockquote>

            <p className="text-base leading-relaxed text-stone-600 mb-5">
              2019 gründete er die Ruppmann Investment GmbH, die 2024 in CRX Real Estate GmbH umfirmiert wurde. Das Unternehmen baut seinen Bestand an Neubauimmobilien in Berlin systematisch aus.
            </p>

            <div className="mt-10 pt-8 border-t border-stone-400/20 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-stone-400 mb-2">Vorgängerprojekt</div>
                <h4 className="font-display text-xl text-stone-800">ZOOM am Bahnhof Zoo</h4>
                <span className="text-sm text-stone-600 block mt-1">Berlin · bei Hines</span>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-stone-400 mb-2">Vorgängerprojekt</div>
                <h4 className="font-display text-xl text-stone-800">Stadtquartier Südkreuz</h4>
                <span className="text-sm text-stone-600 block mt-1">Berlin · bei Hines</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-cream py-24 px-8 lg:px-12">
        <div className="container-crx">
          <div className="text-center">
            <div className="section-num">— 04 / Partner & Investoren</div>
            <h3 className="font-display font-light text-3xl text-stone-800 mb-14">
              In Kooperation mit <em className="text-taupe-500">renommierten Häusern.</em>
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-stone-400/20">
            {partners.map(p => (
              <div
                key={p}
                className="aspect-[2/1] border-r border-b border-stone-400/20 flex items-center justify-center font-display text-base lg:text-lg text-stone-400 hover:text-taupe-500 tracking-wider transition-colors"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

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
