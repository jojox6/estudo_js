/*
Compreender a imutabilidade das cordas
Em JavaScript, os Stringvalores são imutáveis , o que significa que não podem ser alterados depois de criados.

Por exemplo, o seguinte código:

let myStr = "Bob";
myStr[0] = "J";
não pode alterar o valor de myStrpara Job, porque o conteúdo de myStrnão pode ser alterado. Observe que isso não significa que myStrnão possa ser alterado, apenas que os caracteres individuais de um literal de string não podem ser alterados. A única maneira de mudar myStrseria atribuí-lo a uma nova string, como esta:

let myStr = "Bob";
myStr = "Job";
Corrija a atribuição para myStrque contenha o valor da string de Hello Worldusar a abordagem mostrada no exemplo acima.


*/

// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World";