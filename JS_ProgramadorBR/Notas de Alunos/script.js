// Nome do aluno: Nota 1 a Nota 4 e média no final se ele foi aporvado, ou reprovado.

var nomesAluno = ["Joseph","Vanessa","Jade"];
var nota1 = [10,8.5,3.5];
var nota2 = [10,8,9];
var nota3 = [10,5,4];
var nota4 = [10,9,3];

function media (nota1,nota2,nota3,nota4){
    return (nota1+nota2+nota3+nota4)/4;
}

function passou(media){
    if (media >= 7){
        return "Aprovado!";
    } else {
        return "Reprovado!";
    }
}

for(var index in nomesAluno){
    
    var n1 = nota1[index];
    var n2 = nota2[index];
    var n3 = nota3[index];
    var n4 = nota4[index];
    var m = media(n1,n2,n3,n4);

    console.log(nomesAluno[index] + " - " + n1 + " - " + n2
    + " - " + n3 + " - " + n4 + ", Media: " + m + 
    ", Aluno: " + passou(m));
}



