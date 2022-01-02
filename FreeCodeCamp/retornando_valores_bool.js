/*
Retornando valores booleanos de funções
Você deve se lembrar de Comparison with the Equality Operator que todos os operadores de comparação retornam um valor booleano trueou false.

Às vezes, as pessoas usam uma if/elsedeclaração para fazer uma comparação, como esta:

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
Mas existe uma maneira melhor de fazer isso. Uma vez que ===retorna trueou false, podemos retornar o resultado da comparação:

function isEqual(a, b) {
  return a === b;
}
Corrija a função isLesspara remover as if/elseinstruções.


*/
function isLess(a, b) {
// Only change code below this line
return a <= b;
// Only change code above this line
}

isLess(10, 15);

