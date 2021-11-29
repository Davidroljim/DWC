window.addEventListener("load",iniciar);

function iniciar() {
	var elements = document.getElementById("formulario").elements;

	for (var i = 0; i < elements.length ;i++) {

		var element = elements[i].value;
		var id = elements[i].id;
		var miVentana;
   		function ventana() {
    		if (element != "Enviar") {
    			miVentana = window.open( "", "ventana1", "height=400,width=400,location=yes,menubar=no,resizable=yes,scrollbars=yes,status=no,titlebar=yes,top=10");
        		miVentana.document.write(id + ": " + element + "<br>");
    		}
    	}
        ventana();
	}
}