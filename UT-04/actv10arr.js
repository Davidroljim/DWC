//Escribe una función llamada elMenor que acepte un número variable de parámetros y devuelva el parámetro de menor valor pasado a la función.

var arr ;
arr = (...array)=>{
    document.write(Math.max(array));
}

//Escribe una función llamada colocaEnMedio que acepte como parámetros dos arrays y devuelva el primer array con todos los valores del segundo array colocados en el centro del primer array.

const array1 = ['a', 'b', 'c', 'd'];
const array2 = [1, 2, 3];


colocaEnMedio = ()=>{
    mitad = Math.trunc(array1.length/2);
    array1.splice(mitad, 0, array2);
    return  document.write( array1);
}



colocaEnMedio(array1, array2);
document.write("<br><br>");

//Escribe una función llamada uneArrays que acepte un número variable de parámetros (cada uno de ellos será un array) y devuelva un nuevo array con todos los parámetros concatenados.
unir = [];
uneArrays =(...numero)=>{
    unir=unir.concat(...numero);
    return document.write(unir);
}
uneArrays(array1,array2);


//Escribe una función llamada sumaArgPares que sume todos los argumentos pares que se pasen a la función.

var sumaArgPares = (...numeros)=>{
numero=0;
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index]%2==0) {
            document.write(numero=numero+numeros[index]);
        }
        
    }
}
sumaArgPares(2,3,6);

