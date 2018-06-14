<template>
	<div id="app">

		<header>
			<h1>Hello the world on SSR with VueJS</h1>
			<nav>
				<router-link :to="{ name: 'home' }"> Home </router-link>
				<router-link :to="{ name: 'greet', params: { name: 'ssr' } }"> About </router-link>
			</nav>
		</header>
		<main>
			<transition name="component-fade" mode="out-in">
				<router-view></router-view>
			</transition>
		</main>
		<footer>
	      <div class="container">
	        <div class="left">
	          <p>This site is a demo of SSR with wellknow JavaScript framework Vue. Your are enable to use this demo and the code to learn SSR</p>
	          
	        </div>
	        <div class="right">
	          <p> Ressources list: 
	            <ul>
	              <li><a href="https://github.com/darkiron/SSR-vue-template" title="Github repository"><i class="fab fa-github-alt"></i></a></li>
	            </ul>
	          </p>
	        </div>
	      </div>
	      <div class="container"><div class="center">Powered by Vue js with <i class="fas fa-heart"></i> - MIT</div></div>
	    </footer>
	</div>
</template>
<script>
	export default {
		name: 'app'
	}
</script>

<style lang="scss">

	$font-primary: 'Helvetica', sans-serif;
	$color-black: #1d1d1d;
	$color-white: #fff;
	$color-orange: #ff5723; 
	$color-grey: #898989;

	body{
		margin: 0;
		width: 100%;
		font-family: $font-primary;
	}

	#app{
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	header{
		align-items:center;
		justify-content:center;
		height: 50%;
		width:100%;
	}

	main {
		width: 100%;
		display: inherit;
    	justify-content: center;
	}

	footer{
	    margin-top: auto;
	    padding: 1rem;
	    min-height: 20%;
	    font-size: smaller;
	    font-weight: lighter;
	    letter-spacing: .5px;
	}

	header, footer{
		display: inherit;
		flex-direction: column;
		background: $color-black;
		color: $color-white;
	}

	nav{ 

		margin: .5rem 0;

		a{
			margin: .5rem;
		    text-decoration: none;
		    color: $color-grey;
		    text-transform: uppercase;
		    font-size: .8rem;
		    font-weight: 600;
		    font-family: sans-serif;
		    letter-spacing: 1px;
		    transition: all ease 1s;

		    &:hover{
				color: $color-orange;
			}
		}
	}

	footer {
		.container{
			width: calc(100% - 2rem);
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

		.center{
			text-align: center;
		}
	}

	ul {

		li{
			list-style: none;

			a {
				color: $color-orange;
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

				&:before{
					width: 2rem;
					height: 1px;
					content : " ";
					display: block;
					float:left;
					background: $color-orange;
					margin: 0 .5rem;
					margin-left: 0px;
					transition: all 200ms linear;
				}

				&:hover:before{
					width: -0px;
					transition: all 200ms linear;
					margin: 0px;
				}


			}
		}
	}

	.component-fade-enter-active, .component-fade-leave-active {
	  transition: opacity .3s ease;
	}
	.component-fade-enter, .component-fade-leave-to{
	  opacity: 0;
	}

</style>