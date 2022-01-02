/*
Retornar o padrão inicial para funções
Quando uma returninstrução é alcançada, a execução da função atual para e o controle retorna ao local de chamada.

Exemplo

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
O exemplo acima exibirá a string Hellono console e retornará a string World. A string byebyenunca será exibida no console, porque a função sai na returninstrução.

Modifique a função abTestpara que se aou bfor menor que 0a função saia imediatamente com um valor de undefined.

Dica
Lembre-se de que undefinedé uma palavra-chave , não uma string.
*/

// Setup
function abTest(a, b) {
// Only change code below this line
if (a < 0 || b < 0){
    return undefined; 
}


// Only change code above this line

return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);