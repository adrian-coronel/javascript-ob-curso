// NUMBERS

let a = 5; // Entero
let b = 0.1; // Decimales

// Precisión
let c = 0.2;
console.log(  c + b ); // 0.30000000000000004

// Forma de lograr una precisión
let valorPreciso = Math.round( (c + b) * 100) / 100;
console.log(valorPreciso); // 0.3