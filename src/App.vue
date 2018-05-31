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
		name: 'app'
	}
</script>
<style>
	body, html{
		width:100%;
		/*min-height:100%;*/
		display:flex;
		flex-direction: column;
		font-family: 'Raleway', sans-serif;
		align-items:center;
		justify-content:center;
		margin: 0;
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

	footer {
		min-height: 10%;
	    /*position: fixed;*/
	    bottom: 0;
	    display: flex;
	    flex-direction: column;
	    width: 100%;
	    padding: 1em;
	    background-color: #1d1d1d;
	    color: #ff5723;
	}

	footer > .container{
		width: 100%;
	}

	.center{
		text-align: center;
	}

	.left, .right{
		width: 15rem;
		padding: 1rem;
	}
	.left {
		float: left;
	}
	.right{
		float: right;
	}

	ul > li{
		list-style: none;
	}

	li > a {
		color: #ff5723;
		text-decoration: none;
		display: inline-block;
		border: 1px solid rgba(255, 87, 35, 0.43);
		text-decoration: none;
		padding: .5rem 1rem;
		transition: all 200ms linear;
		text-transform: uppercase;
		letter-spacing: .2rem;
		display: flex;
		align-items:center;
		border-radius: 1px;
		width: 4rem;
	}

	li > a:before{
		width: 2rem;
		height: 1px;
		content : " ";
		display: block;
		float:left;
		background: #ff5723;
		margin: 0 .5rem;
		margin-left: 0px;
		transition: all 200ms linear;
	}

	li > a:hover:before{
		width: -0px;
		transition: all 200ms linear;
		margin: 0px;
	}

</style>