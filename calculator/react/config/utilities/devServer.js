import { dev } from './helpers/versions.js'

export const devServer = {
  port: 'auto',
  open: dev,
  hot: dev,
  client: {
    progress: dev
  }
}
