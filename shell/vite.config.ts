import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    federation({
      name: "cm-remote-spa",
      filename: "remoteEntry.js",
      exposes: {
          
      },
      remotes: {
        'remote':"http://localhost:5050/assets/remoteEntry.js"
      },

      shared: ["vue"],
    }),],
    build: {
      polyfillModulePreload: false,
      assetsInlineLimit: 40960,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
      rollupOptions: {
        external: ["vue"],
        output: {
          minifyInternalExports: false,
        },
      },
    },
})
