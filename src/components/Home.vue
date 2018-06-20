<template>
	<div class="content">
		<div class="header">
			<h2>Vue and server side randering are beautiful :) </h2>
		</div>

		<section>
			<article v-for="(article, index) in articles" :key="index">
				<img v-if="article.image" :class="isSVG(article.image)" :src="'/crop/' + article.image +'/'+ size(index) +'/350/jpg'" alt="" ref="image"/>
				<div>
					<h3>{{ article.title }}</h3>
					<div>
						{{ article.description }}
					</div>
				</div>
				<router-link :to="{ name: 'article', params: { name: article.title } }"></router-link>
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

			size (index) {
				let size = 700
				this.$nextTick(() => {
					let img = this.$refs.image[index]
					size = img.width
				})
					
				return size
			} 
		},
		beforeMount () {
			axios.get('api.json').then(
				response => {
					this.articles = response.data.articles
				}
			)
		}, 
	}
</script>
<style lang="scss">
	@import '../Style/variables.scss';

	.content{
		    width: 75%;
		    text-align: center;
		    padding: .5rem;
		    
		}
	.header{
		color: $color-orange;
	}

	section {
		display: flex;
    	flex-direction: row;
    	flex-wrap: wrap;
	}

	.content article {
	    width: 25%;
	    min-height: 1rem;
	    margin: 0 0 4rem 0;
	    padding: .5rem;
	    flex-grow: 1;
	    position: relative;

	    a {
			position: absolute;
		    top: 0;
		    left: 0;
		    right: 0;
		    bottom: 0;
		    z-index: 1;
		}

		&:nth-child(3n+1){
			width: 100%!important;
		}

		&:nth-child(3n+1) h3{
			width: 100%!important;
		}

		img {
			width: 100%;
		    display: inline-block;
		    box-shadow: 8px 6px 20px rgba(0, 0, 0, .36);
		}
	}


	.back-svg {
		background: $color-black;
    	padding: .5rem;
	}
</style>