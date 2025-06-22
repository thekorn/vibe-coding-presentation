import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  build: {
    chunkSizeWarningLimit: 4000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['monaco-editor'],
        },
      },
    },
  },
});
