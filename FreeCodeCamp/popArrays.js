/*
Manipular matrizes com pop ()
Outra maneira de alterar os dados em um array é com a .pop()função.

.pop()é usado para retirar um valor do final de uma matriz. Podemos armazenar esse valor destacado atribuindo-o a uma variável. Em outras palavras, .pop()remove o último elemento de uma matriz e retorna esse elemento.

Qualquer tipo de entrada pode ser retirado de um array - números, strings e até mesmo arrays aninhados.

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
O primeiro console.logexibirá o valor 6e o segundo exibirá o valor [1, 4].

Use a .pop()função para remover o último item myArraye atribuir o valor exibido a uma nova variável removedFromMyArray,.
*/

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray.pop(); // remove [ 'cat', 2 ] o último elemento do Array
console.log(myArray); // [ [ 'John', 23 ] ]
console.log(removedFromMyArray); // [ 'cat', 2 ]