const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src/index.tsx"),
    },
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "[name].bundle.js"
    },
    devtool: "source-map",
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
    optimization: {
     splitChunks: {
       chunks: "async",
     },
   },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "public", to: "." },
            ],
        }),
    ],
};