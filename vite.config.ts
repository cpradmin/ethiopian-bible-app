/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/ethiopian-bible/',
  plugins: [react(), tailwindcss()],
  server: { port: 3300 },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './tests/setup.ts',
    server: {
      // react-router ships mixed ESM/CJS; inline it so vitest transforms it
      deps: { inline: ['react-router', 'react-router-dom'] },
    },
  },
})
