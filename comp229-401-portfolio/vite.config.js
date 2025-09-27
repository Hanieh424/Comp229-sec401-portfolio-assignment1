import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,                   // allow external hosts
    port: process.env.PORT || 4173
  },
  preview: {
    host: true,                   // allow external hosts in preview
    allowedHosts: [
      'comp229-sec401-portfolio-assignment1.onrender.com'
    ],
    port: process.env.PORT || 4173
  }
})

