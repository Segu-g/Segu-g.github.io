const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/main.tsx",
    devtool: "source-map",
    output: {
        path: `${__dirname}/docs`,
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: "ts-loader",
            }
        ]
    },
    resolve: {
        extensions: [
            ".ts", ".tsx", ".js",
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: `${__dirname}/static`, to: `${__dirname}/docs` }
            ]
        })
    ]
}