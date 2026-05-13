// Zentrales Projektdatenmodell — bearbeite hier, um Projekte zu aktualisieren.
// Bilder werden später in /public/projects/{slug}/ abgelegt und über image-pfad referenziert.

export const projects = [
  {
    slug: 'frontier',
    title: 'Frontier',
    tagline: 'Eine 225 Meter lange Geste an die Grenzallee. Büro, das nicht abnutzt – sondern altert.',
    status: 'Im Bau',
    year: '2026',
    location: 'Berlin · Neukölln',
    address: 'Grenzallee 100, 12057 Berlin',
    category: 'Büro',
    bgf: '47.000 m²',
    facadeLength: '225 m',
    nutzung: 'Büro & Gewerbe',
    heroGradient: 'linear-gradient(135deg, #A89878 0%, #5C4F3A 60%, #2E2A24 100%)',
    cardImage: '/projects/frontier/cover.jpg',  // hier später echtes Bild ablegen
    gallery: [
      { caption: 'Hauptfassade · Grenzallee', placeholder: 'linear-gradient(135deg, #8A7A5C 0%, #2E2A24 100%)' },
      { caption: 'Eingangssituation',         placeholder: 'linear-gradient(180deg, #C9BBA0 0%, #5C4F3A 100%)' },
      { caption: 'Innenhof',                  placeholder: 'linear-gradient(180deg, #5A544A 0%, #1A1814 100%)' },
      { caption: 'Bürofläche · Open Space',   placeholder: 'linear-gradient(135deg, #DDD2BC 0%, #8A7A5C 100%)' },
      { caption: 'Empfang & Lobby',           placeholder: 'linear-gradient(135deg, #8A7A5C 0%, #2E2A24 100%)' },
      { caption: 'Networking Bar',            placeholder: 'linear-gradient(135deg, #EDE6D6 0%, #C9BBA0 100%)' },
    ],
    description: [
      'Frontier markiert den Beginn einer neuen Ära nachhaltiger Büroentwicklung in Berlin-Neukölln – einem der dynamischsten und sich am schnellsten entwickelnden Stadtteile der Hauptstadt.',
      'Mit seiner über 225 Meter langen Fassade entlang der Grenzallee bietet Frontier eine außergewöhnliche Sichtbarkeit und setzt einen markanten städtebaulichen Akzent. Geplant mit dem Anspruch, moderne Arbeitswelten neu zu definieren, kombiniert das Projekt innovative Architektur mit nachhaltigen Bauprinzipien.',
      'Die exzellente Anbindung an die Autobahn A100 sowie die unmittelbare Nähe zu S- und U-Bahn-Stationen garantieren eine optimale Erreichbarkeit. Mit rund 47.000 m² Gesamtfläche bietet Frontier ausreichend Raum für kreative und produktive Bürolösungen – inspirierende Arbeitsumgebungen mit vielfältigen Möglichkeiten zur Entspannung und zum Networking.',
    ],
    pullquote: 'Eine Fassade ist kein Schmuck – sie ist ein Versprechen an die Stadt, das vierzig Jahre gehalten werden muss.',
    locationCopy: 'Direkte Anbindung an die A100. Drei U-Bahn- und S-Bahn-Stationen in Gehweite. Mitten in einem Stadtteil, der sich gerade neu erfindet – und das wirtschaftliche Gewicht entwickelt, das ihm lange fehlte.',
  },
  {
    slug: 'cloud-no-7',
    title: 'Cloud No. 7',
    tagline: 'Boutique Apartments in Charlottenburg – Wohnen mit der Ruhe eines fertigen Gedankens.',
    status: 'Fertig',
    year: '2024',
    location: 'Berlin · Charlottenburg',
    address: 'Berlin · Charlottenburg',
    category: 'Wohnen',
    bgf: '8.200 m²',
    nutzung: 'Boutique Apartments',
    heroGradient: 'linear-gradient(135deg, #C9BBA0 0%, #8A7A5C 100%)',
    cardImage: '/projects/cloud-no-7/cover.jpg',
    gallery: [
      { caption: 'Außenansicht', placeholder: 'linear-gradient(135deg, #C9BBA0 0%, #8A7A5C 100%)' },
      { caption: 'Apartment',    placeholder: 'linear-gradient(180deg, #DDD2BC 0%, #A89878 100%)' },
      { caption: 'Lobby',        placeholder: 'linear-gradient(135deg, #EDE6D6 0%, #C9BBA0 100%)' },
    ],
    description: [
      'Cloud No. 7 ist ein fertiggestelltes Boutique-Apartment-Projekt in Berlin-Charlottenburg. Auf 8.200 m² entstehen Wohneinheiten, die Diskretion und Wohnqualität in einem der etabliertesten Quartiere Berlins verbinden.',
    ],
    pullquote: 'Charlottenburg ist Berlin im Ruhemodus – genau dort, wo wir bauen wollen.',
  },
  {
    slug: 'logistikzentrum-walsrode',
    title: 'Logistikzentrum Walsrode',
    tagline: '45.000 Quadratmeter Logistik – effizient, automatisiert, langfristig vermietbar.',
    status: 'Im Bau',
    year: '2025',
    location: 'Walsrode',
    address: 'Walsrode, Niedersachsen',
    category: 'Logistik',
    bgf: '45.000 m²',
    nutzung: 'Logistik',
    heroGradient: 'linear-gradient(160deg, #5A544A 0%, #1A1814 100%)',
    cardImage: '/projects/walsrode/cover.jpg',
    gallery: [
      { caption: 'Außenansicht',       placeholder: 'linear-gradient(160deg, #5A544A 0%, #1A1814 100%)' },
      { caption: 'Hallenkonstruktion', placeholder: 'linear-gradient(135deg, #8C8478 0%, #5A544A 100%)' },
    ],
    description: [
      'Mit 45.000 m² Gesamtfläche und modernster Automatisierungstechnik realisieren wir in Walsrode ein Logistikzentrum, das die Anforderungen institutioneller Mieter an Effizienz und Skalierbarkeit erfüllt.',
    ],
    pullquote: 'Logistik ist die unsichtbare Infrastruktur des Wohlstands.',
  },
  {
    slug: 'sw122-berlin',
    title: 'SW122 Berlin',
    tagline: 'Wohnimmobilie für Familien – durchdacht, bezahlbar, langfristig.',
    status: 'In Planung',
    year: '2027',
    location: 'Berlin · Wedding',
    address: 'Berlin · Wedding',
    category: 'Wohnen',
    bgf: '11.400 m²',
    nutzung: 'Wohnen',
    heroGradient: 'linear-gradient(180deg, #8A7A5C 0%, #2E2A24 100%)',
    cardImage: '/projects/sw122/cover.jpg',
    gallery: [
      { caption: 'Außenansicht',  placeholder: 'linear-gradient(180deg, #8A7A5C 0%, #2E2A24 100%)' },
      { caption: 'Innenraum',     placeholder: 'linear-gradient(135deg, #DDD2BC 0%, #A89878 100%)' },
    ],
    description: [
      'SW122 Berlin entwickelt familienorientierte Wohnungen mit optimierten Grundrissen auf 11.400 m². Wir setzen auf bezahlbaren Wohnraum für den Berliner Mittelstand, ohne dabei Qualitätsstandards zu kompromittieren.',
    ],
    pullquote: 'Bezahlbarer Wohnraum ist keine Marketingdisziplin – es ist eine bilanzielle Entscheidung.',
  },
  {
    slug: 'nk-living',
    title: 'NK Living',
    tagline: 'Mikroapartments für Neukölln – effizient, urban, fertig.',
    status: 'Fertig',
    year: '2023',
    location: 'Berlin · Neukölln',
    address: 'Berlin · Neukölln',
    category: 'Wohnen',
    bgf: '6.400 m²',
    nutzung: 'Mikroapartments',
    heroGradient: 'linear-gradient(135deg, #DDD2BC 0%, #A89878 100%)',
    cardImage: '/projects/nk-living/cover.jpg',
    gallery: [
      { caption: 'Außenansicht', placeholder: 'linear-gradient(135deg, #DDD2BC 0%, #A89878 100%)' },
      { caption: 'Apartment',    placeholder: 'linear-gradient(180deg, #EDE6D6 0%, #C9BBA0 100%)' },
    ],
    description: [
      'NK Living realisiert auf 6.400 m² Mikroapartments für junge Berufstätige in Neukölln – einer der dynamischsten Lagen Berlins. Effiziente Grundrisse, hochwertige Ausstattung, urbane Nähe.',
    ],
    pullquote: 'Mikroapartments sind keine Notlösung – sie sind eine bewusste Wahl.',
  },
  {
    slug: 'adk129-berlin',
    title: 'ADK129 Berlin',
    tagline: 'Bürogebäude im Wissenschaftsstandort Adlershof – modern, flexibel, nachhaltig.',
    status: 'Im Bau',
    year: '2025',
    location: 'Berlin · Adlershof',
    address: 'Berlin · Adlershof',
    category: 'Büro',
    bgf: '13.000 m²',
    nutzung: 'Büro',
    heroGradient: 'linear-gradient(135deg, #EDE6D6 0%, #C9BBA0 50%, #8A7A5C 100%)',
    cardImage: '/projects/adk129/cover.jpg',
    gallery: [
      { caption: 'Außenansicht', placeholder: 'linear-gradient(135deg, #EDE6D6 0%, #C9BBA0 50%, #8A7A5C 100%)' },
      { caption: 'Bürofläche',   placeholder: 'linear-gradient(180deg, #DDD2BC 0%, #A89878 100%)' },
    ],
    description: [
      'ADK129 entwickelt 13.000 m² Bürofläche im Wissenschafts- und Technologiestandort Berlin-Adlershof. Flexible Grundrisse für Forschung, Tech und etablierte Unternehmen – inmitten eines der innovativsten Quartiere Europas.',
    ],
    pullquote: 'Adlershof ist Berlins Antwort auf die Frage, wo Wissenschaft und Wirtschaft sich treffen.',
  },
]

