const HtmlWebPPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
})

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    resolve: {
        extensions:[ "*", ".js", ".jsx"]
    },
    devServer: {
        port: 3002
    },
    plugins: [htmlPlugin]
}

