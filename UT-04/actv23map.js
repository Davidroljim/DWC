//Utiliza un map almacenar información sobre módulos impartidos en el IES de la siguiente manera:  ("DWECL", “Desarrollo Web en Entorno Cliente”). Añade la información con posterioridad a la creación de la estructura.

//Muestra cuántos módulos hay almacenados
//Muestra el contenido de la estructura
//Devuelve las abreviaturas de todos los módulos guardados
//Devuelve el nombre completo de todos los módulos
//Consulta si está el módulo "DAW"
//Si está, elimínalo.
//Ordena alfabéticamente el map según las abreviaturas de los módulos

const modulos = new Map();
modulos.set("DWECL","Desarrollo Web en Entorno Cliente");
modulos.set("DWECS","Desarrollo Web en Entorno Servidor");
modulos.set("DIW","Diseño Interfaces Web");
modulos.set("DAW","Despliegue Aplicaciones Web");


i=0;
for (elemento of modulos) {
    i++;
}
document.write("Hay almacenados "+i+" módulos");
document.write("<br><br>");


for (elemento of modulos) {
    document.write(elemento);
    document.write("<br>");
}

document.write("<br><br>");

document.write("Muestro las claves de los módulos");

let claves = modulos.keys();
for(let k of claves){
	document.write(k);
    document.write("<br>");
}

document.write("<br><br>");
document.write("Muestro los nombres de los módulos");

let valores = modulos.values();
for(let v of valores){
    document.write(v);
    document.write("<br>");

}
document.write("<br><br>");
if (modulos.has("DAW")) {
    document.write("Si existe el modulo DAW <br>");
    modulos.delete("DAW");
    document.write("Se ha eliminado el modulo DAW");
}else{
    document.write("No existe el modulo DAW");

}

//Ordena alfabeticamente 


const modulo = new Map();
modulo.set("DWECL","Desarrollo Web en Entorno Cliente");
modulo.set("DWECS","Desarrollo Web en Entorno Servidor");
modulo.set("DIW","Diseño Interfaces Web");
modulo.set("DAW","Despliegue Aplicaciones Web");

var furbo = modulo.keys();
var ordenado = [...furbo].sort();
console.log(ordenado);
//const mapSort = new Map([...modulo.entries()].sort());
//console.log(mapSort);
