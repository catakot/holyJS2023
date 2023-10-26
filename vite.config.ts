import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/holyJS2023/',
  plugins: [react()],
  build: {
    outDir: './docs',
  },
});
