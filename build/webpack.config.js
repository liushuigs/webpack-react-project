require('dotenv').config()
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, '../src/index.jsx')
  },
  watchOptions: {
    aggregateTimeout: 600,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash:8].js',
    publicPath: '/',
  },
  target: 'web',
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      ADMIN_SITE_NAME: JSON.stringify(process.env.ADMIN_SITE_NAME)
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'webpack + react + react-router'
    }),
  ].filter(Boolean),
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [isDevelopment && 'react-refresh/babel'].filter(Boolean),
            },
          },
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: process.env.PORT || 8080,
    static: [
      {
        directory: '../dist'
      }
    ],
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
    compress: true,
    historyApiFallback: true,
    hot: 'only',
  }
}