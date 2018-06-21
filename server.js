const path = require('path')
const express = require('express')
const compression = require('compression')
const Vue = require('vue')
//Crop & resize
const sharp = require('sharp');
const fs = require('fs')
const robots = require('express-robots-txt')
const resolve = file => path.resolve(__dirname, file)
const { createBundleRenderer } = require('vue-server-renderer')

 //const appVue = require('./src/App')
 //const appVue = require('./dist/index.js')

const app = express()

app.use(express.static('public'));
app.use('/dist', express.static('dist'));
app.use(compression())

app.use(robots(__dirname + '/public/robots.txt'));
app.use('/manifest.json', express.static('./manifest.json'))
app.use('/service-worker.js', express.static('./dist/service-worker.js'))


// const template = require('fs').readFileSync('./index.html', 'utf-8')
const template = require('fs').readFileSync('./index.template.html', 'utf-8')
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
const renderer = createBundleRenderer(serverBundle, { template, clientManifest, basedir: resolve('./dist') })

app.get('/crop/:name/:width/:height/:format', (request, response) => {
	const { name, width, height, format } = request.params; // Get the width and height from the request parameters
	let path =`./public/${name}`

	const readStream = fs.createReadStream(path);

	response.set('Content-Type', `${format || 'jpg'}`)

  	let file = sharp()
	  	.resize(parseInt(width), parseInt(height))
	  	.toFormat(`${format || 'jpg'}`)

  	readStream.pipe(file).pipe(response)

})


app.get('*', (request, response) => {

	const context = { url: request.url }


	renderer.renderToString(context, (err, html) => {
	    if (err) {
	        if (err.code === 404) {
	          //response.status(404).end('Page non trouvée')
	          console.log(html)
	          response.status(404).end(require('fs').readFileSync('./404.html', 'utf-8'))
	        } else {
	          console.log(err)
	          response.status(500).end('Erreur interne du serveur: '+ err.message)
	        }
	    } else {
	        response.end(html)
	    }
  	})
})

app.listen(8080)