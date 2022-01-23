window.addEventListener("load",iniciar);

function iniciar(){

    
    var json= [{titular: "Noticia 1", contenido: "Contenido de la noticia 1",descripcion: "Esta es la noticia 1"},
    {titular: "Noticia 2",contenido: "Contenido de la noticia 2",descripcion:"Esta es la noticia 2"},
    {titular: "Noticia 3",contenido: "Contenido de la noticia 3",descripcion: "Esta es la noticia 3"}];

    for(var i=0; i<json.length; i++){

    var div = document.createElement('div');
    div.setAttribute("id","noticia1");
    document.body.appendChild(div);

    var h1 = document.createElement('h1');
    div.appendChild(h1);
    var txt = document.createTextNode(json[i]["titular"]);
    h1.appendChild(txt);

    var img = document.createElement('img');
    div.appendChild(img);
    img.setAttribute("src","./mostrar.png");
    img.setAttribute("name","mostrar");
    img.addEventListener("click", mostrarParrafo, false);

    var img1 = document.createElement('img');
    div.appendChild(img1);
    img1.setAttribute("src","./ocultar.png");
    img1.setAttribute("name","ocultar");
    img1.addEventListener("click", ocultarParrafo, false);

    var p = document.createElement('p');
    div.appendChild(p);
    p.setAttribute("id","p"+i);
    p.setAttribute("style","display:block");
    p.addEventListener("auxclick", mostrarDescripcion, false);

    var txt1 = document.createTextNode(json[i]["contenido"]);
    p.appendChild(txt1);

    var h4 = document.createElement('h4');
    div.appendChild(h4);
    h4.setAttribute("style","display:none");

    var txt2 = document.createTextNode(json[i]["descripcion"]);
    h4.appendChild(txt2);
    }

}

function mostrarParrafo (e) {
	
	var p = e.currentTarget.nextSibling.nextSibling;

	if (p.getAttribute("style") == "display: none;") {

		p.setAttribute("style", "display: block;");

	} else {

		p.setAttribute("style", "display: block;");
	}
}

function ocultarParrafo (e) {
	
	var p = e.currentTarget.nextSibling;

	if (p.getAttribute("style") == "display: block;") {

		p.setAttribute("style", "display: none;");

	} else {

		p.setAttribute("style", "display: none;");
	}
}


function mostrarDescripcion (e) {
	
	var p = e.currentTarget.nextSibling;

	if (p.getAttribute("style") == "display: none;") {

		p.setAttribute("style", "display: block;");

	} else {

		p.setAttribute("style", "display: block;");
	}
}

//https://platzi.com/tutoriales/1339-fundamentos-javascript/2562-eventos-del-mouse-en-javascript/