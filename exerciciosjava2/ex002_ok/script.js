let valor1 = document.querySelector("#valor1");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function somaSaldo(){
    let vlr1 = Number(valor1.value);
    let ovos = Number(2);
    let queijo = Number(50);
    let totalOvos = vlr1 * ovos;
    let totalQueijo = vlr1 * queijo;
 
    h3Resultado.innerHTML = (vlr1 + " pessoas irao consumir: " + totalOvos + " ovos e " + totalQueijo + "g de queijo");

    
}

btCalcular.onclick = function(){
    somaSaldo();
} 