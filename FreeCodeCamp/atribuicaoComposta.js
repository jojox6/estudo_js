/**
 * Atribuição composta com adição aumentada
Na programação, é comum usar atribuições para modificar o conteúdo de uma variável. Lembre-se de que tudo à direita do sinal de igual é avaliado primeiro, então podemos dizer:

myVar = myVar + 5;
para adicionar 5a myVar. Como esse é um padrão comum, existem operadores que realizam uma operação matemática e uma atribuição em uma única etapa.

Um desses operadores é o +=operador.

let myVar = 1;
myVar += 5;
console.log(myVar);
6 seria exibido no console.

Converter as atribuições para a, be cusar o +=operador.
 */

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

//Valores após Adição, by:Joseph
console.log(a,b,c);