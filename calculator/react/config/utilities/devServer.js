import { isDev } from './helpers/versions.js'

export const devServer = {
  port: 'auto',
  open: isDev,
  hot: isDev,
  client: {
    progress: isDev
  }
}
