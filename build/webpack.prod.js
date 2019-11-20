/**
 * webpack.prod.js
 */
const webpack = require('webpack')
const utils = require('./utils')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const { prod: config } = require('./config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const prodConfig = {
  mode: 'production',
  output: {
    filename: 'js/[name].[hash:8].js',
    chunkFilename: 'js/[name].[chunkhash].js'
  },
  devtool: 'source-map',
  // 优化
  optimization: {
    splitChunks: {
      chunks: 'all',
      // 缓存组
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'initial',
          priority: 2,
          minChunks: 2
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
          priority: 20
        }
      }
    }
  },
  plugins: [
    // 清除打包目录
    new CleanWebpackPlugin(),

    // 会根据模块的相对路径生成一个四位数的hash作为模块id, 建议用于生产环境。
    new webpack.HashedModuleIdsPlugin(),

    // 压缩js
    new UglifyJSPlugin({
      sourceMap: true
    }),

    // 提取css文件
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css',
      chunkFilename: 'css/[id].[hash:8].css'
    }),

    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: utils.resolve('public/index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    })

    // new BundleAnalyzerPlugin()
  ]
}

module.exports = merge(common, prodConfig, config)
