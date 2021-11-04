//Calcular de un conjunto de fechas la menor, la mayor y la diferencia en segundos entre ambas.
var dia = parseInt(prompt ("Introduce el día de tu nacimiento: "));
var mes = parseInt(prompt ("Introduce el mes de tu nacimiento: "));
var año = parseInt(prompt ("Introduce el año de tu nacimiento: "));

var dia1 = parseInt(prompt ("Introduce el día de tu nacimiento para la segunda fecha: "));
var mes1 = parseInt(prompt ("Introduce el mes de tu nacimiento para la segunda fecha: "));
var año1 = parseInt(prompt ("Introduce el año de tu nacimiento para la segunda fecha: "));


var dia2 = parseInt(prompt ("Introduce el día de tu nacimiento para la tercera fecha: "));
var mes2 = parseInt(prompt ("Introduce el mes de tu nacimiento para la tercera fecha: "));
var año2 = parseInt(prompt ("Introduce el año de tu nacimiento para la tercera fecha: "));

//Al mes siempre hay que restarle uno ya que los meses en js van del 0 al 11
fecha = new Date(año, mes-1, dia);

fecha1 = new Date(año1, mes1-1, dia1);

fecha2 = new Date(año2, mes2-1, dia2);

if (fecha.getTime() > fecha1.getTime() && fecha.getTime()>fecha2.getTime() && fecha1.getTime() > fecha2.getTime()) {
    alert("La fecha: "+fecha+" es la mayor y "+fecha2+" es la menor");
    difS=(fecha.getTime())-(fecha2.getTime());
    difS=difS/1000;
    alert("La diferencia en segundos entre las dos fechas son: "+difS);

}else if (fecha.getTime() > fecha1.getTime() && fecha.getTime()>fecha2.getTime() && fecha1.getTime() < fecha2.getTime()) {
    alert("La fecha: "+fecha+" es la mayor y "+fecha1+" es la menor");
    difS=(fecha.getTime())-(fecha1.getTime());
    difS=difS/1000;
    alert("La diferencia en segundos entre las dos fechas son: "+difS);

}else if (fecha1.getTime() > fecha.getTime() && fecha1.getTime()>fecha2.getTime() && fecha.getTime() < fecha2.getTime()) {
    alert("La fecha: "+fecha1+" es la mayor y "+fecha+" es la menor");
    difS=(fecha1.getTime())-(fecha.getTime());
    difS=difS/1000;
    alert("La diferencia en segundos entre las dos fechas son: "+difS);

}else if (fecha1.getTime() > fecha.getTime() && fecha1.getTime()>fecha2.getTime() && fecha.getTime() > fecha2.getTime()) {
    alert("La fecha: "+fecha1+" es la mayor y "+fecha2+" es la menor");
    difS=(fecha1.getTime())-(fecha2.getTime());
    difS=difS/1000;
    alert("La diferencia en segundos entre las dos fechas son: "+difS);

}else if (fecha2.getTime() > fecha.getTime() && fecha2.getTime()>fecha1.getTime() && fecha.getTime() < fecha1.getTime()) {
    alert("La fecha: "+fecha2+" es la mayor y "+fecha+" es la menor");
    difS=(fecha2.getTime())-(fecha.getTime());
    difS=difS/1000;
    alert("La diferencia en segundos entre las dos fechas son: "+difS);

}else if (fecha2.getTime() > fecha.getTime() && fecha2.getTime()>fecha1.getTime() && fecha.getTime() > fecha1.getTime()) {
    alert("La fecha: "+fecha2+" es la mayor y "+fecha1+" es la menor");
    difS=(fecha2.getTime())-(fecha1.getTime());
    difS=difS/1000;
    alert("La diferencia en segundos entre las dos fechas son: "+difS);

}else{
    alert("Las fechas coinciden");
}