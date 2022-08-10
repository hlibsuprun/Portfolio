import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { isDev } from './helpers/versions.js'

const html = {
  test: /\.html$/i,
  use: ['html-loader']
}

const styles = {
  test: /\.(s[ac]|c)ss$/i,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        importLoaders: isDev ? 1 : 2,
        sourceMap: isDev,
        modules: false
      }
    },
    { loader: 'postcss-loader', options: { sourceMap: isDev } },
    { loader: 'sass-loader', options: { sourceMap: isDev } }
  ]
}

const jsx = {
  test: /\.jsx?$/i,
  exclude: /node_modules/,
  use: ['babel-loader']
}

const tsx = {
  test: /\.tsx?$/i,
  exclude: /node_modules/,
  use: ['babel-loader', 'ts-loader']
}

const images = {
  test: /\.(png|jpe?g|gif|svg|ico)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'images/[name].[hash].[ext]'
  }
}

const fonts = {
  test: /\.(woff(2)?|ttf|eot|otf)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'fonts/[name][ext]'
  }
}

export const module = {
  rules: [html, styles, jsx, tsx, images, fonts]
}
