// Crear un objeto Aula que contenga los alumnos de un aula y tenga los siguientes métodos:
// buscar un alumno del aula por DNI.
// ordenar por nota para un alumno en particular
// ordenar el array de alumnos por apellido
// imprimir los alumnos de un aula.

class Aula{
    constructor (alumnos){
        this.alumnos=alumnos;
    }

    imprimeAlumno(){
        this.alumnos.forEach(element => {
            element.imprimeAlumno();
        });
    }

    buscarDNI(dni){
        this.alumnos.forEach(element => {
            var array = [];
            //convierto el objeto en un array
            array=Object.values(element);
            if (array[2] == dni) {
                element.imprimeAlumno();
            }
        });        
    }

    ordenarNota(dni){
    this.buscarDNI(dni);


    }

    ordenaApellido(){

    }

    
};
