import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3001',
        changeOrigin: true,
      }
    }
  },
  // Tells Vite to build ALL your HTML files for Vercel
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        wish: resolve(__dirname, 'wish.html'),
        details: resolve(__dirname, 'details.html'),
        archive: resolve(__dirname, 'archive.html')
      }
    }
  }
});