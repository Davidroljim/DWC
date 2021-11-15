class Persona{
    constructor (nombre,apellido,dni,fnacimiento){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.fnacimiento=fnacimiento;

    };
    imprimePersona (){
        document.write(this.nombre+","+this.apellido+","+this.dni+","+this.fnacimiento);
        
    }
};