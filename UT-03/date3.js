//Realiza un algoritmo que solicite del usuario un tiempo dado en segundos y calcule y
//presente en pantalla dicho tiempo pero expresado en horas, minutos y segundos.

var segundos = parseInt(prompt ("Introduce el número de segundos para cambiarlo a horas: "));
//La inicialización del objeto Date es mediante milisegundos, por lo que necesitaremos multiplicar por 1000 nuestro valor en segundos.
var fecha=new Date(segundos*1000);
//Ahora solo tenemos que acceder a los métodos del objeto Date. Al .getHours(), getMinutes() y getSeconds(). Estos nos dará los valores en formato hora.

var hora = (fecha.getHours()==0)?24:fecha.getHours()-1;
var hora = (hora<9)?"0"+hora:hora;
var minuto = (fecha.getMinutes()<9)?"0"+fecha.getMinutes():fecha.getMinutes();
var segundo = (fecha.getSeconds()<9)?"0"+fecha.getSeconds():fecha.getSeconds();

//el valor de la hora retornará una hora más de la que realmente es. Es por ello que hacemos la corrección.
var hora = (fecha.getHours()==0)?23:fecha.getHours()-1;

document.write(hora+":"+minuto+":"+segundo);