
var fin ="fin";
var exp = /^@[a-zA-Z]{7}[0-9]{3}$/;
var exp2= /^@/;
var i=0;
do  {
    var alias = prompt ("¿Introduce un alias, si no quieres introducir más alias introduce fin?","/fin");

    if (alias.toLowerCase()==fin) {
        break;
    }else if (exp2.test(alias)==false) {
        alias="@"+alias;
    }
    if (exp.test(alias)==false) {
        alert ("Alias mal introducido");
        break;
    }else{
        alert ("Alias bien introducido");

    var primero=alias.substring(-1,2);
    var segundo=alias.substring(2,8);
    var tercero=alias.substring(8);

    var cadenaF=primero+"_"+segundo+"_"+tercero;

    var aliasAr=[];
    var i = aliasAr.push(cadenaF);

    i++;

    }
    
}while(alias.toLowerCase()!=fin)

function recorreArray(){
for (let index = 0; index < aliasAr.length; index++) {
    var nombre = aliasAr[index];
    document.write (nombre);
    
}
}
var nuevaVentana;
function crearNueva(){
    nuevaVentana = window.open("","","height=400,width=800");
    nuevaVentana.document.write(recorreArray());
  }

if (aliasAr.length==0) {
    alert ("No se ha introducido ningún alias");
}