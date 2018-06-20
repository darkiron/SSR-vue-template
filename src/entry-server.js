import { createApp } from './app.js'

export default context => {
	return new Promise(
		(resolve, reject) => {
			// const { app, router, store } = createApp()
			const { app, router, store } = new createApp

			router.push(context.url)

			router.onError((err) => {
				console.log(err)
			})

			router.onReady(() => { 

				const matchedComponents = router.getMatchedComponents()

				if(!matchedComponents.length){
					return reject({ code: 404})
				}

				Promise.all(matchedComponents.map(
					component => {
						if(component.asyncData) {
							return component.asyncData({
								store, 
								route: router.currentRoute
							})
						}
					}
				)).then(() => {
					context.state = store.state
					resolve(app)
				}).catch(reject)

			}, (reject) => { console.log(reject)})
		}
	)
}
