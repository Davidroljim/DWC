//Leer de teclado una serie de nombres hasta que aparezca la palabra "ULTIMO". Contar
//cuántos nombres se han leído, cuántos comienzan C y cuántos contienen la ñ.

var nNombres=0;
var nNombresC=0;
var nNombresñ=0;
while (nombres!="ULTIMO") {
    var nombres = prompt("Introduce un nombre, si no deseas introducir más introduzca ULTIMO: ");
    
    
    document.write("<br>");
    if (nombres!="ULTIMO") {
        document.write(nombres);
        nNombres++;
    }
    if (nombres.charAt(0)=="c"||nombres.charAt(0)=="C"){
        nNombresC++;
    };
    if (nombres.includes('ñ')==true||nombres.includes('Ñ')==true) {
        nNombresñ++;
    }
    
}

alert("Número de nombres introducidos: "+nNombres);
document.write("Número de nombres que empiezan por c: "+nNombresC);
document.write("<br>");
document.write("Número de nombres que contienen ñ: "+nNombresñ);