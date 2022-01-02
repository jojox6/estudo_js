/*
Cartas de contagem
No jogo de cassino Blackjack, um jogador pode ganhar uma vantagem sobre a casa mantendo o controle do número relativo de cartas altas e baixas restantes no baralho. Isso é chamado de contagem de cartas .

Ter mais cartas altas restantes no baralho favorece o jogador. Cada cartão recebe um valor de acordo com a tabela abaixo. Quando a contagem é positiva, o jogador deve apostar alto. Quando a contagem é zero ou negativa, o jogador deve apostar baixo.

Mudança de contagem	Cartas
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'
Você escreverá uma função de contagem de cartas. Receberá um cardparâmetro, que pode ser um número ou string, e incrementará ou decrementará a countvariável global de acordo com o valor do cartão (ver tabela). A função então retornará uma string com a contagem atual e a string Betse a contagem for positiva ou Holdse a contagem for zero ou negativa. A contagem atual e a decisão do jogador ( Betou Hold) devem ser separadas por um único espaço.

Saídas de exemplo: -3 Hold ou5 Bet

Dica
NÃO reinicie countpara 0 quando o valor for 7, 8 ou 9.
NÃO retorne uma matriz.
NÃO inclua aspas (simples ou duplas) na saída.


*/

let count = 0;

function cc(card) {
  // Only change code below this line
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        count++;
        break;
        case 7:
        case 8:
        case 9:
        count + 0;
        break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
        count--;
        break;
    }
    if (count <= 0){
        return "" + count + " Hold";
    } else{
        return "" + count + " Bet";
    }

  return "Change Me";
  // Only change code above this line
}
cc(2); cc(3); cc(7); cc('K'); cc('A');