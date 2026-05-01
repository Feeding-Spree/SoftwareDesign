import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
<<<<<<< HEAD
        target: 'http://127.0.0.1:3001',
=======
        target: 'http://127.0.0.1:5000',
>>>>>>> feab7b3ee493bdf5e4d52758131c51dc2233825d
        changeOrigin: true,
      }
    }
  },
<<<<<<< HEAD

=======
  
>>>>>>> feab7b3ee493bdf5e4d52758131c51dc2233825d
  // Tells Vite to build ALL your HTML files for Vercel
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        wish: resolve(__dirname, 'wish.html'),
        details: resolve(__dirname, 'details.html'),
<<<<<<< HEAD
        archive: resolve(__dirname, 'archive.html')
=======
        login: resolve(__dirname, 'archive.html') // Add your new login page here too!
>>>>>>> feab7b3ee493bdf5e4d52758131c51dc2233825d
      }
    }
  }
});