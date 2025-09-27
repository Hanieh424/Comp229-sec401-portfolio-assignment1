import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: true, // listen on 0.0.0.0
    allowedHosts: ['comp229-sec401-portfolio-assignment1.onrender.com'],
    port: Number(process.env.PORT) || 4173,
    strictPort: true,
  },
})

