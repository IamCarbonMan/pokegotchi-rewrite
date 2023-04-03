import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import civetPlugin from 'vite-plugin-civet'

export default defineConfig({
  plugins: [
    react(),
    civetPlugin({
      stripTypes: false,
      outputExtension: 'tsx',
      outputTransformerPlugin: 'react'
    })
  ],
  server: {
    port: 3000
  }
})