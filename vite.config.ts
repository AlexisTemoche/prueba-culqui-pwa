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
        clientsClaim: true,
        skipWaiting: true
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
