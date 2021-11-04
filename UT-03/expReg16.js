//Realiza un supertrim de una cadena, eliminando todos los espacios duplicados.

var cadena = prompt("Introduce una cadena con espacios duplicados");
var regex = /"  "/;
document.write(cadena.replace(regex, " "));