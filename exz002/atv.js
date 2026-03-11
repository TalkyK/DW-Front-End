var num1 = Number.parseInt(prompt("Digite o primeiro número:"));
var num2 = Number.parseInt(prompt("Digite o segundo número:"));

var soma = num1 + num2;

console.log(`A soma dos numeros é ${soma}`);

var resultado = document.getElementById("area");
console.log(resultado);
resultado.innerHTML = `<h1>A soma dos numeros é ${soma}</h1>`;