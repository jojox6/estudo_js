/*
Escopo e funções globais
Em JavaScript, o escopo se refere à visibilidade das variáveis. Variáveis ​​que são definidas fora de um bloco de função têm escopo global . Isso significa que eles podem ser vistos em qualquer lugar em seu código JavaScript.

Variáveis ​​que são declaradas sem as palavras let- constchave ou são criadas automaticamente no globalescopo. Isso pode criar consequências indesejadas em outras partes do seu código ou ao executar uma função novamente. Você sempre deve declarar suas variáveis ​​com letou const.

Usando letou const, declare uma variável global nomeada myGlobalfora de qualquer função. Inicialize-o com um valor de 10.

Função interna fun1, atribua 5a oopsGlobal sem usar as palavras-chave letou const.
*/
let myGlobal = 10;
function fun1() {
    // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
  }
  
  // Only change code above this line
  
  function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
  }