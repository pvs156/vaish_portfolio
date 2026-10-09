# Vaishnavi Kulkarni: portfolio

Single-page portfolio built with [Astro](https://astro.build). Static output; the only client JavaScript is the role switcher.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview
```

## Editing
- **Content:** `src/data/work.ts` holds every project (headline, result, roles, story details), the role intros and the toolkit.
- **Page:** `src/pages/index.astro`. **Styles:** `src/styles/global.css`. **Diagrams:** `src/components/Diagram.astro`.
- **Photo:** `src/assets/profile-photo.png` (Astro converts it to WebP at build).
- **Role links:** share `?lens=product`, `?lens=program` or `?lens=project` to open with that role highlighted.
- **Contact:** LinkedIn only (`LINKEDIN` constant in `index.astro`).

## Deploying
- **Vercel or Netlify:** import the repo; build command `npm run build`, output `dist`.
- **GitHub Pages:** set `site` and `base` in `astro.config.mjs` to match the Pages URL, then deploy `dist/`.
