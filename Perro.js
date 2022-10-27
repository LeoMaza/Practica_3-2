const Duenio = require('./Duenio');

class Perro {
    colorPerro = "Negro";
    nombrePerro = "ninguno";
    ladra = true;
    estaaDieta = false;
    edad = 3;
    peso = 5.4;



    cambiarNombre(nuevoNombre) {
        this.nombrePerro = nuevoNombre;
    }

    comenzarDieta(peso) {
        this.peso = peso;
        if (peso > 6) {
            this.estaADieta = true;
        }
    }

    queColorEs() {
        return this.colorPerro;
    }

    cambiarColorPerro(nuevoColor){
        this.colorPerro = nuevoColor;
    }
}

module.exports = Perro;