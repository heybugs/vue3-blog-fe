import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // vite配置项目路径别名
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    },
  },
  plugins: [vue()],
})
