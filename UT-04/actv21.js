//Implementar funciones para el ejercicio anterior para imprimir los datos y para buscar una persona por apellidos, por DNI o por edad. ¿cómo podríamos optimizar la búsqueda?
var i=0;
var valores = [];
 //Hago un bucle do while para comprobar que la variable datos no sea vacia;
  do{
    
    //Introduzco los datos que me pasan por parámetros
    datos = prompt("Introduce tu nombre, apellidos, DNI y fecha de nacimiento","nombre,apellidos,DNI,fecha de nacimiento");
    //Comprobación para que no me meta el ultimo array vacio
    if (datos!="") {
        valores.push(datos.split(","));
    }

 }while (datos!="");

 


var recorreMatriz = (valores) =>{
    //Recorro el array con bucles for anidados imprimiendo cada array por pantalla
    for (x=0;x<valores.length;x++) {

        for (y=0;y<valores[x].length;y++) {
            text = valores[x][y]+" ";
            document.write(text);
            
        }
        document.write("<br>");
    }

}

var buscardato = (valores) =>{
    //Introduzco el dato a buscar
    buscar=prompt("Inserta el dato para buscar");
    //Recorro el array comprobando que exista algún dato igual al que le he introducido por pantalla
    for (x=0;x<valores.length;x++) {
        for (y=0;y<valores[x].length;y++) {
            text = valores[x][y];
            if (text==buscar) {
                document.write(valores[x]);
                var contador =1;
            }
        }
    }
    return contador;
}
//Valido que haya encontrado algún dato
if (buscardato!=1) {
    document.write("No se ha encontrado ningun dato");
}

//recorreMatriz(valores);
//document.write("<br><br>");
buscardato(valores);