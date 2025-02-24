import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  optimizeDeps: {
    include: ['@tauri-apps/api/http', '@tauri-apps/api/fs', '@tauri-apps/api/path']
  },
  plugins: [vue()],
  server: {
    port: 3000
  },
  clearScreen: false,
  envPrefix: ['VITE_', 'TAURI_'],
  build: {
    target: process.env.TAURI_PLATFORM === 'windows' ? 'chrome105' : 'safari13',
    minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
    sourcemap: !!process.env.TAURI_DEBUG,
    rollupOptions: {
      external: ['@tauri-apps/api', '@tauri-apps/api/http', '@tauri-apps/api/fs', '@tauri-apps/api/path']
    }
  }
})