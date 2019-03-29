const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const cleanDist = require('clean-webpack-plugin')
const webpack = require('webpack')
const src = path.resolve(__dirname, './src')
const dist = path.resolve(__dirname, './dist')

module.exports = {
  mode: 'development',
  entry: {
    /**
     *  main: ['@babel/polyfill', './src/main.js']
     * 从左到右加载，先全局加载polyfill, 再加载项目代码
     * (已废弃，转为在.babelrc中配置为按需加载)
     */
    main: [`${src}/main.js`]
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
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    }, {
      test: /\.(ttf|woff)$/,
      use: ['file-loader']
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
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@pages': `${src}/pages`,
      '@cmps': `${src}/components`,
      '@style': `${src}/style`,
    }
  },
  devServer: {
    contentBase: './dist',
    port: '8080',
    open: true,
    hot: true
  },
  devtool: 'cheap-module-eval-source-map',
  performance: {
    hints: 'warning',
    maxAssetSize: 10240000,
    maxEntrypointSize: 10240000
  }
}
