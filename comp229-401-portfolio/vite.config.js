import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts:[
      'comp229-sec401-portfolio-assignment1.onrender.com'
    ]
  }
})

