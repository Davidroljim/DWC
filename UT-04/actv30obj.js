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

    // buscarDNI(dni){
    //     this.alumnos.forEach(element => {
    //         var arrayf = [];
    //         //convierto el objeto en un array
    //         //arrayf=Object.values(element);
    //         if (element.dni == dni) {
    //             var alumno = new Aula();
    //             alumno = element;
    //              return alumno;
    //         }
            
    //     });        
    // }

    buscarDNI(dni){

        /*for (const alum of this.alumnos) {
            if (alum.dni==dni) {
                return alum;
            }
        }
        return false;*/

        var resultado=this.alumnos.filter((alumno)=>alumno.dni==dni);
        return resultado;
    }    



    ordenarNota(dni){
        var ordenado = this.buscarDNI(dni);
        const mapSort1 = new Map([...ordenado.notas.entries()].sort((a,b) => b[1]- a[1]));
        return mapSort1;
    }

    ordenarPorApellido(){
        return this.alumnos.sort((alumno1,alumno2)=>{
        if (alumno1.apellido1.toUpperCase() < alumno2.apellido1.toUpperCase()){
        return 1;
        } else if (alumno1.apellido1.toUpperCase() > alumno2.apellido1.toUpperCase()){
        return -1;
        }
        return 0;
        });
        }

    
};
