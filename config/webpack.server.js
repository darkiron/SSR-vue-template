const webpack = require('webpack')
const path = require('path');
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.config.js')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(baseConfig, {
  // Fichier d'entrée serveur de l'application
  entry: './src/entry-server.js',

  // Cela permet à webpack de gérer les imports dynamiques d'une manière
  // approprié pour Node.js, et dit également à `vue-loader` d'émettre un code approprié pour le serveur
  // lors de la compilation du composant Vue.
  target: 'node',

  // Pour le support des sources maps des paquetages
  devtool: 'source-map',

  // Cela dit au paquetage serveur d'utiliser les exports au format Node.js
  output: {
    libraryTarget: 'commonjs2',
    filename: 'es5_server_entry.js'
  },

  // https://webpack.js.org/configuration/externals/#function
  // https://github.com/liady/webpack-node-externals
  // Externalise les dépendances de l'application. Cela rend le build serveur plus rapide
  // et génère un fichier de paquetage plus petit.
  externals: nodeExternals({
    // ne pas externaliser les dépendances qui ont besoin d'être traitées par webpack.
    // vous pouvez ajouter plus de types de fichiers ici, comme par ex. avec les fichiers `*.vue`
    // vous devriez aussi lister des exceptions qui modifient `global` (par ex. les polyfills)
    whitelist: /\.css$/
  }),

  // Ceci est le plugin qui va créer entièrement la sortie pour le build serveur
  // dans un seul fichier JSON. Le fichier généré par défaut va être
  // `vue-ssr-server-bundle.json`
  plugins: [
    new VueSSRServerPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    })
  ]
})