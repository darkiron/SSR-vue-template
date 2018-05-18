function getMeta (vm) {
	const { meta } = vm.$options

	if (meta) {
		return typeof meta == 'function'
		? meta.call(vm)
		: meta
	}
}

const serverMetaMixin = {
	created () {
		const meta = getMeta(this)
		console.log(meta)

		if (meta) {
			this.$ssrContext.meta = meta
		}
	}
}

const clientMetaMixin = {
	mounted () {
		const meta = getMeta(this)
		console.log(meta)
		
		if (meta) {
			document.title = meta
		}
	}
}

export default process.env.VUE_ENV === 'server'
	? serverMetaMixin
	: clientMetaMixin