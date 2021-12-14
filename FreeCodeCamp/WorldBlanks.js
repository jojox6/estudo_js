/*
Word Blanks
Agora usaremos nosso conhecimento de strings para construir um jogo de palavras no estilo " Mad Libs " que estamos chamando de "Word Blanks". Você criará uma frase do estilo (opcionalmente bem-humorada) "Preencha as lacunas".

Em um jogo "Mad Libs", você recebe frases com algumas palavras faltando, como substantivos, verbos, adjetivos e advérbios. Em seguida, você preenche as peças que faltam com palavras de sua escolha de uma forma que a frase completa faça sentido.

Considere esta frase - foi realmente ____ , e nós ____ nós mesmos ____ . Esta frase tem três peças faltando - um adjetivo, um verbo e um advérbio, e podemos adicionar palavras de nossa escolha para completá-la. Podemos então atribuir a frase completa a uma variável da seguinte maneira:

const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
Neste desafio, fornecemos um substantivo, um verbo, um adjetivo e um advérbio. Você precisa formar uma frase completa usando palavras de sua escolha, junto com as palavras que fornecemos.

Você vai precisar usar o operador de concatenação +para construir uma nova string, usando as variáveis fornecidas: myNoun, myAdjective, myVerb, e myAdverb. Em seguida, você atribuirá a string formada à wordBlanksvariável. Você não deve alterar as palavras atribuídas às variáveis.

Você também precisará levar em conta os espaços em sua string, para que a frase final tenha espaços entre todas as palavras. O resultado deve ser uma frase completa.



*/
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Change this line
// Only change code above this lineu