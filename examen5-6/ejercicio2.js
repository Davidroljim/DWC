window.addEventListener("load", iniciar);

function iniciar() {
    document.getElementById("codigo").addEventListener("blur", validar);
    document.getElementById("enviar").addEventListener("click", guardar);
    
}


function validar(){
	var codigo = document.getElementById("codigo").value;
	var patron = /^[A-Za-z]{3}-\d{1,5}$/;

	if (!patron.test(codigo)) {
		document.getElementById("error").innerHTML = "Código incorrecto";
	}
	else {
        document.getElementById("error").innerHTML = "";
		
	}
}


function guardar() {

    var codigo = document.getElementById("codigo").value;
	var patron = /^[A-Za-z]{3}-\d{1,5}$/;

	if (!patron.test(codigo)) {
		alert("Introduce Bien el código");
	}
	else {
        var formulario = document.getElementById("formulario");
        formulario.action = "mailto:davidroldan@gmail.com";
		formulario.method = "POST";
	    formulario.submit();
        document.cookie = "Codigo="+document.getElementById('codigo').value;
		
	}   
    }
    
