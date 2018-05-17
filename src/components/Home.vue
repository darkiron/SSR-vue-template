<template>
	<div class="content">
		Vue and server side randering are beautiful :) 
	</div>
</template>
<script>
	export default {
		name:'home',
		title () {
			return 'SSR with vueJS'
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
		}
	}
</script>
<style>
	.content{
			background: #FF5722;
		    width: 50%;
		    text-align: center;
		    padding: .5rem;
		    color: #ffffff;
		}
</style>