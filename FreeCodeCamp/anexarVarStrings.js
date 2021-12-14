/*
Anexando Variáveis ​​a Strings
Assim como podemos construir uma string em várias linhas de literais de string , também podemos anexar variáveis ​​a uma string usando o +=operador mais equals ( ).

Exemplo:

const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
ourStrteria o valor freeCodeCamp is awesome!.

Defina someAdjectivecomo uma string de pelo menos 3 caracteres e anexe-a myStrusando o +=operador.

*/

const someAdjective = "too good!";
let myStr = "Learning to code is ";

console.log(myStr += someAdjective);