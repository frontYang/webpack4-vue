/**
 * webpack.dev.js
 */
const utils = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const { dev: config, base } = require('./config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: utils.resolve(base.buildPath || 'dist'),
    host: 'localhost',
    hot: true
  },
  plugins: [
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: utils.resolve('public/index.html'),
      inject: true
    }),
    new FriendlyErrorsWebpackPlugin()
  ]
}

module.exports = merge(common, devConfig, config)

