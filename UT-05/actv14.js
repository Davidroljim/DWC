window.addEventListener("load",iniciar)

function iniciar() {
    
    document.getElementById('nombre').addEventListener('blur', comprobar);
    document.getElementById('enlace').addEventListener('click', crearCookie);
}
//obtengo la cookie
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

//creo las cookies
function crearCookie() {

    document.cookie = "Nombre="+document.getElementById('nombre').value;
    document.cookie = "Cafe="+document.getElementById('select').value;
    document.cookie = "Nhabitacion="+document.getElementById('nhabitacion').value;
}
//compruebo el nombre de la cookie es igual al introducido
function comprobar() {
    
    var cafe = getCookie("Cafe");
    var nombre = getCookie("Nombre");
    var array = nombre.split(";");
    var arraycok= array[1];
    var cokie=arraycok.split("=");
    var arrayN=array[2];
    var numero=arrayN.split("=");
    console.log(numero[1]);
    
    if (document.getElementById('nombre').value==array[0]) {
        alert("Tu Café "+cafe+" tiene una oferta");

        
        document.getElementById(cokie[1]).selected = true;
        document.getElementById("nhabitacion").value=numero[1];
    }
    else {
        alert("No tienes ofertas");
    }

}