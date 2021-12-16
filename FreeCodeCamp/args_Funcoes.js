/*
Passando Valores para Funções com Argumentos
Parâmetros são variáveis ​​que agem como marcadores de posição para os valores que devem ser inseridos em uma função quando ela é chamada. Quando uma função é definida, normalmente ela é definida junto com um ou mais parâmetros. Os valores reais que são inseridos (ou "passados" ) em uma função quando ela é chamada são conhecidos como argumentos .

Aqui está uma função com dois parâmetros param1e param2:

function testFun(param1, param2) {
  console.log(param1, param2);
}
Então, podemos chamar testFunassim: testFun("Hello", "World");. Passamos dois argumentos de string, Helloe World. Dentro da função, param1será igual à string Helloe param2será igual à string World. Observe que você pode chamar testFunnovamente com argumentos diferentes e os parâmetros assumirão o valor dos novos argumentos.

Crie uma função chamada functionWithArgsque aceite dois argumentos e envie sua soma para o console dev.
Chame a função com dois números como argumentos.

*/

function functionWithArgs(num1, num2){
    console.log(num1 + num2);
}
functionWithArgs(5,5); // 10