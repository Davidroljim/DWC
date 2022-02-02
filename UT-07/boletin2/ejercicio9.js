/*$(function () {
    $("#boton").click(function(){
        $.ajax({
            url:   'ejercicio9.php',
            type:  'post',
            beforeSend: function () {
                    $("#resultado").html("Procesando, espere por favor...");
            },
            success:  function (response) {
                    response = JSON.parse(response);
                
                    $("#resultado").html(response.a);

            }
            });
        });
});*/

$.post( "ejercicio9.php", function( data ) {
        datos = JSON.parse(data);
        $( ".result" ).html( datos.a );
      });