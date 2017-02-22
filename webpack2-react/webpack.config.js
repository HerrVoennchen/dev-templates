var debug = process.env.NODE_ENV !== "production";
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
var WatchLiveReloadPlugin = require('webpack-watch-livereload-plugin');

module.exports = {
	devtool: 'source-map',
	context: __dirname,
	entry: {
		app: ['./src/js/App.jsx'],
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
			include: [
			path.resolve(__dirname, "src")
			],
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
	plugins: debug ?  [
	new ExtractTextPlugin({
		filename: 'app.bundle.css',
		allChunks: true
	}),
	new webpack.ProvidePlugin({
		jQuery: 'jquery',
		$: 'jquery',
		jquery: 'jquery',
		Tether: "tether",
		"window.Tether": "tether",
		Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
		Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
		Button: "exports-loader?Button!bootstrap/js/dist/button",
		Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
		Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
		Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
		Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
		Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
		Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
		Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
		Util: "exports-loader?Util!bootstrap/js/dist/util"
	}),
	new WatchLiveReloadPlugin({
		files: [
		'./src/**/*.html',
		]
	})
	/*new HtmlWebpackPlugin({
		template: path.join(__dirname, 'src/index.html'),
		filename: 'index.html',
		inject: 'body'
	})*/
	] : [
	new ExtractTextPlugin("styles.css"),
	new webpack.optimize.DedupePlugin(),
	new webpack.optimize.OccurenceOrderPlugin(),
	new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false, minimize: true, compress: { warnings: false } }),
	],
	devServer: {
		contentBase: "src",
		proxy: [{
			context: '/enaioBAS',
			target: 'http://10.10.10.82:26955',
			secure: false
		}]
	}
};