const array = ["Hola",1,635,null,43,2,36,true,undefined];
const personas = [ 
  {nombre:"Adrian",edad:19},
  {nombre:"Junior",edad:17},
  {nombre:"Leonardo",edad:16}
];
let suma = 0;

// forEach() Iterar un Array
array.forEach(element => {
  if(typeof element == "number"){
    suma+=element;
  }
  console.log(element);
});
console.log( suma ); // 717

// Obtener un elemento iterando
const persona = personas.find( persona => {
  return persona.nombre === "Adrian";
});
console.log(persona);

// BONUS
const { edad } = personas.find(persona => persona.nombre === "Adrian");
console.log( edad ); // Reconoce que pido la edad del objeto, por eso solo me extrae ello