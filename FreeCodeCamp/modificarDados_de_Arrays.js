/*
Modificar dados de matriz com índices
Ao contrário das strings, as entradas dos arrays são mutáveis e podem ser alteradas livremente, mesmo que o array tenha sido declarado com const.

Exemplo

const ourArray = [50, 40, 30];
ourArray[0] = 15;
ourArrayagora tem o valor [15, 40, 30].

Nota: Não deve haver nenhum espaço entre o nome da matriz e os colchetes, como array [0]. Embora o JavaScript seja capaz de processar isso corretamente, isso pode confundir outros programadores que estejam lendo seu código.

Modifique os dados armazenados no índice 0de myArraypara um valor de 45.


*/

const myArray = [18, 64, 99];
myArray[0] = 45;
console.log(myArray); // [ 45, 64, 99 ]