let valordolar = document.querySelector("#valordolar");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function somaSaldo(){
    let vlr1 = Number(valordolar.value);
    let porcent1 = vlr1 + (1/100 * vlr1);
    let porcent2 = vlr1 + (2/100 * vlr1);
    let porcent5 = vlr1 + (5/100 * vlr1);
    let porcent10 = vlr1 + (10/100 * vlr1);
    h3Resultado.innerHTML = String(
        "Valor em 1% = " + porcent1 + "<br>" +
        "Valor em 2% = " + porcent2 + "<br>" +
        "Valor em 5% = " + porcent5 + "<br>" +
        "Valor em 10% = " + porcent10

    );
}

btCalcular.onclick = function(){
    somaSaldo();

}