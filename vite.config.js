import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Lax_360/', // Set this to '/' if you are using a custom domain (e.g. www.lax360.com)
})
