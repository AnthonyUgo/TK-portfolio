// vite.config.ts

import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'path';

export default defineConfig({
  root: '.', // Assumes index.html is in the root directory
  plugins: [vanillaExtractPlugin()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        admin: path.resolve(__dirname, 'admin-dashboard.html'),
        login: path.resolve(__dirname, 'admin-login.html'), // ✅ ADD THIS
      },
    },
  },
  css: {
    devSourcemap: true,
  },
  server: {
    open: true,
    port: 3000,
  },
});
