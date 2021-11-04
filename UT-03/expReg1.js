//Comprobar que el nombre de usuario contiene al menos tres letras. Si no es así, debe
//aparecer un mensaje por pantalla indicando que el texto no cumple tener al menos tres
//letras. Debe aparecer el mensaje: “El nombre no cumple tener al menos tres letras”.

var usuario = prompt("Introduce un nombre de usuario");
var miExpReg = /[a-z]{3,}/i;

if (miExpReg.test(usuario)==true) {
    alert("Bien introducido");
}else{
    alert("El nombre no cumple tener al menos tres letras");
}