//Diseñar un programa que, dada una cierta cantidad de dinero que se leerá desde la entrada estándar,
//calcule cuál es el número mínimo de monedas de curso legal que equivalen a dicha cantidad de dinero.

var moneda2=2;
var moneda1=1;
var moneda50c=0.50;
var moneda20c=0.20;
var moneda10c=0.10;
var moneda5c=0.05;
var moneda2c=0.02;
var moneda1c=0.01;


var nMoneda2=0;
var nMoneda1=0;
var nMoneda50c=0;
var nMoneda20c=0;
var nMoneda10c=0;
var nMoneda5c=0;
var nMoneda2c=0;
var nMoneda1c=0;

var dinero = prompt("Introduce el dinero: ");


while (dinero!=0) {
    if (dinero>=moneda2) {
        dinero=dinero-moneda2;
        nMoneda2++;
    }else if (dinero>=moneda1) {
        dinero=dinero-moneda1;
        nMoneda1++;
    }else if (dinero>=moneda50c) {
        dinero=dinero-moneda50c;
        nMoneda50c++;
    }else if (dinero>=moneda20c) {
        dinero=dinero-moneda20c;
        nMoneda20c++;
    }else if (dinero>=moneda10c) {
        dinero=dinero-moneda10c;
        nMoneda10c++;
    }else if (dinero>=moneda5c) {
        dinero=dinero-moneda5c;
        nMoneda5c++;
    }else if (dinero>=moneda2c) {
        dinero=dinero-moneda2c;
        nMoneda2c++;
    }else if (dinero>=moneda1c) {
        dinero=dinero-moneda1c;
        nMoneda1c++;
    }
    
}
document.write("Número de monedas de 2 euros: "+nMoneda2);
document.write("<br>");
document.write("Número de monedas de 1 euro: "+nMoneda1);
document.write("<br>");
document.write("Número de monedas de 50 centimos: "+nMoneda50c);
document.write("<br>");
document.write("Número de monedas de 20 centimos: "+nMoneda20c);
document.write("<br>");
document.write("Número de monedas de 10 centimos: "+nMoneda10c);
document.write("<br>");
document.write("Número de monedas de 5 centimos: "+nMoneda5c);
document.write("<br>");
document.write("Número de monedas de 2 centimos: "+nMoneda2c);
document.write("<br>");
document.write("Número de monedas de 1 centimos: "+nMoneda1c);
document.write("<br>");