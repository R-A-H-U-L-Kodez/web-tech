import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => ({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'pages': [
            './src/components/AboutPage.tsx',
            './src/components/ResourcesPage.tsx',
            './src/components/CareersPage.tsx',
            './src/components/PrivacyPolicyPage.tsx',
            './src/components/TermsOfServicePage.tsx'
          ]
        }
      }
    },
    // Optimize asset filename hashing for long-term caching
    assetsDir: 'assets',
    // Generate content hash for all assets
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  }
}));
