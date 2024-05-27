let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function comparar(){
    let vlr1 = Number(n1.value);
    let vlr2 = Number(n2.value);

    let mensagem;

    if (vlr1 > vlr2) {
        mensagem = " o primeiro e maior que o segundo";
    } else if (vlr1 < vlr2) {
        mensagem = " o primeiro e menor que o segundo";
    } else {
        mensagem = " os dois sao iguais";
    }
        
resultado.textContent = String(mensagem);
    
}

btCalcular.onclick = function(){
    comparar();
}