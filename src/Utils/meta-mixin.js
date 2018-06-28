function getMeta (vm) {
	const { meta } = vm.$options
	if (meta) {
		return typeof meta == 'function'
		? meta.call(vm)
		: meta
	}
}

function setMeta (meta) {
	let keys = Object.keys(meta)

	let domMeta = document.getElementsByTagName('meta');

	let og = RegExp('og')

	keys.forEach( key => {
		if (key != 'title' && !og.test(key)) {
			domMeta[key].content = meta[key]
		}
		else {
			for (var i = 0; i < domMeta.length; i++) {
				if (domMeta[i].getAttribute('property') == key) {
					domMeta[i].content = meta[key]
				}
			}
		}
		
	})
}

const serverMetaMixin = {
	created () {
		const meta = getMeta(this)

		if (meta) {
			this.$ssrContext.meta = meta
		}
	}
}

const clientMetaMixin = {
	mounted () {

		const meta = getMeta(this)

		if (meta) {
			document.title = meta.title
			setMeta(meta)
		}
	}
}

export default process.env.VUE_ENV === 'server'
	? serverMetaMixin
	: clientMetaMixin