const rest = (a, b, ...argumentos) => {
	console.log(a)
	console.log(b)
	console.log(argumentos[0])
	console.log(argumentos[1])
	console.log(...argumentos)
}

rest(1, 2, 3, 4, 5)

//-----------------------
console.log('------------------------')

const obj = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
}

const { a, b, ...restObj } = obj
console.log(a, b, restObj)

//-----------------------
console.log('------------------------')

const arr = [11, 22, 33, 44, 55]
// const [aa, bb, cc, dd, ee, ff, gg] = arr
const [aa, bb, ...r] = arr
console.log(aa, bb, r)

//-----------------------
console.log('------------------------')

const useState = () => ['valor', () => {}]
const [valor, setValor] = useState()
console.log(useState)
console.log(valor, setValor)
