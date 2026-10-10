import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { seoPaginas } from './seo-paginas'

export default defineConfig({
  plugins: [react(), seoPaginas()],
  server: {
    port: 5174,
    allowedHosts: true,
  },
  preview: {
    port: 5174,
    allowedHosts: true,
  },
})
