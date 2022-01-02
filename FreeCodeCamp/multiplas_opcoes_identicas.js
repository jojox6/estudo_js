/*
Múltiplas opções idênticas em declarações de switch
Se a breakinstrução for omitida de uma switchinstrução case, a case(s) instrução (ões) a seguir serão executadas até que um breakseja encontrado. Se você tiver várias entradas com a mesma saída, poderá representá-las em uma switchinstrução como esta:

let result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
Casos para 1, 2 e 3 produzirão o mesmo resultado.

Escreva uma instrução switch para definir answeros seguintes intervalos:
1-3- Low
4-6- Mid
7-9-High

Observação: você precisará ter um caseextrato para cada número do intervalo.


*/

function sequentialSizes(val){
    let answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
        answer = "Low";
        break;
        case 4:
        case 5:
        case 6:
        answer = "Mid";
        break;
        case 7:
        case 8:
        case 9:
        answer = "High";
        
    }
    return answer;
}

sequentialSizes(1);