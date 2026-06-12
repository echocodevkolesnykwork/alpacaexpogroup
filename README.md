# AEG Landing

Vanilla Vite project for the Alpaca Expo Group landing page.

## Stack

- Vite
- Vanilla HTML/CSS/JS
- GSAP for scroll and motion interactions
- Prettier for formatting

## Source Structure

```text
src/
  main.js
  pages/
    home/
      README.md
      index.js
      mount.js
      data/
      renderers/
      partials/
        layout/
        overlays/
        sections/
      scripts/
        README.md
  styles/
    home/
      index.js
      foundation/
      layout/
      sections/
      components/
      overlays/
      utilities/
      legacy/
  scripts/
    run-classic-scripts.js
  assets/
    images/
    videos/
    icons/
    logos/
```

## Structure Rules

- `main.js` is the entry point only. It should connect global styles and page-level modules.
- `pages/home/` is the working landing page implementation rendered on `/`.
- `pages/home/partials/` keeps extracted HTML readable by layout, section, and overlay responsibility.
- `pages/home/scripts/` keeps extracted page behavior split by feature while the reference is being stabilized.
- `scripts/run-classic-scripts.js` preserves browser execution semantics for extracted legacy scripts.
- `styles/home/index.js` is the style manifest. It defines the exact CSS load order: foundation, layout, sections, components, overlays, utilities, legacy patches.
- `assets/` is for source assets that Vite should process. Large final video files may be moved to `public/` or CDN/server storage depending on deployment.

Keep modules small and semantic. Avoid adding abstractions until the same pattern appears in at least two sections.

## Local Routes

- `/` is the new Vite implementation assembled from `src/pages/home`.
- `/ref/` is a small reference index with links to static reference files.
- `/ref/home.html` is the unchanged home reference used for visual comparison.
- `/ref/planets.html` is the unchanged planets reference used for visual comparison.

Reference files live in `public/ref` and should stay isolated from the working implementation. Use them to compare layout, motion, and visual regressions while moving code into the scalable `src` structure.

## Planned Landing Flow

1. Splash screen
2. Header/navigation
3. Hero
4. Perfect Event / Planets
5. Video popup
6. Our Projects
7. Reviews
8. Contact CTA
9. Footer

## Commands

```bash
npm run dev
npm run build
npm run check
npm run format
npm run format:check
```
