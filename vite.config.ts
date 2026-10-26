import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'es2020',
    // Keep Vite's hashed bundles out of /assets, which the legacy site used
    // for its videos (/assets/front/images/...).
    assetsDir: 'static',
    cssCodeSplit: false,
  },
  server: {
    port: 5173,
  },
})
