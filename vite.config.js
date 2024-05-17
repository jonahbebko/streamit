import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    origin: 'https://127.0.0.1/streamit',
    host: 'true',
  },
  
  plugins: [react(), VitePWA({
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