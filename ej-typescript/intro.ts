var a:number = 1;
a = 1;
console.log(a);

const NUM_MAX = 4;
//NUM_MAX

let b = 'Hola mundo';
b += '!!!';

function diferentiaEntreVarYLet() {
    // La diferencia es el SCOPE
    var z = 1;
    let y = 1;
    if (true) {
        var z = 2;
        let y = 2;
        console.log(z, y); // 2, 2
    }
    console.log(z, y); // 2, 1
}

diferentiaEntreVarYLet();

type miTipo = number | string; //Esto es un alias, para no escribir constantemente varias cosas

let telefono: number | string = 666666666;
let telefono2: miTipo = 666666666;

// any, []number, Array<string>, void, boolean

let cualquierCosa: any = 123;
cualquierCosa = 'string';
cualquierCosa = false;
cualquierCosa = [1, 2, 3];

let arrayDeNumerosYStrings: Array<String | number> = [1, '2', '4', 89];

interface Serie {
    titulo: string;
    numTemporadas: number;
    finalizada: boolean;
}
interface Serie {
    descripcion: string;
}

const serie1: Serie = {
    titulo: 'The Walking Dead',
    numTemporadas: 10,
    finalizada: false,
    descripcion: 'Una serie de zombies ...'
}

interface Persona {
    nombre: string;
    apellidos: string;
}

interface Actor extends Persona {
    peliculasEnLasQueSale: Array<string>;
}

const jasonStatham: Actor = {
    nombre: 'JSON',
    apellidos: 'Statham',
    peliculasEnLasQueSale: ['Los mercenarios', 'Transporter']
}



// MUY IMPORTANTE  LA DESESTRUCTURACION ->

function muestraDatosSerie(serie: Serie): void {
    // Si es true ?, si no lo es :
    //console.log('La serie ' + serie.titulo + ' tiene ' + serie.numTemporadas + ' temporadas, y ' + serie.finalizada ? 'ha finalizado ya' : 'no ha finalizado todavia');

    /* const titulo = serie.titulo; const numTemporadas = serie.numTemporadas;*/
    //Asi se hace la desustructuracion (en vez de lo de arriba se hace de la siguiente manera) ->
    //const { titulo , numTemporadas, finalizada} = serie;
    // Si quieres cambiar el nombre de la variable se hace de esta manera
    const { titulo , numTemporadas: nTemporadas, finalizada} = serie;

    console.log(`La serie ${titulo} tiene ${nTemporadas} temporadas, y ${finalizada ? 'ha finalizado ya' : 'no ha finalizado todavia'}`);
}

muestraDatosSerie(serie1);

// MUY IMPORTANTE
 //RestParams (... numeros -> se guardan los numeros que le pongas extras en un array)
function getNumLoteria(numSorteo: number, ... numeros: Array<number>): string {
    // Manera eficiente de hacer un switch en javascript
    const sorteos = {
        1: 'Bonoloto',
        2: 'Primitiva',
        3: 'Euromillon'
    }
    return `Los numeros para el sorteo ${sorteos[numSorteo]} son: ${numeros.join(', ')}`;
}

const numeros = getNumLoteria(2, 3, 5, 14, 27, 36, 42);
console.log(numeros);


//SPREAD OPERATOR
const frutas: Array<string> = ['Pina', 'Naranja', 'Sandia', 'Manzana'];
//const nuevasFrutas = ['Kiwi', frutas];
//console.log(nuevasFrutas); //Asi tendriamos dos arrays pero si ponemos
const nuevasFrutas = ['Kiwi', ... frutas];
console.log(nuevasFrutas); //Asi tenemos el array de añadiendo sus valores

const [kiwi, piña, ... restoFrutas] = nuevasFrutas;
console.log(restoFrutas);

//const yamelStatham = jasonStatham;
//yamelStatham.nombre = 'YAML';
//console.log(jasonStatham, yamelStatham); //Los dos se llamarian YAML, para evitar esto ->

const yamelStatham = {... jasonStatham, nombre: 'YAML'};
console.log(jasonStatham, yamelStatham);
