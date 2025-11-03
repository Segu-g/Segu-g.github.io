import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const rootDir = resolve(__dirname, "./html") 

// https://vite.dev/config/
export default defineConfig({
  root: rootDir,
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    }
  },
  build: {
    outDir: resolve(__dirname, "./docs"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(rootDir, "./index.html")
      },
      output: {
        entryFileNames: `js/[name]/bundle.js`
      }
    }
  },
  plugins: [react()],
})
