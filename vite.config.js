import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    copyPublicDir: true,
    rollupOptions: {
      // 确保 _redirects 文件被包含
      external: [],
    }
  },
  publicDir: 'public'
})