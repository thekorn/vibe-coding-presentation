import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'pages/videos/*',
          dest: 'pages/videos',
        },
      ],
    }),
  ],
});
