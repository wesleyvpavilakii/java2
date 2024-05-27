let sabor1 = document.querySelector("#sabor1");
let sabor2 = document.querySelector("#sabor2");
let sabor3 = document.querySelector("#sabor3");
let sabor4 = document.querySelector("#sabor4");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");
let refri = document.querySelector("#refri");


function verificar(){
    resultado.textContent = (refri.value * 7) + 48;
}

btCalcular.onclick = function(){
    verificar();
}
