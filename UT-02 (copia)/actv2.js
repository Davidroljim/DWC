//Diseñar un algoritmo para hallar el valor absoluto de un número leído de teclado y presentarlo en pantalla.
let numero = prompt("Dame el valor de un número",0);
var valorAbsoluto = Math.abs(numero);
document.write("<p>El número absoluto de: " + numero +" es: "+valorAbsoluto);