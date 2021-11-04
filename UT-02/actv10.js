//Realizar un programa que proporcione el cambio de Euros a Dólares, Libras, Yenes, Franco Suizo, Corona Noruega, según opción.
//El programa debe controlar todas las entradas y ofrecer al usuario la posibilidad de repetir o salir.
var euros = prompt("Introduce la cantidad de Euros que quieras cambiar: ");
var opción = prompt("Introduce 1-Dólares, 2-Libras, 3-Yenes, 4-Franco Suizo, 5-Corona Noruega, ");
var cambio;
switch (opción) {

    case "1":
      cambio=euros*1.16;
      document.write("El cambio de "+euros+" euros a Dolares es: "+cambio);
      break;

    case "2":
        cambio=euros*0.86;
        document.write("El cambio de "+euros+" euros a Libras es: "+cambio);
      break;

    case "3":
        cambio=euros*129.84;
        document.write("El cambio de "+euros+" euros a Yenes es: "+cambio);
      break;

    case "4":
        cambio=euros*1.08;
        document.write("El cambio de "+euros+" euros a Franco Suizo es: "+cambio);
      break;

      case "5":
        cambio=euros*10.21;
        document.write("El cambio de "+euros+" euros a Corona Noruega es: "+cambio);
      break;

    default:
      document.write("Has insertado una opción incorrecta.")
      break;
  }
