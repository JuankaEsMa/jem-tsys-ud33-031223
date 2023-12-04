const equalButton = document.getElementById("equalButton");
const inputCalculadora = document.getElementById("inputCalculadora");
const signos = document.getElementsByClassName("signo");
const resultadoApartado = document.getElementById("resultadoApartado");
const numeros = document.getElementsByClassName("num");

let digito1;
let resultado;
let signo;
let lastWasEqual = false;
let lastWasSign = false;

for (let i = 0; i < numeros.length; i++) {
    numeros[i].addEventListener("click", (event) => {
        if(lastWasEqual){
            eraseAll()
            lastWasEqual = false;
        }
        inputCalculadora.value = inputCalculadora.value + event.target.innerHTML;
    });
    
}

const eventListenerSignos = (event) =>{
    console.log(event.target);
    if(event.target == equalButton){
        calcular(inputCalculadora.value);
        lastWasSign = false;
        lastWasEqual = true;
    }else if(lastWasSign){
        calcular(inputCalculadora.value);
        signo = event.target;
        lastWasSign = true;
        lastWasEqual = false;
    }else{
        digito1 = inputCalculadora.value;
        signo = event.target;
        lastWasSign = true;
        lastWasEqual = false;
    }
    inputCalculadora.value = "";
};
//Añadir event listeners de calcular
equalButton.addEventListener("click", eventListenerSignos);
for (let i = 0; i < signos.length; i++) {
    signos[i].addEventListener("click", eventListenerSignos);
}
const calcular = (digito2) => {
    if(digito2.length != 0){
        switch(signo.innerHTML){
            case("x"):
            resultado = parseFloat(digito1) * parseFloat(digito2);
            break;
            case("+"):
            resultado = parseFloat(digito1) + parseFloat(digito2);
            break;
            case("-"):
            resultado = parseFloat(digito1) - parseFloat(digito2);
            break;
            case("/"):
            resultado = parseFloat(digito1) / parseFloat(digito2);
            break;
            case("%"):
            resultado = parseFloat(digito1) % parseFloat(digito2);
            break;
        };
        resultadoApartado.value = resultado;
        digito1 = resultado;
    }else{
        alert("Tienes que poner un segundo dígito para calcular");
    }
}

const eraseAll = () =>{
    inputCalculadora.value = "";
    resultadoApartado.value = "";
    digito1 = "";
    digito2 = "";
    signo = "";
    lastWasSign = false;
}

const eraseOneDigit = () =>{
    inputCalculadora.value = inputCalculadora.value.substring(0,inputCalculadora.value.length-1);
}

const cambiarSigno = () => {
    if(inputCalculadora.length == 0 || inputCalculadora.value.charAt(0) != "-"){
        inputCalculadora.value = "-"+inputCalculadora.value
    }else{
        inputCalculadora.value = inputCalculadora.value.substring(1,inputCalculadora.value.length);
    }
}
