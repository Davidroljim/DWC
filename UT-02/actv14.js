/*Estamos interesados en calcular los ingresos medios de un conjunto de hombres y mujeres. Para ello disponemos de un documento donde se recoge si se
 trata de un hombre (H) o una mujer (M) y su sueldo correspondiente. La entrada de datos termina cuando se lee un * como sexo. Se validarรกn todas las
  entradas, el sexo serรก H o M y el sueldo entre los 1000 y 2000 euros independientemente de que el trabajador sea hombre o mujer.*/

  var ingresoM = 0;
  var ingresoH = 0;
  var contM = 0;
  var contH = 0;
  var mediaM = 0;
  var mediaH = 0;
  var sueldo = 1000;
  var sexo = "M";
  while (true) {
      var sueldo = parseFloat(prompt("sueldo?"));
      if (sueldo < 1000 || sueldo > 2000) {
          alert("El sueldo tiene que ser entre 1000 y 2000");
          continue;
      }
      var sexo = prompt("Es hombre o mujer? M/H");
  
      if (sexo == "H") {
          ingresoH += sueldo;
          contH++;
      }else if (sexo == "M") {
          ingresoM += sueldo;
          contM++;
      }else if (sexo == "*") {
          break;
      }else {
          alert("El sexo tiene que ser M o H");
          continue;
      }
  
  }
  
  mediaH = ingresoH / contH;
  mediaM = ingresoM / contM;
  alert("El ingreso de los hombres: " + mediaH);
  alert("El ingreso de las mujeres: " + mediaM);