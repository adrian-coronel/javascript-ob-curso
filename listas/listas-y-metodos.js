// Como se declara una lista
let variable = { nombre:"Adrian" }
let array = [ 1,"2",null,undefined,"5",variable,7,8,{ id:2 } ];

// acceder a sus elementos
console.log( array[ 0 ] ); // 1
console.log( array[ 3 ] ); // undefined

// Metodos para agregar valores
array.push( "elementoFinal" ); // push(); agrega un elemento al final
array.unshift( "elementoInicial" ); // unshift(); agrega un elemento al inicio
console.log( array ); // [ 'elementoInicial',....,'elementoFinal' ]

// Metodo para eliminar valores del array
array.pop(); // Elimina el ultimo valor
array.shift(); // Elimina el primer elemento
console.log( array );

// Método para eliminar,modificar o añadir valores
//Eliminar
array.splice( 2, 1 ); // splice(desdeQueIndice, eliminaLaCantidadIngresada , )
//Añadir
array.splice( 2, 0, "Hola"); // splice( desdeQueIndice, eliminaLaCantidadIngresada , agregaEsteValorEnElIndice)
console.log( array );
//Modificar
array.splice(2, 1, "Hola2"); // Elimina y agrega otro
console.log( array );