/*function criarAluno(nome, n1, n2){

    return{
        nome: nome, 
        nota1: n1,
        nota2: n2,
        media: function (){
            return (this.nota1 + this.nota2) / 2;
        }
    }
}*/

/*var turma = [
    criarAluno("Joseph", 8, 10),
    criarAluno("Vanessa", 7, 5)
]
var aluno = turma[0];
console.log(aluno);
console.log(aluno.media());

turma.forEach(function (elemento){
    console.log(elemento);
})

/*var calcMedia = function(){
    return (this.nota1 + this.nota2)/2;
}


var turma = [
    {nome: "Joseph",
    nota1:9,
    nota2:7,
    media: calcMedia},

    {nome: "Vanessa",
    nota1:10 ,
    nota2:7,
    media: calcMedia}
]

var aluno = turma[0];

console.log(aluno);
console.log(aluno.media());*/

function aluno(nome, n1, n2){
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function(){
        return (this.nota1 + this.nota2) / 2;
    }
}

var a = new aluno("Joseph", 10, 10);

console.log(a);