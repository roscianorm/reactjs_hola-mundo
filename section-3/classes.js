// Esto es una expresion de clase, crear una variable y asignarsela a una variable
// const Rectangulo = class R {}

// Tambien se pueden crear clases anonimas
// const Rectangulo = class {}

// Esto es una declaracion de clase
class Rectangulo {} // Clases declaradas con class no tienen hoisting

console.log(Cuadrado) // Hoisting, cuando tomamos variables definidas con var y funciones definidas con function y JS las declara al inicio del archivo
// esto es una clase como funcion
function Cuadrado() {}

console.log(Cuadrado, Rectangulo)

const r = new Rectangulo()

class Chancho {
	// estado = 'feliz'
	// propiedades publicas
	propiedad = 'mi propiedad'
	// Propiedades privadas se declaran con #
	#hambre = false
	// propiedades static disponibles para los metodos statics
	static estatico = 42

	// El metodo CONSTRUCTOR se ejecuta siempre que instanciemos una clase
	// constructor(estado = 'feliz') { // define un estado por defecto
	constructor(estado = 'feliz', hambre = false) {
		// console.log(`Soy un chancho ${this.estado}`)
		this.estado = estado
		this.#hambre = hambre
	}
	hablar() {
		console.log(
			`Soy un chancho ${this.estado} ${
				this.#hambre ? 'con mucha hambre' : 'satisfecho'
			}`
		)
	}

	// metodos estaticos, solo se pueden acceder desde las clases y no hay necesidad de declarar una nueva instancia. estos metodos solo pueden acceder a propiedades estaticas
	static comer() {
		console.log(this, 'estoy comiendo!')
		console.log(this.propiedad, 'estoy comiendo!')
		console.log(this.estatico, 'estoy comiendo!')
	}
}

Chancho.comer()

const feliz = new Chancho('feliz')
console.log(feliz)
// console.log(feliz.__proto__.hablar)
feliz.hablar()
const triste = new Chancho('triste')
// triste.hablar()
const undefined = new Chancho()
// undefined.hablar()
// const happy = Chancho() // TypeError: Class constructor Chancho cannot be invoked without 'new'
