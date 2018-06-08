<template>
	<div>{{ getCurrent.description }}</div>
</template>
<script>
	import Vuex from 'vuex'

	export default {
		name: 'Article',
		meta () {
			return {
				title: this.getCurrent.title,
				description: this.getCurrent.description,
			}
		},
		data () {
			return {
				meta: [], 
				article: {}
			}
		}, 
		computed: {
    		...Vuex.mapGetters(['getCurrent']),
		},
		async asyncData ({ store, route }) {
		   	let data = store.dispatch('fetchItems', 'http://localhost:8080/api.json')

		   	store.dispatch('pushTitle', route.params.name)
		   	return data
		}
	}
</script>

