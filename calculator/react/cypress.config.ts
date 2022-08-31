import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    supportFile: false,
    video: false,
    baseUrl: 'http://localhost:8080/',
    specPattern: 'src/__tests__/e2e/**/*.spec.ts'
  }
})
