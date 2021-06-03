const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/main.ts",
    output: {
        path: `${__dirname}/docs`,
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: `${__dirname}/static`, to: `${__dirname}/docs` }
            ]
        })
    ]
}