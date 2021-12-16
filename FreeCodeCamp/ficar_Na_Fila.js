/*
Ficar na fila
Na Ciência da Computação, uma fila é uma Estrutura de Dados abstrata onde os itens são mantidos em ordem. Novos itens podem ser adicionados no final da fila e itens antigos podem ser retirados do início da fila.

Escreva uma função nextInLineque receba um array ( arr) e um número ( item) como argumentos.

Adicione o número ao final da matriz e remova o primeiro elemento da matriz.

A nextInLinefunção deve então retornar o elemento que foi removido.


*/

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    var removed = arr.shift();
    return removed;
    // Only change code above this line
  }
  
  // Setup
  const testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));