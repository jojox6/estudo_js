/*
Testando objetos para propriedades
Às vezes é útil verificar se a propriedade de um determinado objeto existe ou não. Podemos usar o .hasOwnProperty(propname)método de objetos para determinar se aquele objeto tem o nome de propriedade fornecido. .hasOwnProperty()retorna trueou falsese o imóvel foi encontrado ou não.

Exemplo

const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
O primeiro hasOwnPropertyretorna true, enquanto o segundo retorna false.

Modifique a função checkObjpara testar se um objeto passado para a função ( obj) contém uma propriedade específica ( checkProp). Se a propriedade for encontrada, retorne o valor dessa propriedade. Se não, volte "Not Found".


*/

function checkObj(obj, checkProp) {
    if(obj.hasOwnProperty(checkProp)){
        return obj[checkProp];
    } else{
        return "Not Found";
    }
}