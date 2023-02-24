import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias:{
      "@static": path.resolve(__dirname, "public/static"),
      "@":path.resolve(__dirname,"src"),
      "assets": path.resolve(__dirname, "src/assets"),
      "views": path.resolve(__dirname, "src/views"),
      "plugins": path.resolve(__dirname, "src/plugins"),
    },

  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData:`
          @import "${path.resolve(__dirname, './src/assets/less/common/ayinmixins.less')}";
          @import "${path.resolve(__dirname, './src/assets/less/common/ayincolor.less')}";
          @import "${path.resolve(__dirname, './src/assets/less/common/ayincolor-expand.less')}";
         `
      }
    }
  },
  plugins: [
    vue(),
  ]
})
