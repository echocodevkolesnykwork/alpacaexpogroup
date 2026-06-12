# Home Scripts

This directory contains extracted behavior from the HTML reference.

The numeric prefixes are intentional. They preserve the original script execution order while each file name describes its current responsibility.

## Current Strategy

- Keep legacy globals and inline handlers working during the visual parity phase.
- Split scripts by feature so future cleanup can happen one block at a time.
- Avoid rewriting behavior before the final assets, CMS model, and GSAP architecture are confirmed.

## Refactor Path

1. Keep the current ordered raw-script runner until visual parity is stable.
2. Move hardcoded content into page-local data modules when the WordPress data model is approved.
3. Replace inline handlers with delegated listeners section by section.
4. Convert stable blocks into imported ES modules with explicit `init*` functions.
5. Add GSAP timelines only after media formats, mobile behavior, and reduced-motion fallbacks are finalized.
