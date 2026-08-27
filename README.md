# Centro de Treinamento NewLife — website

Static one-page site for the gym **C.T Newlife** (Centro de Treinamento NewLife).
No build step: plain HTML, CSS and a small vanilla JS file.

## Structure

```
site/
├── index.html      # the whole page (4 sections: hero, método, planos, contato)
├── styles.css      # design tokens + layout
├── script.js       # ECG divider drawing, scroll reveal, video pause-off-screen
├── vercel.json     # static hosting config (clean URLs, media caching)
└── media/          # logo + short looping clips from the brand's Instagram
```

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
npx serve site
```

## Deploy

```bash
vercel --prod
```

## Visual identity

- **Colour:** lime `#8FD621` on near-black `#08090A` (taken from the logo).
- **Type:** Archivo (display, uppercase), Manrope (body), JetBrains Mono (data/prices).
- **Signature element:** the heartbeat / ECG line from the logo, reused as an
  animated divider between every section.

## Placeholders still to replace

- **Address** — shown as `PLACEHOLDER - endereco a confirmar` in the contact
  section and footer. The map is a generic OpenStreetMap view of the DDD-16
  region with no pin.

The WhatsApp number `(16) 98100-4362` is the real one from the Instagram profile.
