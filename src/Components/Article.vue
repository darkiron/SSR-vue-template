<template>
	<section class="article">
			<article>
				<img v-if="getCurrent.image" :src="'/crop/' + getCurrent.image +'/'+ '650' +'/350/jpg'" alt="" ref="image"/>
				<div>
					<h2>{{ getCurrent.title }}</h2>
					<div v-html="raw(getCurrent.description_longue)">
					</div>
				</div>
			</article>
		</section>
</template>
<script>
	import Vuex from 'vuex'

	export default {
		name: 'Article',

		asyncData ({ store, route }) {
		   	let data = store.dispatch('fetchItems', 'http://localhost:8080/api.json')
		   	store.dispatch('pushTitle', route.params.slug)
		   	return data
		},

		meta () {
			return {
				'title': this.item.title,
				'description': this.item.description,
				'og:image': `/${this.item.ogimage}`,
				'og:type': 'article'
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
<style lang="scss">
	@import '../Style/variables.scss';

	.article{
		width: 50%;
	}
	
</style>

