do {
    var nombre = prompt("Introduce el nombre de usuario");

        if (!nombre.match(/^[a-zA-Z0-9]{7}$/)) {
            condition=0;
        }else{
            condition=1;
            function getlength(nombre) { return nombre.toString().length; }

        }
} while (condition!=1);