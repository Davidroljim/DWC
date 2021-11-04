//Diseñar un algoritmo para escribir en pantalla los n primeros números naturales, sus cuadrados, sus cubos y la suma de todos ellos.
let n = prompt("Inserta un número");
var i =0;
while (i<=n){
    
    var cuadrado = i*i;
    var cubos = i*i*i;
    var sumaT= cuadrado+cubos;
    document.write("Cuadrado "+cuadrado+" ");
    document.write("Cubo "+cubos+" ");
    document.write("Suma total "+sumaT);
    document.write("<br>")
    i++;
}