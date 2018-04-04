<template>
	<div>
		Hello {{ name }}
	</div>
</template>
<script>
	export default {
		data () {
			return {
				name: ''
			}
		},
		created () {
			this.name = this.$route.params.name
		}
	}
</script>