var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  recursive: true,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/js/App.jsx",
  resolve: {
    root: path.resolve(path.join(__dirname, "src")),
    extensions: ['', '.js', '.jsx', '.css', '.html']
  },
  module: {
   /* preLoaders: [
      // Javascript
      { 
        test: /\.jsx?$/, 
        loader: 'eslint', 
        exclude: /(lib|node_modules|bower_components)/ 
      }
    ],*/
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(lib|node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015','stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      }, { 
        test: /\.css$/, 
        exclude: /(lib|node_modules|bower_components)/,
        loader: "style!css" 
      }, { 
        test: /\.html$/, 
        exclude: /(lib|node_modules|bower_components)/,
        loader: "html" 
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "app.min.js"
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false, minimize: true, compress: { warnings: false } }),
  ],
};