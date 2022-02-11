// Webpack configuration file...
const path = require('path');

// Requiring the toml, yaml, json5..
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');


// module exports..
module.exports = {
	// First Entry point..
	entry: './src/index.js',

	// Output of First Entry point..
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	// Module loaders..
	module: {
		rules: [
			// To CSS Loading...
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},

			// To Images Loading...
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				use: {
					loader: 'url-loader',
					options: {
						// limit: 8092,
						encoding: false,
					},
				},
			},

			// To Fonts Loading...
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				// use: ['file-loader']
				// or..
				// use: {
				// 	loader: 'url-loader'
				// }
			},

			// To CSV Files Loading...
			{
				test: /\.(csv|tsv)$/i,
				use: ['csv-loader'],
			},

			// To XML Files Loading...
			{
				test: /\.xml$/i,
				use: ['xml-loader'],
			},

			// To Loading toml, yaml, json5...
			{
				test: /\.toml$/i,
				type: 'json',
				parser: {
					parse: toml.parse,
				},
			},
			{
				test: /\.yaml$/i,
				type: 'json',
				parser: {
					parse: yaml.parse,
				},
			},
			{
				test: /\.json5$/i,
				type: 'json',
				parser: {
					parse: json5.parse,
				},
			},

			
		],
	}, // END of Module loaders..

}; // END of module.exports..