export const projectStats = [
  { num: '500',     unit: 'Mio €', label: 'Projektvolumen' },
  { num: '151.200', unit: 'm²',    label: 'Bruttogeschossfläche' },
  { num: '6',       unit: null,    label: 'Aktive Projekte' },
  { num: '10',      unit: 'Jahre', label: 'Erfahrung' },
]

export const services = [
  { num: 'i.',   title: 'Projektentwicklung',          body: 'Planung und Realisierung nachhaltiger Immobilienprojekte in urbanen Zentren – mit Fokus auf innovative Baukonzepte und langlebige Gestaltung.' },
  { num: 'ii.',  title: 'Wohnimmobilien',              body: 'Optimierte Grundrisse und moderne Technologien für effiziente Wohnlösungen. Bezahlbarer Wohnraum für Familien und Mikroapartments.' },
  { num: 'iii.', title: 'Bürogebäude & Boardinghäuser', body: 'Moderne Arbeitswelten und temporäre Wohnlösungen, die funktionale Effizienz mit Designqualität verbinden.' },
  { num: 'iv.',  title: 'Logistikimmobilien',          body: 'Logistikzentren und Lagerhallen mit fortschrittlicher Automatisierung. Smart-Technologien für zukunftssichere Infrastruktur.' },
  { num: 'v.',   title: 'Investments',                 body: 'Strategische Investitionen in Immobilien mit Wachstumspotenzial – Akquise, Finanzierung und Verwaltung institutioneller Portfolios.' },
  { num: 'vi.',  title: 'Venture Capital',             body: 'Finanzierung von Start-ups und innovativen Unternehmen mit Fokus auf langfristiges Wachstum und nachhaltige Technologieinnovation.' },
]

export const partners = ['AB GROUP', 'KANAM', 'ZAR', 'TEN', 'KELLER', 'ABR']

export const ankaufKriterien = [
  { key: 'Standort',    val: 'Berlin & Großstädte' },
  { key: 'Volumen',     val: 'ab 5.000 m² BGF' },
  { key: 'Nutzung',     val: 'Wohnen · Büro · Logistik' },
  { key: 'Zustand',     val: 'flexibel' },
  { key: 'Antwortzeit', val: '48 Stunden' },
]

export const contact = {
  company: 'CRX Management GmbH',
  street:  'Bleibtreustraße 34',
  city:    '10707 Berlin',
  phone:   '+49 (0) 30 75 65 4022',
  phoneRaw: '+493075654022',
  email:   'info@crx-re.com',
}
