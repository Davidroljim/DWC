//Crea un documento que contenga una tabla con al menos 20 filas y 20 columnas (sin copia-pega, usando bucles). Pon texto en las celdas, todo ello mediante DOM.

window.addEventListener('load', crearTabla);

function crearTabla(){

    var tabla = document.createElement('table');
    var tr = document.createElement('tr');

    for (let i = 0; i < 20; i++) {
        var tr = document.createElement('tr');

        for (let z = 0; z < 20; z++) {

            var columna = document.createElement('td');
            var txt = document.createTextNode('Furbo');
            
            columna.appendChild(txt);
            tr.appendChild(columna);

        }
        tabla.appendChild(tr);
    }

    document.body.appendChild(tabla);
}