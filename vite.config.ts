import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/react-app/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@images': `${path.resolve(__dirname, './src/assets/images/')}`,
    },
  },
})
