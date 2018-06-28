export default {
  	methods: {
  		slugify (value) {
			return value.toLowerCase()
				.replace(/[\?\!:&@.\/\$"'()°`{}[\]=\+%#£,\*¥€]/gi,'')
				.trim()
				.replace(/[eéêëè]/gi,'e')
				.replace(/[aâäà]/gi,'a')
				.replace(/[ùûü]/gi,'u')
				.replace(/[ôö]/gi,'o')
				.replace(/\s/gi, '-')
		}
  
  	}
}

