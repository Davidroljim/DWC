$(function () {
    $("#boton").click(function () {
        $.post({
            url: $('#contactForm').attr('action'),
            data: $("#contactForm").serialize(),
            success: function (response) {

                $("#resultado").html(response);

            }
        });
    });
});