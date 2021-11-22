class Aula{
    constructor(alumnos){
        this.alumnos=alumnos;
    };

    buscarAlumno(dni){
        for(alumno of this.alumnos) {
                if(alumno.dni==dni){
                    return alumno;
                }
        }
        return false;
    };

    ordenarNotaAlumno(dni){
        var alumno = this.buscarAlumno(dni);
        var mapOrdenado = new Map([...alumno.notas.entries()].sort((a,b) => b[1] - a[1]));
        return mapOrdenado;

    };

    ordenarAlumnosApellidos(){
        return this.alumnos.sort((alumno1,alumno2)=>{
            if (alumno1.apellido1.toUpperCase()<alumno2.apellido1.toUpperCase()){
                return 1;
        } else if (alumno1.apellido1.toUpperCase()>alumno2.apellido1.toUpperCase()){
                return -1;
        }
        return 0;
        });
        
    };

    imprimirAlumnos(){

        this.alumnos.forEach(alumno => {
            alumno.imprimirAlumno();
            document.write("<br>")
        });

    }

}  