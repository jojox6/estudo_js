/*
Algoritmos JavaScript e estruturas de dados
JavaScript básico
Acessando Propriedades de Objetos com Notação de Pontos
Existem duas maneiras de acessar as propriedades de um objeto: notação de ponto ( .) e notação de colchetes ( []), semelhante a uma matriz.

A notação de pontos é o que você usa quando sabe o nome da propriedade que está tentando acessar com antecedência.

Aqui está um exemplo de como usar a notação de ponto ( .) para ler a propriedade de um objeto:

const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
prop1valteria um valor da string val1e prop2valteria um valor da string val2.

Leia os valores de propriedade de testObj usar a notação de ponto. Defina a variável hatValueigual à propriedade do objeto hate defina a variável shirtValueigual à propriedade do objeto shirt.

*/

// Setup
const testObj = {
"hat": "ballcap",
"shirt": "jersey",
"shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

console.log(hatValue);
console.log(shirtValue);