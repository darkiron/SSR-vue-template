import { createApp } from './app'

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

			if (!activated.length) {
				return next()
			}

			//indicateur de chargement ici

			Promise.all(activated.map( c => {
				if (c.asyncData) {
					return c.asyncData({ store, route: to })
				}
			})).then( () => {
				// arret du chargment

				next()
			}).catch(next)
		})

		app.$mount('#app')
	}
)

if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/service-worker.js').then( reg => {
	    var installingWorker = reg.installing;
	})
}