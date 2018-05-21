const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const dev = process.env.NODE_ENV === "dev"

const isProd = process.env.NODE_ENV === 'prod'


module.exports = {
	mode: dev,
	output: {
		path: path.resolve(__dirname, '../dist'),
		// filename: '[name].[chunkhash].js'
		publicPath: '/dist/'
	},
	resolve: {
	    alias: {
	      'public': path.resolve(__dirname, '../public')
	    }
	  },
	watch: dev,
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
		]
	},
	mode: 'development',
	devtool: '#eval-source-map', 
	plugins: isProd ?[
	    new UglifyJsPlugin() 
	]
	: []
}