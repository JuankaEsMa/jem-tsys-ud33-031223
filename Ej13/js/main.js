let parrafos = document.getElementsByTagName("p");
let parrafosTable = document.getElementsByName("parrafoTabla")
console.log(parrafos);

console.log(parrafos.length);

for (let i = 0; i < parrafos.length; i++) {
    console.log("entro")
    parrafos[i].addEventListener("click", (event) => {
        console.log("Has clickado en un parrafo")
    });
}
for (let i = 0; i < parrafosTable.length; i++) {
    parrafosTable[i].addEventListener("click", (event) => {
        console.log("Has clickado en un parrafo de la tabla 2")
    });
    
}
