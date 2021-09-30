const arr = [11, 22, 33, 44, 55]

const r = arr.filter((el, index) => {
	console.log('index', index, 'valor =', el)
	return el < 33
})
console.log(r)
