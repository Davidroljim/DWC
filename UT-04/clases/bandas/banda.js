/*Nombre
Año de formación
Lista de integrantes: formada por el dni, nombre y apellido. No podrá haber, evidentemente, dos componentes en la lista con el mismo dni.
Teléfono de contacto 
Estilo
MostrarBanda
MostrarIntegrantes*/

class Banda {
    constructor(nombre,añoF,listaIntegrantes,teléfono,estilo){
        this.nombre=nombre;
        this.añoF=añoF;
        this.listaIntegrantes=listaIntegrantes;
        this.teléfono=teléfono;
        this.estilo=estilo;

    };

    mostrarBanda(){
        document.write(this.nombre+" se fundó en el año "+this.añoF+" su teléfono es "+this.teléfono+" su estilo es "+this.estilo);
    }

    mostrarIntegrantes(){
        for (const integrantes of this.listaIntegrantes) {
            document.write(integrantes);
        }
    }


}