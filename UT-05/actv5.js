

//function myFunction() {
//    document.getElementById("message").maxLength = "145";
//    document.getElementById("demo").innerHTML = "Maximum number of characters allowed in the text area is now 100.";  
//    }


    function countChars(obj){
        var max = 145;
        var cadenaL = obj.value.length;
        var restante = (max - cadenaL);
    
        if(restante < 0){
            document.getElementById("message").innerHTML = '<span style="color: red;">Has pasado el limite , es '+max+' caracteres</span>';
        }else{
            document.getElementById("message").innerHTML = restante+' caracteres restantes';
        }
    }