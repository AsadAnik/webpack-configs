const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './project/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: 'build/'
	},

	module: {
		rules: [
			// for JS files..
			{
				use: 'babel-loader',
				test: /\.js$/
			},

			// for CSS files..
			// {
			// 	use: ['style-loader', 'css-loader'],
			// 	test: /\.css$/
			// },

			// for CSS with new file transform..
			// {
			// 	test: /\.css$/,
			// 	use: [
			// 		{loader: 'style-loader'},
			// 		{
			// 			loader: 'file-loader',
			// 			options: {name: '[name].[ext]'}
			// 		}
			// 	]
			// },

			// transfile many CSS file into one final..
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			}
		]
	},

	// use many plugins here..
	plugins: [ new MiniCssExtractPlugin({filename: '[name].css'}) ]
};