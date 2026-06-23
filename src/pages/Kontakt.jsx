import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import { contact } from '../data/projects'

export default function Kontakt() {
  return (
    <>
      <PageHero
        breadcrumb="CRX / Kontakt"
        titleLine1="Sprechen Sie"
        titleLine2="mit uns."
      >
        <img
          src="/heroes/ankaufsprofil.webp"
          alt=""
          fetchpriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(10,9,7,0.6) 0%, rgba(10,9,7,0.35) 35%, rgba(10,9,7,0.92) 100%)' }}
        />
        <div className="absolute inset-0 grid-overlay pointer-events-none opacity-50" />
      </PageHero>

      <section className="bg-bone py-24 lg:py-32 px-8 lg:px-12">
        <div className="container-crx grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 items-start">
          {/* Kontaktdaten — ohne Klartext-Mail (Formular ist der Weg) */}
          <div>
            <div className="section-num">— 01 / Kontakt</div>
            <h2 className="display-h2 text-4xl md:text-5xl lg:text-[56px] mb-8">
              Schreiben Sie <em className="text-taupe-500">uns.</em>
            </h2>
            <p className="text-lg leading-relaxed text-stone-600 mb-10 max-w-md">
              Investoren, Mieter, Partner – wir nehmen uns Zeit für Ihr Anliegen und antworten zeitnah.
            </p>

            <dl className="space-y-6">
              <div>
                <dt className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">Anschrift</dt>
                <dd className="text-base text-stone-800 leading-relaxed">
                  {contact.company}<br />
                  {contact.street}<br />
                  {contact.city}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">Telefon</dt>
                <dd className="text-base text-stone-800">
                  <a href={`tel:${contact.phoneRaw}`} className="hover:text-taupe-500 transition-colors">{contact.phone}</a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Formular */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
