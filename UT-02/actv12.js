//Realizar un algoritmo que permita introducir la nota de una asignatura por teclado, la valide para que esté comprendida entre 0 y 10 
//y se escriba en letras de la siguiente manera:

var nota = prompt("Introduce tu nota: ");

if(nota<0 || nota>10){
    alert("Debes de introducir una nota valida");
}
if (nota < 5){
    alert("SUSPENSO");
}else if (nota >=5 && nota<6){
    alert("APROBADO");
}else if (nota >=6 && nota<7){
    alert("BIEN");
}else if (nota>=7 && nota<8){
    alert("NOTABLE");
}else if (nota>=9){
    alert("SOBRESALIENTE")
}