import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://blossomyoung.uk',
  integrations: [sitemap(), icon()],
});
