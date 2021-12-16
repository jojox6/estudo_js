/*
Atribuição com valor devolvido
Se você se lembra de nossa discussão sobre Armazenamento de valores com o operador de atribuição , tudo à direita do sinal de igual é resolvido antes que o valor seja atribuído. Isso significa que podemos pegar o valor de retorno de uma função e atribuí-lo a uma variável.

Suponha que temos uma função predefinida sumque adiciona dois números, então:

ourSum = sum(5, 12);
irá chamar a sumfunção, que retorna um valor de 17e o atribui à ourSumvariável.

Chame a processArgfunção com um argumento de 7e atribua seu valor de retorno à variável processed.


*/
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
console.log(processed);