var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.jsx",
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
    chunkFilename: "[name].js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js?x$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src/"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  optimization: {
    minimize: false,
  },
  devServer: {
    historyApiFallback: true,
  },
};
