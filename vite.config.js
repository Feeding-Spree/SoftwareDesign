import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',
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
        login: resolve(__dirname, 'login.html') // Add your new login page here too!
      }
    }
  }
});