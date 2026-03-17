// laço de repetição 
// for / while / do while
for (let i = 0; i <= 10; i++) {
    console.log(`FOR - O valor de i é: ${i}`);   
}

var x = 0;
while (x <= 10) {
    console.log(`WHILE - O valor de x é: ${x}`);
    x++;
}

var y = 0;
do {
    console.log(`DO WHILE - O valor de y é: ${y}`);
    y++;
} while (y <= 10);

// a diferença entre o while e o do while é que o do while executa o bloco de código pelo menos uma vez, mesmo que a condição seja falsa, enquanto o while verifica a condição antes de executar o bloco de código.

for(z = 0 ; z <= 10; z++) {
    for (w = 0; w <= 10; w++) {
        console.log(`Item ${z}/${w}`);
    }
}