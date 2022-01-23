window.addEventListener("load", inicio);

function inicio(){

    //ul
    var ul = document.createElement('ul');

    //li
    var li = document.createElement('li');
    var coche1 = document.createTextNode("Ford");
    li.appendChild(coche1);
    ul.appendChild(li);


    var li2 = document.createElement('li');
    var coche2 = document.createTextNode("BMW");
    li2.appendChild(coche2);
    ul.appendChild(li2);

    document.body.appendChild(ul);

    var ulPadre = document.getElementsByTagName('li')[0].parentNode;
    ulPadre.setAttribute("type", "square");

    var li3 = document.createElement('li');
    var coche3 = document.createTextNode("Nissan");
    li3.appendChild(coche3);

    var li4 = document.createElement('li');
    var coche4 = document.createTextNode("Audi");
    li4.appendChild(coche4);

    //ul.insertBefore(li3, ulPadre.firstChild);

    var lista = document.getElementsByTagName('li');
    var pos;

    for (var i = 0; i<lista.length ; i++) {
        if(lista[i].textContent=="BMW"){
            pos = i;
        }
    }
    if(pos != undefined){
        /*ul.insertBefore(li3, lista[pos]);
        Comentamos esta línea porque al insertar un elemento antes de BMW, la posición de este cambia
        Si queremos dejar esta línea, debemos modificar la variable pos */
        ul.insertBefore(li4, lista[pos].nextSibling);
    } else {
        alert("BMW no existe");
    }

}