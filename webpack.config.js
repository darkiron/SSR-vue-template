

const path = require ('path')

module.exports = {
	entry: './src/app.js',
	output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: 'app.prod.js'
	},
	module: {
	    rules: [
	      { test: /\.js$/, use: 'babel-loader' },
	      { test: /\.vue$/, use: 'vue-loader' }
	    ]
  	}
}