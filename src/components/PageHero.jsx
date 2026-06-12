// Einheitlicher Hero für alle Seiten.
//
//   variant="subpage" (Default) — Investments / Ankaufsprofil / Projekte / Unternehmen
//     Titel linksbündig, vertikal unten, einheitliche Größe.
//
//   variant="home" — Startseite
//     Titel linksbündig, vertikal mittig, größer.
//
// Slots:
//   - children            → Background-Media (img/video) + zusätzliche Scrims
//   - rightContent        → optionales Element rechts neben dem Titel (z.B. „11" Counter)
//   - subtitle            → optionale Subline rechts neben dem Titel
//
// Container/Padding ist absichtlich identisch zum restlichen Seiten-Inhalt
// (container-crx + px-8 lg:px-12), damit die linke Titel-Kante mit der
// Content-Kante der Folge-Sektionen fluchtet.

export default function PageHero({
  variant = 'subpage',
  breadcrumb,
  titleLine1,
  titleLine2,
  subtitle,
  rightContent,
  children,
}) {
  const isHome = variant === 'home'

  return (
    <section className="relative min-h-[520px] h-[70vh] bg-ink text-white overflow-hidden flex flex-col px-8 lg:px-12">
      {/* Background media + scrims (vom Aufrufer) */}
      {children}

      {/* Content-Wrapper — gleicher Container wie Folge-Sektionen */}
      <div
        className={`container-crx relative z-10 w-full ${
          isHome
            ? 'my-auto'                              // vertikal mittig
            : 'mt-auto mb-0 pb-[clamp(3rem,6vh,6rem)]' // unten mit Abstand
        }`}
      >
        {breadcrumb && (
          <div className="text-[11px] uppercase tracking-[0.25em] text-white/45 mb-5 lg:mb-6">
            {breadcrumb}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-y-8 gap-x-12 items-end">
          <h1
            className="font-display"
            style={{
              fontSize: isHome
                ? 'clamp(3.5rem, 7vw, 7.5rem)'
                : 'clamp(2.75rem, 5.5vw, 5.5rem)',
              fontWeight: 600,
              lineHeight: isHome ? 0.95 : 0.98,
              letterSpacing: '-0.03em',
            }}
          >
            {titleLine1}
            {titleLine2 && (
              <>
                <br />
                <em className="not-italic text-taupe-100" style={{ fontWeight: 300 }}>
                  {titleLine2}
                </em>
              </>
            )}
          </h1>

          {(rightContent || subtitle) && (
            <div className="lg:text-right lg:max-w-sm">
              {subtitle && (
                <p
                  className="text-white/80 leading-relaxed lg:ml-auto"
                  style={{
                    fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
                    maxWidth: '32ch',
                    fontWeight: 300,
                  }}
                >
                  {subtitle}
                </p>
              )}
              {rightContent}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
