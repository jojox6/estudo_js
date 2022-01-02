/*
Construir objetos JavaScript
Você pode ter ouvido o termo objectantes.

Os objetos são semelhantes a arrays, exceto que em vez de usar índices para acessar e modificar seus dados, você acessa os dados nos objetos por meio do que é chamado properties.

Os objetos são úteis para armazenar dados de forma estruturada e podem representar objetos do mundo real, como um gato.

Aqui está um exemplo de objeto gato:

const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
Neste exemplo, todas as propriedades são armazenados como cadeias, tais como name, legse tails. No entanto, você também pode usar números como propriedades. Você pode até omitir as aspas para propriedades de string de palavra única, da seguinte maneira:

const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
No entanto, se o seu objeto tiver quaisquer propriedades que não sejam de string, o JavaScript irá modelá-las automaticamente como strings.

Faça um objeto que representa um cão chamado myDogque contém as propriedades name(uma string), legs, tailse friends.

Você pode definir essas propriedades de objeto para quaisquer valores que desejar, desde que nameseja uma string, legse tailssejam números, e friendsseja uma matriz.


*/

const myDog = {
// Only change code below this line
name:"Dog",
legs: 4,
tails: 1,
"friends": ["Man", "Woman"]

// Only change code above this line
};
console.log(myDog);