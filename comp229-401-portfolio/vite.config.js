import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,                  // allow external hosts
    port: process.env.PORT || 4173 // use Render’s assigned port
  }
})
