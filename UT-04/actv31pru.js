
var lista = new Map();
lista.set("123456789A",["David","Roldán Jiménez"]);
lista.set("223434576H",["Ale","Martín Furbolista"]);
lista.set("098713523Y",["Ruben","Castellano Fernandez"]);


nombre="Furbo";
telefono="123413432";
año="2001-12-12";
estilo="Rap"

var banda = new Banda (nombre,año,lista,telefono,estilo);
let arrayBanda = [banda];

var listado = new Listado (arrayBanda);

console.log(listado.imprimirListadoBandas());