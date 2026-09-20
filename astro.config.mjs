// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.ayoamaro.dev',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon(), sitemap()],
});
