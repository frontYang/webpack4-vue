const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(c|sa|sc)ss$/,
        use: [
          'vue-style-loader', 
          'style-loader', 
          'css-loader', 
          'postcss-loader', 
          'sass-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

