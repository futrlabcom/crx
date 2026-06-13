// Schlichter Wrapper für Pflicht-/Rechtsseiten (Impressum, Datenschutz).
// Kein Hero. Heller Hintergrund. Lesbarer Fließtext, max 720px breit.
//
// Style-Konvention für children:
//   <h1> Seitentitel (groß, weight 600)
//   <h2> Hauptabschnitt
//   <h3> Unterabschnitt
//   <p>  Fließtext
//   <ul>/<li> Aufzählungen
//   <a>  Links (Mail/Tel klickbar)
//
// Tailwind kann hier per `.prose-legal` Klassen-Selektoren auf den
// Wrapper anwenden, weil react-markdown nicht eingebunden ist.
export default function LegalPage({ title, children, lastUpdated }) {
  return (
    <article className="bg-bone text-stone-800 pt-32 lg:pt-40 pb-24 lg:pb-32 px-8 lg:px-12">
      <div className="mx-auto max-w-[720px]">
        <header className="mb-12 lg:mb-16">
          <div className="text-[11px] uppercase tracking-[0.25em] text-taupe-500 mb-4">
            CRX · Rechtliches
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] tracking-[-0.025em] leading-[1.05]" style={{ fontWeight: 600 }}>
            {title}
          </h1>
          {lastUpdated && (
            <div className="text-sm text-stone-600 mt-4">Stand: {lastUpdated}</div>
          )}
        </header>

        <div className="legal-prose space-y-6 text-stone-800" style={{ fontSize: '16px', lineHeight: 1.65 }}>
          {children}
        </div>
      </div>

      <style>{`
        .legal-prose h2 {
          font-family: Geist, sans-serif;
          font-weight: 500;
          font-size: 22px;
          letter-spacing: -0.01em;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          color: #2E2A24;
        }
        .legal-prose h3 {
          font-family: Geist, sans-serif;
          font-weight: 500;
          font-size: 17px;
          margin-top: 2rem;
          margin-bottom: 0.5rem;
          color: #2E2A24;
        }
        .legal-prose p { color: #5A544A; }
        .legal-prose ul {
          list-style: disc;
          padding-left: 1.5rem;
          color: #5A544A;
        }
        .legal-prose li { margin-bottom: 0.25rem; }
        .legal-prose a {
          color: #5C4F3A;
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-thickness: 1px;
        }
        .legal-prose a:hover { color: #8A7A5C; }
        .legal-prose hr {
          border: none;
          border-top: 1px solid rgba(46,42,36,0.12);
          margin: 2.5rem 0;
        }
        .legal-prose address {
          font-style: normal;
          color: #5A544A;
        }
      `}</style>
    </article>
  )
}
