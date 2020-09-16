const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    target: 'web',
    mode: 'development',
    devtool: 'inline-source-map',
    entry: ['react-hot-loader/patch', './src/client/index'],
    output: {
        path: path.join(__dirname, './dist/client'),
        publicPath: '/',
        filename: 'client.js',
    },
    resolve: {
        extensions: ['.js', '.json'],
        modules: ['node_modules', 'src'],
        alias: { 'react-dom': '@hot-loader/react-dom' },
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
                include: [path.join(__dirname, 'src/client'), path.join(__dirname, 'src/common')],
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/common/assets/robots.txt'),
                },
            ],
        }),
        new webpack.DefinePlugin({
            __DEV__: true,
            __SERVER__: false,
            __CLIENT__: true,
        }),
    ],
    devServer: {
        hot: true,
        port: 3000,
        host: 'localhost',
        publicPath: '/',
        historyApiFallback: true,
        proxy: {
            '*': 'http://localhost:3001',
        },
        writeToDisk: true,
    },
};
