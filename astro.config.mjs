// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  integrations: [
    react(),
    sitemap({
      // @ts-ignore
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404'),
      serialize: (item) => {
        // Homepage pages get highest priority
        if (item.url.match(/\/en\/?$/) || item.url.match(/\/id\/?$/)) {
          item.priority = 1.0;
          // @ts-ignore
          item.changefreq = 'weekly';
        }
        // Services pages are very important for SEO
        else if (item.url.includes('/services')) {
          item.priority = 0.95;
          // @ts-ignore
          item.changefreq = 'monthly';
        }
        // Solutions pages are highly strategic for long-tail SEO queries
        else if (item.url.includes('/solutions')) {
          item.priority = 0.95;
          // @ts-ignore
          item.changefreq = 'weekly';
        }
        // Blog listing pages
        else if (item.url.match(/\/blog\/?$/)) {
          item.priority = 0.9;
          // @ts-ignore
          item.changefreq = 'weekly';
        }
        // Portfolio page
        else if (item.url.includes('/portfolio')) {
          item.priority = 0.85;
          // @ts-ignore
          item.changefreq = 'monthly';
        }
        // Individual blog posts
        else if (item.url.includes('/blog/')) {
          item.priority = 0.8;
          // @ts-ignore
          item.changefreq = 'monthly';
        }
        // Work-results page
        else if (item.url.includes('/work-results')) {
          item.priority = 0.8;
          // @ts-ignore
          item.changefreq = 'monthly';
        }
        return item;
      }
    }),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/404', '/api/'],
        },
        // Explicitly allow AI crawlers full access
        {
          userAgent: 'GPTBot',
          allow: '/',
        },
        {
          userAgent: 'ClaudeBot',
          allow: '/',
        },
        {
          userAgent: 'Google-Extended',
          allow: '/',
        },
        {
          userAgent: 'PerplexityBot',
          allow: '/',
        },
      ],
      sitemap: 'https://gilabs.id/sitemap-index.xml',
    }),
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
          collapseWhitespace: true,
          removeComments: true,
          minifyCSS: true,
          minifyJS: true,
        },
      },
      Image: false, // Let Astro handle images
      SVG: true,
      JavaScript: true,
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    defaultLocale: "id",
    locales: ["id", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  
  site: 'https://gilabs.id'
});
