/*
Escopo e funções locais
As variáveis ​​que são declaradas dentro de uma função, assim como os parâmetros da função, têm escopo local . Isso significa que eles são visíveis apenas dentro dessa função.

Aqui está uma função myTestcom uma variável local chamada loc.

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
A myTest()chamada de função exibirá a string foono console. A console.log(loc)linha gerará um erro, pois locnão está definida fora da função.

O editor tem dois programas console.logpara ajudá-lo a ver o que está acontecendo. Verifique o console enquanto você codifica para ver como ele muda. Declare uma variável local myVarinterna myLocalScopee execute os testes.

Nota: O console ainda será exibido ReferenceError: myVar is not defined, mas isso não fará com que os testes falhem.
*/

function myLocalScope() {
    // Only change code below this line
    let myVar;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);