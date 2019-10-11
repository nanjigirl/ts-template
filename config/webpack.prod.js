/*
 * @Description: 添加文件描述
 * @Author: chenxue12
 * @LastEditors: chenxue12
 * @Date: 2019-09-25 16:06:36
 * @LastEditTime: 2019-09-27 16:27:51
 */
const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const TerserJSPlugin = require('terser-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const CompressionWebpackPlugin = require('compression-webpack-plugin');
const config = require('./config');

module.exports = merge.smart(baseWebpackConfig, {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        app: path.join(__dirname, '../src/index.tsx'),
        vendor: ['react', 'react-dom'] // 不变的代码分包
    },
    output: {
        filename: 'js/[name].[contenthash:8].js', // contenthash：只有模块的内容改变，才会改变hash值
    },
    stats: {
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minChunks: 2,
            maxInitialRequests: 5,
            cacheGroups: {
                // 提取公共模块
                commons: {
                    chunks: 'all',
                    test: /[\\/]node_modules[\\/]/,
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0,
                    name: 'common'
                }
            }
        },
        minimizer: [
            new OptimizeCSSAssetsPlugin({}),
            new UglifyJSPlugin({
                sourceMap: config.productionJsSourceMap
            })
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: config.indexPath,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeOptionalTags: false,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                removeAttributeQuotes: true,
                removeCommentsFromCDATA: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            // chunkFilename: '[name].[contenthash:8].chunk.css'
        }),
        // gzip压缩
        // new CompressionWebpackPlugin({
        //     filename: '[path].gz[query]',
        //     algorithm: 'gzip',
        //     test: new RegExp('\\.(js|css)$'),
        //     threshold: 10240, // 大于这个大小的文件才会被压缩
        //     minRatio: 0.8
        // }),
    ]
});