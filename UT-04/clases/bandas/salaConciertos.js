/*Con estas bandas se quiere mantener un listado con el que se permita:
imprimirListadoBandas
buscarBandaPorNombre: busca una banda en la lista por su nombre
buscarBandasPorEstilo: busca las bandas en la lista que pertenezcan a un estilo dado
ordenarBandasPorAño: ordena la lista por año de formación
eliminarBanda: elimina una banda dada por su nombre si esta se encuentra en la lista*/


class SalaConciertos {

    constructor(arrayBandas){
        this.arrayBandas=arrayBandas;

    };

    imprimirListadoBandas(){
        for (let index = 0; index < this.arrayBandas.length; index++) {
            this.arrayBandas[index].mostrarBanda();
        }
    }

    buscarBandasPorNombre(nombre){
        return this.arrayBandas.find((banda) => banda.nombre == nombre);
    }

    buscarBandasPorEstilo(estilo){
        return this.arrayBandas.filter((banda) => banda.estilo == estilo);
    }

    ordenarBandasPorAnio(){
        return this.arrayBandas.sort((a,b) => {
            if (a.anioFormacion > b.anioFormacion)
            {
              return 1;
            } else if (a.anioFormacion < b.anioFormacion)
            {
              return -1;
            } 
            return 0;
          });
    }
}