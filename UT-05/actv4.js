window.onload = inicializar;

function inicializar() {
    var elementos=document.forms[0];
    for (let i = 0; i < elementos.elements.length; i++) {
        elementos.elements[i].addEventListener('click',corregir,false);
        
    }
}

function corregir(e) {
    if (e.currentTarget.name=='perro') {
        divP1 = document.getElementById("p1");
        if (e.currentTarget.value=="milu") {
            divP1.innerHTML="Respuesta Correcta";
        }else{
            divP1.innerHTML="Respuesta Incorrecta. Correcta es :milú."
        }
    }else if (e.currentTarget.name=='caballo') {
        divP2=document.getElementById("p2");
        if (e.currentTarget.value=="blanco") {
            divP2.innerHTML="Respuesta Correcta"
        }else{
            divP2.innerHTML = "Respuesta incorrecta. Correcta es blanco"
        }
    }
}

// function iniciar() {
//     /*function hide(e){
//         e.currentTarget.style.visibility = 'hidden';
//         console.log(e.currentTarget);
//         // When this function is used as an event handler: this === e.currentTarget
//       }*/
//     function comprobar() {
        
//     }
//     var ps = document.getElementsByTagName('formulario');
    
//     for(var i = 0; i < ps.length; i++){
//       // console: imprime el elemento pulsado <p>
//       ps[i].addEventListener('click', comprobar);
//       document.write(ps[i]);
//     }
//     // console: imprime <body>
//     document.body.addEventListener('click', hide, false);
// }