
const express = require('express')
const Vue = require('vue')
const fs = require('fs')

const { createBundleRenderer } = require('vue-server-renderer')

 //const appVue = require('./src/App')
 //const appVue = require('./dist/index.js')

const app = express()

const template = require('fs').readFileSync('./index.html', 'utf-8')
//const template = require('fs').readFileSync('./index.template.html', 'utf-8')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')


/*const renderer = createBundleRenderer(
  serverBundle,
  {
  	runInNewContext: true,
    template,
    clientManifest
  }
)*/
const renderer = createBundleRenderer(serverBundle)

app.get('*', (request, response) => {

	const context = { url: request.url }

	renderer.renderToString(context, (err, html) => {
	    if (err) {
	        if (err.code === 404) {
	          response.status(404).end('Page non trouvée')
	        } else {
	          console.log(err)
	          response.status(500).end('Erreur interne du serveur')
	        }
	    } else {
	        response.end(html)
	    }
  	})
})

app.listen(8080)