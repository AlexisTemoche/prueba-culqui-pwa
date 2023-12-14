import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/prueba-culqui-pwa/',
  plugins: [
    VitePWA({ 
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        clientsClaim: true,
        skipWaiting: true
      },
      manifest: {
        name: 'My Culqui App',
        short_name: 'CulquiApp',
        description: 'My culqui App is a technical test',
        theme_color: '#000000',
        icons: [
          {
            src: 'logo_black.png',
            sizes: '118x36',
            type: 'svg'
          },
          {
            src: 'logo_white.png',
            sizes: '118x36',
            type: 'svg'
          }
        ]
      }
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
