import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.bandcpestcontrol.com/',
  integrations: [tailwind(), preact({ compat: true })],
});
