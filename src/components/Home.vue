<template>
	<div class="content">
		<div class="header">
			<h2>Vue and server side randering are beautiful :) </h2>
		</div>

		<section>
			<article v-for="(article, index) in articles" :key="index">
				<figure v-if="article.image">
					<img :class="isSVG(article.image)" :src="'/crop/' + article.image +'/600/350/jpg'" alt=""/>
					<figcaption></figcaption>
				</figure>
				<div>
					<h3>{{ article.title }}</h3>
					<div>
						{{ article.description }}
					</div>
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
				description: 'SSR with vuejs is a live demo of server side rendering, perfoming with js framework vue'
			}
		},
		methods: {
			isSVG (value) {
				let regex = RegExp('\.svg$')
				if (regex.test(value)) {
					return 'back-svg'
				}

				return null
			}, 
		},
		beforeMount () {
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
		    width: 75%;
		    text-align: center;
		    padding: .5rem;
		    
		}
	.header{
		background: #FF5722;
		color: #ffffff;
	}

	section {
		display: flex;
    	flex-direction: row;
    	flex-wrap: wrap;
	}

	article {
	    width: 25%;
	    min-height: 1rem;
	    margin: 0 .2rem 2.5rem 0;
	    padding: .5rem;
	    flex-grow: 1;
	    /*border: aqua solid 1px;*/
	}

	article:nth-child(3n+1){
		width: 100%!important;
	}

	article:nth-child(3n+1) h3{
		width: 100%!important;
	}

	figure {
	    margin: 0;
	    padding: .5rem;
	    box-shadow: 6px 10px 20px 0px #2d2d2d47;
	    /*display: inline-flex;*/
	}

	figure > img {
	    width: 100%;
	    object-fit: cover!important;
	    object-position: center;
	}

	.back-svg {
		background: #1d1d1d;
    	padding: .5rem;
	}
</style>