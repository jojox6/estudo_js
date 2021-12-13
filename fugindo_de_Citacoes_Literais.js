/*
Fugindo de citações literais em cordas
Ao definir uma string, você deve começar e terminar com aspas simples ou duplas. O que acontece quando você precisa de uma citação literal: "ou 'dentro de sua string?

Em JavaScript, você pode escapar de uma citação ao considerá-la como um final de citação de string, colocando uma barra invertida ( \) na frente da citação.

const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
Isso sinaliza ao JavaScript que a seguinte citação não é o final da string, mas deve aparecer dentro da string. Portanto, se você imprimir isso no console, obterá:

Alan said, "Peter is learning JavaScript".
Use barras invertidas para atribuir uma string à myStrvariável de forma que, se você fosse imprimi-la no console, você veria:

I am a "double quoted" string inside "double quotes".
 */

const myStr = "I am a \"double quoted\" string inside \"double quoute\"";

console.log(myStr);