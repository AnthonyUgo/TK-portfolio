// vite.config.ts

import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'path';

export default defineConfig({
  root: '.', // Assumes index.html is in the root directory
  plugins: [vanillaExtractPlugin()],
  build: {
    outDir: 'dist', // Ensure this matches GitHub Actions `output_location`
    emptyOutDir: true, // Clean up old builds
    assetsDir: 'assets', // Optional: custom directory for static assets
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        admin: path.resolve(__dirname, 'admin-dashboard.html'),
      },
    },
  },
  css: {
    devSourcemap: true, // Helps with debugging styles in browser
  },
  server: {
    open: true,
    port: 3000,
  },
});
