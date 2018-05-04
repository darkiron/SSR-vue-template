
export function fetchItem (id) {
console.log('test')
 return new Promise( (resolve, reject) => {
 	let item = 'test ' + id
 	return { id, item }
 })
}
