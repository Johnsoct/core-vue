// Packages
import path from 'path';
import copy from 'rollup-plugin-copy';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,

    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      // Enables treeshaking for individual component importing
      fileName: 'index',
      formats: [ 'es' ],
    },

    minify: true,

    rollupOptions: {
      // Prevent vue from being bundled with the final build
      external: [ 'vue' ],
      output: {
        globals: {
          Vue: 'vue',
        },
      },
    },
  },

  plugins: [
    vue(),
    copy({
      targets: [
        {
          dest: 'dist/',
          src: 'src/styles',
        },
      ],
    }),
  ],

  resolve: {
    alias: {
      '@cypress': path.resolve(__dirname, './cypress'),
      '@src': path.resolve(__dirname, './src'),
      '@ts': path.resolve(__dirname, './types'),
    },
  },
});
