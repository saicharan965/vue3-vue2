import { fileURLToPath } from 'url'
import federation from '@originjs/vite-plugin-federation'

import { defineConfig } from 'vite'
import { createVuePlugin as vue2 } from 'vite-plugin-vue2'
// @ts-ignore
import vueTemplateBabelCompiler from 'vue-template-babel-compiler'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2({
      jsx: true,
      vueTemplateOptions: {
        compiler: vueTemplateBabelCompiler
      }
    }),
    federation({
      name: "cm-remote-spa",
      filename: "remoteEntry.js",
      exposes: {
        './HelloWorld': './src/components/HelloWorld.vue',
        './vueTwo': './node_modules/vue/dist/vue',
      },
      remotes: {
      },

      shared: ["vue"],
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    target: "esnext"
  },
})
