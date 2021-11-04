//Escribe un algoritmo que lea desde la entrada estándar dos fechas dadas por día, mes y año y calcule cuál de ellas es anterior a la otra.

var dia = prompt("Introduce tu día de nacimiento: ","dd");

var mes = prompt("Introduce tu mes de nacimiento: ","mm");

var año = prompt("Introduce tu año de nacimiento: ","aaaa");

var dia1 = prompt("Introduce el segundo día de nacimiento: ","dd");

var mes1 = prompt("Introduce el segundo mes de nacimiento: ","mm");

var año1 = prompt("Introduce el segundo año de nacimiento: ","aaaa");

fecha=dia+"-"+mes+"-"+año;
fecha1=dia1+"-"+mes1+"-"+año1;


if (año<año1) {
    document.write("Esta fecha es anterior "+fecha+" a esta fecha "+fecha1);
    
}else if (año1<año){
    document.write("Esta fecha es anterior "+fecha1+" a esta fecha "+fecha2);
    
}else if (año==año1 && mes<mes1){
    document.write("Esta fecha es anterior "+fecha+" a esta fecha "+fecha1);
    
}else if (año==año1 && me1<mes){
    document.write("Esta fecha es anterior "+fecha1+" a esta fecha "+fecha);
    
}else if (año==año1 && mes<=mes1 && dia<dia1){
    document.write("Esta fecha es anterior "+fecha+" a esta fecha "+fecha1);
    
}else if (año==año1 && mes1<=mes && dia1<dia){
    document.write("Esta fecha es anterior "+fecha1+" a esta fecha "+fecha);
   
}else if (año==año1 && mes==mes1 && dia==dia1){
    document.write("Esta fecha "+fecha+" es igual que esta "+fecha1);
    
}