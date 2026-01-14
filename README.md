# Resume - SSG with Astro

This is a static site generated resume using [Astro](https://astro.build) with multi-language support (Chinese Traditional and English).

## Features

- ✅ Static Site Generation (SSG) for optimal performance and SEO
- ✅ Multi-language support (zh-TW and en)
- ✅ Structured data (JSON-LD) for better SEO
- ✅ Responsive design
- ✅ Clean component-based architecture

## Project Structure

```
/
├── src/
│   ├── components/       # Reusable Astro components
│   ├── i18n/            # Translation files
│   ├── layouts/         # Page layouts
│   ├── pages/           # Pages (routes)
│   │   ├── index.astro  # Chinese version (/)
│   │   └── en/
│   │       └── index.astro  # English version (/en/)
│   ├── styles/          # CSS files
│   └── utils/           # Utility functions
├── public/
│   └── assets/         # Static assets (images, etc.)
├── astro.config.mjs     # Astro configuration
└── package.json
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` for Chinese version and `http://localhost:4321/en/` for English version.

### Build

```bash
npm run build
```

This will generate static HTML files in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

The `dist/` folder contains the static files ready to be deployed to any static hosting service:

- **Vercel**: Connect your repository and it will auto-deploy
- **Netlify**: Connect your repository and it will auto-deploy
- **GitHub Pages**: Push the `dist/` folder to `gh-pages` branch
- **Any static host**: Upload the `dist/` folder contents

## Configuration

### Update Site URL

Edit `astro.config.mjs` and update the `site` property:

```js
site: 'https://your-domain.com',
```

Also update the canonical URLs in:
- `src/pages/index.astro`
- `src/pages/en/index.astro`
- `src/utils/structuredData.ts`

## Adding New Languages

1. Create a new translation file in `src/i18n/` (e.g., `ja.ts` for Japanese)
2. Create a new page in `src/pages/ja/index.astro`
3. Update `astro.config.mjs` to include the new locale

## License

© 2026 Cuzo Miao. All rights reserved.
