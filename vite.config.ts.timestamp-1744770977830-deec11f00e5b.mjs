// vite.config.ts
import path from "path";
import copy from "file:///Users/taylor/dev/core-vue/node_modules/rollup-plugin-copy/dist/index.commonjs.js";
import { defineConfig } from "file:///Users/taylor/dev/core-vue/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/taylor/dev/core-vue/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/taylor/dev/core-vue";
var vite_config_default = defineConfig({
  base: "/core-css/",
  build: {
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/main.ts"),
      // Enables treeshaking for individual component importing
      fileName: "index",
      formats: ["es"]
    },
    outDir: "dist/site",
    minify: "esbuild",
    rollupOptions: {
      // Prevent vue from being bundled with the final build
      external: ["vue"],
      output: {
        globals: {
          Vue: "vue"
        }
      }
    },
    target: "modules"
  },
  plugins: [
    vue(),
    copy({
      targets: [
        {
          dest: "dist/",
          src: "src/styles"
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "@cypress": path.resolve(__vite_injected_original_dirname, "./cypress"),
      "@src": path.resolve(__vite_injected_original_dirname, "./src"),
      "@ts": path.resolve(__vite_injected_original_dirname, "./types")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvdGF5bG9yL2Rldi9jb3JlLXZ1ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3RheWxvci9kZXYvY29yZS12dWUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3RheWxvci9kZXYvY29yZS12dWUvdml0ZS5jb25maWcudHNcIjsvLyBQYWNrYWdlc1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgY29weSBmcm9tICdyb2xsdXAtcGx1Z2luLWNvcHknO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIGJhc2U6ICcvY29yZS1jc3MvJyxcblxuICAgIGJ1aWxkOiB7XG4gICAgICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICAgICAgICBsaWI6IHtcbiAgICAgICAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL21haW4udHMnKSxcbiAgICAgICAgICAgIC8vIEVuYWJsZXMgdHJlZXNoYWtpbmcgZm9yIGluZGl2aWR1YWwgY29tcG9uZW50IGltcG9ydGluZ1xuICAgICAgICAgICAgZmlsZU5hbWU6ICdpbmRleCcsXG4gICAgICAgICAgICBmb3JtYXRzOiBbICdlcycgXSxcbiAgICAgICAgfSxcbiAgICAgICAgb3V0RGlyOiAnZGlzdC9zaXRlJyxcbiAgICAgICAgbWluaWZ5OiAnZXNidWlsZCcsXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgICAgIC8vIFByZXZlbnQgdnVlIGZyb20gYmVpbmcgYnVuZGxlZCB3aXRoIHRoZSBmaW5hbCBidWlsZFxuICAgICAgICAgICAgZXh0ZXJuYWw6IFsgJ3Z1ZScgXSxcbiAgICAgICAgICAgIG91dHB1dDoge1xuICAgICAgICAgICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgVnVlOiAndnVlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgdGFyZ2V0OiAnbW9kdWxlcycsXG4gICAgfSxcblxuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgdnVlKCksXG4gICAgICAgIGNvcHkoe1xuICAgICAgICAgICAgdGFyZ2V0czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzdDogJ2Rpc3QvJyxcbiAgICAgICAgICAgICAgICAgICAgc3JjOiAnc3JjL3N0eWxlcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgIF0sXG5cbiAgICByZXNvbHZlOiB7XG4gICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgICAnQGN5cHJlc3MnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9jeXByZXNzJyksXG4gICAgICAgICAgICAnQHNyYyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxuICAgICAgICAgICAgJ0B0cyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3R5cGVzJyksXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLE9BQU8sVUFBVTtBQUNqQixPQUFPLFVBQVU7QUFDakIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBSmhCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNILGFBQWE7QUFBQSxJQUNiLEtBQUs7QUFBQSxNQUNELE9BQU8sS0FBSyxRQUFRLGtDQUFXLGFBQWE7QUFBQTtBQUFBLE1BRTVDLFVBQVU7QUFBQSxNQUNWLFNBQVMsQ0FBRSxJQUFLO0FBQUEsSUFDcEI7QUFBQSxJQUNBLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQTtBQUFBLE1BRVgsVUFBVSxDQUFFLEtBQU07QUFBQSxNQUNsQixRQUFRO0FBQUEsUUFDSixTQUFTO0FBQUEsVUFDTCxLQUFLO0FBQUEsUUFDVDtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsSUFDQSxRQUFRO0FBQUEsRUFDWjtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ0wsSUFBSTtBQUFBLElBQ0osS0FBSztBQUFBLE1BQ0QsU0FBUztBQUFBLFFBQ0w7QUFBQSxVQUNJLE1BQU07QUFBQSxVQUNOLEtBQUs7QUFBQSxRQUNUO0FBQUEsTUFDSjtBQUFBLElBQ0osQ0FBQztBQUFBLEVBQ0w7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNILFlBQVksS0FBSyxRQUFRLGtDQUFXLFdBQVc7QUFBQSxNQUMvQyxRQUFRLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDdkMsT0FBTyxLQUFLLFFBQVEsa0NBQVcsU0FBUztBQUFBLElBQzVDO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
