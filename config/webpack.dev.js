const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const config = require('./config');

module.exports = merge.smart(baseWebpackConfig, {
  mode: 'development',
  output: {
    filename: 'js/[name].[hash:8].js',
    publicPath: config.publicPath
  },
  module: {
    rules: [
      {
        oneOf: []
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: config.indexPath,
      minify: {
        html5: true
      },
      hash: false
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  stats: {
    colors: true,
    children: false,
    chunks: false,
    chunkModules: false,
    modules: false,
    builtAt: false,
    entrypoints: false,
    assets: false,
    version: false
  },
  devServer: config.devServer
});