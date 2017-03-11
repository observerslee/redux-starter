var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
	devtool: "source-map",
	entry: ["webpack-hot-middleware/client", "./src/index.js"],
	output: {
		path: path.join(__dirname, "..", "dist"),
		filename: "bundle.js",
		publicPath: "/"
	},
	module: {
		rules: require('./webpack.loaders.js')
	},
	plugins: [
		new ExtractTextPlugin("style.css"),
		new webpack.DefinePlugin({
			"environment": '"development"',
			NODE_ENV: JSON.stringify("development")
		}),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'Dev | React Redux Starter',
			template: path.join("src", "public", "index.ejs")
		}),
	],
	resolve: {
		modules: ["node_modules", "src"],
		plugins: [
			new DirectoryNamedWebpackPlugin()
		]
	}
}
