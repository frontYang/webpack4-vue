/**
 * webpack.common.js
 */
const utils = require('./utils')
const { common: config, base } = require('./config')
const merge = require('webpack-merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const commonConfig = {
  entry: {
    app: utils.resolve('src/main.js')
  },

  output: {
    path: utils.resolve(base.buildPath || 'dist'),
    filename: '[name].js',
    publicPath: base.assestPath || '/'
  },

  // 配置模块如何解析
  resolve: {
    // 自动解析确定的扩展，(能够使用户在引入模块时不带扩展，默认值['.wasm', '.mjs', '.js', '.json'])
    extensions: ['.tsx', '.ts', '.js', '.vue', '.json', '.css'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': utils.resolve('src'),
      'scss_vars': '@/styles/vars.scss'
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.(c|sa|sc)ss$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /(node_modules)/
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          fallback: 'responsive-loader',
          limit: 4096,
          quality: 60,
          name: '[name].[hash:8].[ext]',
          outputPath: utils.resolve(base.assetsPath + '/assets'), // 导出指定路径
          publicPath: '/assets/' // 引入的路径
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: '[name].[hash:8].[ext]',
          outputPath: utils.resolve(base.assetsPath + '/assets'),
          publicPath: '/assets/'
        }
      }
    ]
  },
  plugins: [
    // vue-loader
    new VueLoaderPlugin()
  ]
}

module.exports = merge(commonConfig, config)
