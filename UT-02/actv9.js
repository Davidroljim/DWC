//Hallar el menor, el mayor y la media de un conjunto de números positivos leídos de teclado.
var nNumeros = prompt("Inserta cuantos números quieres introducir");

numeroAnterior =0;
for (var i=1; i<=nNumeros; i++){
    var media=0;
    
    let n = prompt("Inserta un número positivo");
    
    media = media + n;
    if(numeroAnterior < n){
        numeroAnterior=n;
    }
    
}
document.write("La media de todos los números son "+media/nNumeros);
document.write("El número más pequeño es: "+numeroAnterior);