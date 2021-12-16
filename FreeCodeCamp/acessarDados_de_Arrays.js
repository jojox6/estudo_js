/*
Acessar dados de matriz com índices
Podemos acessar os dados dentro de arrays usando índices .

Os índices de array são escritos na mesma notação de colchetes que as strings usam, exceto que em vez de especificar um caractere, eles especificam uma entrada na array. Como strings, arrays usam indexação baseada em zero , então o primeiro elemento em um array tem um índice de 0.


Exemplo

const array = [50, 60, 70];
array[0];
const data = array[1];
array[0]é agora 50e datatem o valor 60.

Nota: Não deve haver nenhum espaço entre o nome da matriz e os colchetes, como array [0]. Embora o JavaScript seja capaz de processar isso corretamente, isso pode confundir outros programadores que estejam lendo seu código.

Crie uma variável chamada myDatae defina-a para ser igual ao primeiro valor myArrayusando a notação de colchetes.

*/

const myArray = [50, 60, 70];
var myData = myArray[0];
console.log(myData); // 50