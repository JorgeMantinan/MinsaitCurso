//CALLBACK

const fs = require('fs');

// const getContenido = (err, contenido) => {
//     console.log(contenido.toString());
// }

// fs.readFile('texto1.txt', getContenido);
// fs.readFile('texto2.txt', getContenido);
// fs.readFile('texto3.txt', getContenido);

fs.readFile('texto1.txt', (err, contenido) => {
    console.log(contenido.toString());
    fs.readFile('texto2.txt', (err, contenido) => {
        console.log(contenido.toString());
        fs.readFile('texto2.txt', (err, contenido) => {
            console.log(contenido.toString());
        })
    })
})


// PROMISES

const fs = require('fs').promises;

fs.readFile('texto1.txt')
    .then(contenido => {
        console.log(contenido.toString());
        return fs.readFile('texto2.txt');
    })
    .then(contenido => {
        console.log(contenido.toString());
        return fs.readFile('texto3.txt');
    })