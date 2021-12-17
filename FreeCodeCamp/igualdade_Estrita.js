/*
Comparação com o operador de igualdade estrita
Igualdade estrita ( ===) é a contraparte do operador de igualdade ( ==). No entanto, ao contrário do operador de igualdade, que tenta converter os dois valores sendo comparados a um tipo comum, o operador de igualdade estrita não executa uma conversão de tipo.

Se os valores comparados tiverem tipos diferentes, eles serão considerados desiguais e o operador de igualdade estrita retornará falso.

Exemplos

3 ===  3
3 === '3'
Essas condições retornariam truee falserespectivamente.

No segundo exemplo, 3é um Numbertipo e '3'é um Stringtipo.

Use o operador de igualdade estrita na ifinstrução para que a função retorne a string Equalquando valfor estritamente igual a 7.
*/

// Setup
function testStrict(val) {
    if (val === 7)  { // Change this line
    return "Equal";
    }
    return "Not Equal";
}
testStrict(10);