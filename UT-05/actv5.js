

//function myFunction() {
//    document.getElementById("message").maxLength = "145";
//    document.getElementById("demo").innerHTML = "Maximum number of characters allowed in the text area is now 100.";  
//    }


    function countChars(obj){
        var maxLength = 145;
        var longitudCadena = obj.value.length;
        var restante = (maxLength - longitudCadena);
    
        if(restante < 0){
            document.getElementById("message").innerHTML = '<span style="color: red;">Has pasado el limite , es '+maxLength+' caracteres</span>';
        }else{
            document.getElementById("message").innerHTML = restante+' caracteres restantes';
        }
    }