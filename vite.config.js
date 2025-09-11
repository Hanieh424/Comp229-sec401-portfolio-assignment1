import { defineConfig, preview } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts:[
      'https://comp229-sec401-week2-f25.onrender.com'
    ]
  }
})

