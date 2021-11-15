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
        var furbo = "";
        this.alumnos.forEach(element => {
            var arrayf = [];
            //convierto el objeto en un array
            arrayf=Object.values(element);
            if (arrayf[2] == dni) {
                 return  element;
            }
            
        });        
    }

    ordenarNota(dni){
        //var arrayf =null ;
        //arrayf=(this.buscarDNI(dni));
        var alumnoF = new Alumno (this.buscarDNI(dni));
        console.log(alumnoF);
        //console.log(arrayf.map.sort(function(a,b){return a[1]-b[1]}));
    }

    ordenaApellido(){

    }

    
};
