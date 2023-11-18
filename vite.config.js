import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // run on github with /helixapp-frontend-jsx-2/
  base: "/helixapp-frontend-jsx-2/",
})
