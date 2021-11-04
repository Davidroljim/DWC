//Escriba un algoritmo que lea un instante de tiempo dado en horas y minutos y escriba como respuesta los mensajes “Buenos días” “Buenas tardes” “Buenas noches”, de acuerdo con las siguientes reglas:
//a. Es de día desde las 7:30 hasta las 14:00 horas.
//b. Es tarde desde las 14:01 hasta las horas 20:30.
//c. Es noche desde las 20:31 hasta las horas 7:29.
let hora = prompt("Dame el valor de una hora");
hora = hora.replace(":",".");

if (isNaN(hora)){
    alert("Error, introduce una hora válida");
}else{
    if(hora >= 7.30 && hora <= 14.00){
        alert("<p>Buenos Días</p>");
    }else if (hora > 14.00 && hora <= 20.30) {
        document.write("<p>Buenas Tardes</p>");
    } else {
        document.write("<p>Buenas Noches</p>");
    }
}
