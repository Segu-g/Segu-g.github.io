const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "src/index.ts"),
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
            }
        ]
    },
    resolve: {
        extensions: [
            ".ts", ".tsx", ".js", ".jsx"
        ]
    }
};