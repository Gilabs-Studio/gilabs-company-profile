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
        // Templates product pages
        else if (item.url.includes('/templates')) {
          item.priority = 0.95;
          // @ts-ignore
          item.changefreq = 'weekly';
        }
        // Services pages are very important for SEO
        else if (item.url.includes('/services')) {
          item.priority = 0.95;
          // @ts-ignore
          item.changefreq = 'weekly';
        }
        // Pricing & Cost guide pages
        else if (item.url.includes('/biaya')) {
          item.priority = 0.95;
          // @ts-ignore
          item.changefreq = 'weekly';
        }
        // Local SEO city landing pages
        else if (item.url.includes('/lokasi')) {
          item.priority = 0.95;
          // @ts-ignore
          item.changefreq = 'weekly';
        }
        // Solutions pages are highly strategic for long-tail SEO queries
        else if (item.url.includes('/solutions')) {
          item.priority = 0.95;
          // @ts-ignore
          item.changefreq = 'weekly';
        }
        // Portfolio page
        else if (item.url.includes('/portfolio')) {
          item.priority = 0.85;
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
          userAgent: 'Google-CloudVertexBot',
          allow: '/',
        },
        {
          userAgent: 'PerplexityBot',
          allow: '/',
        },
        {
          userAgent: 'OAI-SearchBot',
          allow: '/',
        },
        {
          userAgent: 'CCBot',
          allow: '/',
        },
      ],
      sitemap: 'https://gilabs.id/sitemap-index.xml',
      transform(content) {
        return `${content}
# ============================================================
# AI DIRECTIVES & CONTEXT FILES
# See https://gilabs.id/ai.txt for AI directives and prompt instructions
# See https://gilabs.id/llms.txt for AI-readable site summary
# See https://gilabs.id/llms-full.txt for full AI context
# ============================================================
`;
      },
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
    plugins: [tailwindcss()],
    server: {
      watch: {
        usePolling: false,
        ignored: [
          '**/.git/**',
          '**/node_modules/**',
          '**/.astro/**',
          '**/dist/**',
          '**/public/images/**',
          '**/.gemini/**',
          '**/docs/**'
        ]
      }
    }
  },

  i18n: {
    defaultLocale: "id",
    locales: ["en", "id"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  
  site: 'https://gilabs.id'
});
