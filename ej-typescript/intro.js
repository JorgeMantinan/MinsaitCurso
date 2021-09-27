var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var a = 1;
a = 1;
console.log(a);
var NUM_MAX = 4;
//NUM_MAX
var b = 'Hola mundo';
b += '!!!';
function diferentiaEntreVarYLet() {
    // La diferencia es el SCOPE
    var z = 1;
    var y = 1;
    if (true) {
        var z = 2;
        var y_1 = 2;
        console.log(z, y_1); // 2, 2
    }
    console.log(z, y); // 2, 1
}
diferentiaEntreVarYLet();
var telefono = 666666666;
var telefono2 = 666666666;
// any, []number, Array<string>, void, boolean
var cualquierCosa = 123;
cualquierCosa = 'string';
cualquierCosa = false;
cualquierCosa = [1, 2, 3];
var arrayDeNumerosYStrings = [1, '2', '4', 89];
var serie1 = {
    titulo: 'The Walking Dead',
    numTemporadas: 10,
    finalizada: false,
    descripcion: 'Una serie de zombies ...'
};
var jasonStatham = {
    nombre: 'JSON',
    apellidos: 'Statham',
    peliculasEnLasQueSale: ['Los mercenarios', 'Transporter']
};
// MUY IMPORTANTE  LA DESESTRUCTURACION ->
function muestraDatosSerie(serie) {
    // Si es true ?, si no lo es :
    //console.log('La serie ' + serie.titulo + ' tiene ' + serie.numTemporadas + ' temporadas, y ' + serie.finalizada ? 'ha finalizado ya' : 'no ha finalizado todavia');
    /* const titulo = serie.titulo; const numTemporadas = serie.numTemporadas;*/
    //Asi se hace la desustructuracion (en vez de lo de arriba se hace de la siguiente manera) ->
    //const { titulo , numTemporadas, finalizada} = serie;
    // Si quieres cambiar el nombre de la variable se hace de esta manera
    var titulo = serie.titulo, nTemporadas = serie.numTemporadas, finalizada = serie.finalizada;
    console.log("La serie " + titulo + " tiene " + nTemporadas + " temporadas, y " + (finalizada ? 'ha finalizado ya' : 'no ha finalizado todavia'));
}
muestraDatosSerie(serie1);
// MUY IMPORTANTE
//RestParams (... numeros -> se guardan los numeros que le pongas extras en un array)
function getNumLoteria(numSorteo) {
    var numeros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numeros[_i - 1] = arguments[_i];
    }
    // Manera eficiente de hacer un switch en javascript
    var sorteos = {
        1: 'Bonoloto',
        2: 'Primitiva',
        3: 'Euromillon'
    };
    return "Los numeros para el sorteo " + sorteos[numSorteo] + " son: " + numeros.join(', ');
}
var numeros = getNumLoteria(2, 3, 5, 14, 27, 36, 42);
console.log(numeros);
//SPREAD OPERATOR
var frutas = ['Pina', 'Naranja', 'Sandia', 'Manzana'];
//const nuevasFrutas = ['Kiwi', frutas];
//console.log(nuevasFrutas); //Asi tendriamos dos arrays pero si ponemos
var nuevasFrutas = __spreadArray(['Kiwi'], frutas, true);
console.log(nuevasFrutas); //Asi tenemos el array de añadiendo sus valores
var kiwi = nuevasFrutas[0], piña = nuevasFrutas[1], restoFrutas = nuevasFrutas.slice(2);
console.log(restoFrutas);
//const yamelStatham = jasonStatham;
//yamelStatham.nombre = 'YAML';
//console.log(jasonStatham, yamelStatham); //Los dos se llamarian YAML, para evitar esto ->
var yamelStatham = __assign(__assign({}, jasonStatham), { nombre: 'YAML' });
console.log(jasonStatham, yamelStatham);
