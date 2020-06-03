const path = require("path");
const APP_PATH = path.resolve(__dirname, "../src");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = require("./config");

module.exports = {
    entry: ["@babel/polyfill", path.join(__dirname, "../src/index.tsx")],
    output: {
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
        alias: {
            "@src": path.resolve(__dirname, "../src/"), // 以 @src 表示src目录
            "@assets": path.resolve(__dirname, "../src/assets/"), // 以 @assets 表示assets目录
        },
    },
    module: {
        rules: [
            // 把这个配置放在所有loader之前
            {
                enforce: "pre",
                test: /\.tsx?$/,
                exclude: /node_modules/,
                include: [APP_PATH],
                loader: "eslint-loader",
                options: {
                    emitWarning: true, // 这个配置需要打开，才能在控制台输出warning信息
                    emitError: true, // 这个配置需要打开，才能在控制台输出error信息
                    fix: true, // 是否自动修复，如果是，每次保存时会自动修复可以修复的部分
                },
            },
            {
                test: /\.(html)$/,
                loader: "html-loader",
            },
            {
                test: /\.(j|t)sx?$/,
                include: [APP_PATH],
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true, // 加快编译速度
                        },
                    },
                ],
            },
            {
                test: /\.(s*)css$/,
                use: [
                    // 开发环境和生产环境两个loader不能共存
                    process.env.NODE_ENV === "development"
                        ? "style-loader"
                        : MiniCssExtractPlugin.loader, // 有这个MiniCssExtractPlugin会报错
                    {
                        loader: "css-loader",
                        options: {
                            modules: false, // 如果要启用css modules，改为true即可
                        },
                    },
                    "sass-loader",
                    "postcss-loader",
                ],
            },
            {
                test: /\.(jpg|jpeg|bmp|png|webp|gif)$/,
                loader: "url-loader",
                options: {
                    limit: 8 * 1024, // 小于这个大小的图片，会自动base64编码后插入到代码中
                    name: "assets/img/[name].[hash:8].[ext]",
                    outputPath: config.assetsDirectory,
                    publicPath: config.assetsRoot,
                },
            },
            {
                test: /\.(woff|woff2|svg|ttf|eot)($|\?)/,
                loader: "file-loader",
                options: {
                    name: "assets/font/[name].[ext]",
                },
            },
            // 下面这个配置必须放在最后
            {
                exclude: [
                    /\.(js|mjs|ts|tsx|less|css|jsx)$/,
                    /\.(woff|woff2|svg|ttf|eot)($|\?)/,
                    /\.html$/,
                    /\.json$/,
                ],
                loader: "file-loader",
                options: {
                    name: "media/[name].[hash:8].[ext]",
                    outputPath: config.assetsDirectory,
                    publicPath: config.assetsRoot,
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: config.indexPath,
            showErrors: true,
        }),
        new CopyWebpackPlugin([
            {
                from: "public",
                ignore: ["index.html"],
            },
        ]),
    ],
    optimization: {},
};
