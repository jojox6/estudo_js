/*
Comparação com o maior ou igual ao operador
O maior ou igual a operator ( >=) compara os valores de dois números. Se o número à esquerda for maior ou igual ao número à direita, ele retorna true. Caso contrário, ele retorna false.

Como o operador de igualdade, o operador maior ou igual a converterá os tipos de dados durante a comparação.

Exemplos

6   >=  6
7   >= '3'
2   >=  3
'7' >=  9
No fim, essas expressões seria avaliada como true, true, false, e false.

Adicione o operador maior ou igual a às linhas indicadas para que as instruções de retorno façam sentido.


 */

function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
  
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);