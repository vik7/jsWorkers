const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main:'./dedicatedWorker/main.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.min.js',
        libraryTarget: 'umd'
    },
    module:{
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets:['es2015']
            }

        }]

    },
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin(), new CopyWebpackPlugin([{from:'./dedicatedWorker/worker.js'}])]


}