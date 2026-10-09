# Vaishnavi Kulkarni: portfolio

Single-page portfolio built with [Astro](https://astro.build) (static output, ~no client JS beyond the board).
The work is a split-flap departures board; the Product / Program / Project switcher re-sorts it.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview
```

- Content: `src/data/work.ts` (board rows, boarding-pass details, toolkit). Board strings are uppercase and length-limited because each character is one tile.
- Page and script: `src/pages/index.astro`. Styles: `src/styles/global.css`.
- Role links: append `?lens=product`, `?lens=program` or `?lens=project` to share a role-specific view.
- Contact is LinkedIn only (`LINKEDIN` constant in `index.astro`). Add email or a resume link there if wanted.
- GitHub Pages: set `site` and `base` in `astro.config.mjs` to match the repo URL, then deploy `dist/`.
