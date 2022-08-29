import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:5173/',
    supportFile: false,
    specPattern: 'src/__tests__/e2e/**/*.spec.{js,jsx,ts,tsx}'
  }
})
