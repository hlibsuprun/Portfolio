import { devServer } from './utilities/devServer.js'
import { PATHS } from './utilities/helpers/paths.js'
import { dev, prod } from './utilities/helpers/versions.js'
import { module } from './utilities/module.js'
import { optimization } from './utilities/optimization.js'
import { plugins } from './utilities/plugins.js'

export default {
  entry: `${PATHS.src}/index.tsx`,

  output: {
    filename: '[name].[contenthash].bundle.js',
    path: PATHS.dist,
    publicPath: '/'
  },

  devtool: dev ? 'inline-source-map' : false,

  target: dev ? 'web' : 'browserslist',

  devServer,

  module,

  plugins,

  optimization,

  performance: prod
    ? {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
      }
    : {},

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  }
}
