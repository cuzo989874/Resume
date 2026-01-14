import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// Note: Import SEO_CONFIG from the config file
// For now, using the placeholder - replace with actual domain before deployment
const SITE_URL = 'https://your-domain.com'; // TODO: Replace with actual domain

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
