
$(function () {
    $("#boton").click(function(){
        var valorCaja1 = $("#name").val();
        var valorCaja2 = $("#mail").val();
        var valorCaja3 = $("#msg").val();
        
        var parametros = {
            "valorCaja1" : valorCaja1,
            "valorCaja2" : valorCaja2,
            "valorCaja3" : valorCaja3
        };
        $.ajax({
            data:  parametros,
            url:   'ejercicio10.php',
            type:  'post',
            
            });
        });
});