# CRX Real Estate — Website

Production-ready Vite + React + Tailwind site für CRX Real Estate.

## Stack

- **Vite** — Build & Dev Server
- **React 18** + **React Router 6** — SPA mit clientseitigem Routing
- **Tailwind CSS** — Styling mit custom Taupe/Cream/Bone Palette
- **Framer Motion** — Hero-Animationen
- **Lucide React** — Icons (nur Menu/X für Mobile-Nav)

## Lokal entwickeln

```bash
npm install
npm run dev
```

Läuft auf `http://localhost:5173`.

## Production-Build testen

```bash
npm run build
npm run preview
```

## Auf Vercel deployen

1. Repository auf GitHub pushen
2. Auf vercel.com → "New Project" → Repository auswählen
3. Framework Preset: **Vite** (wird auto-detected)
4. Deploy

Die `vercel.json` sorgt dafür, dass clientseitiges Routing funktioniert (alle Routes → `index.html`).

**Eigene Domain:** In Vercel Project Settings → Domains → `crx-re.com` hinzufügen, DNS-Records bei Domain-Provider setzen (A-Record auf Vercel-IP oder CNAME auf `cname.vercel-dns.com`).

## Projektstruktur

```
src/
├── App.jsx                  # Root + Routes
├── main.jsx                 # Entry point
├── assets/                  # Logo, Ruppmann-Portrait
├── components/
│   ├── Nav.jsx              # Sticky nav mit Scroll-State
│   ├── Footer.jsx           # Footer
│   ├── StatsBar.jsx         # Wiederverwendete Stats-Sektion
│   ├── AnkaufBlock.jsx      # Wiederverwendeter Ankauf-CTA
│   └── ProjectCard.jsx      # Projekt-Card
├── data/
│   └── projects.js          # ⭐ Alle Projekte, Services, Stats, Partner zentral
├── pages/
│   ├── Home.jsx
│   ├── Unternehmen.jsx
│   ├── Projekte.jsx         # Listing mit Filter
│   └── ProjektDetail.jsx    # /projekte/:slug
└── styles/
    └── index.css            # Tailwind + Custom utilities
```

## Inhalte aktualisieren

**Alle Projekt-, Service-, Partner- und Stats-Daten** liegen in `src/data/projects.js`. Hier ist der einzige Ort, an dem Content geändert werden muss:

```js
// Neues Projekt hinzufügen
export const projects = [
  // ...existing
  {
    slug: 'neues-projekt',
    title: 'Neues Projekt',
    status: 'In Planung',
    // ...
  }
]
```

## Bilder hinzufügen

1. **Projekt-Cover-Bilder** in `public/projects/{slug}/cover.jpg` ablegen
2. In `src/data/projects.js` ist `cardImage` bereits korrekt verlinkt (`/projects/frontier/cover.jpg`)
3. Card-Komponenten nutzen aktuell Gradient-Placeholder — diese können wir später durch `<img>` ersetzen, sobald Bilder vorhanden sind

Aktuell rendern alle Projekt-Cards mit Taupe-Gradient-Placeholders. Sobald die echten Renderings da sind, einfach in `ProjectCard.jsx` und `Projekte.jsx` das `style={{ background: p.heroGradient }}` durch ein `<img src={p.cardImage} />` ersetzen.

## Palette (Reference)

| Token         | Hex       | Verwendung                    |
|---------------|-----------|-------------------------------|
| `bone`        | `#F5F1E8` | Heller Hauptbackground         |
| `cream`       | `#EDE6D6` | Sektionswechsel                |
| `sand`        | `#DDD2BC` | Übergänge                      |
| `taupe-100`   | `#C9BBA0` | Soft accent (dunkle BG)        |
| `taupe-500`   | `#8A7A5C` | Primary brand accent           |
| `taupe-700`   | `#5C4F3A` | Hover state                    |
| `stone-600`   | `#5A544A` | Body text                      |
| `stone-800`   | `#2E2A24` | Headlines                      |
| `char`        | `#1A1814` | Hero/Stats/Footer              |
| `ink`         | `#0A0907` | Tiefste Schwarztöne            |

## Fonts

- **Fraunces** (Display) — Headlines, Pullquotes, Akzente
- **Inter** (Sans) — Body, UI

Beide werden via Google Fonts in `index.html` geladen.

---

**Realized by futrlab.com**
