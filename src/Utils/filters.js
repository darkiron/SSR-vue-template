export default {
	install (Vue) {
		Vue.filter('slugify', function (value) {
			return value.toLowerCase()
						.replace(/\s/gi, '-')
		})
	}
}