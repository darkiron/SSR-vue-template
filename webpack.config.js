const path = require('path');

const dev = process.env.NODE_ENV === "dev"

module.exports = {
	entry: './src/entry-client.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
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