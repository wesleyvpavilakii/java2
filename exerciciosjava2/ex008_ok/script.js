function verificar(){
    var num = document.getElementById("numero").value;

    var numero = Number(num)

        if(numero % 2 == 0) {
        alert('Este numero e par')
    }  else {
        alert('Este numero e impar')
    } 
}