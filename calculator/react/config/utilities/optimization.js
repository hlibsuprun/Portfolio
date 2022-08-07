import CssMinimizerWebpackPlugin from 'css-minimizer-webpack-plugin'
import HtmlMinimizerWebpackPlugin from 'html-minimizer-webpack-plugin'
import TerserWebpackPlugin from 'terser-webpack-plugin'

import { prod } from './helpers/versions.js'

export const optimization = {
  splitChunks: { chunks: 'all' },
  minimize: prod,
  minimizer: prod
    ? [
        new TerserWebpackPlugin(),
        new HtmlMinimizerWebpackPlugin(),
        new CssMinimizerWebpackPlugin()
      ]
    : [],
  runtimeChunk: prod
    ? {
        name: 'runtime'
      }
    : {}
}
