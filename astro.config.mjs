// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://PokorintaLaboratory.github.io',
  base: '/PokorintaWeb',
  vite: {
    plugins: [tailwindcss()]
  }
});