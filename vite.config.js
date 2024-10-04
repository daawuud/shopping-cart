import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/shopping-cart/', // Add this line
  plugins: [react()],
})
