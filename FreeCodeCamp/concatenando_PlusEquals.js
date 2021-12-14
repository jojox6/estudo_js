/*
Concatenando Strings com o Operador Plus Equals
Também podemos usar o +=operador para concatenar uma string no final de uma variável de string existente. Isso pode ser muito útil para quebrar uma corda longa em várias linhas.

Nota: Cuidado com os espaços. A concatenação não adiciona espaços entre strings concatenadas, portanto, você mesmo precisará adicioná-los.

Exemplo:

let ourStr = "I come first. ";
ourStr += "I come second.";
ourStragora tem um valor de string I come first. I come second..

Construa myStrsobre várias linhas, concatenando essas duas strings: This is the first sentence.e This is the second sentence.usando o +=operador. Use o +=operador semelhante ao mostrado no exemplo e certifique-se de incluir um espaço entre as duas strings. Comece atribuindo a primeira string a e myStr, em seguida, adicione a segunda string.
 */

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

console.log(myStr);