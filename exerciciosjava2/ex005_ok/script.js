function calcularIdades() {

let nomes = [document.querySelector("#nome1").value, document.querySelector("#nome2").value, document.querySelector("#nome3").value]; //tods os id de pessoas junts, .value puxa do html

let anos = [Number(document.querySelector("#ano1").value), Number(document.querySelector("#ano2").value), Number(document.querySelector("#ano3").value)]; //todos os id de idades tb
    
let idades = anos.map(ano => new Date().getFullYear() - ano);


let pessoas = [
{ nome: nomes[0], idade: idades[0] },
{ nome: nomes[1], idade: idades[1] },
{ nome: nomes[2], idade: idades[2] }
];

pessoas.sort((a, b) => b.idade - a.idade);

let resultadoDiv = document.getElementById('resultado');
resultadoDiv.innerHTML = `
<p>Pessoa mais velha: ${pessoas[0].nome} - ${pessoas[0].idade} anos</p>
<p>Segunda pessoa mais velha: ${pessoas[1].nome} - ${pessoas[1].idade} anos</p>
<p>Pessoa mais nova: ${pessoas[2].nome} - ${pessoas[2].idade} anos</p>  
    `;
}