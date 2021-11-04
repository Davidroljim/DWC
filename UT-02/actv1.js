//Calcular el área y el volumen de la esfera cuyo radio se pide al usuario.
let radio = prompt("Dame el valor del radio",0);
var areaEsfera = radio*radio*Math.PI;
var volumenEsfera = 1.33*Math.PI*Math.pow(radio,3);
document.write("<p>El area de la esfera es: </p>" + areaEsfera);
document.write("<p>El volumende la esfera es: </p>"+volumenEsfera);