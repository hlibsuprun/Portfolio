import CssMinimizerWebpackPlugin from 'css-minimizer-webpack-plugin'
import HtmlMinimizerWebpackPlugin from 'html-minimizer-webpack-plugin'
import TerserWebpackPlugin from 'terser-webpack-plugin'

import { isProd } from './helpers/versions.js'

export const optimization = {
  splitChunks: { chunks: 'all' },
  minimize: isProd,
  minimizer: isProd
    ? [
        new TerserWebpackPlugin({
          extractComments: false,
          terserOptions: {
            format: {
              comments: false
            }
          }
        }),
        new HtmlMinimizerWebpackPlugin(),
        new CssMinimizerWebpackPlugin()
      ]
    : [],
  runtimeChunk: isProd
    ? {
        name: 'runtime'
      }
    : {}
}
