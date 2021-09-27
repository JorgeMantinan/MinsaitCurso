"use strict";
exports.__esModule = true;
var underscore_1 = require("underscore");
// package.json "type": "module",
/*
Hacer una funcion que sea getEnfrentamientos(equipos)
const equipos = ['Madrid','Barsa','Villareal','Valencia']

Que muestre por consola Madrid vs Valencia y Villareal vs Barcelona (de forma aleatoria)

si le pasamos un array con equipos impares, que ponga 'El Sevilla pasa a la siguiente ronda'

Rest Params
Desustructuracion
Funcion recursiva
*/
var equiposPares = ['Madrid', 'Barsa', 'Villareal', 'Valencia'];
var equiposImpares = ['Madrid', 'Barsa', 'Villareal', 'Valencia', 'Sevilla'];
function getEnfrentamientos(equipos) {
    if (equipos.length % 2 != 0) {
        console.log("Se enfrentan los siguientes equipos: " + equipos[0] + " vs " + equipos[1] + " y " + equipos[2] + " vs " + equipos[3] + ", y " + equipos[4] + " pasa a la siguiente ronda.");
    }
    else {
        console.log("Se enfrentan los siguientes equipos: " + equipos[0] + " vs " + equipos[1] + " y " + equipos[2] + " vs " + equipos[3]);
    }
}
/*
  "type": "module",
  "moduleResolution": "node",

  const equiposRandom = _.shuffle(equiposImpares);

getEnfrentamientos(equiposRandom);
*/
var equiposRandom = underscore_1["default"].shuffle(equiposImpares);
getEnfrentamientos(equiposRandom);
getEnfrentamientos(equiposImpares);
getEnfrentamientos(equiposPares);
