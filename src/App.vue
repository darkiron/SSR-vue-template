<template>
	<div>
		Hello the world on SSR
		<router-link :to="{ name: 'home' }"> home </router-link>
		<router-link :to="{ name: 'greet', params: { name: 'vincent' } }"> greet </router-link>
		<router-view></router-view>

	</div>
</template>
<script>
	export default {
		name: 'gg'
	}
</script>
<style>
	
</style>