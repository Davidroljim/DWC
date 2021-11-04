//Realizar un programa que muestre cuántos días faltan para el próximo cumpleaños del
//usuario y muestre “Felicidades!” si es el día señalado.

var dia = parseInt(prompt ("Introduce el día de tu nacimiento: "));
var mes = parseInt(prompt ("Introduce el mes de tu nacimiento: "));
//var año = parseInt(prompt ("Introduce el año de tu nacimiento: "));

fechahoy = Date.now();

fecha = new Date(año, mes-1, dia);
//alert (fecha.getDay);
fecha1=fecha.getTime();
resultado=fecha1-fechahoy;

var date = new Date(resultado);
var dias = date.getDay();
var meses = date.getMonth();
alert ("Faltan "+dias+" días y "+meses+" meses para tu cumpleaños");

//if (dias==fecha.getDay()&&meses==fecha.getMonth()) {
//    alert("Felicidades");
//}
