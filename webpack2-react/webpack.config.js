const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: __dirname,
	entry: {
		app: ['./src/js/app.jsx'],
	},
	output: {
		path: __dirname,
		filename: 'app.bundle.js',
	},
	module: {
		rules: [
		{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			options: { 
				presets: ['react', 'es2015', 'es2016', 'es2017', 'stage-3'],
				plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
			},
			exclude: [/node_modules/]
		},
		{
			test: /\.css$/,
			loader:  ExtractTextPlugin.extract({
				loader: 'css-loader?importLoaders=1'
			})
		}]
	},
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
		extensions: ['.js', '.jsx', '.css', '.html']
	},
	plugins: [
	new ExtractTextPlugin({
		filename: 'app.bundle.css',
		allChunks: true
	}),
	/*new HtmlWebpackPlugin({
		template: path.join(__dirname, 'src/index.html'),
		filename: 'index.html',
		inject: 'body'
	})*/
	]
};