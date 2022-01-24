window.addEventListener("load",iniciar);

function iniciar(){

    var json =[
{titulo: "Beaking Bad",genero: "Drama",sinopsis: "Altamente aclamado por la crítica, este drama televisivo escrito y producido por Vince Gilligan ('Expediente X') nos muestra la vida de Walter White (Bryan Cranston 'Malcolm'), un genio en el campo ...",src:"https://es.web.img3.acsta.net/c_310_420/pictures/18/04/04/22/52/3191575.jpg"},
{titulo: "Juego de Tronos",genero: "Fantasía",sinopsis: "HBO, desde la calidad que caracteriza a la cadena, nos brinda una vez más una magistral adaptación televisiva de la serie de novelas 'Canción de hielo y fuego' del escritor estadounidense George R. ...",src:"https://es.web.img2.acsta.net/c_310_420/pictures/19/03/22/10/08/5883111.jpg?coixp=50&coiyp=40"},
{titulo: "Peaky Blinders",genero: "Crimen,Drama",sinopsis: "Peaky Blinders es un drama de BBC que narra la historia de la familia gitana Shelby y su banda de gángsters, un grupo de personas características por sus boinas con cuchillas y dueñas de los ...",src:"https://es.web.img2.acsta.net/c_310_420/pictures/15/10/23/08/59/222051.jpg?coixp=45&coiyp=64"}];
    

    for(var i=0; i<json.length; i++){

        var div = document.createElement('div');
        document.body.appendChild(div);
    
        var ul = document.createElement('ul');
        ul.setAttribute("list-style-type","none");
        div.appendChild(ul);

        var li = document.createElement('li');
        ul.appendChild(li);

        var div1 = document.createElement('div');
        div1.setAttribute("class","left-block");
        li.appendChild(div1);

        var p = document.createElement('p');
        p.setAttribute("class","titulo");
        div1.appendChild(p);

        p.addEventListener("click", mostrarParrafo, false);

        var txt = document.createTextNode(json[i]["titulo"]);
        p.appendChild(txt);
        

        var div2 = document.createElement('div');
        div2.setAttribute("class","desc");
        div2.setAttribute("style","display: none");
        div1.appendChild(div2);

        var div3 = document.createElement('div');
        div3.setAttribute("class","content_genre");
        div2.appendChild(div3);

        var b = document.createElement('b');
        div3.appendChild(b);

        var txt0 = document.createTextNode("Género: ");
        b.appendChild(txt0);

        var txt1 = document.createTextNode(json[i]["genero"]);
        div3.appendChild(txt1);


        var p1 = document.createElement('p');
        p1.setAttribute("class","product-desc");
        div2.appendChild(p1);

        var b1 = document.createElement('b');
        p1.appendChild(b1);

        var txt3 = document.createTextNode("Sinopsis: ");
        b1.appendChild(txt3);

        var txt2 = document.createTextNode(json[i]["sinopsis"]);
        p1.appendChild(txt2);

        var img = document.createElement('img');
        img.setAttribute("src",json[i]["src"]);
        img.setAttribute("title",json[i]["titulo"]);
        div2.appendChild(img);
        
        }

}

function mostrarParrafo (e) {
	
	var p = e.currentTarget.nextSibling;

	if (p.getAttribute("style") == "display: none;") {

		p.setAttribute("style", "display: block;");

	} else {

		p.setAttribute("style", "display: none;");
	}
}