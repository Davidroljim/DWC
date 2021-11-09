//Escribe una función a la que se le pase como parámetro un array y devuelva ese mismo array después de eliminar los elementos repetidos.

var array = [2,2,3,4,5,6,6,7,7,8,8];


var eliminaRepes = (array) => {

    const lista = new Set(array);
	return lista;
}

console.log(eliminaRepes(array));