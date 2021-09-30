const arr = [1, 2, 3, 4, 5]

const r = arr.filter((el, index) => {
	console.log('index', index, 'valor =', el)
	return el < 3
})
console.log(r)

//-----------------------
console.log('------------------------')

const mapped = arr.map((el) => el * 2)
console.log(mapped)
const mappedH1 = arr.map((el) => `<h1>${el}</h1>`)
// console.log(mappedH1)

//-----------------------
console.log('------------------------')

const users = [
	{ id: 1, name: 'Chancito feliz' },
	{ id: 2, name: 'Chancito triste' },
	{ id: 3, name: 'Chancito emocionado' },
	{ id: 4, name: 'Felipe' },
]

const mappedUsers = users.map((user) => `<h1>${user.name}</h1>`)
console.log(mappedUsers)

//-----------------------
console.log('------------------------')

// const r1 = arr.reduce((acumulador, elemento) => acumulador + elemento, 0)

const getMax = (a, b) => Math.max(a, b) // Retorna el elemento mayor de dos
const r1 = arr.reduce(getMax) // Retorna el elemento de mayor valor en un array

const menosArr = [-1, -2, -3, -4, -5]
const r1negativo = menosArr.reduce(getMax) // Tambien funciona con numeros negativos

console.log(r1)
console.log(r1negativo)

//-----------------------
console.log('------------------------')

const u1 = users.reduce(
	(acumulador, elemento) =>
		`${acumulador === '' ? '' : `${acumulador}, `}${elemento.name}`,
	''
)
console.log(u1)

//-----------------------
console.log('------------------------')

const r2 = users.reduce((acc, el) => {
	if (el.id < 2) {
		return acc
	}
	return acc.concat(el)
}, [])
console.log(r2)
