const path = require('path');

const dev = process.env.NODE_ENV === "dev"

module.exports = {
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].[chunkhash].js'
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
				use: 'babel-loader'
			},
		]
	},
	mode: 'development'
}