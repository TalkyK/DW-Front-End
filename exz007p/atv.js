let btn = document.getElementById("btn")

btn.addEventListener("click", function() {

    let num = document.getElementById("num").value
    let resultado = document.getElementById("resultado")

    if(num == ""){
        resultado.innerHTML = "Digite um número primeiro!"
        return
    }

    num = Number(num)

    let tabuada = ""

    for(let i = 1; i <= 10; i++){
        tabuada += `${num} x ${i} = ${num * i} <br>`
    }

    resultado.innerHTML = tabuada

})