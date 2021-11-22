var integrantes1 = new Map();
integrantes1.set("52365214Z", "Antonio Sanchez Espinosa").set("12364578A", "Roberto Garcia Jimenez");

var integrantes2 = new Map();
integrantes2.set("52365214Z", "Helena Suarez Escobar").set("89654123B", "Alberto Perez Rosa");

// Generamos bandas.
var banda1 = new Banda("Municipal", 1998, integrantes1, 954236541, "Clasico");
var banda2 = new Banda("New World", 2005, integrantes2, 954021365, "Rock");
var banda3 = new Banda("Fast For", 2007, integrantes2, 962153625, "Rock");


banda1.mostrarBanda(banda1);
document.write("<br>");
document.write("<br>");
banda1.mostrarIntegrantes(banda1);

document.write("<br>");
document.write("<br>");

// Generamos una sala de conciertos.
arrayBandas= [banda1, banda2, banda3];
var sala1 = new SalaConciertos (arrayBandas);

//Imprimimos listado Bandas
sala1.imprimirListadoBandas(sala1);

//Buscar por estilo
console.log(sala1.buscarBandasPorEstilo("Rock"));


document.write("<br>");
document.write("<br>");

// Ordenar banda mediante sus años de formacion.
var orderByAnio = sala1.ordenarBandasPorAnio();
for (banda of orderByAnio)
{
    banda.mostrarBanda();
}

