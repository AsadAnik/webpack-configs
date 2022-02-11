// const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: {
        bundle: './src/index.js',
        vendor: ['react', 'react-dom'],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].[chunkhash].js'
    },

    module: {
        rules: [
            {
              use: 'babel-loader',
              test: /\.js$/,
              exclude: /node_modules/
            },

            {
              use: 'babel-loader',
              test: /\.jsx$/
            },

            {
              use: 'html-loader',
              test: /\.html$/
            }
        ]
    },

    // Resolve the ext. of js & jsx..
    resolve: {
      extensions: ['.js', '.jsx']
    },

    // needs optimise plugin..
    // plugins: [
    //     new webpack.optimize.CommonsChunkPlugin({
    //         names: ['vendor']
    //     }),
    // ],

    plugins: [
        new HtmlWebpackPlugin({
          template: 'public/index.html',
          // filename: 'static/index.html'
        }),

        new CleanWebpackPlugin({
          cleanOnceBeforeBuildPatterns: 'build/*.*'
        })
    ],

    //  now this is using instead of CommonsChunkPlugin..
    optimization: {
        splitChunks: {
          cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendor',
            },
          },
        },
      },
};