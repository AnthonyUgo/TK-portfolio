// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // if you're using React
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [
    vanillaExtractPlugin(),
  ],
});
