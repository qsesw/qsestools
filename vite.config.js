import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  optimizeDeps: {
    include: [
      '@tauri-apps/api',
      '@tauri-apps/api/shell',
      '@tauri-apps/api/window',
      '@tauri-apps/api/path',
      '@tauri-apps/api/fs',
      '@tauri-apps/api/dialog'
    ]
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 5176
  },
  clearScreen: false,
  envPrefix: ['VITE_', 'TAURI_'],
  build: {
    target: process.env.TAURI_PLATFORM === 'windows' ? 'chrome105' : 'safari13',
    minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
    sourcemap: !!process.env.TAURI_DEBUG
  }
})