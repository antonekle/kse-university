# KSE Website — UI Kit

A high-fidelity, interactive recreation of the **KSE (Kyiv School of Economics)** public
website, reconstructed from the `/Main-Page-Concept` page of the WebSprout Figma kit.

Open `index.html` for the assembled, clickable prototype. It is a faithful cosmetic
recreation — interactions are mocked (toasts, a consultation modal, unit-chip filtering,
working search field) rather than wired to a backend.

**Two pages:**
- `index.html` — the KSE hub homepage (the upper-level ecosystem page).
- `university.html` — the **KSE University** page, reworked from a card-heavy prototype into
  the hub's editorial rhythm: Hero + Admissions kept; Faculties become list rows, Research
  becomes wayfinding rows + a profiles strip, Life/News/Resources use link lists and a
  two-column news block. Numbered section markers (01–06) carry the structure.

## Sections (top → bottom)
1. **Navbar** — logo, primary nav, pill search field (sticky, blur backdrop).
2. **Hero** — type-led headline on the `#F9F9FB` wash, three CTAs (navy / outlined /
   ghost), KSE unit chips (toggle to filter — mocked).
3. **News & Events** — 2×2 news cards (grey image placeholders) + an events list with
   date · unit · location.
4. **I'm looking for** — wayfinding link grid on the soft wash.
5. **Admissions & Education** — two feature cards + three program cards + a dark navy
   consultation CTA band (opens the modal).
6. **Life at KSE** — community intro + link list.
7. **Footer** — five link columns, dark-mode logo, circle social icons, legal bar.

## Files
- `index.html` — entry point; loads fonts, `../../colors_and_type.css`, `kit.css`, React + Babel, all components.
- `kit.css` — kit-specific component styles (buttons, tags, logo, toast, modal).
- `Primitives.jsx` — `Logo`, `Icon` (Material Symbols), `Button`, `Tag`.
- `Navbar.jsx`, `Hero.jsx`, `NewsEvents.jsx`, `Wayfinding.jsx`,
  `AdmissionsEducation.jsx`, `LifeAtKSE.jsx`, `Footer.jsx` — sections.
- `app.jsx` — assembly + interactivity (toast, consultation modal, chip state).

## Conventions
- Components export to `window` (separate Babel scopes). Reuse `Button`, `Tag`, `Logo`, `Icon`.
- Colors / type / shadows come from CSS variables in `../../colors_and_type.css` — never hard-code new colors.
- Icons are **Material Symbols Outlined** via Google Fonts. Body/headings = **KSE Sans**;
  UI labels/buttons = **Plus Jakarta Sans**; the **KSE** logo is the official
  vector lockup (`assets/kse-logo.svg`), rendered via CSS mask so it recolors for dark mode.

## Known cosmetic notes
- News/event imagery uses grey placeholders, matching the source prototype.
- The DOM-rasterizing screenshot tool can't render icon-font ligatures (icons show as
  their text name in screenshots) — they render correctly in a real browser.
