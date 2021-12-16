/*
Retorne um valor de uma função com retorno
Podemos passar valores para uma função com argumentos . Você pode usar uma returninstrução para enviar um valor de volta de uma função.

Exemplo

function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
answertem o valor 8.

plusThreerecebe um argumento para nume retorna um valor igual a num + 3.

Crie uma função timesFiveque aceite um argumento, multiplique-o por 5e retorne o novo valor.

*/

function timesFive(num){
    return num * 5
}
const newValue = timesFive(5); 
console.log(newValue); // 25