import { defineConfig } from 'astro/config';

// For GitHub Pages project sites, set `site` and `base` to match the repo URL.
export default defineConfig({
  output: 'static',
  compressHTML: true,
});
