/*
Comparação com o operador de desigualdade
O operador de desigualdade ( !=) é o oposto do operador de igualdade. Significa diferente e retorna falseonde a igualdade retornaria truee vice-versa . Como o operador de igualdade, o operador de desigualdade converterá tipos de dados de valores durante a comparação.

Exemplos

1 !=  2
1 != "1"
1 != '1'
1 != true
0 != false
No fim, essas expressões seria avaliada como true, false, false, false, e false.

Adicione o operador de desigualdade !=na ifinstrução para que a função retorne a string Not Equalquando valnão for equivalente a 99.
*/

function testNotEqual(val) {
    if (val != 99) { // Change this line
    return "Not Equal";
    }
    return "Equal";
}
testNotEqual(10);