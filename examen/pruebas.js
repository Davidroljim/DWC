


var paciente = new Paciente("David","Roldan","48963910s","1234",true);

var paciente1 = new Paciente("Ale","Martin","1234875t","2345",false);

var paciente2 = new Paciente("Abrahan","Leon","45763233u","7657",false);

var medico = new Medico ("Ruben","Jimenez","48963910s","0987");

var medico1 = new Medico ("Juan","Garcia","45365563g","1986");

var medico2 = new Medico ("Pepe","Roman","234556h","2789");


fecha = new Date(2022, 0, 10);

fecha1 = new Date(2022, 0, 9);

fecha2 = new Date(2022, 0, 8);

fechaPrueba = new Date(2022, 0, 11);

var cita = new CitaPrevia(fecha,paciente,medico);

var cita1 = new CitaPrevia(fecha1,paciente1,medico1);

var cita2 = new CitaPrevia(fecha2,paciente2,medico2);


var arrayCitas = new Array(cita, cita1, cita2);


function introduceCita (arrayCitas,fecha,paciente,medico){
    var index = arrayCitas.findIndex((cita) => cita.nombre == paciente.nombre);
if (index != -1) {
    document.write("El paciente ya tiene una cita asignada, debe eliminarla para poder asignar otra");
}else{
    var cita = new CitaPrevia(fecha,paciente,medico);
    arrayCitas.push(cita);
}
return arrayCitas;

}

//prueba1
//console.log(introduceCita(arrayCitas,fechaPrueba,paciente,medico));


//buscarCita: busca una cita de un paciente dado en el array. 

/*function buscarCita(arrayCitas,buscaPaciente) {

    for (let i = 0; i < arrayCitas.length; i++) {
        if (arrayCitas[i].dni=buscaPaciente.dni){
            var cita = arrayCitas[i];
        return cita;
    }
}
}*/

function buscarCita(arrayCitas,dni) {
    return arrayCitas.find((cita) => cita.paciente.dni === dni);

}

//console.log(buscarCita (arrayCitas,"45763233u"));


//eliminarCita: una función que busque una cita. Si no la encuentra, la función imprimirá un mensaje avisando de que la cita no ha sido encontrada.


/*function eliminarCita(arrayCitas,cita) {
    eliminarP = cita.paciente;
    citael = buscarCita(arrayCitas,eliminarP)
    return citael;

}*/

function eliminarCita(arrayCitas, nombre) {
    var oldLength = arrayCitas.length;
    arrayCitas = arrayCitas.filter((cita) => {
      return cita.paciente.nombre !== nombre;
    });
    if (oldLength != arrayCitas.length) {
      console.log("Se ha eliminado un elemento");
    }
    return arrayCitas;
  }

//console.log(eliminarCita (arrayCitas,"david"));


//mostrarCitas: muestra todas las citas del array. Cada cita se mostrará en una línea diferente.

function mostrarCitas(arrayCitas){
    for (let i = 0; i < arrayCitas.length; i++) {
        console.log(Object.values(arrayCitas[i]));
        
    }
}

//mostrarCitas(arrayCitas);

//ordenaCitasPorFechaHora: ordena el array por fecha de la cita de manera descendente.

function ordenaCitasPorFechaHora (arrayCitas){
    return arrayCitas.sort((a,b) => {
        if (a.fecha > b.fecha)
        {
          return 1;
        } else if (a.fecha < b.fecha)
        {
          return -1;
        } 
        return 0;
      });
      
}

//ordenaCitasPorFechaHora (arrayCitas);