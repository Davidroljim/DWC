var misNotas = new Map();
misNotas.set("DWS",10);
misNotas.set("DAW",8);
misNotas.set("DIW",7);
misNotas.set("DWC",9);


nombre="David";
apellido="Roldán";
dni="1234134e";
fecha="2001-12-12";
curso="º2"

var alumno = new Alumno (nombre,apellido,dni,fecha,curso,misNotas);

console.log(alumno.imprimeAlumno());

alumno.notaMedia();

alumno.mejorNota();
