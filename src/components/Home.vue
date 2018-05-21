<template>
	<div class="content">
		<div class="header">
			<h2>Vue and server side randering are beautiful :) </h2>
		</div>

		<section>
			<article v-for="(article, index) in articles" :key="index">
				<h3>{{ article.title }}</h3>
				<div>
					{{ article.description }}
				</div>
			</article>
		</section>
	</div>
</template>
<script>
	import axios from 'axios'

	export default {
		name:'home',
		title () {
			return 'SSR with vueJS'
		},
		data () {
			return {
				articles : []
			}
		},
		meta () {
			return {
				title: 'SSR with vueJS',
				description: 'SSR with vuejs is a live demo of server side rendering, perfoming withe js framework vue'
			}
		},
		methods: {
		},
		mounted () {
			axios.get('api.json').then(
				response => {
					this.articles = response.data.articles
				}
			)
		}
	}
</script>
<style>
	.content{
		    width: 50%;
		    text-align: center;
		    padding: .5rem;
		    
		}
	.header{
		background: #FF5722;
		color: #ffffff;
	}
</style>