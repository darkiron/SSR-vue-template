import axios from 'axios'

export async function createApi (apiUrl) {

	let items = null
	 
	await axios.get(apiUrl).then(
	 	response => {
	 		items = response.data.articles
	 		// console.log(items)
	 	},
	 	response => {
	 		console.log(response)
	 	}
	)

	return items
}
