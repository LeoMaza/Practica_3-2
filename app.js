const Perro = require("./Perro");
const Duenio = require ('./Duenio');


const perro1 = new Perro();
const duenio1 = new Duenio();

console.log('el duenio se llama ', duenio1.nombreDuenio )

duenio1.cambiarNombreDuenio('Octavio')

console.log('El perro es de color ', perro1.queColorEs())
console.log('El duenio ahora se llama ', duenio1.nombreDuenio)
perro1.cambiarColorPerro("Azul");
console.log('El perro ahora es de color ', perro1.queColorEs())