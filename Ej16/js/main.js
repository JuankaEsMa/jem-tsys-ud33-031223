const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");


const escribirDate = ()=>{
    const date = new Date();
    horas.innerHTML = date.getHours();
    minutos.innerHTML = date.getMinutes();
    segundos.innerHTML = date.getSeconds();
}

const repeticion = setInterval(escribirDate, 1000);
