const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const isDev = process.env.NODE_ENV === "dev"
const isProd = process.env.NODE_ENV === 'prod'

const plugins = []

if(isProd){
	plugins.push(new UglifyJsPlugin())
}

plugins.push(new SWPrecacheWebpackPlugin(
	{
        cacheId: 'w-test',
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'service-worker.js',
        minify: isDev,
        navigateFallback: 'http://localhost:8080/',
        staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    })
)


module.exports = {
	mode: isDev,
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
	watch: isDev,
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
	plugins: plugins
}