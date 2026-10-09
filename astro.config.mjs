import { defineConfig } from 'astro/config';

// Served as a GitHub Pages project site at https://pvs156.github.io/vaish_portfolio/
export default defineConfig({
  site: 'https://pvs156.github.io',
  base: '/vaish_portfolio',
  output: 'static',
  compressHTML: true,
});
