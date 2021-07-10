const path = require('path');
const autoprefixer = require('autoprefixer');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: ["./src/app.tsx", "./styles/app.scss"],
    devtool: "source-map",
    output: {
        path: `${__dirname}/docs`,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: "ts-loader",
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'bundle.css',
                        },
                    },
                    { loader: 'extract-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer()
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            webpackImporter: false,
                            sassOptions: {
                                includePaths: ['./node_modules']
                            },
                        },
                    },
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            ".ts", ".tsx", ".js", ".scss"
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