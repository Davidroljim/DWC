//Escribe una función que reciba como argumento de entrada un array de números y averigue utilizando métodos del objeto Math cuál es el menor y el mayor de ellos.

var resultado =0;

//funcion flecha
resultado =  (...restParams) => {
    var numero=0; 

    var max = Math.max (...restParams);
    var min = Math.min (...restParams);
    document.write("Numero maximo "+max +" numero mínimo "+ min);
};

resultado (2,4,6);