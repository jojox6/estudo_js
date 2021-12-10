/**
 * Explore as diferenças entre as palavras-chave var e letPassado
Um dos maiores problemas com a declaração de variáveis ​​com a varpalavra-chave é que você pode substituir facilmente as declarações de variáveis:

var camper = "James";
var camper = "David";
console.log(camper);
No código acima, a campervariável é originalmente declarada como Jamese, em seguida, é substituída por ser David. O console então exibe a string David.

Em um aplicativo pequeno, talvez você não encontre esse tipo de problema. Mas, à medida que sua base de código se torna maior, você pode sobrescrever acidentalmente uma variável que não pretendia. Como esse comportamento não gera um erro, a busca e a correção de bugs se torna mais difícil.

Uma palavra-chave chamada letfoi introduzida no ES6, uma grande atualização do JavaScript, para resolver esse problema potencial com a varpalavra - chave. Você aprenderá sobre outros recursos do ES6 em desafios posteriores.

Se você substituir var por let no código acima, resultará em um erro:

let camper = "James";
let camper = "David";
O erro pode ser visto no console do seu navegador.

Portanto var, ao contrário de quando você usa let, uma variável com o mesmo nome só pode ser declarada uma vez.

Atualize o código para que ele use apenas a letpalavra - chave.
 */

let catName = "Oliver";
let catSound = "Meow!";