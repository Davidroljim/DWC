/*Generar aleatoriamente una quiniela de n columnas. Supóngase que las probabilidades
son:
➔ 50% para que salga 1
➔ 30% para que salga x
➔ 20% para que salga 2*/
contador=0;

while (contador!=14) {
    var numeroAleatorio=Math.floor(Math.random()*9);
    if (numeroAleatorio==0||numeroAleatorio<5) {
        document.write ("-1-</br>");
    }else if (numeroAleatorio==5 || numeroAleatorio<8) {
        document.write ("-x-</br>");
    }else{
        document.write ("-2-</br>");
    }
   
    
    contador++;
}
