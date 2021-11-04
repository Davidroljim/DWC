//Realiza un algoritmo que lea un dato de teclado y calcule e imprima su inverso.
// Considere el caso especial del valor 0 mostrando el mensaje de error correspondiente.
let numero = prompt("Dame el valor de un número");
let inverso = 1/numero;
if(numero==0){
    document.write("<p>No se puede calcular el inverso de : "+ numero+"</p>");
}else{
    document.write("<p>El número inverso de: " + numero +" es: "+inverso);
}