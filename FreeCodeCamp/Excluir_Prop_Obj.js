/*
Excluir propriedades de um objeto JavaScript
Também podemos excluir propriedades de objetos como este:

delete ourDog.bark;
Exemplo:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
Após a última linha mostrada acima, ourDogfica assim:

{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
Exclua a tailspropriedade de myDog. Você pode usar a notação de ponto ou colchete.


*/

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "wolf"
}
console.log(myDog);

delete myDog.tails;

console.log(myDog);