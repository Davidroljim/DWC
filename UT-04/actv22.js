//Añade al ejercicio anterior las siguientes funciones, utiliza además las funciones creadas anteriormente (utiliza los métodos ya implementados de Array y funciones flecha):

//menorEdad: filtrará del array los usuarios menores de edad e imprimirá en una nueva ventana los días y/o años que le quedan para su mayoría de edad.
//modificaDatos: solicitará qué datos modificar, el dato por el que se va a modificar y el dni del usuario.
//eliminaUsuario: elimina un usuario del array solicitando su dni. Además solicita confirmación antes de eliminar.


var i=0;
var valores = [];
 //Hago un bucle do while para comprobar que la variable datos no sea vacia;
  do{
    
    //Introduzco los datos que me pasan por parámetros
    datos = prompt("Introduce tu nombre, apellidos, DNI y fecha de nacimiento si deseas finalizar introduzca el campo vacío","nombre,apellidos,DNI,YYYY-MM-DD");
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
//if (buscardato!=1) {
//    document.write("No se ha encontrado ningun dato");
//}


//Ejercicio22


var calcularEdad = (fecha) => {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}


//mayorEdad: filtrará del array los usuarios mayores de edad e imprimirá sus datos en una nueva ventana.
var mayorEdad = (valores) =>{
    fecha=0;
    //expresión regular para comprobar la fecha
    var miExpReg = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
    //Recorro el array comprobando que exista algún dato igual al que le he introducido por pantalla
    for (x=0;x<valores.length;x++) {
        for (y=0;y<valores[x].length;y++) {
            text = valores[x][y];
            //compruebo el campo fecha con una expReg
            if (miExpReg.test(text)==true&&calcularEdad(text)>17) {
                fecha=1;
                //creo e inserto los datos en la ventana
                nuevaVentana = window.open("","","height=400,width=800");
                nuevaVentana.document.write("Personas mayores de edad: ");
                nuevaVentana.document.write(valores[x]);
                
                
            }
        }
    }
    return fecha;

}

recorreMatriz(valores);
document.write("<br><br>");
document.write("Dato buscado: ");
buscardato(valores);
document.write("<br><br>");
mayorEdad(valores);



//david,roldan,1234,2001-12-12
//abrahan,roldan,5678,2007-12-12