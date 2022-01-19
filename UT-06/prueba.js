window.addEventListener("load",iniciar)

function iniciar(){

    //desplegable();

    var edad = document.getElementById("edad");
    edad.addEventListener("blur", comprobar);
}


function comprobar() {
    edad1 = document.getElementById("edad");
    valor = parseInt(edad.value);
    if (valor>=18) {
        
    }else{
        var p = document.createElement("p");
        edad1.appendChild(p);
        var txt=document.createTextNode("No puede ser menor de edad");
        p.appendChild(txt);
    }

}



/*function cuerpo(){

    var json =[{src:"/img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"]},
        {src:"/img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22"]}]
        

    var div = document.createElement("div");
    document.body.appendChild(div);

    div.setAttribute("id","todos-los-viajes");
    
    var h1= document.createElement("h1");
    var txt1=document.createTextNode("Subtituloo");
    h1.appendChild(txt1);
    div.appendChild(h1);

    var ul = document.createElement("ul");
    div.appendChild(ul);

    for(var i=0; i<json.length; i++){
        var li=document.createElement("li");
        var img=document.createElement('img');
        img.setAttribute("src",json[i]["src"]);
        li.appendChild(img);

        
        var parr= document.createElement("p");
        var txt2= document.createTextNode(json[i]["desc"]);
        parr.appendChild(txt2);
        li.appendChild(parr);

        
        var ul1 = document.createElement("ul");
        ul1.setAttribute("class","specs");
        li.appendChild(ul1);
        for (let z = 0; z < json[i]["specs"].length; z++) {
            var specsLi = document.createElement("li");
            var txt3 = document.createTextNode(json[i]["specs"][z])
            specsLi.appendChild(txt3);
            ul1.appendChild(specsLi);
        }

        ul.appendChild(li);
    }

}

function desplegable (){
    var fotos = document.getElementsByTagName('img');

    for (let i = 0; i<fotos.length; i++){
        fotos[i].addEventListener('click', ocultarMostrar);
    }
}

function ocultarMostrar(){
    
    if (this.nextSibling.style.visibility=="hidden") {
        visible="visible";
    } else{
        visible="hidden";
    }

    var padre = this.parentNode;
    var arrayHijos = padre.childNodes;
    for(let z= 1; z<arrayHijos.length; z++){
        arrayHijos[z].style.visibility=visible;
    }
}*/