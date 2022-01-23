window.addEventListener("load",iniciar);

function iniciar(){
    ocultarMostrarFormulario();
    furbo = document.getElementById('boton');
    furbo.addEventListener('click', crearCookie);
    
}



function ocultarMostrarFormulario(){
    
    form = document.getElementById('formulario');

    var fieldset = document.createElement("fieldset");
    form.appendChild(fieldset);

    var legend = document.createElement("legend");
    fieldset.appendChild(legend);
    
    var txt= document.createTextNode("Datos para enviar");
        legend.appendChild(txt);

    var ul = document.createElement("ul");
    fieldset.appendChild(ul);

    var label = document.createElement("label");
    ul.appendChild(label);
    label.setAttribute("for","message");

    var txt1= document.createTextNode("Introduce el mensaje que desees");
        label.appendChild(txt1);

    var textarea = document.createElement("textarea");
    ul.appendChild(textarea);
    textarea.setAttribute("id","text1");
    textarea.setAttribute("placeholder","Escribe un Texto");

    var br = document.createElement("br");
    ul.appendChild(br);

    var br1 = document.createElement("br");
    ul.appendChild(br1);

    var label1 = document.createElement("label");
    ul.appendChild(label1);
    label1.setAttribute("for","message");

    var txt2= document.createTextNode("Introduce el mensaje que desees 2");
    label1.appendChild(txt2);
    
   var textarea1 = document.createElement("textarea");
   ul.appendChild(textarea1);
   textarea1.setAttribute("id","text2");
   textarea1.setAttribute("placeholder","Escribe un Texto");

   var p = document.createElement("p");
   ul.appendChild(p);
   p.setAttribute("id","message");


   var input = document.createElement("input");
   form.appendChild(input);
   input.setAttribute("type","submit");
   input.setAttribute("id","boton");
   input.setAttribute("class","btn-enviar");

   comprobarCookie();
}


function crearCookie(){
    document.cookie = "Texto1="+document.getElementById('text1').value;
    document.cookie = "Texto2="+document.getElementById('text2').value;
}

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
} 


function comprobarCookie(){
    var cookie1 = getCookie("Texto1");
    var array = cookie1.split(";");
    var valorC1= array[0];
    var valorC2 = array[0].split("=");
    alert(valorC2);
}





/*
<legend>Datos para enviar</legend>
<ul>
        <label for="message">Introduce el mensaje que desees:</label>
        <textarea name="mensaje" id="text1" placeholder="Escribe un texto"></textarea><br><br>
        <label for="message">Introduce el mensaje que desees 2:</label>
        <textarea name="mensaje" id="text2" placeholder="Escribe un texto"></textarea>
        <p id="message"></p>
    </li>
</ul>

<input type="submit" value="Crear Canción" id="enlace"; class="btn-enviar">
</fieldset> */