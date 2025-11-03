import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const rootDir = resolve(__dirname, "./src/pages") 

// https://vite.dev/config/
export default defineConfig({
  root: rootDir,
  build: {
    outDir: "dist",
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
