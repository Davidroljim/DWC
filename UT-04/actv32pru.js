

var piloto1 = new Object();
piloto1.nombre = 'David';
piloto1.escuderia = 'Ferrari';

marca=100;

var pilotoc1 = new PilotoCarrera (piloto1,marca);

var piloto2 = new Object();
piloto2.nombre = 'Ale';
piloto2.escuderia = 'Mercedes';

marca=87;

var pilotoc2 = new PilotoCarrera (piloto2,marca);

let sesionPilotos = [pilotoc1,pilotoc2];

function ordenaTiempoPilotos (sesionPilotos){
    for (let index = 0; index < sesionPilotos.length; index++) {
        const element = array[index];
        
    }
    console.log(sesionPilotos);
    
}

ordenaTiempoPilotos(sesionPilotos);
