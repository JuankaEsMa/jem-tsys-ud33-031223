const dataRegex = new RegExp("(3[01]|[12][0-9]|0?[1-9])(/)(1[0-2]|0?[1-9])(/)([0-9]{2})?[0-9]{2}");
const emailRegex = new RegExp("^[a-z A-Z 0-9 . -]+@[a-z A-Z 0-9]+\.[xa-z A-Z]{2,3}$");

let email = "asd@gmail.com";
let fecha = "Nací el 05/04/1982 en Donostia";
console.log(dataRegex.test(fecha));
console.log(emailRegex.test(email));
const escapeHTML = (text) => {
    const regexExpresions = [[new RegExp("&"), "&amp;"],  [new RegExp("/"),"&quot;"],[new RegExp("<"), "&kt;"],[new RegExp(">"),"&gt;"]]
    
    regexExpresions.forEach(element => {
        text = text.replace(element[0], element[1]);
    });
    return text;
};
console.log(escapeHTML("&/<>"));
const nomApels = (text) => {
    const matchEspace = new RegExp(" ");
    const matchName = new RegExp("[a-z A-z]");

    let textSplit = text.split(matchEspace);
    if(matchName.test(textSplit[0]) && matchName.test(textSplit[1])){
        text = textSplit[1]+", "+textSplit[0];
    }
    return text;
}
console.log(nomApels("Jhon Smith"));

pruebaScript = "<script> console.log(\" No soy peligroso :) \")</script>";

const scriptRegex = new RegExp("<script>.*<\/script>");

console.log(scriptRegex.test(pruebaScript));