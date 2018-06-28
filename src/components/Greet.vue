<template>
	<div class="content">
		<p>This is  {{ name }} !</p>
		<p>This site is a demo and boilerplate of SSR with wellknow JavaScript framework Vue. </p>
	</div>
</template>
<script>
	export default {
		name: 'about',
		data () {
			return {
				name: 'toto',
				// title: 'Hello mon Vincent'
				meta: {
					title: 'About VueJS and SSR',
					description: 'Discover the server side rendering with live demo'
				}
			}
		},
		meta () {
			return {
				title: 'About VueJS and SSR',
				description: 'Discover the server side rendering with live demo'
			}
		},
		created () {
			this.name = this.$route.params.name
			if (process.env.VUE_ENV === 'client') {
				// console.log('client')
			}
		},
		asyncData ({ store, route }) {
		   // retourner la Promesse depuis l'action
		   // return store.dispatch('fetchItem', route.params.name)
		},
		computed: {
			// afficher l'élément depuis l'état du store.
		    item () {
		      return this.$store.state.items[this.$route.params.id]
		    },

		}
	}
</script>
<style>
	.content{
	    width: 50%;
	    text-align: center;
	    padding: .5rem;
	}
</style>