import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Ganti dengan domain final Vercel Anda, mis. https://sdn-bulukerto-01.vercel.app
  site: 'https://sdn-bulukerto-01.vercel.app',
  output: 'static',
  integrations: [tailwind()],
});
