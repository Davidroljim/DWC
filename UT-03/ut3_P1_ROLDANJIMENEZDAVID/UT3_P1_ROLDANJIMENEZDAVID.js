
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
    }else if (exp.test(alias)==true) {
        alert ("Alias Bien introducido");
    }else{
        alert ("Alias Mal introducido")
    }
    var primero=alias.substring(-1,2);
    var segundo=alias.substring(2,8);
    var tercero=alias.substring(8);

    var cadenaF=primero+"_"+segundo+"_"+tercero;

    var aliasAr=[i];
    var i = aliasAr.push(cadenaF);

    i++;
}while(alias.toLowerCase()!=fin)

for (let index = 0; index < aliasAr.length; index++) {
    var nombre = aliasAr[index];
    document.write (nombre);
    
}
if (aliasAr.length==0) {
    alert ("No se ha introducido ningún alias");
}