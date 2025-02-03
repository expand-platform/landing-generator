import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    FullReload(["./src/**/*"], { always: false })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),

      "@components": fileURLToPath(new URL('./src/components', import.meta.url)),
      "@sections": fileURLToPath(new URL('./src/components/sections', import.meta.url)),

      "@configs": fileURLToPath(new URL('./src/configs', import.meta.url)),
      "@ts": fileURLToPath(new URL('./src/ts', import.meta.url)),
      "@scss": fileURLToPath(new URL('./src/scss', import.meta.url)),
    },
  },
})
