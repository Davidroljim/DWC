window.addEventListener("load",iniciar)

function iniciar(){
    var body = document.getElementById("body");
    body.addEventListener('click', cuerpo);

    desplegable();
}

function cuerpo(){
        
        var arrayJuguetes = [   {	img:"https://juguettos.com/1361787-large_default/A0041951.jpg", precio:"14,99",
        href:"https://juguettos.com/1039-la-banda", ref:"A0041951",
        title:"La Banda Tambor Acústico", coleccion:"La Banda"},
        {img:"https://juguettos.com/1362350-large_default/A0133071.jpg", precio:"21,99",
        href:"https://juguettos.com/1039-la-banda", ref:"A0051216",
        title:"La Banda Guitarra Española", coleccion:"La Banda"
    }
    ];

    var div = document.createElement("div");
    document.body.appendChild(div);
    
    var ul = document.createElement("ul");
    div.appendChild(ul);
    ul.setAttribute("style","list-style-type: none;");
    
    

    

    for (let i = 0; i < arrayJuguetes.length; i++) {
        var li = document.createElement("li");
        ul.appendChild(li);

        var div1= document.createElement ("div");
        div1.setAttribute("class","left-block");
        li.appendChild(div1);

        var img=document.createElement("img");
        img.setAttribute("src",arrayJuguetes[i]["img"]);
        img.setAttribute("title",arrayJuguetes[i]["title"]);
        div1.appendChild(img);



        var div2= document.createElement ("div");
        div2.setAttribute("class","desc");
        div2.setAttribute("style","display:none");
        div1.appendChild(div2);

        var div3= document.createElement ("div");
        div3.setAttribute("class","content_price");
        div2.appendChild(div3);

        var txt1= document.createTextNode(arrayJuguetes[i]["precio"]);
        div3.appendChild(txt1);

        var a= document.createElement ("a");
        a.setAttribute("href",arrayJuguetes[i]["href"]);
        div2.appendChild(a);

        var txt2= document.createTextNode(arrayJuguetes[i]["coleccion"]);
        a.appendChild(txt2);

        var p= document.createElement ("p");
        p.setAttribute("class","product-desc");
        div2.appendChild(p);

        var txt3= document.createTextNode(arrayJuguetes[i]["ref"]);
        p.appendChild(txt3);
    }
}

 /*   function desplegable (){
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