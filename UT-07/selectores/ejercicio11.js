$(document).ready(function(){
    $("button").click(function(){
        $("div:first").toggle();
        $(this).text("Mostrar");
    });
  });