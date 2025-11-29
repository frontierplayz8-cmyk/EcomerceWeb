import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Automatically switch base depending on environment
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})