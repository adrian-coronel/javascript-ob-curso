// Operador .valueOf() - Obtener valores numéricos a partir de literales
let a = 2;
let b = new Number(3); //Esto es un casting

console.log(a); // 2
console.log(b); // Number 3 {} 

console.log( b.valueOf() ) // 3 -> De esta manera obtengo los valores primitivos 

// NaN (Not a Number) - Infinity
let n = Number("Hola");
console.log( n ); // NaN
console.log( isNaN(n) ); // true 

let numerador = 19;
let divisor = 0;
console.log( 20 / null); // Infinity
console.log( numerador / divisor); //Infinity -> Pasa cuando dividimos con "0" o NULL


// Cómo vonvertir los string a valores numéricos con Number, parseInt y parseFloat
let numeroString = '10.5';
let numero = 10.;
console.log(numeroString + numero); // 10.510.5 -> Lo esta concatenando
console.log( Number(numeroString) + numero); // 21 => Esta es la forma de CASTEAR

// parseInt => Según el valor numerico que reciba, extraerá solo el valor entero 
let valorParseadoInt = parseInt(numeroString);
console.log( valorParseadoInt ); // 10 
console.log( typeof valorParseadoInt); // number

// parseFloat 
let valorParseadoFloat = parseFloat(numeroString);
console.log( valorParseadoFloat ); // 10.5
console.log( typeof valorParseadoFloat ); // number


// Números hexadecimales (base 16)
let numHex = '0x3a8s8'; 
// SE USA PARSEINT()
console.log( parseInt(numHex, 16) ); // 936 => Por defecto esta en base 16, podemos indicarle en el 2do parametró


// Obtener los valores maximos y minimos
let min_precision = Number.EPSILON; // EPSILON es la minima diferencia entre un número y el siguiente
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log( min_precision ); // 2.220446049250313e-16 => 000000000000000222
console.log( min_valor_JS ); // 5e-324 => El minimo valor aceptable en JS es un CERO con 323 CEROS decimales y un 5 al final
console.log( max_valor_JS ); // 1.7976931348623157e+308 => El mayor valor sería un 1 con 308 valores por detras











