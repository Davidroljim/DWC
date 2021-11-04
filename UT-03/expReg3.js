//Antes de enviarse los datos del formulario a la página de destino, si el correo
//electrónico contiene la subcadena “ at “ debe reemplazarse por el símbolo @. Por
//ejemplo si se ha escrito paco at gmail.com debe cambiarse a paco@gmail.com


var correo = prompt("Introduce tu correo electrónico");

const regex = / at /i;
alert(correo.replace(regex, '@'));