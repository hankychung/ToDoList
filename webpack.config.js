const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const cleanDist = require('clean-webpack-plugin')
const src = './src'
const dist = './dist'

module.exports = {
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', `${src}/main.js`] //从左到右加载，先全局加载polyfill，全局注入ES6+ API
  },
  output: {
    path: path.resolve(__dirname, dist),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }]
  },
  plugins: [
    new htmlPlugin({
      template: `${src}/index.html`
    }),
    new cleanDist()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
}