//Comprobar que el correo electrónico contiene el carácter @ (arroba) y el carácter .
//(punto). De no ser así, deberá aparecer un mensaje indicando que al correo electrónico
//le falta uno o ambos caracteres. Por ejemplo si el correo es pacogmail.com deberá
//aparecer el mensaje: “Falta el símbolo @ en el correo electrónico”.

var correo = prompt("Introduce tu correo electrónico");
var miExpReg = /@{1}[a-z0-9]+\.{1}[a-z0-9]+$/;

if (miExpReg.test(correo)==true) {
    alert("Bien introducido");
}else{
    alert("Falta el símbolo @ o . en el correo electrónico");
}