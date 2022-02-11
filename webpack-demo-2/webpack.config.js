const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
	// entry: './src/index.js',
	entry: {
		index: './src/index.js',
		print: './src/print.js',
		comp: './src/comp.js',
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Output Management',
		}),
		new CleanWebpackPlugin(),
	],

	output: {
		// filename: 'bundle.js',
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
};