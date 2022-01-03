/*
Adicionar novas propriedades a um objeto JavaScript
Você pode adicionar novas propriedades a objetos JavaScript existentes da mesma maneira que os modificaria.

Veja como adicionaríamos uma barkpropriedade a ourDog:

ourDog.bark = "bow-wow";
ou

ourDog["bark"] = "bow-wow";
Agora, quando avaliarmos ourDog.bark, obteremos sua casca bow-wow,.

Exemplo:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
Adicione uma barkpropriedade a myDoge defina-a como um som de cachorro, como "woof". Você pode usar a notação de ponto ou colchete.
*/

const myDog = {
"name": "Happy Coder",
"legs": 4,
"tails": 1,
"friends": ["freeCodeCamp Campers"]
};

myDog.bark = "Woof";

console.log(myDog);