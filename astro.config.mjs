import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.bandcpestcontrol.com/',
  integrations: [
    tailwind(),
    preact({
      compat: true,
    }),
    icon({
      iconDir: 'src/assets/icons',
    }),
  ],
});
