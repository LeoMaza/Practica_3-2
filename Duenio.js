const Perro = require('./Perro');

class Duenio {
    nombreDuenio = 'Wachinango';
    edad = 'por def';
    genero = 'masculino';
    mayorDeEdad = true;
    duenioDePerro = 'por def'


//asignarMascotaaDuenio(nombre,duenio);{
   // this.nombrePerro = nombre;
   // this.nombreDuenio = duenio;  

//}

    cambiarNombreDuenio(nombreNuevo){
        this.nombreDuenio = nombreNuevo;
    }

}
module.exports = Duenio;