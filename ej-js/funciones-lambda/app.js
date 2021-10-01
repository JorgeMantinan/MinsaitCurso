const series = [
    {titulo: 'Game of Thrones', numTemporadas: 1, finalizada:true},
    {titulo: 'The Walking Dead', numTemporadas: 1, finalizada:false},
    {titulo: 'Gangland Undercover', numTemporadas: 3, finalizada:true},
    {titulo: 'The Leftovers', numTemporadas: 3, finalizada:true}
];

//forEach (no devuelve nada, no se suele utilizar para modificar cosas)
series.forEach((serie, index, arrSeries) => {
    console.log(JSON.stringify(serie,null,2));
})

// map (modifica) (crea un nuevo array con diferente referencia, pero al tener los objetos del array 
//      con las mismas referencias hay que hacerles los ... para mandarles a ellos otra referencia)
const seriesConUnaX = series.map((serie, index, arrSeries) => {
    const serieNueva = {... serie};
    if (serieNueva.finalizada) {
        serieNueva.titulo = 'x ' + serieNueva.titulo;
    }
    return serieNueva; //añadimos elementos que queremos añadir dentro del array seriesConUnaX
})

const numeros = [1,2,3,4];
const tripleDeNumeros = numeros.map((n, index, arrNum) => n * 3);
console.log(numeros);
console.log(tripleDeNumeros);

//filter (crea un nuevo array, devuelve un array con todos los elementos que cumplan la funcion)
const seriesLargas = series.filter((serie, index, arrSeries) => {
    return serie.numTemporadas > 5;
})

//find (crea un nuevo array y devuelve el primer elemento que cumpla la funcion)
const primeraSerieFinalizada = series.find((serie, index, arrSeries) => {
    return serie.finalizada;
})

//reduce (devuelve un valor despues de hacer las operaciones con todos los elementos del array)
//      (se puede usar tambien para concatenar string que vienen por un array de objetos, el 2do parametro seria ''
//      (Si solo nos llega un array sin objeto, podriamos hacerlo con join() mas facil))
const numTemporadasTotales = series.reduce((totalTemporadas, serie, index, arrSeries) => {
    //totalTemporadas es un objeto va a ir guardando las valores mientras los recorre
    //Para que inicie en 0 totalTemporadas, es el 2do parametro ( , 0)
    return totalTemporadas += series.numTemporadas;
}, 0)

//every, some

