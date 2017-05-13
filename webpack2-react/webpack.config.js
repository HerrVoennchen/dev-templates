var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WatchLiveReloadPlugin = require('webpack-watch-livereload-plugin');
var WebpackShellPlugin = require('webpack-shell-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	context: __dirname,
	devtool: debug ? 'source-map' : false,
	entry: {
		app: ['./src/js/app.js']
	},
	output: {
		path: path.resolve(__dirname, 'app'),
		filename: 'app.bundle.js'
	},
	resolve: {
		modules: [path.resolve(__dirname, 'app'), 'node_modules'],
		extensions: ['.js', '.jsx', '.css', '.html', '.scss', '.json'],
		alias: {
			/*config: path.resolve(__dirname, 'app/config.js'),
            dashletevent: path.resolve(__dirname, 'app/DashletEvent.js')*/
		}
	},
	externals: {
		/*config: 'config',
        dashletevent: 'dashletevent'*/
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				options: {
					presets: [
						'latest',
						'react',
						['es2015', { modules: false }],
						'stage-3'
					],
					plugins: [
						'react-html-attrs',
						'transform-decorators-legacy',
						'transform-class-properties'
					]
				},
				include: [path.resolve(__dirname, 'App')],
				exclude: [/node_modules/]
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: { importLoaders: 1, sourceMap: true }
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: debug,
								plugins: [require('autoprefixer')()]
							}
						}
					]
				})
			},
			{
				test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'url-loader'
			},
			{
				test: /\.html?$/,
				loader: 'html-loader'
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader!less-loader'
				})
			}
		]
	},
	plugins: debug
		? [
				new ExtractTextPlugin({
					filename: 'app.bundle.css',
					allChunks: true
				}),
				new WatchLiveReloadPlugin({
					files: ['./app/**/*.html', './app/**/*.css']
				}) /*,
    new WebpackShellPlugin({
        onBuildEnd: 'node copyFilesToDist.js'
    })*/
			]
		: [
				new webpack.DefinePlugin({
					'process.env': {
						NODE_ENV: JSON.stringify('production')
					}
				}),
				new ExtractTextPlugin({
					filename: 'app.bundle.css',
					allChunks: true
				}),
				new webpack.optimize.UglifyJsPlugin({
					//mangle: false,
					compress: {
						warnings: false
					},
					minimize: true,
					sourcemap: false
				}),
				new OptimizeCssAssetsPlugin({
					assetNameRegExp: /\.css$/g,
					cssProcessor: require('cssnano'),
					cssProcessorOptions: {
						discardComments: { removeAll: true },
						colormin: true,
						discardDuplicates: true,
						discardOverridden: true,
						mergeLonghand: true,
						minifyFontValues: true,
						orderedValues: true,
						reduceDisplayValues: true,
						reduceInitial: true,
						uniqueSelectors: true,
						discardUnused: true,
						minifyGradients: true,
						minifySelectors: true,
						svgo: true
					},
					canPrint: true
				})
				/*new WebpackShellPlugin({
        onBuildEnd: 'node copyFilesToDist.js'
    })*/
			],
	devServer: {
		contentBase: 'app'
	}
};
