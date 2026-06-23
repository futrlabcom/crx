import { Link } from 'react-router-dom'
import { investments, projectStats, contact } from '../data/projects'
import PageHero from '../components/PageHero'

export default function Investments() {
  return (
    <>
      {/* HERO */}
      <PageHero
        breadcrumb="CRX / Investments"
        titleLine1="Investments,"
        titleLine2="die tragen."
      >
        <img
          src="/investments/hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,9,7,0.55) 0%, rgba(10,9,7,0.3) 35%, rgba(10,9,7,0.92) 100%)',
          }}
        />
        <div className="absolute inset-0 grid-overlay pointer-events-none opacity-50" />
      </PageHero>

      {/* INTRO */}
      <section className="bg-bone py-24 lg:py-32 px-8 lg:px-12">
        <div className="container-crx grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24 items-start">
          <div>
            <div className="section-num">— 01 / Grundsatz</div>
            <h2 className="display-h2 text-4xl md:text-5xl lg:text-[56px]">
              Innovation und Wachstum durch <em className="text-taupe-500">Investments.</em>
            </h2>
          </div>
          <div className="pt-3">
            <p className="text-lg leading-relaxed text-stone-600 mb-5 max-w-2xl">
              CRX Real Estate richtet sich an Unternehmer, die nicht auf die nächste Konjunktur, sondern auf das nächste Jahrzehnt blicken. Wir verbinden Marktexpertise mit strategischer Disziplin – und mit der Bereitschaft, Kapital strategisch zu investieren.
            </p>
            <p className="text-lg leading-relaxed text-stone-600 max-w-2xl">
              Unsere drei Investment-Stränge sind Ausdruck unserer Überzeugung: Wer langfristig Werte schafft, muss langfristig denken – in der Entwicklung, dem Bestand und in den Unternehmern der Zukunft.
            </p>
          </div>
        </div>
      </section>

      {/* INVESTMENT CATEGORIES */}
      <section className="bg-cream py-24 lg:py-32 px-8 lg:px-12">
        <div className="container-crx mb-14 lg:mb-20">
          <div className="section-num">— 02 / Drei Stränge</div>
          <h2 className="display-h2 text-4xl md:text-5xl lg:text-[56px] max-w-3xl">
            Entwicklung, Bestand, <em className="text-taupe-500">Unternehmen.</em>
          </h2>
        </div>

        <div className="container-crx grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {investments.map(inv => (
            <article key={inv.num} className="bg-bone p-8 lg:p-12 flex flex-col">
              <div className="font-display font-light text-6xl lg:text-7xl text-taupe-500 tracking-[-0.04em] leading-none mb-8">
                {inv.num}
              </div>
              <h3 className="font-display font-light text-2xl lg:text-3xl tracking-[-0.02em] text-stone-800 mb-4">
                {inv.title}
              </h3>
              <p className="text-base text-stone-600 leading-relaxed mb-8 flex-1">
                {inv.body}
              </p>
              <dl className="space-y-0 mt-auto">
                {inv.metrics.map(m => (
                  <div key={m.k} className="grid grid-cols-[110px_1fr] gap-3 py-3 border-t border-stone-400/25">
                    <dt className="text-[10px] uppercase tracking-widest text-stone-400 pt-0.5">{m.k}</dt>
                    <dd className="text-sm text-stone-800">{m.v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </section>

      {/* TRACK RECORD */}
      <section className="bg-char text-white py-20 lg:py-28 px-8 lg:px-12 relative overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(168,152,120,0.16) 0%, transparent 70%)' }}
        />
        <div className="container-crx relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24 items-center">
          <div>
            <div className="section-num !text-taupe-100">— 03 / Track Record</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6">
            {projectStats.map((s, i) => (
              <div key={i} className="border-t border-white/10 pt-6">
                <div className="font-display font-light text-4xl lg:text-5xl leading-none tracking-[-0.03em]">
                  {s.num}
                  {s.unit && <span className="text-sm text-taupe-100 ml-1.5">{s.unit}</span>}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-white/45 mt-3">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH IMAGE BREAK */}
      <section className="bg-bone py-24 lg:py-32 px-8 lg:px-12">
        <div className="container-crx grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] overflow-hidden bg-sand">
            <img
              src="/investments/secondary.jpg"
              alt="CRX Investment Office"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="section-num">— 04 / Unser Ansatz</div>
            <h2 className="display-h2 text-3xl md:text-4xl lg:text-[44px] mb-6">
              Beteiligungen mit <em className="text-taupe-500">Substanz.</em>
            </h2>
            <p className="text-base lg:text-lg text-stone-600 leading-relaxed mb-4 max-w-md">
              CRX beteiligt sich an Projekten und Unternehmen mit echter Substanz – an Vorhaben, deren Qualität und Beständigkeit wir aus eigener Erfahrung beurteilen können. Vor jeder Investition steht dieselbe Frage, die wir auch an unsere eigenen Immobilienprojekte stellen: Hat das langfristig Bestand?
            </p>
            <p className="text-base lg:text-lg text-stone-600 leading-relaxed max-w-md">
              Erst wenn die Antwort eindeutig ist, engagieren wir uns – mit Kapital, Zeit und Netzwerk und mit der gleichen Sorgfalt, die unsere gesamte Arbeit prägt.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE — Power Coffee */}
      <section className="bg-bone py-24 lg:py-32 px-8 lg:px-12">
        <div className="container-crx mb-14 lg:mb-16">
          <div className="section-num">— 05 / Portfolio</div>
          <h2 className="display-h2 text-4xl md:text-5xl lg:text-[56px] max-w-3xl">
            Beispiel aus unserem <em className="text-taupe-500">Venture-Portfolio.</em>
          </h2>
        </div>

        <div className="container-crx">
          <a
            href="https://originalpowercoffee.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative overflow-hidden bg-ink"
          >
            <div className="aspect-[21/9] lg:aspect-[3/1] relative overflow-hidden">
              <img
                src="/investments/powercoffee/banner.png"
                alt="Original Power Coffee"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(90deg, rgba(10,9,7,0.4) 0%, transparent 35%, transparent 100%)' }}
              />
            </div>
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 mt-12 lg:mt-16">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-taupe-500 mb-3">
                Venture Capital · seit 2023
              </div>
              <h3 className="font-display font-light text-3xl lg:text-[44px] tracking-[-0.02em] text-stone-800 mb-6">
                Original Power Coffee
              </h3>
              <p className="text-lg text-stone-600 leading-relaxed mb-5 max-w-2xl">
                Funktionale Energie ohne Nebenwirkungen: anhaltende Wachheit statt Nervosität und Leistungstief. Zuckerfrei, vegan, keto-geeignet – ein tägliches Ritual, keine Notlösung.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-2xl">
                CRX begleitet das Unternehmen mit Kapital, strategischer Beratung und Netzwerkzugang. Eine Investition in eine Marke, die genauso langfristig denkt wie wir.
              </p>
              <a
                href="https://originalpowercoffee.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 border border-stone-800/30 hover:bg-stone-800 hover:text-white text-stone-800 text-xs uppercase tracking-widest transition-colors"
              >
                originalpowercoffee.com <span>→</span>
              </a>
            </div>
            <div className="lg:border-l lg:border-stone-400/25 lg:pl-12 pt-3">
              <div className="text-[10px] uppercase tracking-widest text-stone-400 mb-6">Eckdaten</div>
              <dl className="space-y-0">
                {[
                  { k: 'Sektor',  v: 'Functional Beverage' },
                  { k: 'Standort', v: 'London' },
                  { k: 'Stage',   v: 'Seed → Series A' },
                  { k: 'Profil',  v: 'Clean energy · vegan · sugar-free' },
                  { k: 'Rolle CRX', v: 'Kapital · Strategie · Netzwerk' },
                ].map(item => (
                  <div key={item.k} className="grid grid-cols-[110px_1fr] gap-3 py-3 border-t border-stone-400/25">
                    <dt className="text-[10px] uppercase tracking-widest text-stone-400 pt-1">{item.k}</dt>
                    <dd className="text-sm text-stone-800">{item.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-ink text-white py-28 lg:py-36 px-8 lg:px-12 relative overflow-hidden text-center">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(168,152,120,0.18) 0%, transparent 60%)' }}
        />
        <div className="container-crx relative z-10 max-w-3xl mx-auto">
          <div className="section-num !text-taupe-100">— 06 / Sprechen Sie uns an</div>
          <h2 className="display-h2 text-4xl md:text-5xl lg:text-[64px] mb-8">
            Investment-Anfrage <em className="text-taupe-100">vertraulich.</em>
          </h2>
          <p className="text-lg leading-relaxed text-white/70 mb-10 max-w-xl mx-auto">
            Wir sprechen ausschließlich mit Investoren, die wir kennen oder verlässlich eingeführt bekommen. Diskretion ist keine Marketingdisziplin, sondern Voraussetzung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`mailto:${contact.email}?subject=Investment-Anfrage`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-taupe-500 hover:bg-taupe-700 text-white text-xs uppercase tracking-widest transition-colors"
            >
              {contact.email} <span>→</span>
            </a>
            <a
              href={`tel:${contact.phoneRaw}`}
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 hover:border-taupe-100 hover:text-taupe-100 text-white text-xs uppercase tracking-widest transition-colors"
            >
              {contact.phone}
            </a>
          </div>
          <Link
            to="/projekte"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/55 hover:text-taupe-100 transition-colors mt-10"
          >
            ← Zu den Projekten
          </Link>
        </div>
      </section>
    </>
  )
}
