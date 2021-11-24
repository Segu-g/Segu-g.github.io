/* eslint-disable */

const path = require("path");
const webpack = require("webpack");

const CopyPlugin = require("copy-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ReactRefreshTypeScript = require("react-refresh-typescript");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src/index.tsx"),
    },
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "[name].bundle.js"
    },
    devtool: "source-map",
    devServer: {
        hot: true,
        host: "localhost",
        port: 8082,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        getCustomTransformers: () => ({
                            before: [isDevelopment && ReactRefreshTypeScript()].filter(Boolean),
                        }),
                        transpileOnly: true,
                        configFile: path.resolve(__dirname, "tsconfig.json"),
                    },
                },
            }
        ]
    },
    resolve: {
        extensions: [
            ".ts", ".tsx", ".js", ".jsx"
        ],
        alias: {
            "@": path.resolve(__dirname, "src"),
        }
    },
    optimization: {
     splitChunks: {
       chunks: "async",
     },
   },
    plugins: [
        isDevelopment && new webpack.HotModuleReplacementPlugin(),
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "public", to: "." },
            ],
        }),
    ].filter(Boolean),
};