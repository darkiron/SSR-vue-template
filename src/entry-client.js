import Vue from 'vue'
import { createApp } from './app'
import Progress from './Components/Progress.vue'

// global progress bar
const bar = Vue.prototype.$bar = new Vue(Progress).$mount()
document.body.appendChild(bar.$el)

// a global mixin that calls `asyncData` when a route component's params change
Vue.mixin({
  beforeRouteUpdate (to, from, next) {
  	console.log('test')
    const { asyncData } = this.$options
    if (asyncData) {
      asyncData({
        store: this.$store,
        route: to
      }).then(next).catch(next)
    } else {
      next()
    }
  }
})

const { app, router, store } = createApp()

if (window.__INITIAL_STATE__) {
	store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(
	() => {
		router.beforeResolve((to, from, next) => {
			const matched = router.getMatchedComponents(to)
			const prevMatched = router.getMatchedComponents(from)

			let diffed = false

			const activated = matched.filter( (c, i) => {
				return diffed || (diffed = (prevMatched[i] !== c))
			})

			/*
			if (!activated.length) {
				return next()
			}
			*/

			const asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _)
		    if (!asyncDataHooks.length) {
		      return next()
		    }

			//indicateur de chargement ici
			bar.start()

			Promise.all(
				asyncDataHooks.map(hook => hook({ store, route: to }))
			).then(() => {
			    bar.stop()
			    next()
			}).catch(next)

			/*
			Promise.all(activated.map( 
				c => {
					if (c.asyncData) {
						console.log('foo')
						return c.asyncData({ 
							store, 
							route: to 
						})
					}
				})).then( () => {
				// arret du chargment
				bar.stop()
				next()
			}).catch(next)
			*/
		})

		app.$mount('#app')
	}
)


if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/service-worker.js').then( reg => {
	    var installingWorker = reg.installing;
	})
}