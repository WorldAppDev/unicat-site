import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Keeps host broad for general network access
    allowedHosts: [ // Add this new property
      'hamcat.ngrok.io', // Allow your custom ngrok domain
      '.ngrok.io' // This wildcard *might* also be useful for other ngrok subdomains
    ]
  }
})
        