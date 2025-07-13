        import { defineConfig } from 'vite';
        import react from '@vitejs/plugin-react';

        export default defineConfig({
          plugins: [react()],
          server: {
            host: '0.0.0.0', // This makes Vite listen on all available network interfaces
            port: 5173,      // Ensure this matches the port you expect
          },
        });
        