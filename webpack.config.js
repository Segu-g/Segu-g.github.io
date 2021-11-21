const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src/index.tsx"),
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "bundle.js"
    },
    devtool: "eval",
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                use: "ts-loader",
            }
        ]
    },
    resolve: {
        extensions: [
            ".ts", ".tsx", ".js", ".jsx"
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "public", to: "." },
            ],
        }),
    ],
};