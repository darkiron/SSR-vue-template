<template>
	<div>{{ getCurrent.description }}</div>
</template>
<script>
	import Vuex from 'vuex'

	export default {
		name: 'Article',

		asyncData ({ store, route }) {
		   	let data = store.dispatch('fetchItems', 'http://localhost:8080/api.json')
		   	store.dispatch('pushTitle', route.params.name)
		   	return data
		},

		meta () {
			return {
				title: this.item.title,
				description: this.item.description
			}
		},

		computed: {
			...Vuex.mapGetters(['getCurrent']),

			item () {
				return this.getCurrent
			}
		},
	}
</script>

