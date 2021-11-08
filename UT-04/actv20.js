//Hacer un programa en el que el usuario que introduzca, nombre, apellidos, DNI y fecha de nacimiento separado por comas. Esta entrada de datos se repetirá hasta que el usuario introduzca la cadena vacía. El programa debe guardar los datos en un array bidimensional.



var i=0;
var valores = [];
 //Hago un bucle while para comprobar que la variable datos no sea vacia;
  do{
    
    //Introduzco los datos que me pasan por parámetros
    datos = prompt("Introduce tu nombre, apellidos, DNI y fecha de nacimiento","nombre,apellidos,DNI,fecha de nacimiento");
    //Comprobación para que no me meta el ultimo array vacio
    if (datos!="") {
        valores.push(datos.split(","));
    }

 }while (datos!="");

 console.log(valores );