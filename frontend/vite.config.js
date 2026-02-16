import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command }) => ({
  plugins: [vue()],
  // Use root path in dev for proper HMR; keep Frappe assets path in production build.
  base: command === 'serve' ? '/' : '/assets/lucrum_order_management/js/vue_app/',
  build: {
    outDir: '../lucrum_order_management/public/js/vue_app/',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  },
  server: {
    port: 8080,
    // App HTML is served by Frappe (:8000) in dev, so force asset URLs to Vite origin.
    origin: 'http://127.0.0.1:8080',
    cors: true,
    watch: {
      usePolling: true,
      interval: 300,
      ignored: ['**/node_modules/**', '**/.git/**', '**/dist/**', '**/public/js/vue_app/**']
    },
    proxy: {
      '^/(api|method)': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
      }
    }
  }
}))
