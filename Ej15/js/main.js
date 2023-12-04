const fotoPeque = document.getElementsByClassName("fotoPeque");
const fotoGrande = document.getElementById("imgGrande");
const parrafoAlt = document.getElementById("altImgGrande");

for (let i = 0; i < fotoPeque.length; i++) {
    fotoPeque[i].addEventListener("click", (event) => {
        fotoGrande.src = event.target.src;
        fotoGrande.alt = event.target.alt;  
        parrafoAlt.innerHTML = fotoGrande.alt;    
    });
    
}