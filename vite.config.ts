import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    VueSetupExtend(),
    VueDevTools(),
    quasar({
      sassVariables: 'src/assets/styles/quasar-variables.sass'
    }),
    AutoImport({
      dts: 'vue-global-api.d.ts',
      imports: ['vue', 'pinia', 'quasar']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build:{
    outDir:'publish'
  },
  server: {
    port: 5173,
    open: '/home',
    host: 'localhost'
  }
})
