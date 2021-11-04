//Hacer un programa que compruebe si un número es perfecto. Deberá implementarse una función esPerfecto(numero) que devuelva true si lo es. 

var numero = parseInt(prompt("Introduce un número entero"));

function esPerfecto(numero) {
    let acumulador = 0;
    for(let i = 1; i <= numero / 2; ++i) {
        if (numero % i == 0) {
            acumulador += i;
        }
    }
    return acumulador != 0 && acumulador == numero;
}
resultado = esPerfecto(numero);
if (resultado==true) {
    alert ("Es un número perfecto");
}else{
    alert ("No es un número perfecto");
}