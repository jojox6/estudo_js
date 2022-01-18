// Carne - 400g por plessoa + de 6 horas 650g
// Cerveja - 1200ml por pessoa + 6 horas - 2l
// Refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml

// criança valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas =  inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    console.log(qtdTotalCarne);

    let qtdTotalCerveja = cervejaPP(duracao) * adultos;

    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);
    console.log(qtdTotalCarne);


    resultado.innerHTML =`<p>${qtdTotalCarne / 1000}Kg de Carne</p>`
    resultado.innerHTML +=`<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de 355ml de Cerveja</p>`
    resultado.innerHTML +=`<p>${Math.ceil(qtdTotalBebidas / 2000)} Pet's de 2L de Bebidas</p>`
}

function carnePP(duracao){
    let carne = 400;

    if(duracao >= 6){
        carne = 650;
    }
    return carne;
}

function cervejaPP(duracao){
    let cerveja = 1200;

    if(duracao >= 6){
        cerveja = 2000;
    }
    return cerveja;
}

function bebidasPP(duracao){
    let bebidas = 1000;

    if(duracao >= 6){
        bebidas = 1500;
    }
    return bebidas;
}