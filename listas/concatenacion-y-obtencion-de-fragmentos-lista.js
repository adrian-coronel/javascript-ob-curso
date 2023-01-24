// Como unir 2 listas  -> .concat(lista)

const lista1 = [ "hola", 2 , true , null ];
const lista2 = [ "chau", 4 , false , undefined ];

// metodo concat( ... )
const listaConcat = lista1.concat(lista2);
console.log( listaConcat );

// Unir listas mediante => Factor de Propagación
const listFactPro = [ ...lista2, ...lista2 ];
console.log( listFactPro );

// slice(indexStart,indexEnd) => Obtener una porsión de una lista y ponerla en otra 
console.log( lista1.slice(0,3) ); // ['hola',2,true]





