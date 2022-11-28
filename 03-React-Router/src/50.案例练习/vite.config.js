import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' //这个要引入

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //新增加的
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
