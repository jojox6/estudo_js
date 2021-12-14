/*
Você pode criar uma constante apenas de leitura por meio da palavra-chave const. A sintaxe de um identificador de uma constante é semelhante ao identificador de uma variável: deve começar com uma letra, sublinhado ou cifrão e pode conter caractere alfabético, numérico ou sublinhado.
*/

const PI = 3.14;

/*
Uma constante não pode alterar seu valor por meio de uma atribuição ou ser declarada novamente enquanto o script está em execução. Deve ser inicializada com um valor.

As regras de escopo para as constantes são as mesmas para as váriaveis let de escopo de bloco. Se a palavra-chave const for omitida, presume-se que o identificador represente uma variável.

Você não pode declarar uma constante com o mesmo nome de uma função ou variável que estão no mesmo escopo. Por exemplo: 
*/

// Isto irá causar um  erro
function f() {};
const f = 5;

// Isto também irá causar um erro.
function f() {
  const g = 5;
  var g;

  //declarações
}