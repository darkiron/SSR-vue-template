
export function fetchItem (id) {
 return new Promise( (resolve, reject) => {
 	console.log('in api')
 	let item = 'test ' + id
 	console.log(item)
 	return { id, item }
 })
}
