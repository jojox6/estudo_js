/**
 * Declare uma variável somente leitura com a palavra-chave const
A palavra let- chave não é a única maneira nova de declarar variáveis. No ES6, você também pode declarar variáveis ​​usando a constpalavra - chave.

consttem todos os recursos incríveis que letpossui, com a vantagem adicional de que as variáveis ​​declaradas usando constsão somente leitura. Eles são um valor constante, o que significa que uma vez que uma variável é atribuída com const, ela não pode ser reatribuída:

const FAV_PET = "Cats";
FAV_PET = "Dogs";
O console exibirá um erro devido à reatribuição do valor de FAV_PET.

Você deve sempre nomear variáveis ​​que não deseja reatribuir usando a constpalavra - chave. Isso ajuda quando você acidentalmente tenta reatribuir uma variável que deveria permanecer constante.

Uma prática comum ao nomear constantes é usar todas as letras maiúsculas, com palavras separadas por um sublinhado.

Nota: É comum para os desenvolvedores usarem identificadores de variáveis ​​em maiúsculas para valores imutáveis ​​e minúsculas ou camelCase para valores mutáveis ​​(objetos e matrizes). Você aprenderá mais sobre objetos, matrizes e valores imutáveis ​​e mutáveis ​​em desafios posteriores. Também em desafios posteriores, você verá exemplos de identificadores de variáveis ​​maiúsculas, minúsculas ou camelCase.

Altere o código para que todas as variáveis ​​sejam declaradas usando letou const. Use letquando quiser que a variável mude e constquando quiser que a variável permaneça constante. Além disso, renomeie as variáveis ​​declaradas com constpara estar em conformidade com as práticas comuns, o que significa que as constantes devem estar em maiúsculas.
 */

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line