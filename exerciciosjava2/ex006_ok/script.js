let nota = document.querySelector("#nota");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function verificar(){
    let num = Number(nota.value)

    if (num >= 6) {
        resultado.textContent = 'aprovado';
    } else if (num >= 4) {
        resultado.textContent = 'precisa fazer prova substitutiva';
    } else {
        resultado.textContent = 'reprovado';
    }

 }


 btCalcular.onclick = function(){
    verificar();
     }