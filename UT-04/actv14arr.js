//Realizar una función que rellene un matriz de orden N de número aleatorios.

var rellenaMatriz = ()=>{ 
    for (var x=0; x < matriz.length; x++) {
        for (var y=0; y < matriz[x].length; y++) {
          matriz[x][y] = (int) (Math.random()*9+1);
        }
      }    return matriz;
}
document.write(rellenaMatriz());