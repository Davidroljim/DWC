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


var misNotas2 = new Map();
misNotas2.set("DWS",10);
misNotas2.set("DAW",8);
misNotas2.set("DIW",7);
misNotas2.set("DWC",9);


nombre="Abrahan";
apellido="Roldán";
dni="2349858y";
fecha="2004-12-12";
curso="º1"

var alumno2 = new Alumno (nombre,apellido,dni,fecha,curso,misNotas);

let arrayAlum = [alumno, alumno2];

var aula = new Aula (arrayAlum);

//aula.imprimeAlumno();

document.write(aula.buscarDNI("2349858y"));
