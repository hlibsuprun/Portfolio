import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { PATHS } from './helpers/paths.js'
import { prod } from './helpers/versions.js'

export const plugins = [
  new CleanWebpackPlugin(),

  new HtmlWebpackPlugin({
    template: `${PATHS.public}/index.html`,
    filename: 'index.html'
  }),

  prod
    ? new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].css'
      })
    : () => {},

  new ForkTsCheckerWebpackPlugin({
    async: false
  })
]
