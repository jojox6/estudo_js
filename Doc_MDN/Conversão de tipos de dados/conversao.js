/*
JavaScript é uma linguagem dinamicamente tipada. Isso significa que você não precisa especificar o tipo de dado de uma variável quando declará-la, e tipos de dados são convertidos automaticamente conforme a necessidade durante a execução do script. Então, por exemplo, você pode definir uma variável da seguinte forma:
*/

var answer = 42;

//Depois você pode atribuir uma string para a mesma variável, por exemplo:

answer = "Obrigado pelos peixes...";

/*
Devido JavaScript ser dinamicamente tipado, essa declaração não gera uma mensagem de erro.

Em expressões envolvendo valores numérico e string com o operador +, JavaScript converte valores numérico para strings. Por exemplo, considere a seguinte declaração:


*/

x = "A resposta é " + 42; // "A resposta é 42"
y = 42 + " é a resposta" // "42 é a resposta"

/*
Nas declarações envolvendo outros operadores,  JavaScript não converte valores numérico para strings. Por exemplo:
*/
"37" - 7 // 30
"37" + 7 // "377"