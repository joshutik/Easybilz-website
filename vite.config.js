import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Define your custom configuration
const customConfig = {
  // API_BASE_URL: 'https://easybilz-api.onrender.com',
  API_BASE_URL: 'http://127.0.0.1:9090',
};

// Export both Vite configuration and custom configuration
export default defineConfig({
  plugins: [react()],
});

export { customConfig };
