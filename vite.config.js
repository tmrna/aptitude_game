import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/aptitude_game/",
  plugins: [react()],
  resolve: {
    alias: {
      lib: "/lib",
      src: "/src",
      styles: "/styles",
    }
  }
})
