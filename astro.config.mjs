import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'static',
  site: 'https://arseny2019.github.io',
  base: '/competency-tree',
  build: {
    assets: '_astro'
  }
});
