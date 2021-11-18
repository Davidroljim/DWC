

var piloto1 = new Object();
piloto1.nombre = 'David';
piloto1.escuderia = 'Ferrari';

marca=70;

var pilotoc1 = new PilotoCarrera(piloto1,marca);

var piloto2 = new Object();
piloto2.nombre = 'Ale';
piloto2.escuderia = 'Mercedes';

marca=87;

var pilotoc2 = new PilotoCarrera (piloto2,marca);

let sesionPilotos = [pilotoc1,pilotoc2];

function ordenaTiempoPilotos (sesionPilotos){

    for (let index = 0; index < sesionPilotos.length; index++) {
        sesionPilotos.sort(sesionPilotos[index][2],sesionPilotos[index++][2]);
    }
    return sesionPilotos;

    /*if (sesionPilotos[0][2]<sesionPilotos[1][2]) {
        document.write("El piloto 1 tiene menor tiempo que el segundo")
    }else{
        document.write("El piloto 1 tiene mayor tiempo que el segundo")
    }*/
    
}

console.log(ordenaTiempoPilotos(sesionPilotos));
