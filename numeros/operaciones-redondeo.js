// Representacion de los números en cadenas de texto
let a_s = 4.5.toString();
console.log(  typeof a_s  ); //String

//Redondeo de números decimales
let c = 3.3;
let d = c * 3;
console.log( d ); // 9.899999999999999

// .toFixed(x)  -> Obtener una cantidad de decimales(convierte en string tambien)
console.log( d.toFixed(2) ); // 9.90 => String

// .toPrecision(x)  -> Limita el número de decimales(redondeandolo)
console.log( d.toPrecision(4) ); // 9.900
console.log( typeof d.toPrecision(4)); //String
