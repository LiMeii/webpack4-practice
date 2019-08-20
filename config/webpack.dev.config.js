const merge = require("webpack-merge")
const path = require('path');
const webpackBaseConfig = require("./webpack.common.config.js")

module.exports = merge(webpackBaseConfig, {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 4207,
        hot: true
    }
})