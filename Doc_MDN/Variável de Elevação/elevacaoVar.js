/*
Outra coisa incomum sobre variáveis em JavaScript é que você pode utilizar a variável e declará-la depois, sem obter uma exceção. Este conceito é conhecido como hoisting; variáveis em JavaScript são num sentido "hoisted" ou lançada para o topo da função ou declaração. No entanto, as variáveis que são "hoisted" retornarão um valor undefined. Então, mesmo se você usar ou referir a variável e depois declará-la e inicializá-la, ela ainda retornará undefined.
*/

/**
 * Exemplo 1
 */
 console.log(x === undefined); // exibe "true"
 var x = 3;
 
 /**
  * Exemplo 2
  */
 // retornará um valor undefined
 var myvar = "my value";
 
 (function() {
   console.log(myvar); // undefined
   var myvar = "local value";
 })();
 
 //Os exemplos acima serão interpretados como:

 /**
 * Exemplo 1
 */
var x;
console.log(x === undefined); // exibe "true"
x = 3;

/**
 * Exemplo 2
 */
var myvar = "um valor";

(function() {
  var myvar;
  console.log(myvar); // undefined
  myvar = "valor local";
})();