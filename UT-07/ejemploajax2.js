
$(function () {
    $("#boton").click(function(){
        $.ajax({
            url:   'ejemploajax2.php',
            type:  'post',
            beforeSend: function () {
                    $("#resultado").html("Procesando, espere por favor...");
            },
            success:  function (response) {
                    response = JSON.parse(response);
                    suma = response.valor1+response.valor2;
                    $("#resultado").html(suma);

            }
            });
        });
});