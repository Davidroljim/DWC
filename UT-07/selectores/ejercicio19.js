$(document).ready(function(){
    $("#1").click(function(){
        $( "p" ).append( $( "<span> Parrafo hola</span>" ) );
        $( "ul" ).append( $( "<li> Nuevo LI</li>" ) );
       
    });

    $("#2").click(function(){
        $( "body" ).append( $( "<button>Nuevo botón</button>" ) );
       
    });
});