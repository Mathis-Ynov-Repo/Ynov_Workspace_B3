const path = require("path")

module.exports = {
    outputDir: path.resolve(__dirname,"../workspace-laravel/public"),
    assetsDir: "./dist",
    indexPath: path.resolve(__dirname,"../workspace-laravel/resources/views/index.html"),
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true
            }
        }
    }
}