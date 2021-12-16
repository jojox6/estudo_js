/*
Compreendendo o valor indefinido retornado de uma função
Uma função pode incluir a returninstrução, mas não é necessário. No caso de a função não ter uma returninstrução, quando você a chama, a função processa o código interno, mas o valor retornado é undefined.

Exemplo

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
addSumé uma função sem returndeclaração. A função irá alterar a sumvariável global , mas o valor retornado da função é undefined.

Crie uma função addFivesem argumentos. Esta função adiciona 5 à sumvariável, mas seu valor retornado é undefined.
*/

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}


// Only change code below this line
function addFive(){
  sum += 5;

}

// Only change code above this line

addThree();
addFive();