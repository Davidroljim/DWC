//Crear un objeto Rectángulo con un constructor a partir de dos objetos Punto, con métodos para hallar el perímetro del mismo y su área.
//Añade también dos métodos para calcular la base y la altura del rectángulo a partir de los puntos.


class Rectangulo{
    constructor (p1,p2){
        this.p1=p1;
        this.p2=p2;
    };
    base (){
        return (this.p1.x)+(this.p2.x);
    }
    altura (){
        return (this.p1.y)+(this.p2.y);
    }
    perimetro(){
        return (2 * (this.base()))+(2 * (this.altura()));
    }

    area (){
        return (this.base())+(this.altura());
    }
};
    