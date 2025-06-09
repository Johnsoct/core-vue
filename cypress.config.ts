import { defineConfig } from "cypress";

export default defineConfig({
    component: {
        devServer: {
            bundler: "vite",
            framework: "vue",
        },
    },

    e2e: {
        baseUrl: "http://localhost:4173",
        specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    },
});
