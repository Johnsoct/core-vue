// Packages
import path from 'path';
import copy from 'rollup-plugin-copy';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/core-vue/',

    build: {
        emptyOutDir: true,
        outDir: 'dist/site',
        minify: 'esbuild',
        target: 'modules',
    },

    plugins: [
        vue(),
    ],

    resolve: {
        alias: {
            '@cypress': path.resolve(__dirname, './cypress'),
            '@src': path.resolve(__dirname, './src'),
            '@ts': path.resolve(__dirname, './types'),
        },
    },
});
