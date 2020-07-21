const path = require('path')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const CopyPlugin         = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode     : 'development',
  entry    : path.join(__dirname, '/src/app.tsx'),
  output   : {
    path: path.join(__dirname, '/dist'),
  },
  module   : {
    rules: [
      {
        test   : /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use    : {
          loader: 'babel-loader',
        },
      },{
        test: /.wasm$/,
        type: "javascript/auto",
        loader: "file-loader",
        options: {
          publicPath: "dist/"
        }
      }
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      'src': path.join(__dirname, 'src'),
      'wasm': path.join(__dirname, 'wasm')
    }
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

    new CopyPlugin([
      {
        context: 'wasm',
        from   : '**',
        to     : '.',
        ignore : [
          '.env',
          'go.mod',
          'main.go',
        ],
      }]),

    //https://github.com/johnagan/clean-webpack-plugin
    new CleanWebpackPlugin(),
  ],
  devServer: {
    host                 : '0.0.0.0',
    port                 : '1234',
    publicPath           : '/',
    compress             : true,
    disableHostCheck     : true,
    contentBase          : path.join(__dirname, 'public'),
    contentBasePublicPath: '/',
    hot                  : true,
    overlay              : true,
  },
}
