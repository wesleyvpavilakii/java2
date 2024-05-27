let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function somaSaldo(){
    let vlr1 = Number(valor1.value);
    let vlr2 = Number(valor2.value);
    let adicao = vlr1 + vlr2;
    let subtracao = vlr1 - vlr2;
    let multiplicacao = vlr1 * vlr2;
    let divisao = vlr1 / vlr2;

    h3Resultado.innerHTML = String(
        "soma = " + adicao + "<br>" +
         "subtracao = " + subtracao + "<br>" +
          "multiplicacao = " + "<br>" + multiplicacao + "<br>" +
          "divisao = " + divisao);

}

btCalcular.onclick = function(){
    somaSaldo();
}   