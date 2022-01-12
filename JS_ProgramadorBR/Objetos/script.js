var aluno = {nome:"Joseph", 
                notas:[10,8.0,5]}

var novaProp = "Sobre Nome";

//Adiciona matricula no objeto aluno
aluno.matricula = 123456;

aluno[novaProp] = "Oliveira";
console.log(aluno);