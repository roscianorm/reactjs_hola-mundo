const url = 'https://jsonplaceholder.typicode.com/users'

// fetch(url)
// 	.then((response) => response.json())
// 	.then((data) => console.log(data))

// fetch(url, {
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json',
// 		Authorization: 'Bearer authorizationToken',
// 	},
// 	body: JSON.stringify({
// 		name: 'Chancito feliz',
// 		website: 'gooogle.com',
// 	}),
// })
// 	.then((response) => response.json())
// 	.then((data) => console.log(data))

const fn = async () => {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer authorizationToken',
		},
		body: JSON.stringify({
			name: 'Chancito feliz',
			website: 'gooogle.com',
		}),
	})
	const data = await response.json()
	console.log(data)
}
fn()
