import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Poke_API/', // ⚠️ must match repo name exactly (case sensitive)
  plugins: [react()],
})
