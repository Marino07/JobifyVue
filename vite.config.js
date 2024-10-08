import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Target server
        changeOrigin: true, // Change origin of the host header to the target URL
        rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite the path
      },
    },
  },
});