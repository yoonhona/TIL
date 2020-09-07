const path               = require('path')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const CopyPlugin         = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    app: path.join(__dirname, '/src/index.tsx'),
  },

  // https://webpack.js.org/configuration/output/
  output: {
    publicPath   : '/',
    path         : path.join(__dirname, '/dist'),
    pathinfo     : !isProduction,
    filename     : isProduction ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
    chunkFilename: isProduction ? 'js/[name].[contenthash:8].chunk.js' : 'js/[name].chunk.js',
  },

  optimization: {
    // https://webpack.js.org/plugins/split-chunks-plugin/
    splitChunks: {
      chunks: 'all',
      name  : !isProduction,
    },

    // https://webpack.js.org/configuration/optimization/#optimizationruntimechunk
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`,
    },
  },

  // https://webpack.js.org/configuration/resolve/
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      'src': path.join(__dirname, 'src')
    }
  },

  module: {
    rules: [
      {
        test   : /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use    : {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    // https://webpack.js.org/plugins/html-webpack-plugin/
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/public/index.html'),
    }),

    // https://webpack.js.org/plugins/copy-webpack-plugin/
    new CopyPlugin([
      {
        context: 'public',
        from   : '**',
        to     : '.',
        ignore : [
          'index.html',
        ],
      }]),

    //https://github.com/johnagan/clean-webpack-plugin
    new CleanWebpackPlugin(),
  ],

  // https://webpack.js.org/configuration/devtool/#devtool
  devtool: isProduction ? 'none' : 'source-map',

  devServer: {
    host: '0.0.0.0',
    port: '1234',
    publicPath: '/',
    compress: true,
    disableHostCheck: true,
    contentBase          : path.join(__dirname, 'public'),
    contentBasePublicPath: '/',
    hot: true,
    overlay: true
  },
}
