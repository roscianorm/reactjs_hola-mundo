// Antigua forma de declarar variables
var val = 'variable'
/**
 * De esta manera JS siempre eleva la declaracion de la variable(var val) al inicio del archivo y luego en la linea donde le asignamos el valor (var val = 'variable') remueve la palabra reservada 'var'. Esto sucede sin que el programador se de cuenta pero es importante saberlo porque eso significa que entre la primera linea del archivo y la linea dodne declaramos la variable el valor de la misma es 'undefined' y podria causar resultados inesperados si se utiliza la variable antes de tener un valor asignado.
 */

// Nueva forma de declarar varaibles
let val2 = 'variable creada con let'
/**
 * La principal diferencia entre let y var es que let es declarada e inicializada en esa misma linea. No se puede acceder a una variable declarada con let antes de su declaracion
 */

// Nueva forma de declarar constantes
const val3 = 'este valor es constante'
/**
 * Las variables declaradas con la palabra reservada const no pueden ser reasignadas.
 */
