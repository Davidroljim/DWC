//Leer un texto de la entrada estándar y contar cuántas palabras tiene, cuántas de ellas
//empiezan por A.
//Suponemos que una palabra está separada de otra por uno o más espacios, un
//tabulador o un salto de línea y el texto acaba con un punto, no existe ningún punto y
//aparte y las palabras son todas correctas.

var nPalabras=0;
var nNombresA=0;
var nNombresñ=0;

var i=0;

var str = prompt("Introduce un texto");
while (i<str.length) {
    if (str.charAt(i)==" "||str.charAt(i)=="    "){
        nPalabras++;

        if (str.charAt(i+1)==" "){
            nPalabras--;
        }
        

        if (str.charAt(i+1)=="a") {
            nNombresA++;
        }
    }
    
    
    i++;
}
if (str.charAt(0)=="a") {
    nNombresA++;
    
}
//La primera palabra no la cuenta
    nPalabras++;

alert("Número de nombres que empiezan por a : "+nNombresA);
document.write("Número de palabras: "+nPalabras++);
