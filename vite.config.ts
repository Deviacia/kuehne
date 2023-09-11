import { type PluginOption, defineConfig, splitVendorChunkPlugin } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    visualizer({
      template: 'treemap', // or sunburst
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: 'analyse.html', // will be saved in project's root
    }) as PluginOption,
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('@open-ish') || id.includes('@remix-run') || id.includes('tslib')) {
            return '@open-ish';
          }
          // creating a chunk to react routes deps. Reducing the vendor chunk size
          if (id.includes('react-router-dom') || id.includes('react-router')) {
            return '@react-router';
          }
        },
      },
    },
  },
});
