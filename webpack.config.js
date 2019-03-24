const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const cleanDist = require('clean-webpack-plugin')
const webpack = require('webpack')
const src = './src'
const dist = './dist'

module.exports = {
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', `${src}/main.js`] //从左到右加载，先全局加载polyfill
  },
  output: {
    path: path.resolve(__dirname, dist),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader'] // loader是从右到左加载
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    }]
  },
  plugins: [
    new htmlPlugin({
      template: `${src}/index.html`
    }),
    new cleanDist(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  devServer: {
    contentBase: './dist',
    port: '8080',
    open: true,
    hot: true
  },
  devtool: 'cheap-module-eval-source-map'
}
