const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
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
        navigateFallback: '/',
      	// staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/],
      	staticFileGlobsIgnorePatterns: [
      		/\.js$/
      	],
      	staticFileGlobs: [
      	   rootDir + '/dist/es5_client_entry.js',
      	   rootDir + '/dist/manifest.es5_client_entry.js',
      	   rootDir + '/public/js, html, png, txt, json}',
      	   rootDir + '/*.{html}'
		],
		stripPrefix: rootDir,
		runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'networkFirst'
        },
         {
          urlPattern: '/:name',
          handler: 'networkFirst'
        }
      ]
    })
)

plugins.push(new ExtractTextPlugin({ filename: 'common.css' }))


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
				loader: 'vue-loader',
				options: {
			        // enable CSS extraction
			        extractCSS: true
			    }
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
        		test: /\.css$/,
        		// important: use vue-style-loader instead of style-loader
        		loader:'css-loader', 
        		options: { 
        			minimize: true 
        		} 
      		},
      		{
        		test: /\.scss$/,
        		// important: use vue-style-loader instead of style-loader
        		use: ExtractTextPlugin.extract({
              		use: 'sass-loader',
              		fallback: 'vue-style-loader'
            	})
 
      		}
		]
	},
	mode: isDev ? 'development' : 'production',
	devtool: '#eval-source-map', 
	plugins: plugins
}