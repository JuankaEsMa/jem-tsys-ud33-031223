let contDados = 0;
let contadoresSumas = [0,0,0,0,0,0,0,0,0,0,0];
while (contDados < 36000) {
    let dado1 = Math.floor((Math.random() * 6) + 1);
    let dado2 = Math.floor((Math.random() * 6) + 1);

    suma = dado1 + dado2;
    for (let i = 0; i < contadoresSumas.length; i++){
        if((i+2) == suma){
            contadoresSumas[i]++;
        }
    }
    contDados++;
}
console.log(contDados);
let sumaContadores = 0;
for (let i = 0; i < contadoresSumas.length; i++){
    console.log("suma " + (i+2) + " = " + contadoresSumas[i]);
    sumaContadores = sumaContadores + contadoresSumas[i];
}
console.log(sumaContadores);
