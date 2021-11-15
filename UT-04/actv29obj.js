//Crear un objeto Alumno con su nombre, DNI, ... (objeto Persona), curso y notas de cada módulo. Crear su constructor y un método para imprimir un Alumno,
//otro que devuelva la nota media y otro para obtener su mejor nota y el nombre del módulo con esa nota (puede tener la misma nota en varios módulos).
class Alumno extends Persona{
    constructor (nombre,apellido,dni,fnacimiento,curso,notas){
        super(nombre,apellido,dni,fnacimiento);
        this.curso=curso;
        this.notas=notas;

    };

    imprimeAlumno (){
        super.imprimePersona();
        document.write("<br>");
        for (const [clave, valor] of this.notas){
            document.write(clave+"="+valor);
            document.write("<br>");
        }
    }

    notaMedia(){
        document.write("<br>");
        var media = 0;
        var valores = this.notas.values();
        for (let i of valores){
            media +=i;
        }
    media = media/this.notas.size;
    document.write("La nota media es: "+media);
    }


    mejorNota(){
        document.write("<br>"); 
        var valores = this.notas.values();
        var mayor=Math.max(...valores);
        document.write("La nota más alta es: "+ mayor);
    }
}