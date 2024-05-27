let alunosTotais = document.querySelector("#alunosTotais");
let numTurmas = document.querySelector("#numTurmas");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function verificarTurma(){

    let vlrAlunos = Number(alunosTotais.value);
    let vlrTurmas = Number(numTurmas.value);

    let alunosPorTurma = Math.floor(vlrAlunos / vlrTurmas);
    let alunosSemTurma = vlrAlunos % vlrTurmas;

    resultado.innerHTML = String("serao " + alunosPorTurma + " alunos por turma" + "<br>"
     + alunosSemTurma + " pessoas que ficarao sem turma");
}

btCalcular.onclick = function (){
    verificarTurma();
}   