//Diseñar un programa que lea de teclado un número entero positivo en base 10 y escriba su correspondiente representación binaria usando la técnica de divisiones sucesivas. 
/*
var decimal = parseFloat(prompt("Introduce un número entero positivo: "));

var decimalaBinario = decimal.toString(2);
document.write("El número decimal "+decimal+" es en binario: "+decimalaBinario);
*/

var numero = parseInt(prompt("Introduce un número entero positivo: "));

var resto=0;
var i=1;
var nBinario=0;

while (numero!=0) {
    
    resto=numero%2;
    numero=parseInt(numero/2);
    nBinario=nBinario+resto*i;
    i=i*10;
}
document.write("El número en binario es: "+nBinario);