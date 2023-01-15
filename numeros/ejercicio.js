let alturaCm = 170;
let alturaMt = 1.70;
let pesoKg = 110.5;
let alturaMtRound = alturaMt.toFixed(0);
let pesoKgRound = pesoKg.toFixed(2);

// Redondear la altura hacia arriba y el peso hacia abajo
console.log(alturaMtRound); // 2
console.log(pesoKgRound); // 110.50

// Igualar el maximo valor de JS con el maximo valor de JS + 1 
let areEqualsMaximuns = (Number.MAX_VALUE + 1) == Number.MAX_VALUE;
console.log( areEqualsMaximuns ); // true