// Forma 1 de Criar um Array
/*
var vetor = new Array();


var alunos = new Array("Joseph", "Vanessa", "Jade", "Jeane");
console.log(alunos[3]);
*/
//Forma 2 

var alunos = ["Joseph", "Jade", "Jeane", "Vanessa", "Marco"];

// Forma 1
/*for (var i = 0; i < alunos.length; i++){
    console.log(alunos[i]);
}*/

// Forma 2

for (var aluno of alunos){
    console.log(aluno);
}