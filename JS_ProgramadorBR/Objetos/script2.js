function calcMedia(n1,n2){
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
    nome: "Joseph",
    notas: [10,10],

    media: calcMedia
}

var aluno2 = {
    nome: "Vanessa",
    notas: [7,5],

    media: calcMedia
    }


console.log(aluno.nome);
console.log(aluno.media(aluno.notas[0], aluno.notas[1]));

console.log(aluno2.nome);
console.log(aluno2.media(aluno2.notas[0], aluno2.notas[1]));