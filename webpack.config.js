/**
 * webpack config for the react app.
 * @author gaurav
 */

var webpack = require ('webpack');
var path = require ('path');
var HtmlWebpackPlugin = require ('html-webpack-plugin');

var BUILD_DIR = path.resolve (__dirname, 'src/client/public');
var APP_DIR = path.resolve (__dirname, 'src/client/app');

var config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},

	devServer: {
		contentBase: './src/client/public'
	},

	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: APP_DIR,
				loader: 'babel-loader'
			}
		]
	},

	plugins:[new HtmlWebpackPlugin({
		template: './src/client/app/index.html'
	})]
}

module.exports = config;