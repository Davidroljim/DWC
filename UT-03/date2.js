//Escribe un algoritmo que lea desde la entrada estándar dos fechas dadas por día, mes
//y año y calcule cuál de ellas es anterior a la otra.

var dia = parseInt(prompt ("Introduce el día de tu nacimiento: "));
var mes = parseInt(prompt ("Introduce el mes de tu nacimiento: "));
var año = parseInt(prompt ("Introduce el año de tu nacimiento: "));

var dia1 = parseInt(prompt ("Introduce el día de tu nacimiento para la segunda fecha: "));
var mes1 = parseInt(prompt ("Introduce el mes de tu nacimiento para la segunda fecha: "));
var año1 = parseInt(prompt ("Introduce el año de tu nacimiento para la segunda fecha: "));

//Al mes siempre hay que restarle uno ya que los meses en js van del 0 al 11
fecha = new Date(año, mes-1, dia);

fecha1 = new Date(año1, mes1-1, dia1);

if (fecha.getTime() < fecha1.getTime()) {
    alert("La primera fecha introducida es anterior a la segunda fecha introducida");
}else{
    alert("La primera fecha introducida es posterior a la segunda fecha introducida");
}