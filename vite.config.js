import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/my-portfolio/", // ✅ match homepage path
  plugins: [react()],
})
