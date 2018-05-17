<template>
	<div><h1>FOO</h1></div>
</template>
<script>
	export default {
		name:'home',
		title () {
				return 'smell like ...'
		},
		methods: {
			getContainer () {
		        if (document.getElementById('toast-container') !== null) {
		          return document.getElementById('toast-container')
		        } else {
		          let container = document.createElement('div')
		          container.id = 'toast-container'
		          document.body.prepend(container)

		          return container
		        }
	      }
		},
		mounted () {

			console.log(this)

			// let container = this.getContainer()

   //      	if (options.position !== undefined) {
   //        		container.className = 'toto'
   //      	}

   //      	let toastChild = document.createElement('div')
   //      	toastChild.className = 'toast'

   //      	let toastMessage = document.createElement('div')
   //      	toastMessage.innerHTML = 'from out there'
   //      	toastMessage.className = 'toast-message'

   //      	toastChild.appendChild(toastMessage)
   //      	container.appendChild(toastChild)

   //      	setTimeout(() => {
   //        		container.removeChild(toastChild)
   //      	}, 5000)
		}
	}
</script>