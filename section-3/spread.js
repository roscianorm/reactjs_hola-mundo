const fn = (a, b, c) => console.log(a + b + c)

const arr = [1, 2, 3]

// fn(arr[0], arr[1], arr[2])
fn(...arr)

const arr1 = [5, 6]

// const arr2 = arr.concat(arr1)
const arr2 = [...arr, ...arr1]
console.log(arr2)

const arr3 = arr // Esto crea una refencia hacia el mismo array, no esta copiando como tal el array. Por eso el cambio tambien se refleja en arr3 cuando le hacemos console.log
arr[0] = 'Chanchito Feliz'

console.log(arr)
console.log(arr3)

// -----------------------
console.log('------------------------')

const obj1 = { a: 1, b: 2 }
const obj2 = { b: 5, c: 'chanchito feliz' }

// El spread operator tambien se puede utilizar para clonar/copiar un objeto
const obj3 = { ...obj1 }
obj1.a = 10
// console.log(obj3, obj1)

// Si los objetos tienen propiedades con el mismo nombre siempre va a quedar el valor de los argumentos que esten mas a la derecha
const obj4 = { ...obj1, ...obj2 }
console.log(obj4)

const obj5 = {
	...obj1,
	loading: true,
	data: {
		prop: 'lala',
		animal: 'perrito',
	},
}
console.log(obj5)
