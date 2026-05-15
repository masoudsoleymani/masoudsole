// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // site: '#',
  // base: '/',
  vite: {
    resolve: {
      tsconfigPaths: false
    },
    plugins: [tailwindcss()]
  },

  integrations: [icon()]
});