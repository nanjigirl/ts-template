/*
 * @Description: 添加文件描述
 * @Author: chenxue12
 * @LastEditors: chenxue12
 * @Date: 2019-09-25 16:05:35
 * @LastEditTime: 2019-09-25 20:43:34
 */
const path = require('path');

module.exports = {
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsDirectory: 'static',
  publicPath: '/',
  indexPath: path.resolve(__dirname, '../public/index.html'),
  productionJsSourceMap: false,
  productionGzip: true,
  devServer: {
    port: 8080,
    host: 'localhost',
    contentBase: path.join(__dirname, '../public'),
    watchContentBase: true,
    publicPath: '/',
    compress: true,
    historyApiFallback: true,
    hot: true,
    clientLogLevel: 'error',
    open: true,
    overlay: false,
    quiet: false,
    noInfo: false,
    watchOptions: {
      ignored: /node_modules/
    },
    proxy: {}
  }
};