/*
Sequências de escape em strings
As aspas não são os únicos caracteres que podem ser escapados dentro de uma string. Existem dois motivos para usar caracteres de escape:

Para permitir que você use caracteres que de outra forma não seria capaz de digitar, como um retorno de carro.
Para permitir que você represente várias aspas em uma string sem que o JavaScript interprete mal o que você quer dizer.
Aprendemos isso no desafio anterior.

Código	Saída
\'	citação única
\"	citação dupla
\\	barra invertida
\n	nova linha
\r	retorno de carruagem
\t	aba
\b	limite de palavra
\f	feed de formulário
Observe que a própria barra invertida deve ter escape para ser exibida como uma barra invertida.

Atribua as três linhas de texto a seguir à única variável myStrusando sequências de escape.

FirstLine
    \ SecondLine
ThirdLine

Você precisará usar sequências de escape para inserir caracteres especiais corretamente. Você também precisará seguir o espaçamento conforme aparece acima, sem espaços entre as sequências de escape ou palavras.

Observação: o recuo para SecondLineé obtido com o caractere de escape da tabulação, não com espaços.


 */

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
console.log(myStr);