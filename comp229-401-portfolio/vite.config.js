import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['comp229-sec401-portfolio-assignment1.onrender.com'],
    host: true,
    port: 3000
  }
})
