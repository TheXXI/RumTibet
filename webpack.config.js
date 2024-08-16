const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
        filename: './styles/main.css'
    })
],
  module: {
    rules: [
      {
        test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
        type: 'asset/inline'
    },
    {
        test: /\.html$/i,
        loader: 'html-loader'
    },
    {
      test: /\.css$/i,
      use: [
        MiniCssExtractPlugin.loader, 'css-loader'
      ]
  },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(oft)$/,
        use: [
            {
                loader: 'file-loader?name=./fonts/[name].[ext]'
            }
        ]
    }
    ],
  },
};