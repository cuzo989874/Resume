import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// Note: Import SEO_CONFIG from the config file
// For now, using the placeholder - replace with actual domain before deployment
const SITE_URL = 'https://cuzo989874.github.io';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: '/',
  // 自定义资源目录名，避免 GitHub Pages Jekyll 忽略以下划线开头的文件夹
  // 将 _astro 改为 astro，这样就不需要 .nojekyll 文件或构建后脚本
  build: {
    assets: 'astro'
  },
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
