/*
Manipular matrizes com push ()
Uma maneira fácil de anexar dados ao final de um array é por meio da push()função.

.push()pega um ou mais parâmetros e os "empurra" para o final do array.

Exemplos:

const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
arr1agora tem o valor [1, 2, 3, 4]e arr2tem o valor ["Stimpson", "J", "cat", ["happy", "joy"]].

Vá ["dog", 3]para o final da myArrayvariável.

*/

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);
console.log(myArray); // [ [ 'John', 23 ], [ 'cat', 2 ], [ 'dog', 3 ] ]