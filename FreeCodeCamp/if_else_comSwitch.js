/*
Substituição de cadeias if Else com switch
Se você tiver muitas opções para escolher, uma switchdeclaração pode ser mais fácil de escrever do que muitas declarações if/ encadeadas else if. A seguir:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
pode ser substituído por:

switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
Transforme as instruções if/ encadeadas else ifem uma switchinstrução.


*/

function chainToSwitch(val) {
let answer = "";
// Only change code below this line
switch(val){
    case "bob":
    answer = "Marley";
    break;

    case 42:
    answer = "The Answer";
    break;

    case 1:
    answer = "There is no #1";
    break;

    case 99:
    answer = "Missed me by this much!";
    break;

    case 7:
    answer = "Ate Nine";
    

}
// Only change code above this line
return answer;
}

chainToSwitch(7);