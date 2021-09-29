/**
 * fat functions
 *
 * Este tipo de funciones sirven tanto como funciones como un tipo de clases y podemos aplicar herencia basada en prototipos.
 *
 * Las funciones en JS declaradas con la palabra reservada function tiene un contexto de 'this', siendo this el objeto/instancia de la funcion. Podemos asignarle propiedades al this.
 */
function Fn() {
	this.name = 'Charles'
	return 'Chancito feliz'
}

Fn.prototype.cheese = function addMoreCheese() {
	return 'more chesse'
}

const r = Fn()
const j = new Fn() // crea un objeto literal de la funcion
console.log(r) // Chancito feliz
console.log(j) // Fn { name: 'Charles' }
console.log(j.__proto___) // { cheese: [Function: addMoreCheese] }

// ----------------------------------------------------------------
console.log('---------------------------')
/**
 * fat arrow function
 * Las fat arrow function no pueden ser llamadas con la palabra reservada  de 'new'.
 *
 * Las fat arrow function no tienen un contexto de 'this'. Cuando hacemos uso de la palabra reservada 'this' dentro de un arrow function estamos haciendo referencia al this global no de la funcion.
 *
 * las arrow function tienen un return implicito
 */

console.log(this)
const fatFn = () => {
	this.prop = 'lala'
}
const r1 = fatFn()
console.log(this)

// return implicito
const fnR = () => 2
console.log(fnR())
