var dia = parseInt(prompt ("Introduce el día de tu nacimiento: "));
var mes = parseInt(prompt ("Introduce el mes de tu nacimiento: "));
var año = parseInt(prompt ("Introduce el año de tu nacimiento: "));

fecha = new Date(año, mes-1, dia);

fechahoy = Date.now(); 

if (fecha.getTime() < fechahoy) {
    alert("La fecha introducida es anterior a la de hoy");
}else{
    alert("La fecha introducida es posterior a la de hoy");
}