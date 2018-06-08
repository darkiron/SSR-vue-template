<template>
	<div id="app">
		<main>
			<h1>Hello the world on SSR with VueJS</h1>
			<nav>
				<router-link :to="{ name: 'home' }"> Home </router-link>
				<router-link :to="{ name: 'greet', params: { name: 'ssr' } }"> About </router-link>
			</nav>
		</main>
		<transition name="component-fade" mode="out-in">
			<router-view></router-view>
		</transition>
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
		font-family: 'Helvetica', sans-serif;
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

	h1 {
		text-shadow: 0.5px 0.5px 0px #ff5724;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		padding: .5rem 0;
		background: #1d1d1d;;
		color: #fff;
	}

	nav a{
		margin: .5rem;
	    text-decoration: none;
	    color: #898989;
	    text-transform: uppercase;
	    font-size: .8rem;
	    font-weight: 600;
	    font-family: sans-serif;
	    letter-spacing: 1px;
	    transition: all ease 1s;
	}

	nav a:hover{
		color: #ff5723;
	}

	nav{
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
	    font-weight: lighter;
    	font-size: small;
    	color: #d6d6d6;
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

	.component-fade-enter-active, .component-fade-leave-active {
	  transition: opacity .3s ease;
	}
	.component-fade-enter, .component-fade-leave-to{
	  opacity: 0;
	}

</style>