$(document).ready(function(){
    
    $( "p" ).hover(
        function() {
            $( this ).find( "span" ).last().remove();
          $( this ).append( $( "<span> Parrafo hola</span>" ) );
        }, function() {
          $( this ).find( "span" ).last().remove();
          $( this ).append( $( "<span>  hola</span>" ) );
        }
      );

    });
