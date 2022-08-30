import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    supportFile: false,
    video: false,
    baseUrl: 'http://127.0.0.1:5173/',
    specPattern: 'src/__tests__/e2e/**/*.spec.{js,jsx,ts,tsx}'
  }
})
