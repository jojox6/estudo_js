/*
Usando objetos para pesquisas
Os objetos podem ser considerados como um armazenamento de chave / valor, como um dicionário. Se você tiver dados tabulares, poderá usar um objeto para pesquisar valores em vez de uma switchinstrução ou uma if/elsecadeia. Isso é mais útil quando você sabe que seus dados de entrada estão limitados a um determinado intervalo.

Aqui está um exemplo de uma pesquisa de alfabeto reverso simples:

const alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};

alpha[2];
alpha[24];

const value = 2;
alpha[value];
alpha[2]é a string Y, alpha[24]é a string Ce alpha[value]é a string Y.

Converta a instrução switch em um objeto chamado lookup. Use-o para pesquisar vale atribuir a string associada à resultvariável.



*/

// Setup
function phoneticLookup(val) {
let result = "";

// Only change code below this line
let lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
};
    result = lookup[val];
// Only change code above this line
return result;
}
phoneticLookup("alpha");


