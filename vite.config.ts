import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import ViteFonts from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), ViteFonts({
    google: {
      families: ['Noto Sans JP']
    },
  })]
})
