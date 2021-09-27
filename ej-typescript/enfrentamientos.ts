import _ from 'underscore'
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
const equiposPares: Array<string> = ['Madrid','Barsa','Villareal','Valencia'];
const equiposImpares: Array<string> = ['Madrid','Barsa','Villareal','Valencia','Sevilla'];

function getEnfrentamientos(equipos: Array<string>): void {

    if (equipos.length %2!=0) {
        console.log(`Se enfrentan los siguientes equipos: ${equipos[0]} vs ${equipos[1]} y ${equipos[2]} vs ${equipos[3]}, y ${equipos[4]} pasa a la siguiente ronda.`);
    } else {
        console.log(`Se enfrentan los siguientes equipos: ${equipos[0]} vs ${equipos[1]} y ${equipos[2]} vs ${equipos[3]}`);
    }
}

//Random con underscore
const equiposRandom = _.shuffle(equiposImpares);
getEnfrentamientos(equiposRandom);

getEnfrentamientos(equiposImpares);
getEnfrentamientos(equiposPares);

