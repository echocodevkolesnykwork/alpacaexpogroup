# Home Styles

The landing styles are split by ownership and loaded through `src/styles/home/index.js`.

## Load Order

1. `foundation/` - design tokens, document defaults, background primitives.
2. `layout/` - navigation, splash screen, section shell, shared grid, footer.
3. `sections/` - page sections in landing order: hero, perfect event, why us, projects, shows, reviews, process, contact.
4. `components/` - reusable UI patterns used across sections: service cards, messenger buttons, floating contact, full-cycle label.
5. `overlays/` - popups and full-screen overlays.
6. `utilities/` - reveal and motion helper classes.
7. `legacy/` - temporary visual-polish and reference patch layers that must stay last until the legacy CSS is normalized.

## Rules

- Keep original class names while the reference parity phase is active.
- Add new section styles to `sections/` and wire them in `index.js`.
- Add reusable UI styles to `components/`, not to section files.
- Keep browser-specific patches in the smallest possible file.
- Do not move `legacy/patches` earlier in the cascade without visual regression testing.
