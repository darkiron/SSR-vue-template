<template>
	<div id="app">
		<main>
			<h1>Hello the world on SSR with VueJS</h1>
			<nav>
				<router-link :to="{ name: 'home' }"> Home </router-link>
				<router-link :to="{ name: 'greet', params: { name: 'ssr' } }"> About </router-link>
			</nav>
		</main>
		<router-view></router-view>

	</div>
</template>
<script>
	export default {
		name: 'main'
	}
</script>
<style>
	body, html{
		width:100%;
		height:100%;
		display:flex;
		font-family: 'Raleway', sans-serif;
		align-items:center;
		justify-content:center;
	}
	#app{
		width: 100%;
	    height: 100%;
	    display: flex;
	    align-items: center;
	    flex-direction: column;
	}
	nav a{
		margin: .5rem;
		color: red;
		text-decoration: none;
	}

	nav, main{
		margin: .5rem 0;
	}
</style>