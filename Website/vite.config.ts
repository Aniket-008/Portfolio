import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages can serve the app from a project site path like /Portfolio/
// or a custom domain. Using a relative base keeps asset URLs valid in both cases.
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
