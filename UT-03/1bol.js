/*Hacer un programa que muestre un menú de opciones con las siguientes operaciones
posibles:
● Redondeo a su inmediato superior de un número
● Redondeo a su inmediato inferior de un número
● Redondeo al número más cercano
● Cálculo del número máximo entre dos dados
● Cálculo del número mínimo entre dos dados
● Cálculo de un número elevado a otro
● Cálculo de la raíz cuadrada de un número*/
var opcion = prompt("Introduce 1:Redondeo a su inmediato superior de un número 2:Redondeo a su inmediato inferior de un número 3:Redondeo al número más cercano 4:Cálculo del número máximo entre dos dados 5:Cálculo del número mínimo entre dos dados 6:Cálculo de un número elevado a otro 7:Cálculo de la raíz cuadrada de un número");

switch (opcion) {
    case "1":
        var num1= prompt("Introduce el número que deseas redondear a su inmediato superior");
        alert ("Número redondeado a su superior es: "+Math.ceil(num1));
        break;

    case "2":
        var num1= prompt("Introduce el número que deseas redondear a su inmediato inferior");
        alert ("Número redondeado a su inferior es: "+Math.floor(num1));
        break;

    case "3":
        var num1= prompt("Introduce el número que deseas redondear a su más cercano");
        alert ("Número redondeado a su más cercano: "+Math.round(num1));
        break;    

    case "4":
        var num1= prompt("Introduce el primer número para devolver el más alto");
        var num2= prompt("Introduce el segundo número para devolver el más alto");
        alert ("Número más alto es: "+Math.max(num1,num2));
        break; 

    case "5":
        var num1= prompt("Introduce el primer número para devolver el más bajo");
        var num2= prompt("Introduce el segundo número para devolver el más bajo");
        alert ("Número más bajo es: "+Math.min(num1,num2));
        break;
    
    case "6":
        var num1= prompt("Introduce el primer número");
        var num2= prompt("Introduce el segundo número para elevar el primero a este número");
        alert ("Número redondeado a su más cercano: "+Math.pow(num1, num2));
        break;
        
    case "7":
        var num1= prompt("Introduce el un número para calcular su raiz cuadrada");
        alert ("Número redondeado a su más cercano: "+Math.sqrt(num1));
        break;

    default:
        break;
}