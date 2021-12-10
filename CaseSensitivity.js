/**
 * Compreendendo a sensibilidade a maiúsculas e minúsculas em variáveis
Em JavaScript, todas as variáveis ​​e nomes de função diferenciam maiúsculas de minúsculas. Isso significa que a capitalização é importante.

MYVARnão é o mesmo que MyVarnem myvar. É possível ter várias variáveis ​​distintas com o mesmo nome, mas com maiúsculas e minúsculas diferentes. É altamente recomendável que, por uma questão de clareza, você não use este recurso de linguagem.

Melhor prática

Escreva nomes de variáveis ​​em JavaScript em camelCase . Em camelCase , nomes de variáveis ​​com várias palavras têm a primeira palavra em minúsculas e a primeira letra de cada palavra subsequente em maiúscula.

Exemplos:

var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
Modifique as declarações e atribuições existentes para que seus nomes usem camelCase .

Não crie novas variáveis.


 */


//Forma correta

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;