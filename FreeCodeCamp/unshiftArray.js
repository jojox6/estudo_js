/*
Manipular matrizes com unshift ()
Não apenas você pode shiftelementos fora do início de uma matriz, você também pode unshiftelementos para o início de uma matriz, ou seja, adicionar elementos na frente da matriz.

.unshift()funciona exatamente como .push(), mas em vez de adicionar o elemento no final da matriz, unshift()adiciona o elemento no início da matriz.

Exemplo:

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
Após o shift, ourArrayteria o valor ["J", "cat"]. Após o unshift, ourArrayteria o valor ["Happy", "J", "cat"].

Adicione ["Paul", 35]ao início da myArrayvariável usando unshift().
*/
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]); 


console.log(myArray); // [ [ 'Paul', 35 ], [ 'John', 23 ], [ 'dog', 3 ] ]