import { createApp } from './app'

export default context => {
	return new Promise(
		(resolve, reject) => {
			const { app, router, store } = createApp()
			console.log(context)
			router.push(context.url, () => { console.log('route push success')} )

			router.onError((err) => {
				console.log(err)
			})

			router.onReady(() => { 
				console.log('foo') 

				const matchedComponents = router.getMatchedComponents()

				if(!matchedComponents.length){
					return reject({ code: 404})
				}

				Promise.all(matchedComponents.map(
					component => {
						if(component.asyncData){
							console.log('async component found')
							return component.asyncData({
								store, 
								route: router.currentRoute
							})
						}
					}
				))

			}, (reject) => { console.log(reject)})
			// router.onReady( () => {
			// 	console.log('toto2')
			// 	const matchedComponents = router.getMatchedComponents()

			// 	if (!matchedComponents.length) {
			// 		console.log('toto3')
   //      			return reject({ code: 404 })
   //    			}

   //    			Promise.all(matchedComponents.map(
   //    				Component => {
   //    					console.log('toto4')
	  //     				if (Component.asyncData) {
	  //     					return Component.asyncData({
	  //     						store,
	  //     						route: router.currentRoute
	  //     					})
	  //     				}

   //    				}
   //    			)).then( () => {
   //    				console.log('toto5')
   //    				context.state = store.state
   //    				resolve(app)
   //    			}).catch(reject)

			// }, reject => {
			// 	console.log('bad')
			// })

		}
	)
	//return app
}
