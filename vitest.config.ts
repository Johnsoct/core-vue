import { fileURLToPath } from 'node:url';
import {
    defineConfig,
    mergeConfig,
} from 'vitest/config';

import viteConfig from './vite.config';

// Vitest config overwrites the vite config, so we need to include
// it here so the same settings out app runs on runs in our tests
export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            environment: 'jsdom',
            exclude: [
                '**/node_modules/**',
                '**/dist/**',
                '**/.{idea,git,cache,output,temp}/**',
                '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
                'examples/lint-examples.unit.spec.js',
            ],
            globals: true,
            root: fileURLToPath(new URL('./', import.meta.url)),
        },
    })
);
