import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    origin: 'https://127.0.0.1/streamit',
    host: 'true',
  },
  
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].split('@')[0]
          }
        },
      },
    },
  },

  plugins: [react(), nodePolyfills(), VitePWA({
    registerType: 'autoUpdate',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'streamit!',
      short_name: 'streamit!',
      homepage: '/streamit/',
      description: 'web-based music streaming service',
      background_color: '#000000',
      theme_color: '#000000',
      icons: [
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: 'manifest-icon-512.maskable.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: 'manifest-icon-192.maskable.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      runtimeCaching: [
        {
          urlPattern: /\*\.mp3/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'audio',
          },
        },
        {
          urlPattern: /https:\/\/fonts\.googleapis\.com\/\*/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'material-symbols-cache',
          }
        }
      ],
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})