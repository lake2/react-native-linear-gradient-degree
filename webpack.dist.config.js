const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
    mode: "production",
    devtool: 'hidden-source-map',
    entry: path.resolve(__dirname, "./src/index.ts"),
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, `./dist/`),
        library: "react-native-linear-gradient-degree",
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: ["babel-loader"],
            },
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
            reportFilename: 'report.html',
            defaultSizes: "stat",
            generateStatsFile: true,
            statsFilename: 'report.json'
        }),
    ],
    resolve: {
        extensions: [".js", ".ts"],
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
                uglifyOptions: {
                    output: {
                        comments: false,
                    },
                },
            }),
        ],
    },
};
