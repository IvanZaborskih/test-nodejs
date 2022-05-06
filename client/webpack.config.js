const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// entry: './src/index.js',
	entry: ['babel-polyfill', './src/index.js'],
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html'
		})
	],
	devServer: {
		port: 3000
	},
	module: {
		rules: [
			{
				test: /.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			}
		]
	}

}