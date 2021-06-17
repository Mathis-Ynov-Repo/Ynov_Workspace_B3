const path = require("path")

module.exports = {
    outputDir: path.resolve(__dirname,"../workspace-laravel/public/dist"),
    publicPath: process.env.NODE_ENV === 'production'
        ? '/dist'
        : '/',
    indexPath: path.resolve(__dirname,"../workspace-laravel/resources/views/index.html"),
    devServer: {
        proxy: 'http://localhost:8000'
    }
}