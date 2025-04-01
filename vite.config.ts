import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Only use the base path when deploying to GitHub Pages
  base: process.env.NODE_ENV === 'production' ? '/VxBtww/' : '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
