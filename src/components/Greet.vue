<template>
	<div>
		Hello {{ name }}
	</div>
</template>
<script>
	export default {
		data () {
			return {
				name: ''
			}
		},
		created () {
			this.name = this.$route.params.name
		},
		asyncData ({ store, route }) {
		   // retourner la Promesse depuis l'action
		   // return store.dispatch('fetchItem', route.params.name)
		},
		computed: {
			// afficher l'élément depuis l'état du store.
		    item () {
		      return this.$store.state.items[this.$route.params.id]
		    }
		}
	}
</script>