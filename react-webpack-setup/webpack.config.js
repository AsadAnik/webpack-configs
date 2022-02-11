const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Webpack Module to export..
module.exports = {
    entry: './src/index.js',

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    devServer: {
        inline: true,
        port: 2021
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            inject: 'body',
        }),
        new CleanWebpackPlugin(),   
    ],

    module: {
        rules: [
          {
            test: /\.(scss|css)$/i,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
              test: /\.(js|jsx)$/i,
              exclude: /node_modules/,
              use: 'babel-loader',
          },
        ]
     },

    resolve: {
         extensions: ['*', '.js', '.jsx'],
    }  
};