# Home Page

This page module owns the current landing implementation rendered on `/`.

## Boundaries

- `mount.js` mounts the page into the app root, injects styles, runs extracted legacy scripts, and queues deferred patch styles.
- `index.js` assembles HTML partials in the visible landing order.
- `data` contains local fallback data that mirrors the expected WordPress shape.
- `renderers` converts structured data into the existing class-based markup.
- `partials/layout` contains splash, navigation, and footer markup.
- `partials/sections` contains visible landing sections.
- `partials/overlays` contains popups and floating UI that sit outside the main document flow.
- `scripts` contains extracted legacy scripts in preserved execution order.

## Integration Direction

Keep visual parity first. Projects and Reviews already use page-local data modules and renderers. The current local data preserves the reference output, while `window.AEG_DATA` can override it later when WordPress output is ready.

Expected first migration targets:

- `projects` - maps to the Toolset `projects` CPT and repeatable media gallery.
- `reviews` - maps to the Toolset `reviews` CPT.
- `planets` - depends on final media format and CMS ownership decision.

Do not rename existing CSS classes during migration. PHP/WordPress output should either provide normalized JSON for these renderers or reproduce the same class structure.

## WordPress Data Contract

Preferred integration seam:

```html
<script>
  window.AEG_DATA = {
    projects: [],
    reviews: [],
  };
</script>
```

`projects` should normalize Toolset fields into:

```js
{
  id: 'project-id',
  client: 'Client name',
  title: 'Post title',
  details: ['Detail line'],
  revealClass: 'd1',
  media: [
    {
      type: 'image',
      src: 'image-url',
      alt: 'Image alt',
    },
  ],
}
```

`reviews` should normalize Toolset fields into:

```js
{
  id: 'review-id',
  company: 'Company',
  logo: {
    type: 'image',
    src: 'logo-url',
    alt: 'Company',
  },
  text: 'Review text',
  authorName: 'Author',
  authorPosition: 'Position',
}
```
