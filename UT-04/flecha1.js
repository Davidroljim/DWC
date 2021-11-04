//Hacer un programa que sume todos los parámetros pasados como argumentos de 
//entrada en la llamada. El número de argumentos de entrada es desconocido.
    var resultado =0;

    //funcion flecha
    resultado =  (...restParams) => {
    var numero=0; 
    for (let index = 0; index < restParams.length; index++) {
        numero = numero+restParams[index];
    }
    return numero; 
    };

    document.write(resultado (2,4,6));