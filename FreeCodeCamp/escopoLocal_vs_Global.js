/*
Escopo Global vs. Local em Funções
É possível ter variáveis locais e globais com o mesmo nome. Ao fazer isso, a variável local tem precedência sobre a variável global.

Neste exemplo:

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
A função myFunretornará a string Headporque a versão local da variável está presente.

Adicione uma variável local à myOutfitfunção para substituir o valor de outerWearcom a string sweater.
*/

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
    const outerWear = "sweater";
    
  // Only change code above this line
  return outerWear;
}

myOutfit();
