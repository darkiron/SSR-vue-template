<template>
	<div class="backlayer" :class="{ active: isActive }">
		<div class="loader"></div>
	</div>
</template>
<script>
	export default {
		name: 'loader',
		data () {
			return {
				isActive: false
			}
		},
		methods: {
			start () {
				this.isActive = true
			},
			stop () {
				this.isActive = false
			}
		}
	}
</script>
<style lang="scss">

	@import '../Style/variables.scss';

	.active {
		display:flex!important;
	}

	.backlayer {
		display: none;
		width: 100%;
		height: 100%;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		position: fixed;
		background: rgba(29, 29, 29, .40);
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 1;
    	overflow: hidden;
	}

	.loader{
		border-radius: 50%;
	    border: 15px solid $color-orange;
    	border-top: 15px solid $color-grey;
	    background: transparent;
	    width: 100px;
	    height: 100px;
	    animation: spin 2s linear infinite;
	}

	@keyframes spin {
	    0% { transform: rotate(0deg); }
	    100% { transform: rotate(360deg); }
	}
</style>