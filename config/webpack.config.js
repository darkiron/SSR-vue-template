const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const glob = require('glob');

const isDev = process.env.NODE_ENV === "dev"
const isProd = process.env.NODE_ENV === 'prod'

const plugins = []

if(isProd){
	plugins.push(new UglifyJsPlugin())
}

const rootDir = '.'

plugins.push(new SWPrecacheWebpackPlugin(
	{
        cacheId: 'w-test',
        filename: 'service-worker.js',
        navigateFallback: ':8080/',
      	// staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/],
      	staticFileGlobsIgnorePatterns: [/webpack\.+\.js/],
      	staticFileGlobs: [
      	   rootDir + '/dist/*.{js, html, png, txt, json}',
      	   rootDir + '/publicjs, html, png, txt, json}',
      	   rootDir + '/*.{js, html, png, txt, json}'
		],
		stripPrefix: rootDir,
    })
)

// /*
// gulp.task('generate-service-worker', function(callback) {
//     var swPrecache = require('sw-precache');
//     var rootDir = 'public';

//     swPrecache.write(`${rootDir}/service-worker.js`, {
//         staticFileGlobs: [
//             rootDir + '/build/**/*.{js,css}',
//             rootDir + '/img/**/*.{jpg,png,svg}'
//         ],
//         dynamicUrlToDependencies: {
//             '/': ['resources/views/master.blade.php', 'resources/views/index.blade.php']
//         },
//         navigateFallback: '/',
//         stripPrefix: rootDir
//     }, callback);
// });

// */


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