const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: {
    app: path.join(__dirname, '/src/index.tsx')
  },


  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },


  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },

    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/public/index.html')
    }),
    new CopyPlugin([{
      context: 'public',
      from: '**',
      to: '.',
      ignore: [
        'index.html'
      ]
    }])
  ],

  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}
