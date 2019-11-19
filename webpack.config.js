const Path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    filename: 'build.js',
    path: Path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/index.html"
    })
  ],
  devServer: {
    contentBase: "./",
    hot: true
  }
};
