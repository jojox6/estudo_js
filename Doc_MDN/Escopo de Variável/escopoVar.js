/*
Quando você declara uma váriavel fora de qualquer função, ela é chamada de variável global, porque está disponível para qualquer outro código no documento atual. Quando você declara uma variável dentro de uma função, é chamada de variável local,  pois ela está disponível somente dentro dessa função.

JavaScript antes do ECMAScript 6 não possuía escopo de declaração de bloco; pelo contrário, uma variável declarada dentro de um bloco de uma função é uma variável local (ou contexto global) do bloco que está inserido a função. Por exemplo o código a seguir exibirá 5, porque o escopo de x está na função (ou contexto global) no qual x é declarado, não o bloco, que neste caso é a declaração if
*/

if (true) {
    var x = 5;
  }
  console.log(x);  // 5

/*
Esse comportamento é alterado, quando usado a declaração let introduzida pelo ECMAScript 6.
*/
if (true) {
    let y = 5;
  }
  console.log(y);  // ReferenceError: y não está definido
